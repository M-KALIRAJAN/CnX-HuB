import React, { useEffect, useState } from 'react'
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import Table from '../../utils/Table';
import { useRef } from 'react';
import Switch from "react-switch";

export default function UserManagement() {
    const [selectedRow, setSelectedRow] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);
   const [showUpdateModal, setShowUpdateModal] = useState(false);
   const [isSwitchOn, setIsSwitchOn] = useState(true);
    const headers = ["Id", "OfficeName", "Adress","Status", "ManageUserStatus","Actions", ];
   const columns = ["Id", "OfficeName", "Adress", "Status", "ManageUserStatus", "Actions",    ];
 const data = [
  {
    Id: "file1",
    OfficeName: "category1",
    Adress: "2022-01-01",
    Status: "Active",
ManageUserStatus: (
  <div title={isSwitchOn ? "Active: Approve User" : "Inactive: Reject User"}>
    <Switch
      onChange={() => setIsSwitchOn(!isSwitchOn)}
      checked={isSwitchOn}
      onColor="#86d3ff"
      onHandleColor="#2693e6"
      handleDiameter={18}
      uncheckedIcon={false}
      checkedIcon={false}
      boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
      activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
      height={20}
      width={48}
    />
  </div>
),

    Actions:<PiDotsThreeOutlineVerticalFill size={23}  />

  },
];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModal(false);
        setShowUpdateModal(false)
      }
    };
    if (showModal || showUpdateModal) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showModal,showUpdateModal]);

  const handleActionClick = (row) => {
    setSelectedRow(row);
    setShowModal(true);
  };

    const handleOpenUpdateModal = () => {
    setShowModal(false); // close action modal
    setShowUpdateModal(true); // open update modal
  };

    const tableData = data.map((row) => ({
    ...row,
    Actions: (
      <PiDotsThreeOutlineVerticalFill
        size={23}
        className="cursor-pointer"
        onClick={() => handleActionClick(row)}
      />
    ),
  }));
  return (
      <div className="w-full h-auto flex flex-col gap-10 overflow-x-hidden">
     <h2 className='font-bold text-2xl'>All Users List</h2> 
     <Table  headers={headers} columns={columns} data={tableData} />

          {/* Modal */}
      {showModal && (
        <div 
        ref={modalRef} 
        className="absolute top-30 right-45 transform -translate-x-1/2 w-36 p-3 bg-white shadow-lg rounded-xl z-50 border border-gray-200">


          <div className="flex flex-col">
            <button className="  px- py-2 rounded"   onClick={handleOpenUpdateModal}>Update</button>
            <div className='border border-gray-100'/>
            <button className="  px-4 py-2 rounded" onClick={() => alert("Delete clicked")}>Delete</button>
            <div className='border border-gray-100'/>
 <button className="  px-4 py-2 rounded" onClick={() => alert("Delete clicked")}>View</button>
      
          </div>
        </div>
      )}

  {/* Updated model */}
{showUpdateModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center">
    <div className="bg-[#ffffff] rounded-xl p-6 w-[400px] shadow-xl">
      <h3 className="text-xl font-bold mb-4">Update User Details</h3>
      <div className="flex flex-col gap-4">

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Office Name</label>
          <input
            type="text"
            defaultValue={selectedRow?.OfficeName}
            className="border p-2 rounded w-full"
            placeholder="Enter office name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
          <input
            type="text"
            defaultValue={selectedRow?.Adress}
            className="border p-2 rounded w-full"
            placeholder="Enter address"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
          <input
            type="text"
            defaultValue={selectedRow?.Status}
            className="border p-2 rounded w-full"
            placeholder="Enter status"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Monthly Sending Limit</label>
          <input
            type="text"
            defaultValue="70"
            className="border p-2 rounded w-full"
            placeholder="Enter monthly limit"
          />
        </div>
      </div>

      <div className="flex justify-end gap-2 mt-6">
        <button
          className="bg-gray-300 px-4 py-2 rounded"
          onClick={() => setShowUpdateModal(false)}
        >
          Cancel
        </button>
        <button
          className="bg-violet-500 text-white px-4 py-2 rounded"
          onClick={() => setShowUpdateModal(false)}
        >
          Save
        </button>
      </div>
    </div>
  </div>
)}

      </div>
  )
}
