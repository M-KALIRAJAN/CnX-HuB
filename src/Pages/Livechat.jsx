import React, { useEffect, useState } from "react";
import Inputs from "../utils/Inputs";
import { GoPerson } from "react-icons/go";
import { BsThreeDotsVertical } from "react-icons/bs";
import Backgroundimg from "../assets/Backgroundimg.svg";
import { FaPlus } from "react-icons/fa6";
import { FaRegPaperPlane } from "react-icons/fa6";
import Button from "../components/Button/Button";
export default function Livechat() {
  const [selectedType, setSelectedType] = useState("");
  const Message = [
    { number: "5678900", text: "Text", icon: <GoPerson /> },
    { number: "5678900", text: "Text", icon: <GoPerson /> },
    { number: "5678900", text: "Text", icon: <GoPerson /> },
    { number: "5678900", text: "Text", icon: <GoPerson /> },
  ];

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

  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );
  return (
    <div className="border border-gray-400 h-auto w-full p-3 rounded-2xl">
      <div className="flex gap-10">
        {/* leftSide */}
        <div className="w-[280px] h-[600px] background rounded-2xl p-5">
          <Inputs
            name="text"
            type="text"
            placeholder="Search Contuct"
            inputClassName="bg-white rounded-3xl"
          />

          {Message.map((msg, index) => (
            <div
              key={index}
              onClick={() => setSelectedType(index)} // use index as unique selector
              className={`rounded-2xl w-[250px] h-[58px] flex justify-between items-center p-2 gap-2 mb-2 cursor-pointer transition
      ${selectedType === index ? "bg-purple-100" : "bg-gray-50"}`}
            >
              <div className="iconbackground">{msg.icon}</div>

              <div className="flex-1 overflow-hidden">
                <h2 className="text-sm font-semibold">{msg.number}</h2>
                <p className="text-gray-400 text-sm truncate">{msg.text}</p>
              </div>

              <p className="text-xs text-gray-500 whitespace-nowrap">
                {currentTime}
              </p>
            </div>
          ))}
        </div>
        {/* RightSide */}
        <div className="w-[660px] h-[580px]">
          <div className="w-full h-[66px] background rounded-2xl px-4">
            <div className="flex justify-between items-center h-full">
              <div className="flex items-center gap-4">
                <div className="iconbackground"></div>
                <h2 className="text-base font-semibold">Business Account</h2>
              </div>

              <div className="text-gray-500 cursor-pointer">
                <BsThreeDotsVertical size={18} />
              </div>
            </div>
          </div>
          <div
            className="w-full h-[400px] bg-cover bg-center rounded-2xl mt-5"
            // style={{ backgroundImage: `url(${Backgroundimg})` }}
          >
            <div className="w-[300px] background p-4 rounded-2xl rounded-bl-none mb-4">
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Exercitationem ut architecto culpa omnis natus perspiciatis
                dolores sint ducimus suscipit mollitia sapiente corporis ipsam,
                quasi ullam fugit alias dolorum vitae voluptatibus!
              </p>
              <p className="text-end text-xs mt-2">{currentTime}</p>
            </div>
          </div>
          <div className="border border-gray-400 h-[66px] rounded-2xl px-4">
            <div className="flex items-center justify-between h-full gap-4">
              <FaPlus className="text-gray-300 text-[24px]" />\
              <div className="flex-1">
                <Inputs
                  type="text"
                  name="text"
                  placeholder="Type a Message .........."
                  inputClassName="w-full h-[40px] rounded-2xl text-start border-none outline-none focus:outline-none focus:border-none px-3"
                />
              </div>
              {/* Send Button */}
              <div>
                <Button
                  text="Send"
                  onClick={() => console.log("Search clicked")}
                  icon={<FaRegPaperPlane className="text-white text-sm" />}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
