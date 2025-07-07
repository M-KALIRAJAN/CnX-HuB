import React, { useEffect, useState } from "react";
import Button from "../components/Button/Button";
import { FaMessage } from "react-icons/fa6";
import Wallet from "../assets/wallet.svg";
import SelectInput from "../utils/SelectInput";

export default function BulkMessage() {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const Recpicent = [
    { value: "Use Control List", label: "Normal Template" },
    { value: "+1", label: "+1" },
    { value: "+44", label: "+44" },
    { value: "+61", label: "+61" },
  ];

  return (
    <div className="min-h-screen overflow-y-auto border border-gray-400 w-full p-4 sm:p-6 md:p-7 rounded-2xl">
      {/* Main layout */}
      <div className="flex flex-col xl:flex-row gap-5">
        {/* Left Section */}
        <div className="flex flex-col gap-8 w-full xl:w-[770px]">
          <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
            {/* First Card */}
            <div className="flex items-center justify-between px-4 py-3 w-full sm:w-1/2 bg-gray-100 rounded-2xl">
              <div className="flex items-center gap-4">
                <div className="iconbackground">
                  <img src={Wallet} alt="Wallet" className="w-6 h-6" />
                </div>
                <h2 className="text-base font-medium">Wallet Balance</h2>
              </div>
              <h2 className="text-[#905CC1] font-bold text-base">₹1200</h2>
            </div>

            {/* Second Card */}
            <div className="flex items-center justify-between px-4 py-3 w-full sm:w-1/2 bg-gray-100 rounded-2xl">
              <div className="flex items-center gap-4">
                <div className="iconbackground">
                  <img src={Wallet} alt="Wallet" className="w-6 h-6" />
                </div>
                <h2 className="text-base font-medium">Message Left</h2>
              </div>
              <h2 className="text-[#905CC1] font-bold text-base">200</h2>
            </div>
          </div>

          {/* Middle Select Box Section */}
          <div className="w-full bg-gray-100 p-5 rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <SelectInput
                label="Recpicent Mode"
                options={Recpicent}
                defaultValue="normaltemplate"
                onChange={(e) => console.log(e.target.value)}
                className="w-full"
              />
              <SelectInput
                label="Select Category"
                options={Recpicent}
                defaultValue="normaltemplate"
                onChange={(e) => console.log(e.target.value)}
                className="w-full"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <SelectInput
                label="Select Contact List"
                options={Recpicent}
                defaultValue="normaltemplate"
                onChange={(e) => console.log(e.target.value)}
                className="w-full"
              />
              <SelectInput
                label="Select Template"
                options={Recpicent}
                defaultValue="normaltemplate"
                onChange={(e) => console.log(e.target.value)}
                className="w-full"
              />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full xl:w-[400px] h-[770px] bg-gray-100 rounded-2xl p-4 flex flex-col justify-between">
          <div className="bg-white p-4 rounded-2xl rounded-bl-none mb-4">
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Exercitationem ut architecto culpa omnis natus perspiciatis
              dolores sint ducimus suscipit mollitia sapiente corporis ipsam,
              quasi ullam fugit alias dolorum vitae voluptatibus!
            </p>
            <p className="text-end text-xs mt-2">{currentTime}</p>
          </div>

          <Button
            text="Send Bulk Message"
            onClick={() => console.log("Send clicked")}
            icon={<FaMessage className="text-white text-sm" />}
          />
        </div>
      </div>
    </div>
  );
}
