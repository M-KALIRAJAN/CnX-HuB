import React, { useEffect, useRef, useState } from "react";
import SelectInput from "../utils/SelectInput";
import Inputs from "../utils/Inputs";
import Text from "../assets/Text.svg";
import Image from "../assets/Image.svg";
import Video from "../assets/Video.svg";
import Document from "../assets/Document.svg";
import Backgroundimg from "../assets/Backgroundimg.svg";
import Button from "../components/Button/Button";
import { FaMessage } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineFileUpload } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";
import { CreateTemplates } from "../api/ApiServices";
import axios from "axios";
import { debugLog } from "../utils/debugLog";
import { useAuth } from "../context/AuthContext";
import { ToastContainer, toast } from 'react-toastify';
export default function CreateTemplate() {
  const [header_format, setHeader_Format] = useState("TEXT");
  const [language, setLanguage] = useState("");
  const [name, setName] = useState("");
  const [variable, setVariable] = useState("");
  const [headerText, setHeaderText] = useState("");
  const [body_text, setBodyText] = useState("");
  const [footer_text, setFooterText] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [link, setLink] = useState("");
  const [addButton, setAddButton] = useState(false);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [header_media, setHeader_Media] = useState(null);
  const fileInputRef = useRef(null);
const { userId ,role  } = useAuth()
  const handleUploadClick = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setHeader_Media(file);
    }
  };

  const cards = [
    { type: "TEXT", label: "Text", icon: Text },
    { type: "IMAGE", label: "Image", icon: Image },
    { type: "VIDEO", label: "Video", icon: Video },
    { type: "DOCUMENT", label: "Document", icon: Document },
  ];

  const Language = [
    { value: "Add Language", label: "add Language" },
    { value: "en", label: "English" },
    { value: "ta", label: "Tamil" },
  ];

  const [selectoption, SetSelectOption] = useState("Quick Replay");

  const addButtons = [
    { value: "Quick Replay", label: "Quick Replay" },
    { value: "Call", label: "Call" },
    { value: "Link", label: "Link" },
  ];

  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleLanguageChange = (e) => {
    const selectedValue = e.target.value;
    setLanguage(selectedValue);
  };

  const HandleSubmitTemplate = async () => {
    try {
      setLoading(true);
      // const user_id = localStorage.getItem("user_id");

      const components = [];

      if (header_format === "TEXT" && headerText?.trim()) {
        const headerComponent = {
          type: "HEADER",
          format: "TEXT",
          text: headerText,
        };

        if (headerText.includes("{{1}}")) {
          headerComponent.example = {
            header_text: [headerText.replace("{{1}}", "sample")],
          };
        }

        components.push(headerComponent);
      } else if (header_format !== "TEXT" && header_media instanceof File) {
        components.push({
          type: "HEADER",
          format: header_format,
        });
      }

      if (body_text?.trim()) {
        components.push({
          type: "BODY",
          text: body_text,
        });
      }

      if (footer_text?.trim()) {
        components.push({
          type: "FOOTER",
          text: footer_text,
        });
      }

      const buttons = [];
      if (addButton) {
        if (selectoption === "Quick Replay" && text?.trim()) {
          buttons.push({ type: "QUICK_REPLY", text });
        }
        if (selectoption === "Call" && phoneNumber?.trim()) {
          buttons.push({
            type: "CALL_TO_ACTION",
            text: "Call Now",
            phone_number: phoneNumber,
          });
        }
        if (selectoption === "Link" && link?.trim()) {
          buttons.push({
            type: "CALL_TO_ACTION",
            text: "View Now",
            url: link,
          });
        }
      }

      const formData = {
        language,
        name: `template_${Date.now()}`,
        category: "MARKETING",
        message_send_ttl_seconds: "43200",
        header_format,
        body_text,
        header_text: headerText,
        header_media,
        components,
        buttons,
      };

      // const user_id = localStorage.getItem("user_id");
      const response = await CreateTemplates({ formData, user_id: userId });
      console.log("response",response);
      setBodyText("");
      setHeaderText("");
      setName("")
      setFooterText("");
      setPhoneNumber("")
      setLink("")
      setText("")
        toast.success("Template Create successful!");
    } catch (err) {
      debugLog(err?.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border border-gray-400 h-auto w-full p-3 rounded-2xl">
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="flex-1">
          <div className="p-5">
            <h2 className="font-bold">Language</h2>
            <div className="flex flex-col lg:flex-row items-start gap-5">
              <div className="min-h-[50px] w-full lg:w-[180px] bg-[#EEDBFF] px-4 rounded-2xl mt-6 flex items-center">
                <p className="text-[#905CC1] text-sm font-medium m-0">
                  <span className="text-red-700">*</span> English
                </p>
              </div>
              <div className="mt-5 lg:mt-6 w-full lg:w-[220px]">
                <SelectInput
                  options={Language}
                  defaultValue="add Language"
                  value={language}
                  onChange={handleLanguageChange}
                />
              </div>
            </div>
          </div>

          {/* Template Name + Variable Row */}
          <div className="w-full xl:w-[700px] lg:w-[500px] bg-gray-100 p-5 rounded-2xl">
            <div className="flex flex-col lg:flex-row items-start gap-10">
              <div className="w-full lg:w-[240px]">
                <Inputs
                  label="Template Name"
                  type="text"
                  placeholder="Template Name"
                  value={name}
                  onChange={setName}
                />
                <p className="text-gray-400 text-[9px]">
                  Template name must be lowercase and can include underscores.
                  Example: cust_lem
                </p>
              </div>
              <div className="w-full lg:w-[240px]">
                <SelectInput
                  label="Variable (Optional)"
                  options={Language}
                  defaultValue="add Language"
                  value={variable}
                  onChange={setVariable}
                />
              </div>
            </div>

            {/* Header Format Cards */}
            <div className="flex flex-col lg:flex-row gap-5">
              <div className="flex-1">
                <h2 className="font-bold mb-5 mt-5">Header Type</h2>
                <div className="flex flex-wrap lg:flex-nowrap justify-between">
                  {cards.map((card) => (
                    <div
                      key={card.type}
                      onClick={() => setHeader_Format(card.type)}
                      className={`w-[78px] xl:w-[130px] h-[110px] rounded-sm flex flex-col justify-center items-center cursor-pointer transition-colors ${
                        header_format === card.type
                          ? "bg-[#EEDBFF]"
                          : "bg-white"
                      }`}
                    >
                      <img src={card.icon} alt={card.label} />
                      <h2 className="mt-4">{card.label}</h2>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {header_format === "TEXT" ? (
              <div className="mt-2">
                <Inputs
                  type="text"
                  placeholder="Header Text .........."
                  inputClassName="h-[50px]"
                  value={headerText}
                  onChange={setHeaderText}
                />
              </div>
            ) : (
              <div className="w-full lg:mt-[60px]" style={{ width: "100%" }}>
                <div className="ml-30">
                  <Button
                    text="ChooseFile"
                    onClick={handleUploadClick}
                    icon={<MdOutlineFileUpload className="text-white" />}
                    className="flex justify-center"
                  />
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileChange}
                />
                {header_media && (
                  <p className="text-sm text-gray-600 text-center mt-2">
                    Selected File: <strong>{header_media.name}</strong>
                  </p>
                )}
              </div>
            )}

            {/* Body, Footer, Buttons */}
            <Inputs
              label="Body Text"
              type="text"
              placeholder="Write your message"
              inputClassName="h-[70px]"
              value={body_text}
              onChange={setBodyText}
            />
            <Inputs
              label="Footer Text (optional)"
              type="text"
              placeholder="Write your message"
              inputClassName="h-[70px]"
              value={footer_text}
              onChange={setFooterText}
            />

            {/* Buttons */}
            <h2>Button (optional)</h2>
            <div className="flex justify-between items-center">
              <div
                className="border border-gray-400 w-[170px] h-[40px] rounded-2xl flex gap-2 justify-center items-center cursor-pointer hover:bg-gray-100 transition"
                onClick={() => setAddButton(true)}
              >
                <FaPlus className="text-sm" />
                <p className="text-sm font-medium">Add Button</p>
              </div>
              <Button
                text={loading ? "Submitting..." : "Submit"}
                onClick={HandleSubmitTemplate}
                icon={<FaMessage className="text-white text-sm" />}
                className="w-60 "
              />
                  <ToastContainer />
            </div>

            {/* Dynamic Button Inputs */}
            {addButton && (
              <>
                <div className="flex items-center gap-4 mt-3">
                  <SelectInput
                    options={addButtons}
                    defaultValue="Quick Replay"
                    value={selectoption}
                    className="w-full"
                    onChange={(e) => SetSelectOption(e.target.value)}
                  />
                  <MdCancel
                    className="text-red-600"
                    size={28}
                    onClick={() => setAddButton(false)}
                  />
                </div>

                {selectoption === "Quick Replay" && (
                  <input
                    type="text"
                    placeholder="Reply Text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="border border-gray-300 px-4 py-2 rounded-md mt-2 block w-full"
                  />
                )}

                {selectoption === "Call" && (
                  <input
                    type="tel"
                    placeholder="Enter Phone Number"
                    value={phoneNumber}
                    maxLength={10}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="border px-4 py-2 rounded-md mt-2 block w-full"
                  />
                )}

                {selectoption === "Link" && (
                  <input
                    type="url"
                    placeholder="Enter URL"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    className="border px-4 py-2 rounded-md mt-2 block w-full"
                  />
                )}
              </>
            )}
          </div>
        </div>

        {/* Right Preview Section */}
        <div
          className="w-full xl:w-[450px] lg:w-[320px] h-[600px] rounded-2xl p-4 mt-5 lg:mt-6 xl:mt-6"
          style={{
            backgroundImage: `linear-gradient(to bottom, #E0BCFF 0px, #F8F8F8 100px, #F8F8F8 100%), url(${Backgroundimg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex justify-between items-center">
            <div className="gap-4 flex items-center">
              <div className="iconbackground" />
              <h2>Bussiness Account</h2>
            </div>
            <BsThreeDotsVertical />
          </div>

          <div className="mt-7 p-3 bg-white overflow-hidden flex-wrap rounded-3xl rounded-bl-none">
            <p className="font-bold">{name}</p>
            <p>{headerText}</p>
            <p>{body_text}</p>
            {header_media && (
              <p className="text-gray-500 text-sm">File: {header_media.name}</p>
            )}
            <p className="text-gray-600">{footer_text}</p>
            {phoneNumber && (
              <p className="border px-4 py-1 bg-gray-400 border-gray-400 rounded-2xl w-[200px]">
                Call Now: {phoneNumber}
              </p>
            )}
            <p className="text-end">{currentTime}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
