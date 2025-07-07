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

export default function Sidebar() {
  const [templateOpen, setTemplateOpen] = useState(false);
  const [sendOpen, setSendOpen] = useState(false);
  const [supportOpen, setSupportOpen] = useState(false);

  return (
    <div className="w-[250px] h-screen sidebar rounded-3xl m-3 p-6 flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-bold mb-10 text-center">Madurasoft Panel</h2>
        <div className="flex flex-col gap-4">

          {/* Template */}
          <div>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center gap-4 p-2 rounded-3xl transition cursor-pointer ${
                  isActive ? "bg-[#905CC1] text-white" : "text-[#59565C] "
                }`
              }
            >
              <div className="w-10 h-10 bg-white flex items-center justify-center rounded-full">
                <img src={Template} alt="Template" className="w-5 h-5" />
              </div>
              <p>Template</p>
              <div className="pl-[20px]" onClick={(e) => { e.preventDefault(); setTemplateOpen(!templateOpen); }}>
                <img src={Down} className="cursor-pointer" />
              </div>
            </NavLink>
            {templateOpen && (
              <ul className="ml-14 mt-2 space-y-2 text-sm text-[#59565C]">
                <li>
                  <NavLink to="/template/history" className="block hover:text-[#905CC1]">
                    Template History
                  </NavLink>
                </li>
              </ul>
            )}
          </div>

          {/* Send */}
          <div>
            <NavLink
              to="/send"
              className={({ isActive }) =>
                `flex items-center gap-4 p-2 rounded-3xl transition cursor-pointer ${
                  isActive ? "bg-[#905CC1] text-white" : "text-[#59565C] "
                }`
              }
            >
              <div className="w-10 h-10 bg-white flex items-center justify-center rounded-full">
                <img src={Send} alt="Send" className="w-5 h-5" />
              </div>
              <p>Send WhatsApp</p>
              <div className="pl-[20px]" onClick={(e) => { e.preventDefault(); setSendOpen(!sendOpen); }}>
                <img src={Down} className="cursor-pointer" />
              </div>
            </NavLink>
            {sendOpen && (
              <ul className="ml-14 mt-2 space-y-2 text-sm text-[#59565C]">
                <li>
                  <NavLink to="/send/single" className="block hover:text-[#905CC1]">
                    Single Send Message
                  </NavLink>
                </li>
              </ul>
            )}
          </div>

          {/* Live Chat */}
          <NavLink
            to="/live"
            className={({ isActive }) =>
              `flex items-center gap-4 p-2 rounded-3xl transition cursor-pointer ${
                isActive ? "bg-[#905CC1] text-white" : "text-[#59565C] "
              }`
            }
          >
            <div className="w-10 h-10 bg-white flex items-center justify-center rounded-full">
              <img src={Live} alt="Live Chat" className="w-5 h-5" />
            </div>
            <p>Live Chat</p>
          </NavLink>

          {/* Contacts */}
          <NavLink
            to="/contacts"
            className={({ isActive }) =>
              `flex items-center gap-4 p-2 rounded-3xl transition cursor-pointer ${
                isActive ? "bg-[#905CC1] text-white" : "text-[#59565C] "
              }`
            }
          >
            <div className="w-10 h-10 bg-white flex items-center justify-center rounded-full">
              <img src={Phone} alt="Contacts" className="w-5 h-5" />
            </div>
            <p>Contacts</p>
          </NavLink>

          {/* Report */}
          <NavLink
            to="/report"
            className={({ isActive }) =>
              `flex items-center gap-4 p-2 rounded-3xl transition cursor-pointer ${
                isActive ? "bg-[#905CC1] text-white" : "text-[#59565C] "
              }`
            }
          >
            <div className="w-10 h-10 bg-white flex items-center justify-center rounded-full">
              <img src={Report} alt="Report" className="w-5 h-5" />
            </div>
            <p>Report</p>
          </NavLink>

          {/* Support */}
          <div>
            <NavLink
              to="/support"
              className={({ isActive }) =>
                `flex items-center gap-4 p-2 rounded-3xl transition cursor-pointer ${
                  isActive ? "bg-[#905CC1] text-white" : "text-[#59565C] "
                }`
              }
            >
              <div className="w-10 h-10 bg-white flex items-center justify-center rounded-full">
                <img src={Support} alt="Support" className="w-5 h-5" />
              </div>
              <p>Support</p>
              <div className="pl-[20px]" onClick={(e) => { e.preventDefault(); setSupportOpen(!supportOpen); }}>
                <img src={Down} className="cursor-pointer" />
              </div>
            </NavLink>
            {supportOpen && (
              <ul className="ml-14 mt-2 space-y-2 text-sm text-[#59565C]">
                <li>
                  <NavLink to="/support/ticket" className="block hover:text-[#905CC1]">
                    Support / Ticket
                  </NavLink>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div>
        <img src={chatbot} alt="Chatbot" />
      </div>
    </div>
  );
}
