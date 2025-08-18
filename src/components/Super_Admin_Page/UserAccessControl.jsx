import React from 'react'
import Inputs from '../../utils/Inputs'
import { IoSearch } from "react-icons/io5";
import SelectInput from '../../utils/SelectInput';
import Button from '../Button/Button';
import { FiPlus } from "react-icons/fi";
import Table from '../../utils/Table';
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
export default function UserAccessControl() {
  const Recpicent = [
    { value: "Status", label: "Status" },
    { value: "Active", label: "Active" },
    { value: "Deactive", label: "Deactive" },
  ];
      const headers = ["Name", "Role", "Email","ID Number", "Status","Action" ];
   const columns = ["Name", "Role", "Email", "IDNumber", "Status", "Action"];
   const data =[
    { Name: "John Doe", Role: "Admin", Email: "johndo",IDNumber:"3",Status:"Active",Action: <div className='flex items-center gap-5'>
      <RiDeleteBin6Line size={22}/>
      <CiEdit size={22} />
      </div>}
   ]
  return (
<div className="w-full h-auto flex flex-col overflow-x-hidden">
  <h2 className="font-bold text-2xl pl-4 mb-2">Members</h2>

  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-4 gap-4 sm:gap-0">
    
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
      
      <div className="w-[250px] relative">
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg">
          <IoSearch />
        </span>
        <Inputs
          name="search"
          type="text"
          placeholder="Search Contact"
          inputClassName="bg-white rounded-3xl pl-10"
        />
      </div>

      {/* Select dropdown */}
      <SelectInput
        options={Recpicent}
        defaultValue="normaltemplate"
        onChange={(e) => console.log(e.target.value)}
        className="w-full sm:w-[190px] bg-white"
      />
    </div>


    <div className="w-full sm:w-auto">
      <Button
        text="Add New User"
        className="w-full sm:w-[200px] h-[40px]"
        icon={<FiPlus className="text-white text-sm" size={22} />}
      />
    </div>
  </div>
  <Table  headers={headers} columns={columns} data={data} />
</div>

  )
}
