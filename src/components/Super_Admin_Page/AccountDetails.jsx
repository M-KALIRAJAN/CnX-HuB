import { useState } from "react";
import Table from "../../utils/Table";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import Inputs from "../../utils/Inputs";
import { IoSearch } from "react-icons/io5";
export default function YourComponent() {
  const [account, setAccount] = useState("Activate");
   const headers = ["Id", "OfficeName", "Adress","Status", "Actions", ];
   const columns = ["Id", "OfficeName", "Adress", "Status", "Actions",    ];
 const data = [
  {
    Id: "file1",
    OfficeName: "category1",
    Adress: "2022-01-01",
    Status: "Active",
    
   
  
  },
];

   const header = ["Id", "OfficeName", "Adress","Status", "Actions", ];
   const column = ["Id", "OfficeName", "Adress", "Status", "Actions",    ];
 const dat = [
  {
    Id: "file1",
    OfficeName: "category1",
    Adress: "2022-01-01",
    Status: "Deactive",
 
    
   

  },
];
  return (
    <div className="w-full h-auto flex flex-col  overflow-x-hidden">
      <div className="flex">
       <div
          className={`h-[50px] w-[100px] rounded-l-2xl flex items-center justify-center cursor-pointer ${
            account === "Activate" ? "color text-white" : "bg-[#F5F0F9]"
          }`}
          onClick={() => setAccount("Activate")}
        >
          <h2 className="font-bold">Activate</h2>
        </div>

      <div
          className={`h-[50px] w-[100px] rounded-r-2xl flex items-center justify-center cursor-pointer ${
            account === "Deactivate" ? "color text-white" : "bg-[#F5F0F9]"
          }`}
          onClick={() => setAccount("Deactivate")}
        >
          <h2 className="font-bold">Deactivate</h2>
        </div>
      </div>
      
       
   {/* Fixed Search Input with icon inside input */}
<div className="w-[250px] mt-2.5 relative pl-2.5">
 
  <span className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg">
    <IoSearch />
  </span>

  <Inputs
    name="search"
    type="text"
    placeholder="Search Contact"
    inputClassName="bg-white rounded-3xl pl-10" 
  />
</div>


      {account === "Activate" && <Table headers={headers} columns={columns} data={data} />}
      {account === "Deactivate" && <Table headers={header} columns={column} data={dat} />}
    </div>
  );
}
