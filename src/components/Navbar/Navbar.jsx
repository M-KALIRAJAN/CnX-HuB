// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import Bell from "../../assets/Bell.svg";
// import User from "../../assets/User.svg";
// import Down from "../../assets/Down.svg";
// import { FaAngleUp } from "react-icons/fa6";
// import { useAuth } from "../../context/AuthContext";

// export default function Navbar() {
//   const { name } = useAuth();
//   const {logout} = useAuth();
//   const location = useLocation();
//   const navigate = useNavigate();
//   const routeTitles = {
//     "/dashboard": "Dashboard",
//     "/contacts": "Contacts",
//     "/contacts/uploadcontact": "Upload Contacts",
//     "/template": "Create Template",
//     "/template/history": "Template Library",
//     "/send": "Bulk Message",
//     "/send/singlemessage": "Single Message",
//     "/live": "Live Chat",
//     "/report": "Report",
//     "/support": "Support",
//     "/support/ticket": "Support Ticket",
//   };

//   const title = routeTitles[location.pathname] || "Welcome";
//   const [arrow, setArrow] = useState(false);
 

//   const HandleNotification = () => {
//      navigate("/Realtime-chat");
//   };
//   return (
//     <div className="h-[48px] m-5 relative">
//       <div className="flex justify-between items-center">
//         <div>
//           <h2 className="font-bold text-[22px]">{title}</h2>
//         </div>
//         <div className="flex justify-center items-center gap-5 relative">
//           <div
//             className="h-[39px] w-[39px] rounded-full sidebar flex justify-center items-center cursor-pointer"
//             onClick={HandleNotification}
//           >
//             <img src={Bell} alt="Notifications" />
//           </div>

//           <div className="border border-gray-200 gap-2.5 h-[45px] min-w-[155px] px-2 rounded-3xl flex items-center relative cursor-pointer">
           
//             <div className="h-[39px] w-[39px] rounded-full sidebar flex justify-center items-center shrink-0">
//               <img src={User} alt="User" />
//             </div>

       
//             <p
//               className="text-[#905CC1] text-sm max-w-[100px] truncate font-bold"
//               title={name}
//             >
//               {name}
//             </p>

          
//             <div className="ml-auto" onClick={() => setArrow(!arrow)}>
//               {arrow ? (
//                 <img src={Down} alt="Dropdown" height={18} width={18} />
//               ) : (
//                 <FaAngleUp className="text-gray-400" />
//               )}
//             </div>

           
//             {arrow && (
//               <div className="absolute top-[55px] right-0 z-50 w-[160px] bg-white border border-gray-200 rounded-lg shadow-md py-2">
//                 <p className="px-4 py-2 hover:bg-gray-100 text-sm cursor-pointer">
//                   Profile
//                 </p>
//                 <p
//                   className="px-4 py-2 hover:bg-gray-100 text-sm cursor-pointer text-red-500"
//                   onClick={() => {

//                     logout();
//                     window.location.href = "/";
//                   }}
//                 >
//                   Logout
//                 </p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Bell from "../../assets/Bell.svg";
import User from "../../assets/User.svg";
import Down from "../../assets/Down.svg";
import { FaAngleUp } from "react-icons/fa6";
import { useAuth } from "../../context/AuthContext";
import { motion, AnimatePresence } from "framer-motion";
import Users from "../../assets/user.png";

export default function Navbar() {
  const { name, email, company, phone, updateProfile, logout } = useAuth();
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

  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);

  // Editable profile fields
  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
  });

  // Update profileData whenever auth data changes
  useEffect(() => {
    setProfileData({
      name: name || "",
      email: email || "",
      company: company || "",
      phone: phone || "",
    });
  }, [name, email, company, phone]);

  const handleChange = (key, value) => {
    setProfileData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    updateProfile(profileData);
    setShowProfileModal(false);
  };

  const handleNotification = () => navigate("/Realtime-chat");

  return (
    <div className="h-[48px] m-5 relative">
      {/* Navbar */}
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-[22px]">{title}</h2>

        <div className="flex justify-center items-center gap-5 relative">
          <div
            className="h-[39px] w-[39px] rounded-full flex justify-center items-center cursor-pointer bg-gray-100 hover:bg-gray-200 transition"
            onClick={handleNotification}
          >
            <img src={Bell} alt="Notifications" />
          </div>

          <div className="border border-gray-200 gap-2.5 h-[45px] min-w-[155px] px-2 rounded-3xl flex items-center relative cursor-pointer">
            <div className="h-[39px] w-[39px] rounded-full flex justify-center items-center shrink-0 bg-gray-100">
              <img src={User} alt="User" />
            </div>

            <p
              className="text-[#905CC1] text-sm max-w-[100px] truncate font-bold"
              title={name}
            >
              {name || "User"}
            </p>

            <div
              className="ml-auto"
              onClick={() => setShowProfileDropdown(!showProfileDropdown)}
            >
              {showProfileDropdown ? (
                <img src={Down} alt="Dropdown" height={18} width={18} />
              ) : (
                <FaAngleUp className="text-gray-400" />
              )}
            </div>

            {showProfileDropdown && (
              <div className="absolute top-[55px] right-0 z-50 w-[160px] bg-white border border-gray-200 rounded-lg shadow-md py-2">
                <p
                  className="px-4 py-2 hover:bg-gray-100 text-sm cursor-pointer"
                  onClick={() => {
                    setShowProfileModal(true);
                    setShowProfileDropdown(false);
                  }}
                >
                  Profile
                </p>
                <p
                  className="px-4 py-2 hover:bg-gray-100 text-sm cursor-pointer text-red-500"
                  onClick={() => {
                    logout();
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


{/* Profile Modal */}
<AnimatePresence>
  {showProfileModal && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex justify-center items-center z-50"
    >
      {/* Light transparent overlay */}
      <div className="absolute inset-0  bg-opacity-30 backdrop-blur-sm"></div>

      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        className="relative bg-white rounded-3xl shadow-2xl w-[90%] max-w-[700px] h-[600px] md:h-[550px] sm:h-[500px] p-6 md:p-8 overflow-y-auto no-scrollbar"
      >
        {/* Header */}
        <div className="flex flex-col items-center mb-6">
          <img
            src={Users}
            className="h-28 w-28 rounded-full object-cover border-2 border-gray-200 mb-3"
            alt="User"
          />
          <h3 className="text-2xl font-bold text-gray-800 text-center">
            {profileData.name || "Your Name"}
          </h3>
          <p className="text-gray-500 text-sm text-center">
            {profileData.email || "Your email"}
          </p>
        </div>

        {/* Form: responsive grid */}
        <div className="grid grid-cols-2 md:grid-cols-1 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              value={profileData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              placeholder="Enter full name"
              className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#905CC1] transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={profileData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="Enter email"
              className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#905CC1] transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Company Name
            </label>
            <input
              type="text"
              value={profileData.company}
              onChange={(e) => handleChange("company", e.target.value)}
              placeholder="Enter company name"
              className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#905CC1] transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Website / Social Link (Optional)
            </label>
            <input
              type="text"
              onChange={(e) => handleChange("company", e.target.value)}
              placeholder="Enter website or social link"
              className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#905CC1] transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Location
            </label>
            <input
              type="text"
              onChange={(e) => handleChange("company", e.target.value)}
              placeholder="Enter location"
              className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#905CC1] transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone
            </label>
            <input
              type="text"
              value={profileData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              placeholder="Enter phone number"
              className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#905CC1] transition"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 flex flex-col gap-3">
          <button
            className="w-full h-12 bg-[#905CC1] text-white font-semibold rounded-xl hover:bg-[#7a3fb8] transition"
            onClick={handleSave}
          >
            Save Changes
          </button>
          <button
            className="w-full h-12 border border-gray-300 rounded-xl hover:bg-gray-100 transition"
            onClick={() => setShowProfileModal(false)}
          >
            Cancel
          </button>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>



    </div>
  );
}


