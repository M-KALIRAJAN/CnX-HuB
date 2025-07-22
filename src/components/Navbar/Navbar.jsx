import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Bell from "../../assets/Bell.svg";
import User from "../../assets/User.svg";
import Down from "../../assets/Down.svg";
import { FaAngleUp } from "react-icons/fa6";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const routeTitles = {
    "/dashboard": "Dashboard",
    "/contacts": "Contacts",
    "/contacts/uploadcontact": "Upload Contacts",
    "/template": "Create Template",
    "/template/history": "Template Library",
    "/send": "Bulk Message",
    "/send/singlemessage": "Single Message",
    "/live": "Live Chat",
    "/report": "Report",
    "/support": "Support",
    "/support/ticket": "Support Ticket",
  };

  const title = routeTitles[location.pathname] || "Welcome";
  const [arrow, setArrow] = useState(false);
  const name = localStorage.getItem("name");

  const HandleNotification = () => {
     navigate("/live");
  };
  return (
    <div className="h-[48px] m-5 relative">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="font-bold text-[22px]">{title}</h2>
        </div>
        <div className="flex justify-center items-center gap-5 relative">
          <div
            className="h-[39px] w-[39px] rounded-full sidebar flex justify-center items-center cursor-pointer"
            onClick={HandleNotification}
          >
            <img src={Bell} alt="Notifications" />
          </div>

          <div className="border border-gray-200 gap-2.5 h-[45px] min-w-[155px] px-2 rounded-3xl flex items-center relative cursor-pointer">
           
            <div className="h-[39px] w-[39px] rounded-full sidebar flex justify-center items-center shrink-0">
              <img src={User} alt="User" />
            </div>

       
            <p
              className="text-red-700 text-sm max-w-[100px] truncate"
              title={name}
            >
              {name}
            </p>

          
            <div className="ml-auto" onClick={() => setArrow(!arrow)}>
              {arrow ? (
                <img src={Down} alt="Dropdown" height={18} width={18} />
              ) : (
                <FaAngleUp className="text-gray-400" />
              )}
            </div>

           
            {arrow && (
              <div className="absolute top-[55px] right-0 z-50 w-[160px] bg-white border border-gray-200 rounded-lg shadow-md py-2">
                <p className="px-4 py-2 hover:bg-gray-100 text-sm cursor-pointer">
                  Profile
                </p>
                <p
                  className="px-4 py-2 hover:bg-gray-100 text-sm cursor-pointer text-red-500"
                  onClick={() => {
                    localStorage.removeItem("isLoggedIn");
                    localStorage.clear();
                    window.location.href = "/";
                  }}
                >
                  Logout
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
