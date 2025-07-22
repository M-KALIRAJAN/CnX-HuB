import React, { useEffect, useState } from "react";
import Inputs from "../utils/Inputs";
import Button from "../components/Button/Button";
import SelectInput from "../utils/SelectInput";
import { FiSend } from "react-icons/fi";
import { SelectTemplate, SendSingleMsgs } from "../api/ApiServices";
import { debugLog } from "../utils/debugLog";

export default function SendSingleMessage() {
  const [number, setNumber] = useState("");
  const [templateList, setTemplateList] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [params, setParams] = useState({});
  const [headerMedia, setHeaderMedia] = useState(null);
  const [headerType, setHeaderType] = useState("");
  const [responseMessage, setResponseMessage] = useState(null);

  useEffect(() => {
    const fetchTemplates = async () => {
      const user_id = localStorage.getItem("user_id");
      const templates = await SelectTemplate(user_id);
      setTemplateList(templates || []);
    };
    fetchTemplates();
  }, []);

  const handleTemplateChange = (e) => {
    const index = parseInt(e.target.value);
    setSelectedIndex(index);
    setParams({});
    setHeaderMedia(null);
    setHeaderType("");
    setResponseMessage(null);
  };

  const handleParamChange = (compIndex, paramIndex, value) => {
    setParams((prev) => ({
      ...prev,
      [`${compIndex}_${paramIndex}`]: value,
    }));
  };

  const handleFileChange = (file, format) => {
    setHeaderMedia(file);
    setHeaderType(format.toLowerCase());
  };

  const HandleSendSingleMsg = async () => {
    const user_id = localStorage.getItem("user_id");
    const tmpl = templateList[selectedIndex];

    const formData = new FormData();
    formData.append("to", number);
    formData.append("template", tmpl.name);
    formData.append("lang", tmpl.language || "en_US");

    let hasHeaderMedia = false;
    let detectedHeaderFormat = null;

    // Detect header media
    tmpl.components.forEach((comp) => {
      if (
        comp.type === "HEADER" &&
        ["IMAGE", "VIDEO", "DOCUMENT"].includes(comp.format)
      ) {
        hasHeaderMedia = true;
        detectedHeaderFormat = comp.format.toLowerCase(); // lowercase for API
      }
    });

    const components = tmpl.components.map((comp, compIndex) => {
      const compType = comp.type === "BUTTONS" ? "BUTTON" : comp.type;
      const obj = { type: compType };

      // Skip header media param, it goes separately
      if (
        compType === "HEADER" &&
        ["IMAGE", "VIDEO", "DOCUMENT"].includes(comp.format)
      ) {
        return obj;
      }

      // Handle TEXT header and BODY parameters
      if (
        (compType === "HEADER" && comp.format === "TEXT") ||
        compType === "BODY"
      ) {
        const matches = comp.text?.match(/{{\d+}}/g) || [];
        obj.parameters = matches.map((_, paramIndex) => ({
          type: "text",
          text: params[`${compIndex}_${paramIndex}`] || " ",
        }));
      }

      // Handle BUTTON parameters (with sub_type)
      if (compType === "BUTTON" && Array.isArray(comp.buttons)) {
        const button = comp.buttons[0];
        const subType = button.type?.toUpperCase();

        const allowedSubTypes = [
          "QUICK_REPLY",
          "URL",
          "CATALOG",
          "COPY_CODE",
          "FLOW",
          "MPM",
          "ORDER_DETAILS",
          "REMINDER",
          "VOICE_CALL",
        ];

        if (!allowedSubTypes.includes(subType)) {
          return {}; // Skip invalid component
        }

        obj.sub_type = subType.toLowerCase(); // WhatsApp expects lowercase
        obj.index = 0;

        if (subType === "QUICK_REPLY") {
          obj.parameters = [
            { type: "payload", payload: button.payload || "YES" },
          ];
        } else if (subType === "URL") {
          obj.parameters = [
            { type: "text", text: button.url || "https://example.com" },
          ];
        }
      }

      return obj;
    });

    // Filter out empty or skipped components
    const filteredComponents = components.filter(
      (comp) => Object.keys(comp).length > 1
    );

    formData.append("components", JSON.stringify(filteredComponents));

    if (hasHeaderMedia && headerMedia instanceof File) {
      formData.append("header_type", detectedHeaderFormat);
      formData.append("header_media", headerMedia);
    }

    try {
      const res = await SendSingleMsgs(user_id, formData);
      setResponseMessage(" Message sent successfully!");
    } catch (e) {
      setResponseMessage(" Failed to send message.");
      debugLog("SendSingleMsgs Error:", e.response?.data || e.message);
    }
  };  

  const selectedTemplate =
    selectedIndex !== null ? templateList[selectedIndex] : null;

  return (
    <div className="p-4">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-xl p-6 sidebar">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Inputs
            label="Phone number"
            name="number"
            type="number"
            placeholder="998798656"
            value={number}
            onChange={setNumber}
          />
          <div className="mt-5">
            <label className="text-sm mb-1  text-gray-700">
              Select Template
            </label>
            <select
              className="w-full border border-gray-300 rounded-md p-2"
              value={selectedIndex ?? ""}
              onChange={handleTemplateChange}
            >
              <option value="">Select</option>
              {templateList.map((tpl, idx) => (
                <option key={idx} value={idx}>
                  {tpl.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {selectedTemplate && (
          <div className="space-y-4 mt-6">
            <h2 className="text-lg font-semibold">Template Components:</h2>
            {selectedTemplate.components.map((comp, compIndex) => {
              const matches = comp.text?.match(/{{\d+}}/g) || [];

              return (
                <div
                  key={compIndex}
                  className="p-4 bg-gray-50 border border-gray-100 rounded-2xl"
                >
                  <p className="text-sm mb-2">
                    <strong>Type:</strong> {comp.type} <br />
                    <strong>Format:</strong> {comp.format || "TEXT"}
                  </p>

                  {(comp.type === "BODY" ||
                    (comp.type === "HEADER" && comp.format === "TEXT")) &&
                    matches.map((_, paramIndex) => (
                      <input
                        key={paramIndex}
                        type="text"
                        placeholder={`Param ${paramIndex + 1}`}
                        value={params[`${compIndex}_${paramIndex}`] || ""}
                        onChange={(e) =>
                          handleParamChange(
                            compIndex,
                            paramIndex,
                            e.target.value
                          )
                        }
                        className="block w-full mt-2 p-2 border rounded-md"
                      />
                    ))}

                  {comp.type === "HEADER" &&
                    ["IMAGE", "DOCUMENT", "VIDEO"].includes(comp.format) && (
                      <div className="mt-3">
                        <label className="block text-sm mb-1">
                          Upload {comp.format}
                        </label>
                        <input
                          type="file"
                          accept={
                            comp.format === "IMAGE"
                              ? "image/*"
                              : comp.format === "VIDEO"
                              ? "video/*"
                              : ".pdf,.doc,.docx"
                          }
                          onChange={(e) =>
                            handleFileChange(e.target.files[0], comp.format)
                          }
                          className="block w-full text-sm border border-gray-300 rounded-md p-2"
                        />
                      </div>
                    )}
                </div>
              );
            })}

            <Button
              text="Send"
              className="w-full mt-5"
              onClick={HandleSendSingleMsg}
              icon={<FiSend className="text-white text-sm" />}
            />
          </div>
        )}

        {responseMessage && (
          <p className="text-center mt-4 text-sm font-medium text-blue-600">
            {responseMessage}
          </p>
        )}
      </div>
    </div>
  );
}
