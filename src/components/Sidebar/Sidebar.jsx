// import { NavLink, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import Template from "../../assets/sidebar/Template.svg";
// import Down from "../../assets/Down.svg";
// import Send from "../../assets/sidebar/Send.svg";
// import Live from "../../assets/sidebar/Live.svg";
// import Phone from "../../assets/sidebar/Phone.svg";
// import Report from "../../assets/sidebar/Report.svg";
// import Support from "../../assets/sidebar/Support.svg";
// import chatbot from "../../assets/sidebar/chatbot.svg";
// import Dashboard from "../../assets/sidebar/dashboard.svg";
// import logo from "../../assets/cnx_logo.svg";
// import { FaHistory } from "react-icons/fa";
// import { LuMessageCircleMore } from "react-icons/lu";

// import { MdOutlineContactSupport } from "react-icons/md";

// import { FaAngleUp } from "react-icons/fa6";
// import { useAuth } from "../../context/AuthContext";

// export default function Sidebar() {
//   const [templateOpen, setTemplateOpen] = useState(false);
//   const [sendOpen, setSendOpen] = useState(false);
//   const [supportOpen, setSupportOpen] = useState(false);
//   const [templateArrow, setTemplateArrow] = useState(false);
//   const [sendArrow, setsendArrow] = useState(false);
//   const [supportArrow, setSupportArrow] = useState(false);
//   const navigate = useNavigate();
//   const { role,user_id} = useAuth();
//   return (
//     <div className="w-full md:w-[250px] h-screen sidebar rounded-3xl m-3 p-6 flex flex-col justify-between bg-white">
//       {/* Scrollable content wrapper */}

//       {/* <h2 className="text-2xl font-bold mb-10 text-center text-[#59565C] border-[3px] border-dotted">
//         SarasCnX
//       </h2> */}
//       <div className="text-center flex justify-center mb-7 ">
//         <img src={logo} height="100px" width="120px" />
//       </div>

//       <div className="flex-1 min-h-0 overflow-y-auto no-scrollbar">
//         {user_id && (
//           <><div className="flex flex-col gap-3">
//             {/* Dashboard */}
//             <NavLink
//               to="/Performance-Hub"
//               className={({ isActive }) => `flex items-center gap-4 p-2 rounded-3xl transition cursor-pointer ${isActive ? "bg-[#905CC1] text-white" : "text-[#59565C]"}`}
//             >
//               <div className="w-10 h-10 bg-white flex items-center justify-center rounded-full shadow-sm">
//                 <img src={Dashboard} alt="Live Chat" className="w-5 h-5" />
//               </div>
//               <p>Dashboard</p>
//             </NavLink>

//             {/* Template Parent Link */}
//             <div className="flex items-center justify-between">
//               <NavLink
//                 to="/Layout-Hub"
//                 className={({ isActive }) => `flex items-center justify-between p-3 rounded-2xl w-full transition-all ${isActive ? "bg-[#905CC1] text-white" : "text-[#59565C] hover:bg-[#F4F0FA]"}`}
//               >
//                 <div className="flex items-center gap-4">
//                   <div className="w-10 h-10 bg-white flex items-center justify-center rounded-full shadow-sm">
//                     <img src={Template} alt="Template" className="w-5 h-5" />
//                   </div>
//                   <p className="font-medium">Template</p>
//                 </div>

//                 <div
//                   onClick={(e) => {
//                     e.preventDefault();
//                     setTemplateOpen(!templateOpen);
//                     setTemplateArrow(!templateArrow);
//                   }}
//                   className="cursor-pointer"
//                 >
//                   {templateArrow ? (
//                     <img src={Down} className="w-5 h-5" />
//                   ) : (
//                     <FaAngleUp className="text-gray-400" />
//                   )}
//                 </div>
//               </NavLink>
//             </div>

//             {/* Submenu */}
//             <div
//               className={`ml-4 overflow-hidden transition-all duration-300 ease-in-out ${templateOpen ? "max-h-40" : "max-h-0"}`}
//             >
//               <ul className="mt-2 pl-4 space-y-2 border-l border-[#905CC1]/30">
//                 <li>
//                   <NavLink
//                     to="/Layout-Hub/Library"
//                     className={({ isActive }) => `flex items-center gap-3 p-2 rounded-xl transition-all duration-200 ${isActive
//                       ? "bg-[#905CC1] text-white"
//                       : "text-[#59565C] hover:bg-[#F4F0FA]"}`}
//                   >
//                     <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
//                       <FaHistory className="text-[#905CC1] text-sm" />
//                     </div>
//                     <span className="text-sm whitespace-nowrap">Template History</span>
//                   </NavLink>
//                 </li>
//               </ul>
//             </div>

//             {/* Send */}
//             {/* Send Menu */}
//             <div className="flex items-center justify-between">
//               <NavLink
//                 to="/Send-Message"
//                 className={({ isActive }) => `flex items-center justify-between p-3 rounded-2xl w-full transition-all ${isActive ? "bg-[#905CC1] text-white" : "text-[#59565C] hover:bg-[#F4F0FA]"}`}
//               >
//                 <div className="flex items-center gap-4">
//                   <div className="w-10 h-10 bg-white flex items-center justify-center rounded-full shadow-sm">
//                     <img src={Send} alt="Send" className="w-5 h-5" />
//                   </div>
//                   <p className=" font-medium">Send</p>
//                 </div>

//                 <div
//                   onClick={(e) => {
//                     e.preventDefault();
//                     setSendOpen(!sendOpen);
//                     setsendArrow(!sendArrow);
//                   }}
//                   className="cursor-pointer"
//                 >
//                   {sendArrow ? (
//                     <img src={Down} className="w-5 h-5" />
//                   ) : (
//                     <FaAngleUp className="text-gray-400" />
//                   )}
//                 </div>
//               </NavLink>
//             </div>

//             {/* Send Submenu */}
//             <div
//               className={`ml-4 overflow-hidden transition-all duration-300 ease-in-out ${sendOpen ? "max-h-40" : "max-h-0"}`}
//             >
//               <ul className="mt-2 pl-4 space-y-2 border-l border-[#905CC1]/30">
//                 <li>
//                   <NavLink
//                     to="/Send-Message/Individual"
//                     className={({ isActive }) => `flex items-center gap-3 p-2 rounded-xl transition-all duration-200 ${isActive
//                       ? "bg-[#905CC1] text-white"
//                       : "text-[#59565C] hover:bg-[#F4F0FA]"}`}
//                   >
//                     <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
//                       <LuMessageCircleMore className="text-[#905CC1]" size={20} />
//                     </div>
//                     <span className="text-sm ">Single Send Message</span>
//                   </NavLink>
//                 </li>
//               </ul>
//             </div>


//             {/* Live Chat */}
//             <NavLink
//               to="/Realtime-chat"
//               className={({ isActive }) => `flex items-center gap-4 p-2 rounded-3xl transition cursor-pointer ${isActive ? "bg-[#905CC1] text-white" : "text-[#59565C]"}`}
//             >
//               <div className="w-10 h-10 bg-white flex items-center justify-center rounded-full shadow-sm">
//                 <img src={Live} alt="Live Chat" className="w-5 h-5" />
//               </div>
//               <p>Live Chat</p>
//             </NavLink>

//             {/* Contacts */}
//             <NavLink
//               to="/Connections"
//               className={({ isActive }) => `flex items-center gap-4 p-2 rounded-3xl transition cursor-pointer ${isActive ? "bg-[#905CC1] text-white" : "text-[#59565C]"}`}
//             >
//               <div className="w-10 h-10 bg-white flex items-center justify-center rounded-full shadow-sm">
//                 <img src={Phone} alt="Contacts" className="w-5 h-5" />
//               </div>
//               <p>Contacts</p>
//             </NavLink>

//             {/* Report */}
//             <NavLink
//               to="/Analytics"
//               className={({ isActive }) => `flex items-center gap-4 p-2 rounded-3xl transition cursor-pointer ${isActive ? "bg-[#905CC1] text-white" : "text-[#59565C]"}`}
//             >
//               <div className="w-10 h-10 bg-white flex items-center justify-center rounded-full shadow-sm">
//                 <img src={Report} alt="Report" className="w-5 h-5" />
//               </div>
//               <p>Report</p>
//             </NavLink>

//             {/* Support */}
//             <div className="flex items-center justify-between">
//               <NavLink
//                 to="/support"
//                 className={({ isActive }) => `flex items-center justify-between p-3 rounded-2xl w-full transition-all ${isActive ? "bg-[#905CC1] text-white" : "text-[#59565C] hover:bg-[#F4F0FA]"}`}
//               >
//                 <div className="flex items-center gap-4">
//                   <div className="w-10 h-10 bg-white flex items-center justify-center rounded-full shadow-sm">
//                     <img src={Support} alt="Support" className="w-5 h-5" />
//                   </div>
//                   <p className=" font-medium">Support</p>
//                 </div>

//                 <div
//                   onClick={(e) => {
//                     e.preventDefault();
//                     setSupportOpen(!supportOpen);
//                     setSupportArrow(!supportArrow);
//                   }}
//                   className="cursor-pointer"
//                 >
//                   {supportArrow ? (
//                     <img src={Down} className="w-5 h-5" />
//                   ) : (
//                     <FaAngleUp className="text-gray-400" />
//                   )}
//                 </div>
//               </NavLink>
//             </div>

//             {/* Submenu */}
//             <div
//               className={`ml-4 overflow-hidden transition-all duration-300 ease-in-out ${supportOpen ? "max-h-40" : "max-h-0"}`}
//             >
//               <ul className="mt-2 pl-4 space-y-2 border-l border-[#905CC1]/30">
//                 <li>
//                   <NavLink
//                     to="/support/ticket"
//                     className={({ isActive }) => `flex items-center gap-3 p-2 rounded-xl transition-all duration-200 ${isActive
//                       ? "bg-[#905CC1] text-white"
//                       : "text-[#59565C] hover:bg-[#F4F0FA]"}`}
//                   >
//                     <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
//                       <MdOutlineContactSupport className="text-[#905CC1] text-sm" />
//                     </div>
//                     <span className="text-sm whitespace-nowrap">Support / Ticket</span>
//                   </NavLink>
//                 </li>
//               </ul>
//             </div>

//           </div>
//             /* Bottom Chatbot */
//             <div className="mt-0" onClick={() => navigate('/Chatbot')}>
//               <img src={chatbot} alt="Chatbot" />
//             </div></>
//         )}

//         {/* {role === "superadmin" && (
//           <div className="gap-3">
//             <div className="flex flex-col gap-3">
//               <NavLink
//                 to="/admin-dashboard"
//                 className={({ isActive }) => `flex items-center gap-4 p-2 rounded-3xl transition cursor-pointer ${isActive ? "bg-[#905CC1] text-white" : "text-[#59565C]"}`}
//               >
//                 <div className="w-10 h-10 bg-white flex items-center justify-center rounded-full shadow-sm">
//                   <img src={Dashboard} alt="Live Chat" className="w-5 h-5" />
//                 </div>
//                 <p> SuperAdmin</p>
//               </NavLink>

//             </div>
//             <div className="flex flex-col gap-3 mt-3">
//               <NavLink
//                 to="/admin-userlist"
//                 className={({ isActive }) => `flex items-center gap-4 p-2 rounded-3xl transition cursor-pointer ${isActive ? "bg-[#905CC1] text-white" : "text-[#59565C]"}`}
//               >
//                 <div className="w-10 h-10 bg-white flex items-center justify-center rounded-full shadow-sm">
//                   <img src={Dashboard} alt="Live Chat" className="w-5 h-5" />
//                 </div>
//                 <p> User-Management</p>
//               </NavLink>

//             </div>

//               <div className="flex flex-col gap-3 mt-3">
//               <NavLink
//                 to="/account-details"
//                 className={({ isActive }) => `flex items-center gap-4 p-2 rounded-3xl transition cursor-pointer ${isActive ? "bg-[#905CC1] text-white" : "text-[#59565C]"}`}
//               >
//                 <div className="w-10 h-10 bg-white flex items-center justify-center rounded-full shadow-sm">
//                   <img src={Dashboard} alt="Live Chat" className="w-5 h-5" />
//                 </div>
//                 <p> Account-Details</p>
//               </NavLink>

//             </div>

//                  <div className="flex flex-col gap-3 mt-3">
//               <NavLink
//                 to="/useractivity-log"
//                 className={({ isActive }) => `flex items-center gap-4 p-2 rounded-3xl transition cursor-pointer ${isActive ? "bg-[#905CC1] text-white" : "text-[#59565C]"}`}
//               >
//                 <div className="w-10 h-10 bg-white flex items-center justify-center rounded-full shadow-sm">
//                   <img src={Dashboard} alt="Live Chat" className="w-5 h-5" />
//                 </div>
//                 <p> UserActivityLog</p>
//               </NavLink>

//             </div>

//                   <div className="flex flex-col gap-3 mt-3">
//               <NavLink
//                 to="/useraccess-control"
//                 className={({ isActive }) => `flex items-center gap-4 p-2 rounded-3xl transition cursor-pointer ${isActive ? "bg-[#905CC1] text-white" : "text-[#59565C]"}`}
//               >
//                 <div className="w-10 h-10 bg-white flex items-center justify-center rounded-full shadow-sm">
//                   <img src={Dashboard} alt="Live Chat" className="w-5 h-5" />
//                 </div>
//                 <p> UserAccessControl</p>
//               </NavLink>

//             </div>

//             </div>
//         )} */}
//       </div>



//     </div>
//   );
// }
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import Template from "../../assets/sidebar/Template.svg";
import Down from "../../assets/Down.svg";
import Send from "../../assets/sidebar/Send.svg";
import Live from "../../assets/sidebar/Live.svg";
import Phone from "../../assets/sidebar/Phone.svg";
import Report from "../../assets/sidebar/Report.svg";
import Support from "../../assets/sidebar/Support.svg";
import chatbot from "../../assets/sidebar/chatbot.svg";
import Dashboard from "../../assets/sidebar/dashboard.svg";
import logo from "../../assets/cnx_logo.svg";
import { FaHistory } from "react-icons/fa";
import { LuMessageCircleMore } from "react-icons/lu";

import { MdOutlineContactSupport } from "react-icons/md";

import { FaAngleUp } from "react-icons/fa6";

export default function Sidebar() {
  const [templateOpen, setTemplateOpen] = useState(false);
  const [sendOpen, setSendOpen] = useState(false);
  const [supportOpen, setSupportOpen] = useState(false);
  const [templateArrow, setTemplateArrow] = useState(false);
  const [sendArrow, setsendArrow] = useState(false);
  const [supportArrow, setSupportArrow] = useState(false);
   const navigate = useNavigate();
  return (
    <div className="w-full md:w-[250px] h-screen sidebar rounded-3xl m-3 p-6 flex flex-col justify-between bg-white">
      {/* Scrollable content wrapper */}

      {/* <h2 className="text-2xl font-bold mb-10 text-center text-[#59565C] border-[3px] border-dotted">
        SarasCnX
      </h2> */}
      <div className="text-center flex justify-center mb-7 ">
        <img src={logo} height="100px" width="120px" />
      </div>
      <div className="flex-1 min-h-0 overflow-y-auto no-scrollbar">
        <div className="flex flex-col gap-3">
          {/* Dashboard */}
          <NavLink
            to="/Performance-Hub"
            className={({ isActive }) =>
              `flex items-center gap-4 p-2 rounded-3xl transition cursor-pointer ${isActive ? "bg-[#905CC1] text-white" : "text-[#59565C]"
              }`
            }
          >
            <div className="w-10 h-10 bg-white flex items-center justify-center rounded-full shadow-sm">
              <img src={Dashboard} alt="Live Chat" className="w-5 h-5" />
            </div>
            <p>Dashboard</p>
          </NavLink>

          {/* Template Parent Link */}
          <div className="flex items-center justify-between">
            <NavLink
              to="/Layout-Hub"
              className={({ isActive }) =>
                `flex items-center justify-between p-3 rounded-2xl w-full transition-all ${isActive ? "bg-[#905CC1] text-white" : "text-[#59565C] hover:bg-[#F4F0FA]"
                }`
              }
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white flex items-center justify-center rounded-full shadow-sm">
                  <img src={Template} alt="Template" className="w-5 h-5" />
                </div>
                <p className="font-medium">Template</p>
              </div>

              <div
                onClick={(e) => {
                  e.preventDefault();
                  setTemplateOpen(!templateOpen);
                  setTemplateArrow(!templateArrow);
                }}
                className="cursor-pointer"
              >
                {templateArrow ? (
                  <img src={Down} className="w-5 h-5" />
                ) : (
                  <FaAngleUp className="text-gray-400" />
                )}
              </div>
            </NavLink>
          </div>

          {/* Submenu */}
          <div
            className={`ml-4 overflow-hidden transition-all duration-300 ease-in-out ${templateOpen ? "max-h-40" : "max-h-0"
              }`}
          >
            <ul className="mt-2 pl-4 space-y-2 border-l border-[#905CC1]/30">
              <li>
                <NavLink
                  to="/Layout-Hub/Library"
                  className={({ isActive }) =>
                    `flex items-center gap-3 p-2 rounded-xl transition-all duration-200 ${isActive
                      ? "bg-[#905CC1] text-white"
                      : "text-[#59565C] hover:bg-[#F4F0FA]"
                    }`
                  }
                >
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <FaHistory className="text-[#905CC1] text-sm" />
                  </div>
                  <span className="text-sm whitespace-nowrap">Template History</span>
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Send */}
          {/* Send Menu */}
          <div className="flex items-center justify-between">
            <NavLink
              to="/Send-Message"
              className={({ isActive }) =>
                `flex items-center justify-between p-3 rounded-2xl w-full transition-all ${isActive ? "bg-[#905CC1] text-white" : "text-[#59565C] hover:bg-[#F4F0FA]"}`
              }
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white flex items-center justify-center rounded-full shadow-sm">
                  <img src={Send} alt="Send" className="w-5 h-5" />
                </div>
                <p className=" font-medium">Send</p>
              </div>

              <div
                onClick={(e) => {
                  e.preventDefault();
                  setSendOpen(!sendOpen);
                  setsendArrow(!sendArrow);
                }}
                className="cursor-pointer"
              >
                {sendArrow ? (
                  <img src={Down} className="w-5 h-5" />
                ) : (
                  <FaAngleUp className="text-gray-400" />
                )}
              </div>
            </NavLink>
          </div>

          {/* Send Submenu */}
          <div
            className={`ml-4 overflow-hidden transition-all duration-300 ease-in-out ${sendOpen ? "max-h-40" : "max-h-0"
              }`}
          >
            <ul className="mt-2 pl-4 space-y-2 border-l border-[#905CC1]/30">
              <li>
                <NavLink
                  to="/Send-Message/Individual"
                  className={({ isActive }) =>
                    `flex items-center gap-3 p-2 rounded-xl transition-all duration-200 ${isActive
                      ? "bg-[#905CC1] text-white"
                      : "text-[#59565C] hover:bg-[#F4F0FA]"}`
                  }
                >
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <LuMessageCircleMore className="text-[#905CC1]" size={20} />
                  </div>
                  <span className="text-sm ">Single Send Message</span>
                </NavLink>
              </li>
            </ul>
          </div>


          {/* Live Chat */}
          <NavLink
            to="/Realtime-chat"
            className={({ isActive }) =>
              `flex items-center gap-4 p-2 rounded-3xl transition cursor-pointer ${isActive ? "bg-[#905CC1] text-white" : "text-[#59565C]"
              }`
            }
          >
            <div className="w-10 h-10 bg-white flex items-center justify-center rounded-full shadow-sm">
              <img src={Live} alt="Live Chat" className="w-5 h-5" />
            </div>
            <p>Live Chat</p>
          </NavLink>

          {/* Contacts */}
          <NavLink
            to="/Connections"
            className={({ isActive }) =>
              `flex items-center gap-4 p-2 rounded-3xl transition cursor-pointer ${isActive ? "bg-[#905CC1] text-white" : "text-[#59565C]"
              }`
            }
          >
            <div className="w-10 h-10 bg-white flex items-center justify-center rounded-full shadow-sm">
              <img src={Phone} alt="Contacts" className="w-5 h-5" />
            </div>
            <p>Contacts</p>
          </NavLink>

          {/* Report */}
          <NavLink
            to="/Analytics"
            className={({ isActive }) =>
              `flex items-center gap-4 p-2 rounded-3xl transition cursor-pointer ${isActive ? "bg-[#905CC1] text-white" : "text-[#59565C]"
              }`
            }
          >
            <div className="w-10 h-10 bg-white flex items-center justify-center rounded-full shadow-sm">
              <img src={Report} alt="Report" className="w-5 h-5" />
            </div>
            <p>Report</p>
          </NavLink>

          {/* Support */}
          <div className="flex items-center justify-between">
            <NavLink
              to="/support"
              className={({ isActive }) =>
                `flex items-center justify-between p-3 rounded-2xl w-full transition-all ${isActive ? "bg-[#905CC1] text-white" : "text-[#59565C] hover:bg-[#F4F0FA]"
                }`
              }
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white flex items-center justify-center rounded-full shadow-sm">
                  <img src={Support} alt="Support" className="w-5 h-5" />
                </div>
                <p className=" font-medium">Support</p>
              </div>

              <div
                onClick={(e) => {
                  e.preventDefault();
                  setSupportOpen(!supportOpen);
                  setSupportArrow(!supportArrow);
                }}
                className="cursor-pointer"
              >
                {supportArrow ? (
                  <img src={Down} className="w-5 h-5" />
                ) : (
                  <FaAngleUp className="text-gray-400" />
                )}
              </div>
            </NavLink>
          </div>

          {/* Submenu */}
          <div
            className={`ml-4 overflow-hidden transition-all duration-300 ease-in-out ${supportOpen ? "max-h-40" : "max-h-0"
              }`}
          >
            <ul className="mt-2 pl-4 space-y-2 border-l border-[#905CC1]/30">
              <li>
                <NavLink
                  to="/support/ticket"
                  className={({ isActive }) =>
                    `flex items-center gap-3 p-2 rounded-xl transition-all duration-200 ${isActive
                      ? "bg-[#905CC1] text-white"
                      : "text-[#59565C] hover:bg-[#F4F0FA]"
                    }`
                  }
                >
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <MdOutlineContactSupport className="text-[#905CC1] text-sm" />
                  </div>
                  <span className="text-sm whitespace-nowrap">Support / Ticket</span>
                </NavLink>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Chatbot */}
      <div className="mt-0" onClick={()=> navigate('/Chatbot')}>
        <img src={chatbot} alt="Chatbot" />
      </div>
    </div>
  );
}
