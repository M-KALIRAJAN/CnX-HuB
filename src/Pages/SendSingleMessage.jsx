import React, { useEffect, useState } from "react";
import Inputs from "../utils/Inputs";
import Button from "../components/Button/Button";
import SelectInput from "../utils/SelectInput";
import { FiSend } from "react-icons/fi";
import { SelectTemplate, SendSingleMsgs } from "../api/ApiServices";
import { debugLog } from "../utils/debugLog";
import { useAuth } from "../context/AuthContext";
import { ToastContainer, toast } from 'react-toastify';
import ClipLoader from "react-spinners/ClipLoader";
export default function SendSingleMessage() {
  const [number, setNumber] = useState("");
  const [templateList, setTemplateList] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [params, setParams] = useState({});
  const [headerMedia, setHeaderMedia] = useState(null);
  const [headerType, setHeaderType] = useState("");
  const [responseMessage, setResponseMessage] = useState(null);
  const { userId, role } = useAuth()
    const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchTemplates = async () => {

      const templates = await SelectTemplate(userId);
      console.log("templates",templates);
      
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

    const tmpl = templateList[selectedIndex];
setLoading(true); 
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
       console.log("📤 header_type:", detectedHeaderFormat);
  console.log("📤 header_media:", {
    name: headerMedia.name,
    size: `${(headerMedia.size / 1024).toFixed(2)} KB`,
    type: headerMedia.type,
  });
    }
    console.log(formData);

    try {
      const res = await SendSingleMsgs(userId, formData);
      console.log(res, "%%%%");
toast.success("Message sent successfully!");
      setResponseMessage(" Message sent successfully!");

    } catch (e) {
      setResponseMessage(" Failed to send message.");
      debugLog("SendSingleMsgs Error:", e.response?.data || e.message);
    }finally {
      setLoading(false); // Stop loader
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

           <button
  type="submit"
  onClick={HandleSendSingleMsg}
  className="w-full h-[45px] flex items-center justify-center gap-2 text-white bg-[#905CC1] rounded-sm hover:bg-[#7a3fb8] transition"
>
  {loading ? (
    <ClipLoader size={24} color="#fff" />
  ) : (
    <>
      <FiSend className="text-white text-sm" />
      Send
    </>
  )}
</button>

             <ToastContainer />
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
