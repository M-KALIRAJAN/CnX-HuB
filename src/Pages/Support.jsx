import React, { useState } from 'react';
import Inputs from '../utils/Inputs';
import Button from '../components/Button/Button';
import { FaSearch } from "react-icons/fa";
import SupportCart from '../components/card/SupportCart';

import rocket from "../assets/rocket.svg";
import Down from "../assets/Down.svg";
import File from "../assets/file.svg";
import Security from "../assets/security.svg";
import Headset from "../assets/headset.svg";
import Arrow from "../assets/arrow.svg";
import { IoIosArrowDropright } from "react-icons/io";
export default function Support() {
  const [search, setSearch] = useState("");

  const supportData = [
    {
      icon: rocket,
      title: "Getting Started",
     actionText: (
      <span className="flex items-center gap-1.5 text-[#905CC1]">
        See details
        <IoIosArrowDropright />
      </span>
    ),
     
    },
    {
      icon: Security,
      title: "Security & Production",
  actionText: (
      <span className="flex items-center gap-1.5 text-[#905CC1]">
        See details
        <IoIosArrowDropright />
      </span>
    ), 

    },
    {
      icon: Headset,
      title: "Troubleshooting & Support",
  actionText: (
      <span className="flex items-center gap-1.5 text-[#905CC1]">
        See details
        <IoIosArrowDropright />
      </span>
    ),
      
    },
  ];

  return (
    <div className='border border-gray-400 h-auto w-full p-3 rounded-2xl'
            data-aos="zoom-in"
    data-aos-duration="1000"
    >
      <h2 className="font-bold text-center text-[26px]">Get the help you need</h2>
      <p className="text-gray-400 w-[470px] text-center m-auto mt-2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, consectetur nesciunt et corrupti tempore aperiam...
      </p>

      <div className="flex justify-center items-center mt-5 gap-3 w-full px-4">
        <div className="w-[370px] max-w-md">
          <Inputs
            name="text"
            type="text"
            placeholder="Ask a question"
            value={search}
            onChange={setSearch}
          />
        </div>
        <Button
          text="Search"
          onClick={() => console.log("Search clicked")}
          icon={<FaSearch className="text-white text-sm" />}
        />
      </div>

      <div className="flex  justify-center gap-10 mt-6">
        {supportData.map((item, index) => (
          <SupportCart
            key={index}
            icon={item.icon}
            title={item.title}
            actionText={item.actionText}
            actionIcon={item.actionIcon}
          />
        ))}
      </div>
      <div className="m-7">
     <h2 className="font-medium" >Top Artiles</h2>

 <div className="h-auto w-full rounded-2xl bg-[#F8F8F8] flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 p-5 mt-4"

 >
  <div className="iconbackground shrink-0">
    <img src={File} className="w-12 h-12 object-contain" alt="file" />
  </div>

  <div className="flex flex-col">
    <h3 className="text-base md:text-lg font-semibold">Lorem ipsum dolor</h3>
    
    <p className="overflow-hidden text-gray-400 mt-2 md:mt-5 max-w-full md:max-w-[770px] line-clamp-3">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam quidem quisquam dolore rerum natus qui alias numquam. Nesciunt eaque ipsam dicta accusamus provident quos ducimus quasi, facilis, veritatis est dolores?
    </p>
  </div>
</div>

      </div>


    </div>
  );
}
