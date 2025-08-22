// import React, { useEffect, useRef, useState } from "react";
// import Inputs from "../utils/Inputs";
// import { GoPerson } from "react-icons/go";
// import { BsThreeDotsVertical } from "react-icons/bs";
// import { FaPlus, FaRegPaperPlane } from "react-icons/fa6";
// import Button from "../components/Button/Button";
// // import { LiveChat } from "../api/ApiServices";
// import { useAuth } from "../context/AuthContext";
// import { fetchLatestMessages, LiveChat, SendManually } from "../api/ApiServices";
// import User from "../assets/user.png"

// export default function Livechat() {
//   const [selectedType, setSelectedType] = useState(0);
//   const [inputMessage, setInputMessage] = useState("");
//   const [chatMessages, setChatMessages] = useState({});

//   const [currentTime, setCurrentTime] = useState(
//     new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: true })
//   );

 
//  const [message,setMessage] = useState([])
//  const { userId ,role  } = useAuth()
//   const chatEndRef = useRef(null);
//   const sidebarEndRef = useRef(null);
//   const fileInputRef = useRef();
//   const [uploadedFiles, setUploadedFiles] = useState([]);


//   // useEffect(() => {
//   //   const timer = setInterval(() => {
//   //     const now = new Date();
//   //     const formattedTime = now.toLocaleTimeString([], {
//   //       hour: "2-digit",
//   //       minute: "2-digit",
//   //       hour12: true,
//   //     });
//   //     setCurrentTime(formattedTime);
//   //   }, 1000);
//   //   return () => clearInterval(timer);
//   // }, []);

//   // Scroll chat and sidebar to bottom
//   useEffect(() => {
//     chatEndRef?.current?.scrollIntoView({ behavior: "smooth" });
//     sidebarEndRef?.current?.scrollIntoView({ behavior: "smooth" });
//   }, [chatMessages, selectedType]);

//   const handleClickUpload = () => {
//     fileInputRef.current.click();
//   };

//   const handleFileChange = (e) => {
//     const files = Array.from(e.target.files);
//     setUploadedFiles((prev) => [...prev, ...files]);
//   };

//   const handleRemoveFile = (indexToRemove) => {
//     setUploadedFiles((prevFiles) =>
//       prevFiles.filter((_, index) => index !== indexToRemove)
//     );
//   };


// const handleSendMessage = async () => {
//   if (!inputMessage.trim() && uploadedFiles.length === 0) return;

//   const formData = new FormData();

//   const selectedMsg = selectedType;
//   if (!selectedMsg || !selectedMsg.phone_number) {
//     console.error("No phone number selected.");
//     return;
//   }

//   const phoneNumber = selectedMsg.phone_number;
//  const phone = phoneNumber.slice(2)
//   formData.append("phone_number", phone);
//    formData.append("user_id", userId);

//   if (inputMessage.trim()) {
//     formData.append("message", inputMessage);
//   }

//   uploadedFiles.forEach((file) => {
//     formData.append("media_files", file);
//   });

  
  
//   for (let [key, value] of formData.entries()) {
//     if (value instanceof File) {
//       console.log(`${key}: ${value.name} (${value.type})`);
//     } else {
//       console.log(`${key}: ${value}`);
//     }
//   }

//   try {
//     const response = await SendManually(formData);
//     console.log("Message sent:", response);

//     setChatMessages((prev) => {
//   const updated = { ...prev };
//   const currentMsgs = updated[selectedType] || [];
//   updated[selectedType] = [
//     ...currentMsgs,
//     {
//       text: inputMessage,
//       time: currentTime,
//       media: uploadedFiles.map((file) => file.name),
//     },
//   ];
//   return updated;
// });


//     setInputMessage("");
//     setUploadedFiles([]);
//   } catch (error) {
//     console.error("Failed to send message:", error);
//   }
// };

//   useEffect(()=>{
//     const Livechatdata = async () =>{ 
//    const res = await LiveChat( userId ) 
//    console.log("res",res.phone_list);
//   if (res && res.phone_list) {
//           setMessage(res.phone_list);
//         }
  
//     }
//     Livechatdata()
//   },[userId])
//   const Handleclikitem = async(msg,index)=>{
//     console.log("msg",msg,index);
//     setSelectedType(msg)
//     const messageData = await fetchLatestMessages(userId,msg.phone_number)
//     console.log("messageData",messageData);
//       if (messageData && Array.isArray(messageData.messages)) {
//     // Store messages in state
//     // setChatMessages((prev) => {
//     //   const updated = [...prev];
//     //   updated[index] = messageData.messages;
//     //   return updated;
//     // });
//     setChatMessages(messageData.messages)
//   } else {
//     console.log("No messages found or API error.");
//   }
    
//   }

  

//   return (
//     <div className="border border-gray-400 h-auto w-full p-3 rounded-2xl" data-aos="zoom-in" data-aos-duration="1000">
//       <div className="flex flex-col lg:flex-row gap-5 lg:gap-10">

//         {/* Left Sidebar */}
// <div className="w-full lg:w-[280px] h-[400px] lg:h-[600px] background rounded-2xl p-5 flex flex-col">
//   {/* Fixed Search Input */}
//   <div className="mb-3">
//     <Inputs
//       name="text"
//       type="text"
//       placeholder="Search Contact"
//       inputClassName="bg-white rounded-3xl"
//     />
//   </div>

//   {/* Scrollable Contact List */}
//   <div className="flex-1 overflow-y-auto no-scrollbar pr-1">
//     {message.map((msg, index) => (
//       <div
//         key={index}
//         // () => setSelectedType(index)
//         onClick={()=>Handleclikitem(msg,index)}
//         className={`rounded-2xl w-full h-[58px] flex justify-between items-center p-2 gap-2 mb-2 cursor-pointer transition
//           ${selectedType === index ? "bg-purple-100" : "bg-gray-50"}`}
//       >
//         <div >
//           <img src={User} alt="User" className="w-8 h-8 rounded-full" />
//         </div>
//         <div className="flex-1 overflow-hidden">
//           <h2 className="text-sm font-semibold">{msg.phone_number}</h2>
//           <p className="text-gray-400 text-sm truncate">{msg.unread_count}</p>
//         </div>
//         <p className="text-xs text-gray-500 whitespace-nowrap">{currentTime}</p>
//       </div>
//     ))}
//     <div ref={sidebarEndRef} />
//   </div>
// </div>


//         {/* Right Chat Panel */}
//         <div className="w-full lg:w-[660px] h-auto lg:h-[580px] flex flex-col gap-4">
          
//           {/* Top Bar */}
//           <div className="w-full h-[66px] background rounded-2xl px-4">
//             <div className="flex justify-between items-center h-full">
//               <div className="flex items-center gap-4">
//                 {/* <div className="iconbackground">{message[selectedType].icon}</div> */}
//                 <div >
//           <img src={User} alt="User" className="w-8 h-8 rounded-full" />
//         </div>
//                 <h2 className="text-base font-semibold">{selectedType.phone_number}</h2>
//               </div>
//               <div className="text-gray-500 cursor-pointer">
//                 <BsThreeDotsVertical size={18} />
//               </div>
//             </div>
//           </div>

//           {/* Chat Box */}
//           <div className="w-full max-h-[400px] overflow-y-auto p-4 no-scrollbar flex-1 bg-white rounded-2xl">
//             {/* Dummy Message */}
//             <div className="w-[300px] background p-4 rounded-2xl rounded-bl-none mb-4">
//            <h2>kjuigui</h2>
//             </div>

// {chatMessages[selectedType]?.map((msg, index) => (
//   <div key={index} className="flex justify-end mb-4">
//     <div className="w-[250px] bg-[#EAD2FF] p-3 rounded-2xl rounded-br-none shadow">
//       <p className="text-sm">{msg.text || "No Text"}</p>

//       {/* Show uploaded file names */}
//       {msg.media?.map((fileName, i) => (
//         <p key={i} className="text-xs mt-1 text-blue-600 truncate">{fileName}</p>
//       ))}

//       <p className="text-end text-xs mt-2">{msg.timestamp || msg.time || currentTime}</p>
//     </div>
//   </div>
// ))}


//             <div ref={chatEndRef} />
//           </div>

//           {/* Input & Send */}
//           <div className="border border-gray-400 h-[66px] rounded-2xl px-4">
//             <div className="flex items-center justify-between h-full gap-4 flex-wrap">
//               <FaPlus
//                 className="text-gray-300 text-[24px] cursor-pointer"
//                 onClick={handleClickUpload}
//               />
//               <input
//                 type="file"
//                 multiple
//                 ref={fileInputRef}
//                 onChange={handleFileChange}
//                 className="hidden"
//               />
//               <div className="flex-1 min-w-[200px]">
//                 <Inputs
//                   type="text"
//                   name="text"
//                   placeholder="Type a message..."
//                   value={inputMessage}
//                   onChange={(val) => setInputMessage(val)}
//                   inputClassName="w-full h-[40px] rounded-2xl px-3 border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition duration-200"
//                 />
//               </div>
//               <div className="mt-2">
//                 <Button
//                   text="Send"
//                   onClick={handleSendMessage}
//                   icon={<FaRegPaperPlane className="text-white text-sm" />}
//                 />
//               </div>
//             </div>
//           </div>

//           {/* File Preview */}
//           {uploadedFiles.length > 0 && (
//             <div className="mt-3 flex flex-wrap gap-2">
//               {uploadedFiles.map((file, index) => (
//                 <div key={index} className="bg-gray-100 text-sm px-3 py-1 rounded-full flex items-center gap-2">
//                   <span>{file.name}</span>
//                   <button
//                     onClick={() => handleRemoveFile(index)}
//                     className="text-red-500 font-bold text-xs"
//                   >
//                     ✕
//                   </button>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useEffect, useRef, useState } from "react";
import Inputs from "../utils/Inputs";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaPlus, FaRegPaperPlane } from "react-icons/fa6";
import Button from "../components/Button/Button";
import { useAuth } from "../context/AuthContext";
import { fetchLatestMessages, LiveChat, SendManually } from "../api/ApiServices";
import User from "../assets/user.png";

export default function Livechat() {
  const [selectedType, setSelectedType] = useState({ index: null, msg: null });
  const [inputMessage, setInputMessage] = useState("");
  const [chatMessages, setChatMessages] = useState({});
  const [message, setMessage] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const { userId } = useAuth();
  const chatEndRef = useRef(null);
  const sidebarEndRef = useRef(null);
  const fileInputRef = useRef();

  const currentTime = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      const res = await LiveChat(userId);
      console.log("res",res);
      
      if (res && res.phone_list) setMessage(res.phone_list);
    };
    fetchData();
  }, [userId]);

  useEffect(() => {
    chatEndRef?.current?.scrollIntoView({ behavior: "smooth" });
    sidebarEndRef?.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages, selectedType]);

  const handleClickUpload = () => fileInputRef.current.click();

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setUploadedFiles((prev) => [...prev, ...files]);
  };

  const handleRemoveFile = (indexToRemove) => {
    setUploadedFiles((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim() && uploadedFiles.length === 0) return;

    const formData = new FormData();
    const selectedMsg = selectedType.msg;

    if (!selectedMsg || !selectedMsg.phone_number) {
      console.error("No phone number selected.");
      return;
    }

    const phone = selectedMsg.phone_number.slice(2);
    formData.append("phone_number", phone);
    formData.append("user_id", userId);

    if (inputMessage.trim()) formData.append("message", inputMessage);

    uploadedFiles.forEach((file) => {
      formData.append("media_files", file);
    });

    try {
      const response = await SendManually(formData);
      console.log("Message sent:", response);

      setChatMessages((prev) => {
        const updated = { ...prev };
        const currentMsgs = updated[selectedType.index] || [];
        updated[selectedType.index] = [
          ...currentMsgs,
          {
            text: inputMessage,
            time: currentTime,
            media: uploadedFiles.map((file) => file.name),
          },
        ];
        return updated;
      });

      setInputMessage("");
      setUploadedFiles([]);
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  };

  const handleClickItem = async (msg, index) => {
    setSelectedType({ index, msg });

    const messageData = await fetchLatestMessages(userId, msg.phone_number);
    if (messageData && Array.isArray(messageData.messages)) {
      setChatMessages((prev) => ({
        ...prev,
        [index]: messageData.messages,
      }));
    }
  };

  return (
    <div className="border border-gray-400 h-auto w-full p-3 rounded-2xl" data-aos="zoom-in" data-aos-duration="1000">
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-10">
        {/* Left Sidebar */}
        <div className="w-full lg:w-[280px] h-[400px] lg:h-[600px] background rounded-2xl p-5 flex flex-col">
          <div className="mb-3">
            <Inputs
              name="text"
              type="text"
              placeholder="Search Contact"
              inputClassName="bg-white rounded-3xl"
            />
          </div>

          <div className="flex-1 overflow-y-auto no-scrollbar pr-1">
            {message.map((msg, index) => (
              <div
                key={index}
                onClick={() => handleClickItem(msg, index)}
                className={`rounded-2xl w-full h-[58px] flex justify-between items-center p-2 gap-2 mb-2 cursor-pointer transition
                ${selectedType.index === index ? "bg-purple-100" : "bg-gray-50"}`}
              >
                <img src={User} alt="User" className="w-8 h-8 rounded-full" />
                <div className="flex-1 overflow-hidden">
                  <h2 className="text-sm font-semibold">{msg.phone_number}</h2>
                  <p className="text-gray-400 text-sm truncate">{msg.unread_count}</p>
                </div>
                <p className="text-xs text-gray-500 whitespace-nowrap">{currentTime}</p>
              </div>
            ))}
            <div ref={sidebarEndRef} />
          </div>
        </div>

        {/* Right Chat Panel */}
        <div className="w-full lg:w-[660px] h-auto lg:h-[580px] flex flex-col gap-4">
          <div className="w-full h-[66px] background rounded-2xl px-4">
            <div className="flex justify-between items-center h-full">
              <div className="flex items-center gap-4">
                <img src={User} alt="User" className="w-8 h-8 rounded-full" />
                <h2 className="text-base font-semibold">{selectedType.msg?.phone_number || "No Contact Selected"}</h2>
              </div>
              <BsThreeDotsVertical size={18} className="text-gray-500 cursor-pointer" />
            </div>
          </div>

          <div className="w-full max-h-[400px] overflow-y-auto p-4 no-scrollbar flex-1 bg-white rounded-2xl">
            {(chatMessages[selectedType.index] || []).map((msg, index) => (
              <div key={index} className="flex justify-end mb-4">
                <div className="w-[250px] bg-[#EAD2FF] p-3 rounded-2xl rounded-br-none shadow">
                  <p className="text-sm">{msg.text || "No Text"}</p>
                  {msg.media?.map((fileName, i) => (
                    <p key={i} className="text-xs mt-1 text-blue-600 truncate">{fileName}</p>
                  ))}
                  <p className="text-end text-xs mt-2">{msg.timestamp || msg.time || currentTime}</p>
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* Input Section */}
          <div className="border border-gray-400 h-[66px] rounded-2xl px-4">
            <div className="flex items-center justify-between h-full gap-4 flex-wrap">
              <FaPlus className="text-gray-300 text-[24px] cursor-pointer" onClick={handleClickUpload} />
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
                 className="cursor-pointer"
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
                  <button onClick={() => handleRemoveFile(index)} className="text-red-500 font-bold text-xs">✕</button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
   
</div>
  )};