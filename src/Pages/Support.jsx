import React, { useState } from 'react';
import Inputs from '../utils/Inputs';
import Button from '../components/Button/Button';
import { FaSearch } from "react-icons/fa";
import SupportCart from '../components/card/SupportCart';

import rocket from "../assets/rocket.svg";
import Down from "../assets/Down.svg";
import File from "../assets/file.svg";
export default function Support() {
  const [search, setSearch] = useState("");

  const supportData = [
    {
      icon: rocket,
      title: "Getting Started",
      actionText: "See details",
      actionIcon: Down,
    },
    {
      icon: rocket,
      title: "How It Works",
      actionText: "Learn more",
      actionIcon: Down,
    },
    {
      icon: rocket,
      title: "Need Support?",
      actionText: "Contact us",
      actionIcon: Down,
    },
  ];

  return (
    <div className='border border-gray-400 h-auto w-full p-3 rounded-2xl'>
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

     <div className="h-[140px] w-full rounded-2xl bg-[#F8F8F8] flex  items-center gap-8 p-5 mt-4"> 
      <div className="iconbackground">
 <img src={File}/>
      </div>
      <div>
        <h3 >Lorem ipsum dolor</h3> 
        <p className="flex-wrap w-[770px] text-gray-400 mt-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam quidem quisquam dolore rerum natus qui alias numquam. Nesciunt eaque ipsam dicta accusamus provident quos ducimus quasi, facilis, veritatis est dolores?</p>
      </div>
     
     </div>
      </div>


    </div>
  );
}
