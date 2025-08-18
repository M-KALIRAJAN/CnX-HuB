import React, { useEffect, useState } from "react";
import Inputs from "../utils/Inputs";
import Button from "../components/Button/Button";
import { LuFilePlus2 } from "react-icons/lu";
import SelectInput from "../utils/SelectInput";
import { MdOutlineFileUpload } from "react-icons/md";
import { FaRegFolderOpen } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import Table from "../utils/Table";
import { TemplateHistroy } from "../api/ApiServices";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
export default function TemplateLibrary() {
  const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()
     const { userId ,role  } = useAuth()
  const templateOptions = [
    { value: "Select Category", label: "Select Category" },
    { value: "+1", label: "+1" },
    { value: "+44", label: "+44" },
    { value: "+61", label: "+61" },
  ];
  const status =[
    { value: "Status", label: "Status" },
    { value: "Approved", label: "Approved" },
    { value: "Reject", label: "Reject" },
  ];
    const category =[
    { value: "category", label: "category" },
    { value: "MARKETING", label: "MARKETING" },
    
  ]

  const headers = [
    "Template Name",
    "Language",
    " Status",
    "Updated Time",
    "Actions",
  ];
  const columns = [
    "templatename",
    "language",
    "status",
    "updatedtime",
    "action",
  ];
  const [tableData, setTableData] = useState([]);
  
  useEffect(() => {
    const fetchTemplate = async () => {
       setLoading(true);
      const response = await TemplateHistroy(userId);
      console.log("response",response);
      
      if (response?.status === "success") {
        const formatted = response.templates.map((template) => ({
          templatename: (
            <>
            <div className="flex gap-1">
              <div className="iconbackground">
                <FaRegFolderOpen className="inline " />
              </div>

              {template.name}
            </div>

            </>
          ),
          language: template.language,
          status: <p className="text-[#18AC0B]">{template.status}</p>,
          updatedtime: new Date().toLocaleString(),
          action: (
            <>
              <div className="flex items-center gap-1">
                <MdDeleteOutline
                  className="text-red-500 cursor-pointer"
                  size={18}
                />
                <span className="text-sm text-red-500">Delete</span>
              </div>
            </>
          ),
        }));
        setTableData(formatted);
      }
      setLoading(false);
    };
    fetchTemplate();
  }, []);

  return (
    <div className="border border-gray-400 h-auto w-full p-3 rounded-2xl">
      <div className="flex mt-3 justify-between items-center">
        <div className="w-[370px] max-w-md">
          <Inputs
            name="text"
            type="text"
            placeholder="Search for Template name..."
            value={search}
            onChange={setSearch}
            inputClassName="outline-none focus:outline-none border-none"
          />
        </div>
        <div className=" w-[170px] items-center mt-2">
          <Button
            text="Create Template"
            onClick={() =>navigate('/Layout-Hub') }
            icon={
              <LuFilePlus2 className="text-white text-sm text-center items-center" />
            }
          />
        </div>
      </div>
      <div className=" flex gap-3 items-center mt-4">
        <div className="flex gap-3 items-center mt-3">
          <h2>Status</h2>
 <div className="w-[200px] ">
          <SelectInput
            options={status}
            defaultValue="Select Category"
            onChange={(e) => console.log(e.target.value)}
          />
        </div>
        </div>
           <div className="flex gap-3 items-center mt-3">
          <h2>Category</h2>
        <div className="w-[200px]">
          <SelectInput
            options={category}
            defaultValue="Select Category"
            onChange={(e) => console.log(e.target.value)}
          />
        </div>
        </div>
        {/* <div className="w-[200px]">
          <SelectInput
            options={templateOptions}
            defaultValue="Select Category"
            onChange={(e) => console.log(e.target.value)}
          />
        </div>
        <div className="w-[200px]">
          <SelectInput
            options={templateOptions}
            defaultValue="Select Category"
            onChange={(e) => console.log(e.target.value)}
          />
        </div> */}
      </div>
      <div className="mt-8 w-auto h-auto bg-[#F8F8F8] p-2 rounded-2xl ">
               {loading ? (
          <div className="text-center py-8 text-gray-600 font-semibold animate-pulse">
            ⏳ Loading templates...
          </div>
        ) : (
          <Table headers={headers} columns={columns} data={tableData} />
        )}

      </div>
    </div>
  );
}
