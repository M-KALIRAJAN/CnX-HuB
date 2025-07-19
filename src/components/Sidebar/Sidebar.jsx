import { NavLink } from "react-router-dom";
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

  return (
    <div className="w-full md:w-[250px] h-screen sidebar rounded-3xl m-3 p-6 flex flex-col justify-between bg-white">
      {/* Scrollable content wrapper */}

      <h2 className="text-2xl font-bold mb-10 text-center text-[#59565C] border-[3px] border-dotted">
        SarasCnX
      </h2>
      <div className="flex-1 min-h-0 overflow-y-auto no-scrollbar">
        <div className="flex flex-col gap-3">
          {/* Dashboard */}
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `flex items-center gap-4 p-2 rounded-3xl transition cursor-pointer ${
                isActive ? "bg-[#905CC1] text-white" : "text-[#59565C]"
              }`
            }
          >
            <div className="w-10 h-10 bg-white flex items-center justify-center rounded-full shadow-sm">
              <img src={Dashboard} alt="Live Chat" className="w-5 h-5" />
            </div>
            <p>Dashboard</p>
          </NavLink>

          {/* Template */}
          <div className="flex items-center justify-between">
            <NavLink
              to="/template"
              className={({ isActive }) =>
                `flex items-center gap-4 p-2 rounded-3xl transition cursor-pointer w-full ${
                  isActive ? "bg-[#905CC1] text-white" : "text-[#59565C]"
                }`
              }
            >
              <div className="w-10 h-10 bg-white flex items-center justify-center rounded-full shadow-sm">
                <img src={Template} alt="Template" className="w-5 h-5" />
              </div>
              <p>Template</p>
              <div
                className="ml-7"
                onClick={(e) => {
                  e.preventDefault();
                  setTemplateOpen(!templateOpen);
                  setTemplateArrow(!templateArrow);
                }}
              >
                {templateArrow ? (
                  <img src={Down} className="cursor-pointer w-5 h-5" />
                ) : (
                  <FaAngleUp className="text-gray-400" />
                )}
              </div>
            </NavLink>
          </div>

          <div
            className={`ml-10 overflow-hidden transition-all duration-300 ease-in-out ${
              templateOpen ? "max-h-40 " : "max-h-0"
            }`}
          >
            <ul className="space-y-2 text-sm">
              <li>
                <NavLink
                  to="/template/history"
                  className={({ isActive }) =>
                    `flex items-center gap-3 p-2 rounded-xl transition-all duration-200 ${
                      isActive
                        ? "bg-[#905CC1] text-white"
                        : "text-[#59565C] hover:bg-[#F4F0FA]"
                    }`
                  }
                >
                  <div className=" w-[60] h-[60] bg-white rounded-full p-2">
                    <FaHistory   className="text-[#905CC1]" />
                  </div>
                  Template History
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Send */}
          <div className="flex items-center justify-between">
            <NavLink
              to="/send"
              className={({ isActive }) =>
                `flex items-center gap-4 p-2 rounded-3xl transition cursor-pointer w-full ${
                  isActive ? "bg-[#905CC1] text-white" : "text-[#59565C]"
                }`
              }
            >
              <div className="w-10 h-10 bg-white flex items-center justify-center rounded-full shadow-sm">
                <img src={Send} alt="Send" className="w-5 h-5" />
              </div>
              <p>Send </p>
              <div
                className="ml-7"
                onClick={(e) => {
                  e.preventDefault();
                  setSendOpen(!sendOpen);
                  setsendArrow(!sendArrow);
                }}
              >
                {sendArrow ? (
                  <img src={Down} className="cursor-pointer w-5 h-5" />
                ) : (
                  <FaAngleUp className="text-gray-400" />
                )}
              </div>
            </NavLink>
          </div>

          <div
            className={`ml-10 overflow-hidden transition-all duration-300 ease-in-out ${
              sendOpen ? "max-h-40 " : "max-h-0"
            }`}
          >
            <ul className="space-y-2 text-sm">
              <li>
                <NavLink
                  to="/send/singlemessage"
                  className={({ isActive }) =>
                    `flex items-center gap-3 p-2 rounded-xl transition-all duration-200 ${
                      isActive
                        ? "bg-[#905CC1] text-white"
                        : "text-[#59565C] hover:bg-[#F4F0FA]"
                    }`
                  }
                >
                  <div className=" w-[60] h-[60] bg-white rounded-full p-1">
                    <LuMessageCircleMore   className="text-[#905CC1]" size={22} />
                  </div>
                  Single Send Message
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Live Chat */}
          <NavLink
            to="/live"
            className={({ isActive }) =>
              `flex items-center gap-4 p-2 rounded-3xl transition cursor-pointer ${
                isActive ? "bg-[#905CC1] text-white" : "text-[#59565C]"
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
            to="/contacts"
            className={({ isActive }) =>
              `flex items-center gap-4 p-2 rounded-3xl transition cursor-pointer ${
                isActive ? "bg-[#905CC1] text-white" : "text-[#59565C]"
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
            to="/report"
            className={({ isActive }) =>
              `flex items-center gap-4 p-2 rounded-3xl transition cursor-pointer ${
                isActive ? "bg-[#905CC1] text-white" : "text-[#59565C]"
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
                `flex items-center gap-4 p-2 rounded-3xl transition cursor-pointer w-full ${
                  isActive ? "bg-[#905CC1] text-white" : "text-[#59565C]"
                }`
              }
            >
              <div className="w-10 h-10 bg-white flex items-center justify-center rounded-full shadow-sm">
                <img src={Support} alt="Support" className="w-5 h-5" />
              </div>
              <p>Support</p>
              <div
                className="ml-7"
                onClick={(e) => {
                  e.preventDefault();
                  setSupportOpen(!supportOpen);
                  setSupportArrow(!supportArrow);
                }}
              >
                {supportArrow ? (
                  <img src={Down} className="cursor-pointer w-5 h-5" />
                ) : (
                  <FaAngleUp className="text-gray-400" />
                )}
              </div>
            </NavLink>
          </div>

          <div
            className={`ml-10 overflow-hidden transition-all duration-300 ease-in-out ${
              supportOpen ? "max-h-40 " : "max-h-0"
            }`}
          >
            <ul className="space-y-2 text-sm">
              <li>
                <NavLink
                  to="/support/ticket"
                  className={({ isActive }) =>
                    `flex items-center gap-3 p-2 rounded-xl transition-all duration-200 ${
                      isActive
                        ? "bg-[#905CC1] text-white"
                        : "text-[#59565C] hover:bg-[#F4F0FA]"
                    }`
                  }
                >
                  <div className=" w-[60] h-[60] bg-white rounded-full p-1">
                    <MdOutlineContactSupport
                      className="text-[#905CC1]"
                      size={19}
                    />
                  </div>
                  Support / Ticket
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Chatbot */}
      <div className="mt-0">
        <img src={chatbot} alt="Chatbot" />
      </div>
    </div>
  );
}
