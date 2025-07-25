import React, { useEffect, useState } from "react";
import Button from "../components/Button/Button";
import { FaMessage } from "react-icons/fa6";
import Wallet from "../assets/wallet.svg";
import SelectInput from "../utils/SelectInput";
import {
  BulkMessageAPI,
  ConductCategorie,
  SelectTemplate,
  UserCategories,
} from "../api/ApiServices";
import Inputs from "../utils/Inputs";
import { debugLog } from "../utils/debugLog";

export default function BulkMessage() {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );
  const [number, setNumber] = useState("");
  const [recpicentmode, setRecpicentMode] = useState("Use Control List");
  const [selectCategories, setSelectCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [contactList, setContactList] = useState([]);
  const [templatelist, setTemplatelist] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [bulkParams, setBulkParams] = useState({});
  const [headerMediaFile, setHeaderMediaFile] = useState(null);
  const [contactNumbers, setContactNumbers] = useState([]);
  const [mediaURL, setMediaURL] = useState("");

  const Recpicent = [
    { value: "Use Control List", label: "Use Control List" },
    { value: "Enter Number Manually", label: "Enter Number Manually" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const user_id = localStorage.getItem("user_id");
    const fetchUsercategories = async () => {
      const usercategories = await UserCategories(user_id);
      if (
        usercategories?.status === "success" &&
        Array.isArray(usercategories.categories)
      ) {
        const formatted = usercategories.categories.map((item) => ({
          label: item.name,
          value: item.id,
        }));
        setSelectCategories(formatted);
      }
    };
    fetchUsercategories();
  }, []);

  useEffect(() => {
    const user_id = localStorage.getItem("user_id");
    const fetchConductCategories = async () => {
      const data = {
        user_id: Number(user_id),
        category_id: Number(selectedCategory),
      };
      const response = await ConductCategorie(data);
      if (Array.isArray(response)) {
        const formatted = response.map((item) => ({
          label: item.name,
          value: item.name,
          numbers: item.numbers,
        }));
        setContactList(formatted);

        const allNumbers = response.flatMap((item) => item.numbers);
        setContactNumbers(allNumbers);
      }
    };
    if (selectedCategory) fetchConductCategories();
  }, [selectedCategory]);

  useEffect(() => {
    const user_id = localStorage.getItem("user_id");
    const fetchSelectTemplate = async () => {
      const templates = await SelectTemplate(user_id);
      setTemplatelist(templates || []);
    };
    fetchSelectTemplate();
  }, []);

  const Handlee = async () => {
    const user_id = localStorage.getItem("user_id");
    const selectedTemplate = templatelist[selectedIndex];

    if (!selectedTemplate) return alert("⚠️ Please select a template.");
s
    const recipients =
      recpicentmode === "Use Control List"
        ? contactNumbers
        : number
            .split(",")
            .map((n) => n.trim())
            .filter(Boolean);


    let components = selectedTemplate.components
      .map((comp, compIndex) => {
        const format = (comp.format || "").toLowerCase();
        const isMedia = ["image", "video", "document"].includes(format);

        if (comp.type === "HEADER" && isMedia) return null;

        const matches = comp.text?.match(/{{\d+}}/g) || [];
        const params = matches.map((_, paramIndex) => ({
          type: "text",
          text: bulkParams[`${compIndex}_${paramIndex}`] || "",
        }));

        return {
          type: comp.type,
          format: comp.format || "",
          parameters: params,
        };
      })
      .filter(Boolean);

    
    if (
      headerMediaFile &&
      selectedTemplate.components.some((comp) => comp.type === "HEADER")
    ) {
      const headerComp = selectedTemplate.components.find(
        (comp) => comp.type === "HEADER"
      );
      const headerType = headerComp.format.toLowerCase();

      components.unshift({
        type: "HEADER",
        format: headerComp.format,
        parameters: [
          {
            type: headerType,
            [headerType]: headerMediaFile,
          },
        ],
      });
    }

    const payload = {
      user_id,
      recipients,
      template: selectedTemplate.name,
      lang: selectedTemplate.language || "en_US",
      components,
    };

    try {
      const response = await BulkMessageAPI(user_id, payload);
    } catch (error) {
      debugLog(" Error:", error.message);
    }
  };

  return (
    <div className="min-h-screen overflow-y-auto border border-gray-400 w-full p-4 sm:p-6 md:p-7 rounded-2xl">
      <div className="flex flex-col xl:flex-row gap-5">
        <div className="flex flex-col gap-8 w-full xl:w-[770px]">
          <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
            <div className="flex items-center justify-between px-4 py-3 w-full sm:w-1/2 bg-gray-100 rounded-2xl">
              <div className="flex items-center gap-4">
                <img src={Wallet} alt="Wallet" className="w-6 h-6" />
                <h2 className="text-base font-medium">Wallet Balance</h2>
              </div>
              <h2 className="text-[#905CC1] font-bold text-base">₹1200</h2>
            </div>
            <div className="flex items-center justify-between px-4 py-3 w-full sm:w-1/2 h-[60px] bg-gray-100 rounded-2xl">
              <div className="flex items-center gap-4">
                <img src={Wallet} alt="Wallet" className="w-6 h-6" />
                <h2 className="text-base font-medium">Message Left</h2>
              </div>
              <h2 className="text-[#905CC1] font-bold text-base">200</h2>
            </div>
          </div>

          <div className="w-full bg-gray-100 p-5 rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <SelectInput
                  label="Recipient Mode"
                  options={Recpicent}
                  defaultValue="Use Control List"
                  onChange={(e) => setRecpicentMode(e.target.value)}
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm text-gray-700 mb-1">
                  Select Template
                </label>
                <select
                  className="w-full border border-gray-300 rounded-md p-2"
                  value={selectedIndex ?? ""}
                  onChange={(e) => {
                    const idx = parseInt(e.target.value);
                    setSelectedIndex(isNaN(idx) ? null : idx);
                    setBulkParams({});
                    setMediaURL("");
                    setHeaderMediaFile(null);
                  }}
                >
                  <option value="">Select</option>
                  {templatelist.map((tpl, idx) => (
                    <option key={idx} value={idx}>
                      {tpl.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {recpicentmode === "Use Control List" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <SelectInput
                  label="Select Category"
                  options={selectCategories}
                  defaultValue=""
                  onChange={(e) => setSelectedCategory(e.target.value)}
                />
              </div>
            ) : (
              <textarea
                placeholder="Enter phone numbers"
                onChange={(e) => setNumber(e.target.value)}
                className="w-full h-[100px] border border-gray-300 rounded px-3 py-2 resize-none focus:outline-none focus:border-[#905CC1] focus:ring-1 focus:ring-[#905CC1] bg-gray-50 mb-4"
              />
            )}

            {templatelist[selectedIndex]?.components.map((comp, compIndex) => {
              const matches = comp.text?.match(/{{\d+}}/g) || [];
              const format = (comp.format || "").toLowerCase();
              const isHeaderMedia =
                comp.type === "HEADER" &&
                ["image", "video", "document"].includes(format);

              return (
                <div
                  key={compIndex}
                  className="p-4 bg-white border rounded-xl mb-4"
                >
                  <p className="text-sm mb-2 font-medium text-gray-600">
                    Type: {comp.type} | Format: {comp.format || "TEXT"}
                  </p>

                  {matches.map((_, paramIndex) => (
                    <input
                      key={paramIndex}
                      type="text"
                      placeholder={`Param ${paramIndex + 1}`}
                      value={bulkParams[`${compIndex}_${paramIndex}`] || ""}
                      onChange={(e) =>
                        setBulkParams((prev) => ({
                          ...prev,
                          [`${compIndex}_${paramIndex}`]: e.target.value,
                        }))
                      }
                      className="block w-full mt-2 p-2 border rounded-md"
                    />
                  ))}

                  {isHeaderMedia && (
                    <div className="mt-3">
                      <label className="block text-sm mb-1">
                        Upload {comp.format}
                      </label>
                      <input
                        type="file"
                        accept={
                          format === "image"
                            ? "image/*"
                            : format === "video"
                            ? "video/*"
                            : ".pdf,.doc,.docx"
                        }
                        onChange={(e) => setHeaderMediaFile(e.target.files[0])}
                        className="block w-full text-sm border border-gray-300 rounded-md p-2"
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="w-full xl:w-[400px] h-[570px] bg-gray-100 rounded-2xl p-4 flex flex-col justify-between">
          <div className="bg-white p-4 rounded-2xl rounded-bl-none mb-4">
            <p className="text-sm">This is a preview area.</p>
            <p className="text-end text-xs mt-2">{currentTime}</p>
          </div>
          <Button
            text="Send Bulk Message"
            onClick={Handlee}
            icon={<FaMessage className="text-white text-sm" />}
          />
        </div>
      </div>
    </div>
  );
}
