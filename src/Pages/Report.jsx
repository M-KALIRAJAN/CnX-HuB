import React from "react";
import SelectInput from "../utils/SelectInput";
import Button from "../components/Button/Button";
import { LuFilePlus2 } from "react-icons/lu";
import Card from "../components/card/Card";
import Table from "../utils/Table";
export default function Report() {
  const Recpicent = [
    { value: "Use Control List", label: "Normal Template" },
    { value: "+1", label: "+1" },
    { value: "+44", label: "+44" },
    { value: "+61", label: "+61" },
  ]; 
const columns = ["datetime", "attended", "missed", "picInterval", "timeTaken"];
  const headers = ["Date & Time", "Attented Chat", "Missed Chat", "Avg Pic interval","Avg Time Taken"];
  const data = [
      {
      datetime: "2024-07-07 10:00 AM",
      attended: 5,
      missed: 2,
      picInterval: "15s",
      timeTaken: "1m 30s"
    },
    {
      datetime: "2024-07-07 11:00 AM",
      attended: 8,
      missed: 1,
      picInterval: "18s",
      timeTaken: "2m 10s"
    },
    {
      datetime: "2024-07-07 12:00 PM",
      attended: 4,
      missed: 3,
      picInterval: "12s",
      timeTaken: "1m 45s"
    },
    {
      datetime: "2024-07-07 01:00 PM",
      attended: 6,
      missed: 0,
      picInterval: "10s",
      timeTaken: "1m 20s"
    },
    {
      datetime: "2024-07-07 02:00 PM",
      attended: 7,
      missed: 1,
      picInterval: "14s",
      timeTaken: "1m 55s"
    }
  ];
  return (
    <div className="border border-gray-400 h-auto w-full p-3 rounded-2xl">
      <div className="flex justify-between items-center">
    <div className="flex flex-col md:flex-row gap-4 items-center">
        <SelectInput
          label="Select Contact List"
          options={Recpicent}
          defaultValue="normaltemplate"
          onChange={(e) => console.log(e.target.value)}
          className="w-[190px] bg-white"
        />

        <div className="flex flex-col">
          <label htmlFor="fromDate" className="text-sm mb-1">
            From Date
          </label>
          <input
            type="date"
            id="fromDate"
            className="w-[190px] h-[38px] bg-white border border-gray-300 rounded-lg px-2 text-sm outline-none focus:ring-2 focus:ring-purple-300"
            onChange={(e) => console.log("From:", e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="toDate" className="text-sm mb-1">
            To Date
          </label>
          <input
            type="date"
            id="toDate"
            className="w-[190px] h-[38px] bg-white border border-gray-300 rounded-lg px-2 text-sm outline-none focus:ring-2 focus:ring-purple-300"
            onChange={(e) => console.log("To:", e.target.value)}
          />
        </div>
      </div>
      <Button
        text="Submit "
        onClick={() => console.log("Search clicked")}
        icon={<LuFilePlus2 className="text-white text-sm" />}
      />
      </div> 

      <div className="mt-7 flex gap-6">
         <Card
            text="Total Send"
            count="1300"
            bgColor="bg-[#F8F8F8]"
            textColor="text-[#3B70C7]"
          />
           <Card
            text="Missed Chat"
            count="1300"
            bgColor="bg-[#F8F8F8]"
               textColor="text-[#4153BC]"
          />
           <Card
            text="Avg Pic interal "
            count="11.11 hr"
            bgColor="bg-[#F8F8F8]"
          textColor="text-[#A037CF]"
            
          />
           <Card
            text="Average Rating"
            count="1300"
            bgColor="bg-[#F8F8F8]"
            textColor="text-[#2AB17B]"
          />
      </div>

   <div>
<Table headers={headers} columns={columns} data={data} />
   </div>
  
    </div>
  );
}
