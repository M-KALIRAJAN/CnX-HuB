import React, { useEffect, useRef, useState } from "react";
import Inputs from "../utils/Inputs";
import { GoPerson } from "react-icons/go";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaPlus, FaRegPaperPlane } from "react-icons/fa6";
import Button from "../components/Button/Button";
import { LiveChat } from "../api/ApiServices";

export default function Livechat() {
  const [selectedType, setSelectedType] = useState(0);
  const [inputMessage, setInputMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([[]]); // messages per user
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: true })
  );

  const Message = [
    { number: "5678900", text: "Hello there!", icon: <GoPerson /> },
    { number: "1234567", text: "How are you?", icon: <GoPerson /> },
    { number: "9876543", text: "New updates?", icon: <GoPerson /> },
    { number: "2468101", text: "Send files", icon: <GoPerson /> },
      { number: "2468101", text: "Send files", icon: <GoPerson /> },
        { number: "2468101", text: "Send files", icon: <GoPerson /> },
          { number: "2468101", text: "Send files", icon: <GoPerson /> },  { number: "2468101", text: "Send files", icon: <GoPerson /> },
          { number: "2468101", text: "Send files", icon: <GoPerson /> },
  ];

  const chatEndRef = useRef(null);
  const sidebarEndRef = useRef(null);
  const fileInputRef = useRef();
  const [uploadedFiles, setUploadedFiles] = useState([]);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
      setCurrentTime(formattedTime);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Scroll chat and sidebar to bottom
  useEffect(() => {
    chatEndRef?.current?.scrollIntoView({ behavior: "smooth" });
    sidebarEndRef?.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages, selectedType]);

  const handleClickUpload = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setUploadedFiles((prev) => [...prev, ...files]);
  };

  const handleRemoveFile = (indexToRemove) => {
    setUploadedFiles((prevFiles) =>
      prevFiles.filter((_, index) => index !== indexToRemove)
    );
  };

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setChatMessages((prev) => {
        const updated = [...prev];
        updated[selectedType] = [
          ...(updated[selectedType] || []),
          { text: inputMessage, time: currentTime },
        ];
        return updated;
      });
      setInputMessage("");
    }
  };

  useEffect(()=>{
    const Livechatdata = async () =>{
      const user_id = localStorage.getItem("user_id")
   const res = await LiveChat(user_id) 
   console.log("res",res);
   
    }
    Livechatdata()
  },[])

  return (
    <div className="border border-gray-400 h-auto w-full p-3 rounded-2xl" data-aos="zoom-in" data-aos-duration="1000">
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-10">

        {/* Left Sidebar */}
<div className="w-full lg:w-[280px] h-[400px] lg:h-[600px] background rounded-2xl p-5 flex flex-col">
  {/* Fixed Search Input */}
  <div className="mb-3">
    <Inputs
      name="text"
      type="text"
      placeholder="Search Contact"
      inputClassName="bg-white rounded-3xl"
    />
  </div>

  {/* Scrollable Contact List */}
  <div className="flex-1 overflow-y-auto no-scrollbar pr-1">
    {Message.map((msg, index) => (
      <div
        key={index}
        onClick={() => setSelectedType(index)}
        className={`rounded-2xl w-full h-[58px] flex justify-between items-center p-2 gap-2 mb-2 cursor-pointer transition
          ${selectedType === index ? "bg-purple-100" : "bg-gray-50"}`}
      >
        <div className="iconbackground">{msg.icon}</div>
        <div className="flex-1 overflow-hidden">
          <h2 className="text-sm font-semibold">{msg.number}</h2>
          <p className="text-gray-400 text-sm truncate">{msg.text}</p>
        </div>
        <p className="text-xs text-gray-500 whitespace-nowrap">{currentTime}</p>
      </div>
    ))}
    <div ref={sidebarEndRef} />
  </div>
</div>


        {/* Right Chat Panel */}
        <div className="w-full lg:w-[660px] h-auto lg:h-[580px] flex flex-col gap-4">
          
          {/* Top Bar */}
          <div className="w-full h-[66px] background rounded-2xl px-4">
            <div className="flex justify-between items-center h-full">
              <div className="flex items-center gap-4">
                <div className="iconbackground">{Message[selectedType].icon}</div>
                <h2 className="text-base font-semibold">{Message[selectedType].number}</h2>
              </div>
              <div className="text-gray-500 cursor-pointer">
                <BsThreeDotsVertical size={18} />
              </div>
            </div>
          </div>

          {/* Chat Box */}
          <div className="w-full max-h-[400px] overflow-y-auto p-4 no-scrollbar flex-1 bg-white rounded-2xl">
            {/* Dummy Message */}
            <div className="w-[300px] background p-4 rounded-2xl rounded-bl-none mb-4">
              <p className="text-sm">Welcome to chat with {Message[selectedType].number}</p>
              <p className="text-end text-xs mt-2">{currentTime}</p>
            </div>

            {/* Chat History */}
            {chatMessages[selectedType]?.map((msg, index) => (
              <div key={index} className="flex justify-end mb-4">
                <div className="w-[250px] bg-[#EAD2FF] p-3 rounded-2xl rounded-br-none shadow">
                  <p className="text-sm">{msg.text}</p>
                  <p className="text-end text-xs mt-2">{msg.time}</p>
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* Input & Send */}
          <div className="border border-gray-400 h-[66px] rounded-2xl px-4">
            <div className="flex items-center justify-between h-full gap-4 flex-wrap">
              <FaPlus
                className="text-gray-300 text-[24px] cursor-pointer"
                onClick={handleClickUpload}
              />
              <input
                type="file"
                multiple
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
              />
              <div className="flex-1 min-w-[200px]">
                <Inputs
                  type="text"
                  name="text"
                  placeholder="Type a message..."
                  value={inputMessage}
                  onChange={(val) => setInputMessage(val)}
                  inputClassName="w-full h-[40px] rounded-2xl px-3 border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition duration-200"
                />
              </div>
              <div className="mt-2">
                <Button
                  text="Send"
                  onClick={handleSendMessage}
                  icon={<FaRegPaperPlane className="text-white text-sm" />}
                />
              </div>
            </div>
          </div>

          {/* File Preview */}
          {uploadedFiles.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {uploadedFiles.map((file, index) => (
                <div key={index} className="bg-gray-100 text-sm px-3 py-1 rounded-full flex items-center gap-2">
                  <span>{file.name}</span>
                  <button
                    onClick={() => handleRemoveFile(index)}
                    className="text-red-500 font-bold text-xs"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
