import React, { useState } from "react";
import Card from "../components/card/Card";
import Inputs from "../utils/Inputs";
import Button from "../components/Button/Button";
import { FaSearch } from "react-icons/fa";
import SelectInput from "../utils/SelectInput";
export default function SupportTicket() {
  const [search, setSearch] = useState("");
  const templateOptions = [
    { value: "Select Category", label: "Select Category" },
    { value: "+1", label: "+1" },
    { value: "+44", label: "+44" },
    { value: "+61", label: "+61" },
  ];
  return (
<div className="border border-gray-400 h-auto w-full p-3 rounded-2xl">
  <h2 className="font-bold text-center text-[26px]">
    Get the help you need
  </h2>

  <p className="text-gray-400 w-full max-w-[470px] text-center mx-auto mt-2">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur,
    consectetur nesciunt et corrupti tempore aperiam...
  </p>

  {/* Cards Section */}
  <div className="mt-7 flex flex-col md:flex-row flex-wrap gap-4 md:gap-4 justify-center">
    <Card
      text="Total Ticket"
      count="1300"
      bgColor="bg-[#F8F8F8]"
      textColor="text-[#3B70C7]"
      data-aos="fade-right"
      data-aos-delay="10"
    />
    <Card
      text="Open Ticket"
      count="1300"
      bgColor="bg-[#F8F8F8]"
      textColor="text-[#4153BC]"
      data-aos="zoom-in-up"
      data-aos-delay="100"
    />
    <Card
      text="Closed Ticket "
      count="11.11 hr"
      bgColor="bg-[#F8F8F8]"
      textColor="text-[#A037CF]"
      data-aos="fade-left"
      data-aos-delay="200"
    />
    <Card
      text="Resolved Ticket"
      count="1300"
      bgColor="bg-[#F8F8F8]"
      textColor="text-[#2AB17B]"
      data-aos="fade-left"
      data-aos-delay="300"
    />
  </div>

  {/* Search Section */}
  <div className="flex flex-col lg:flex-row justify-between gap-4 items-start mt-5">
    {/* Left Side - Search & Filter */}
    <div className="flex flex-col md:flex-row flex-wrap items-start gap-3 w-full px-2">
      <div className="border border-gray-100 px-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 rounded-2xl w-full sm:max-w-xl">
        <div className="flex-1">
          <Inputs
            name="text"
            type="text"
            placeholder="Search for ticket details..."
            value={search}
            onChange={setSearch}
            inputClassName="w-full outline-none focus:outline-none border-none"
          />
        </div>
        <div className="mt-1 sm:mt-0">
          <Button
            text="Search"
            onClick={() => console.log("Search clicked")}
            icon={<FaSearch className="text-white text-sm" />}
          />
        </div>
      </div>

      <div className="w-full sm:w-[200px]">
        <SelectInput
          options={templateOptions}
          defaultValue="Select Category"
          onChange={(e) => console.log(e.target.value)}
        />
      </div>
    </div>

    {/* Right Side - Create Ticket */}
    <div className="w-full sm:w-auto   flex justify-start lg:justify-end px-2">
      <Button
        text="Create Ticket"
        onClick={() => console.log("Search clicked")}
        className="w-[150px]"
        icon={
          <FaSearch className="text-white text-sm text-center items-center" />
        }
      />
    </div>
  </div>

  <h2 className="text-center mt-5">No Ticket</h2>
</div>

  );
}
