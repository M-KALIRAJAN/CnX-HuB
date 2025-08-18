import React from "react";
import SelectInput from "../utils/SelectInput";
import Button from "../components/Button/Button";
import { FaRegFolderOpen } from "react-icons/fa";
import { MdOutlineFileUpload } from "react-icons/md";

import { MdDeleteOutline } from "react-icons/md";
import Table from "../utils/Table";
import { useNavigate } from "react-router-dom";
export default function Contacts() {
  const Recpicent = [
    { value: "Use Control List", label: "Normal Template" },
    { value: "+1", label: "+1" },
    { value: "+44", label: "+44" },
    { value: "+61", label: "+61" },
  ];
   const headers = ["File Name", "Category", "Uploaded at", "Actions",];
   const columns = ["filename", "category", "uploaded", "action",];
const data = [
  {
    filename: (
      <>
        <FaRegFolderOpen className="inline mr-2" />
        team-csv
      </>
    ),
    category: "rrsv1",
    uploaded: "2024-07-07 10:00 AM",
    action:(<>
     <MdDeleteOutline className="cursor-pointer text-red-500 inline mr-2" />
     Delete
    </>)
  },
];
  const navigate = useNavigate()
const HandleUpload = () =>{
       navigate('/Connections/uploadcontact')
}
  return (
    <div className="border border-gray-400 h-auto w-full p-4 rounded-2xl"
       data-aos="zoom-in"
    data-aos-duration="1000"
    >
      <h2 className="font-bold " style={{ fontFamily: 'Satoshi, sans-serif' }}>Upload Contact's CSV</h2>
<div className="mt-5 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
  {/* Left Side */}
  {/* <div className="flex flex-col sm:flex-row flex-wrap gap-3 items-start sm:items-center"> */}
    {/* <h2 className="text-base font-medium">Select category</h2> */}

    {/* <SelectInput
      options={Recpicent}
      defaultValue="normaltemplate"
      onChange={(e) => console.log(e.target.value)}
      className="w-full sm:w-[190px] bg-white"
    /> */}

    {/* <div className="mt-2 sm:mt-0">
      <Button
        text="Choose CSV"
        onClick={() => console.log("Send clicked")}
        icon={<FaRegFolderOpen className="text-white" />}
      />
    </div> */}
  {/* </div> */}

  {/* Right Side */}
  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 items-start sm:items-center">
    {/* <p className="text-gray-400 text-sm">* No File Chosen</p> */}

    {/* <Button
      text="Upload Conduct"
      onClick={HandleUpload}
      icon={<MdOutlineFileUpload className="text-white" />}
    /> */}
  </div>
</div>


      <div className="flex items-center justify-between">
          <div className="flex gap-3 items-center mt-3">
 <h2>Filter by category</h2>
        <SelectInput
          options={Recpicent}
          defaultValue="normaltemplate"
          onChange={(e) => console.log(e.target.value)}
          className="w-[190px] bg-white"
        />  
           
        </div>
           <Button
      text="Upload Conduct"
      onClick={HandleUpload}
      icon={<MdOutlineFileUpload className="text-white" />}
    />
      </div> 
      <h2 className="font-bold mt-7">Uploaded Files</h2> 
        <div className="mt-8 w-auto h-auto bg-[#F8F8F8] p-2 rounded-2xl ">
    <Table headers={headers} columns={columns} data={data} />
        </div>
  
    </div>
  );
}
