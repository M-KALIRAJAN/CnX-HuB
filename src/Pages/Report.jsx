import React, { useEffect, useState } from "react";
import SelectInput from "../utils/SelectInput";
import Button from "../components/Button/Button";
import { LuFilePlus2 } from "react-icons/lu";
import Card from "../components/card/Card";
import Table from "../utils/Table";
import { Reports } from "../api/ApiServices";
import { debugLog } from "../utils/debugLog";
import { useAuth } from "../context/AuthContext";

export default function Report() {
  const Recpicent = [
    { value: "Status", label: "Status" },
    { value: "Read", label: "Read" },
    { value: "UnRead", label: "UnRead" },
  
  ];

  const [messages, setMessages] = useState([]);

  const headers = ["#", "Phone", "Progress", "Time", "Message ID"];
  const columns = ["id", "phone", "Progress", "time", "message"];
 const { userId ,role  } = useAuth()
useEffect(() => {
  const ReportList = async () => {
   
    const res = await Reports(userId);
   console.log(res);
   
 
    if (res.length > 0 && res[0].messages) {
      const formatted = res[0].messages.map((msg, index) => ({
        id: index + 1,
        phone: msg.phone_number || "N/A",
        status: msg.status || "Pending",
        time: msg.timestamp
          ? new Date(msg.timestamp).toLocaleString()
          : "N/A",
        message: msg.message_id || "No Message ID",
      }));
 
      setMessages(formatted);
    } else {
      debugLog(" No valid messages found.");
    }
  };

  ReportList();
}, []);


  return (
    <div className="border border-gray-400 h-auto w-full p-3 rounded-2xl" data-aos="zoom-in" data-aos-duration="1000">
     <div className="flex flex-col lg:flex-row flex-wrap justify-between gap-4 items-center">
  {/* Inputs */}
  <div className="flex flex-col md:flex-row flex-wrap gap-4 flex-grow w-full">
    <SelectInput
      label="Select Contact List"
      options={Recpicent}
      defaultValue="normaltemplate"
      onChange={(e) => console.log(e.target.value)}
      className="w-full md:w-[190px] bg-white"
    />
    <div className="flex flex-col w-full md:w-[190px]">
      <label htmlFor="fromDate" className="text-sm mb-1">From Date</label>
      <input
        type="date"
        id="fromDate"
        className="h-[38px] bg-white border border-gray-300 rounded-lg px-2 text-sm outline-none focus:ring-2 focus:ring-purple-300"
        onChange={(e) => console.log("From:", e.target.value)}
      />
    </div>
    <div className="flex flex-col w-full md:w-[190px]">
      <label htmlFor="toDate" className="text-sm mb-1">To Date</label>
      <input
        type="date"
        id="toDate"
        className="h-[38px] bg-white border border-gray-300 rounded-lg px-2 text-sm outline-none focus:ring-2 focus:ring-purple-300"
        onChange={(e) => console.log("To:", e.target.value)}
      />
    </div>
  </div>

  {/* Submit Button */}
  {/* <div className="w-full lg:w-auto">
    <Button
      text="Submit"
      onClick={() => console.log("Search clicked")}
      icon={<LuFilePlus2 className="text-white text-sm" />}
    />
  </div> */}
</div>


      <div className="mt-7 flex flex-col md:flex-row md:justify-center flex-wrap md:gap-4 gap-4">
        <Card text="Total Send" count="1300" bgColor="bg-[#F8F8F8]" textColor="text-[#3B70C7]" />
        <Card text="Missed Chat" count="1300" bgColor="bg-[#F8F8F8]" textColor="text-[#4153BC]" />
        <Card text="Avg Pic Interval" count="11.11 hr" bgColor="bg-[#F8F8F8]" textColor="text-[#A037CF]" />
        <Card text="Average Rating" count="4.8" bgColor="bg-[#F8F8F8]" textColor="text-[#2AB17B]" />
      </div>

      <div className="mt-8 w-full bg-[#F8F8F8] p-2 rounded-2xl overflow-x-auto">
        <Table headers={headers} columns={columns} data={messages} />
      </div>
    </div>
  );
}
