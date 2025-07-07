import React, { useEffect, useState } from "react";
import SelectInput from "../utils/SelectInput";
import Inputs from "../utils/Inputs";
import Text from "../assets/Text.svg";
import Image from "../assets/Image.svg";
import Video from "../assets/Video.svg";
import Document from "../assets/Document.svg"
import Backgroundimg from "../assets/Backgroundimg.svg"
import Button from "../components/Button/Button";
import { FaMessage } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GoPerson } from "react-icons/go";
export default function CreateTemplate() {
const [selectedType, setSelectedType] = useState("");

  const cards = [
    { type: "text", label: "Text", icon: Text },
    { type: "image", label: "Image", icon: Image },
    { type: "video", label: "Video", icon: Video },
    { type: "document", label: "Document", icon: Document },
  ];

  const Language = [{ value: "Use Control List", label: "add Language" }];
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
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

              <div className="mt-5 lg:mt-6 w-full lg:w-[170px]">
                <SelectInput
                  options={Language}
                  defaultValue="add Language"
                  onChange={(e) => console.log(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Template Name + Variable Row */}
          <div className="w-full xl:w-[700px] lg:w-[500px] bg-gray-100 p-5 rounded-2xl">
            
            <div className="flex flex-col lg:flex-row items-start gap-10">
              <div className="w-full lg:w-[210px]">
                <Inputs
                  label="Template Name"
                  name="text"
                  type="text"
                  placeholder="Template Name"
                />
                <p className="text-gray-400 text-[8px]">
                  Template name must be lowercase and can include underscores.
                  Example: cust_lem
                </p>
              </div>
              <div className="w-full lg:w-[200px]">
                <SelectInput
                  label="Variable (Optional)"
                  options={Language}
                  defaultValue="add Language"
                  onChange={(e) => console.log(e.target.value)}
                />
              </div>
            </div>

            
            <div className="flex flex-col lg:flex-row gap-5">
              <div className="flex-1">
                <h2 className="font-bold mb-5 mt-5">Header Type</h2>
                <div className="flex flex-wrap lg:flex-nowrap justify-between gap-4">
                  {cards.map((card) => (
                    <div
                      key={card.type}
                      onClick={() => setSelectedType(card.type)}
                      className={`w-[78px] xl:w-[100px]  h-[110px] rounded-sm flex flex-col justify-center items-center cursor-pointer transition-colors ${
                        selectedType === card.type
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

              <div className="w-full lg:w-[330px] mt-5 lg:mt-[60px]">
                <Inputs
                  type="text"
                  name="text"
                  placeholder="Header Text .........."
                  inputClassName="h-[110px] rounded-2xl text-start"
                />
              </div>
            </div>
              <Inputs
                  label="Body Text"
                  name="text"
                  type="text"
                  placeholder="Write your message"
                   inputClassName="h-[70px]"
                />

                 <Inputs
                  label="Footer Text (optional)"
                  name="text"
                  type="text"
                  placeholder="Write your message"
                   inputClassName="h-[70px]"
                />

                <h2>Button(optional)</h2> 
                <div className="flex justify-between items-center">
                    <div className="border border-gray-400 w-[170PX] h-[40px] text-center">
                         <p className="mt-2">Add Button</p>
                    </div>
                    <div>
                         <Button
                                   text="Submit Template"
                                   onClick={() => console.log("Search clicked")}
                                   icon={<FaMessage className="text-white text-sm" />}
                                 />
                    </div>
                </div>
          </div>
        </div>

        {/* Right Section: Sidebar Preview or Anything */}
<div
  className="w-full xl:w-[450px] lg:w-[320px] h-[600px] rounded-2xl p-4 mt-5 lg:mt-0"
//   style={{
//     background: `linear-gradient(to bottom, #E0BCFF 0px, #F8F8F8 100px, #F8F8F8 100%)`,
//     backgroundImage:Backgroundimg
//   }}

  style={{
    backgroundImage: `linear-gradient(to bottom, #E0BCFF 0px, #F8F8F8 100px, #F8F8F8 100%), url(${Backgroundimg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover", // or "contain", depending on need
    backgroundPosition: "center",
  }}
>
  <div className="flex justify-between items-center">
    <div className="gap-4 flex items-center">
  <div className="iconbackground"/>

   
       <h2>Bussiness Account</h2>
    </div>
  

       <div>
        <BsThreeDotsVertical />
       </div>
  </div> 


   <div className="mt-7 p-3 bg-white overflow-hidden flex-wrap rounded-3xl rounded-bl-none">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Exercitationem ut architecto culpa omnis natus perspiciatis
              dolores sint ducimus suscipit mollitia sapiente corporis ipsam,
              quasi ullam fugit alias dolorum vitae voluptatibus!
            </p>
            <div>
              <p className=" text-end">{currentTime}</p>
            </div>
          </div>
</div>





      </div>
    </div>
  );
}
