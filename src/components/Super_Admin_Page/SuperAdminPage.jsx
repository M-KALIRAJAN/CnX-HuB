// components/admin/SuperAdminPage.js
import React from "react";
import Card from "../card/Card";
import AOS from "aos";
import "aos/dist/aos.css";
import Totalsent from "../../assets/Totalsent.svg";
import Delivered from "../../assets/Delivered.svg";
import Read from "../../assets/Read.svg";
import Failed from "../../assets/Failed.svg";

export default function SuperAdminPage() {
  return (
      <div className="w-full h-auto flex flex-col gap-10 overflow-x-hidden">

        <div className="flex flex-col   lg:flex-row gap-3 lg:gap-5 justify-around items-center rounded-3xl bg-[#F8F8F8] p-3 h-auto lg:h-[157px]">
            {/* Left */}
            <Card
              text="Total Registered Users"
              count="120"
              image={Totalsent}
              bgColor="bg-[#B3D0FF]"
              textColor="text-[#3B70C7] text-3xl font-bold"
              data-aos="fade-right"
              data-aos-delay="0"
                imageWrapperClass="p-2 h-[50px] w-[50px]"
            />
    
            {/* Center */}
            <Card
              text="Active WhatsApp Senders"
              count="200"
              image={Delivered}
              bgColor="bg-[#CDD4FD]"
              textColor="text-[#4153BC]"
              data-aos="zoom-in-up"
               imageWrapperClass="p-2 h-[50px] w-[50px]"
              data-aos-delay="100"
            />
    
            {/* Right */}
            <Card
              text="Messages Sent Today"
              count="200"
              image={Read}
              bgColor="bg-[#EFCEFE]"
              textColor="text-[#A037CF]"
              data-aos="fade-left"
              data-aos-delay="200"
                 imageWrapperClass="p-2 h-[50px] w-[50px]"
            />
    
            {/* Extra card – fade-left again with more delay */}
            <Card
              text="Total Approved Templates"
              count="100"
              image={Failed}
              bgColor="bg-[#C5F6D1]"
              textColor="text-[#2AB17B] text-[10px]"
              data-aos="fade-left"
              data-aos-delay="300"
                imageWrapperClass="p-2 h-[50px] w-[50px]"
            />
          </div>

    </div>
  );
}
