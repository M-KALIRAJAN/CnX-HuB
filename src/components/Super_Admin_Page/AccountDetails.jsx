import { useState } from "react";
import Table from "../../utils/Table";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
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
    Actions: <div className="items-center flex ">
  <button className= " color h-8 w-26 rounded-[10px] items-center cursor-pointer text-white font-bold "> DEACTIVE</button>
    </div>
   

  },
];

   const header = ["Id", "OfficeName", "Adress","Status", "Actions", ];
   const column = ["Id", "OfficeName", "Adress", "Status", "Actions",    ];
 const dat = [
  {
    Id: "file1",
    OfficeName: "category1",
    Adress: "2022-01-01",
    Status: "Active",
    Actions: <div className="items-center flex ">
  <button className= " color h-8 w-26 rounded-[10px] items-center cursor-pointer text-white font-bold "> ACTIVE</button>
    </div>
   

  },
];
  return (
    <div className="w-full h-auto flex flex-col gap-10 overflow-x-hidden">
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

      {account === "Activate" && <Table headers={headers} columns={columns} data={data} />}
      {account === "Deactivate" && <Table headers={header} columns={column} data={dat} />}
    </div>
  );
}
