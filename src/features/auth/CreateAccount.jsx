



// import React, { useState } from "react";
// import PhoneInput from "react-phone-input-2";
// import 'react-phone-input-2/lib/style.css';
// import logo from "../../assets/cnx_logo.svg";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import { CreateAccounts, Register } from "../../api/ApiServices";
// import ClipLoader from "react-spinners/ClipLoader"; // Used instead of Oval
// import { ToastContainer, toast } from 'react-toastify';
// import { useAuth } from "../../context/AuthContext";
// export default function CreateAccount() {
//   const navigate = useNavigate();
// const { login } = useAuth();
//   const [formData, setFormData] = useState({
//     fullname: "",
//     email: "",
//     phone: "",
//     password: "",
//     confirm_password: "",
//     business_name: "",
//     website_link: "",
//     business_category: "",
//     location: "",
//     referral_code: "",
//     accept_terms: false,
//   });
//   const [data ,setData] = useState({
//     api:"",
//     bizId:"",
//     numberId:""
//   })

//  const [loading, setLoading] = useState(false);
//   const [errors, setErrors] = useState({});

//   const handleChange = (key, value) => {
//     setFormData((prev) => ({ ...prev, [key]: value }));
//     setData((prev) => ({ ...prev, [key]: value }));
//   };

//   const handleSubmit = async(e) => {
//     e.preventDefault();
//     const newErrors = {};

//   if (!formData.fullname.trim()) newErrors.fullname = "Full Name is required";

//   if (!formData.email.trim()) {
//     newErrors.email = "Email is required";
//   } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//     newErrors.email = "Invalid email format";
//   }

//   if (!formData.phone.trim()) {
//     newErrors.phone = "Phone number is required";
//   } else if (formData.phone.length < 10) {
//     newErrors.phone = "Phone number must be at least 10 digits";
//   }

//   if (!formData.password) {
//     newErrors.password = "Password is required";
//   } else if (formData.password.length < 6) {
//     newErrors.password = "Password must be at least 6 characters";
//   }

//   if (!formData.confirm_password) {
//     newErrors.confirm_password = "Please confirm your password";
//   } else if (formData.confirm_password !== formData.password) {
//  }

//   if (!formData.accept_terms) {
//     newErrors.accept_terms = "You must accept Terms & Conditions";
//   }

//   setErrors(newErrors);

//   if (Object.keys(newErrors).length > 0) return;   newErrors.confirm_password = "Passwords do not match";
//     

//     const submissionData = {
//       ...formData,
//       accept_terms: formData.accept_terms ? "on" : "off",
//     };

//     console.log("Submitted Data:", submissionData);


//    setLoading(true);
//   // try {
//   //   const response = await Register(submissionData);
//   //   console.log("response.data",response.data);

    // if (response?.status === "success") {
    //   const { user_id, name, role } = response.data;
    //    login(user_id, name);
    // console.log("API Response:", response);
    // toast.success("Register successful!");
    //  setFormData({ 
    //     fullname: "",
    //     email: "",
    //     phone: "",
    //     password: "",
    //     confirm_password: "",
    //     business_name: "",
    //     website_link: "",
    //     business_category: "",
    //     location: "",
    //     referral_code: "",
    //     accept_terms: false,
    //   })
    // navigate("/Performance-Hub");
    // }


//   // } catch (error) {
//   //   console.error("Registration failed:", error);
//   // }finally {
//   //     setLoading(false); // Stop loader
//   //   }

//   try {
//   // First API
//   // const res1 = await Register(submissionData);
//   // console.log("Register API:", res1);

//   // Second API
//   const accountdata = {
//     phone: formData.phone,
//     api: data.api,
//     bizId: data.bizId,
//     numberId: data.numberId,
//   };
//   console.log("accountdata",accountdata);

//   const res2 = await CreateAccounts(accountdata);

//   toast.success("Account created successfully!");
//   // navigate("/Performance-Hub");
// } catch (error) {
//   console.error("Error in API calls:", error);
//   toast.error("Something went wrong!");
// } finally {
//   setLoading(false);
// }

//   };

//   return (
//     <div className="flex justify-around items-center min-h-screen bg-gray-100 px-4">
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="px-6 rounded-2xl bg-white w-full max-w-2xl shadow-md m-6"
//       >
//         <form onSubmit={handleSubmit}>
//           <div className="flex justify-center mb-6">
//             <img src={logo} className="h-[80px] w-[120px]" alt="Logo" />
//           </div>

//           <h2 className="text-xl font-bold mb-6 text-center">
//             Register Your Business
//           </h2>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

//             {/* Full Name */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
//               <input
//                 type="text"
//                 value={formData.fullname}
//                 onChange={(e) => handleChange("fullname", e.target.value)}
//                 className={`w-full border ${errors.fullname ? "border-red-500" : "border-gray-300"} bg-gray-50 px-3 py-2 rounded-md text-sm focus:border-[#905CC1] outline-none focus:ring-1 focus:ring-[#905CC1]`}
//                 placeholder="Enter your full name"
//               />
//               {errors.fullname && <p className="text-red-500 text-xs mt-1">{errors.fullname}</p>}
//             </div>

//             {/* Email */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
//               <input
//                 type="email"
//                 value={formData.email}
//                 onChange={(e) => handleChange("email", e.target.value)}
//                 className={`w-full border ${errors.email ? "border-red-500" : "border-gray-300"} bg-gray-50 px-3 py-2 rounded-md text-sm focus:border-[#905CC1] outline-none focus:ring-1 focus:ring-[#905CC1]`}
//                 placeholder="Enter your email"
//               />
//               {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
//             </div>

//             {/* Phone */}
//             <div className="sm:col-span-2">
//               <label className="block text-sm font-medium text-gray-700 mb-2">Mobile Number *</label>
//               <PhoneInput
//                 country={"in"}
//                 value={formData.phone}
//                 onChange={(value) => handleChange("phone", value)}
//                 inputStyle={{ width: "100%" }}
//               />
//               {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
//             </div>

//             {/* Password */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">Password *</label>
//               <input
//                 type="password"
//                 value={formData.password}
//                 onChange={(e) => handleChange("password", e.target.value)}
//                 className={`w-full border ${errors.password ? "border-red-500" : "border-gray-300"} bg-gray-50 px-3 py-2 rounded-md text-sm focus:border-[#905CC1] outline-none focus:ring-1 focus:ring-[#905CC1]`}
//                 placeholder="Enter password"
//               />
//               {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
//             </div>

//             {/* Confirm Password */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password *</label>
//               <input
//                 type="password"
//                 value={formData.confirm_password}
//                 onChange={(e) => handleChange("confirm_password", e.target.value)}
//                 className={`w-full border ${errors.confirm_password ? "border-red-500" : "border-gray-300"} bg-gray-50 px-3 py-2 rounded-md text-sm focus:border-[#905CC1] outline-none focus:ring-1 focus:ring-[#905CC1]`}
//                 placeholder="Confirm password"
//               />
//               {errors.confirm_password && <p className="text-red-500 text-xs mt-1">{errors.confirm_password}</p>}
//             </div>

//             {/* Business Name */}
// <div>
//   <label className="block text-sm font-medium text-gray-700 mb-2">Business Name / Company (Optional)</label>
//   <input
//     type="text"
//     value={formData.business_name}
//     onChange={(e) => handleChange("business_name", e.target.value)}
//     className="w-full border border-gray-300 bg-gray-50 px-3 py-2 rounded-md text-sm focus:border-[#905CC1] outline-none focus:ring-1 focus:ring-[#905CC1]"
//     placeholder="Company name"
//   />
// </div>

// {/* Website Link */}
// <div>
//   <label className="block text-sm font-medium text-gray-700 mb-2">Website / Social Link (Optional)</label>
//   <input
//     type="url"
//     value={formData.website_link}
//     onChange={(e) => handleChange("website_link", e.target.value)}
//     className="w-full border border-gray-300 bg-gray-50 px-3 py-2 rounded-md text-sm focus:border-[#905CC1] outline-none focus:ring-1 focus:ring-[#905CC1]"
//     placeholder="https://example.com"
//   />
// </div>

// {/* Business Category */}
// <div>
//   <label className="block text-sm font-medium text-gray-700 mb-2">Business Category</label>
//   <select
//     value={formData.business_category}
//     onChange={(e) => handleChange("business_category", e.target.value)}
//     className="w-full border border-gray-300 bg-gray-50 px-3 py-2 rounded-md text-sm focus:border-[#905CC1] outline-none focus:ring-1 focus:ring-[#905CC1]"
//   >
//     <option value="">Select category</option>
//     <option value="Retail">Retail</option>
//     <option value="Education">Education</option>
//     <option value="Healthcare">Healthcare</option>
//     <option value="Manufacturing">Manufacturing</option>
//     <option value="Others">Others</option>
//   </select>
// </div>
// /            {/* Location */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
//               <input
//                 type="text"
//                 value={formData.location}
//                 onChange={(e) => handleChange("location", e.target.value)}
//                 className="w-full border border-gray-300 bg-gray-50 px-3 py-2 rounded-md text-sm focus:border-[#905CC1] outline-none focus:ring-1 focus:ring-[#905CC1]"
//                 placeholder="Country, State, City"
//               />
//             </div>

//             {/* Optional values */}
//               <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">WhatsApp Api(Optional)</label>
//               <input
//                 type="text"
//                 value={data.api}
//                 onChange={(e) => handleChange("api", e.target.value)}
//                 className="w-full border border-gray-300 bg-gray-50 px-3 py-2 rounded-md text-sm focus:border-[#905CC1] outline-none focus:ring-1 focus:ring-[#905CC1]"
//                 placeholder="Enter WhatsApp Api"
//               />
//             </div>
//               <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">WhatApp Business Number(Optional)</label>
//               <input
//                 type="text"
//                 value={data.bizId}
//                 onChange={(e) => handleChange("bizId", e.target.value)}
//                 className="w-full border border-gray-300 bg-gray-50 px-3 py-2 rounded-md text-sm focus:border-[#905CC1] outline-none focus:ring-1 focus:ring-[#905CC1]"
//                 placeholder="Enter WhatsApp Business Number"
//               />
//             </div>

//  {/* Referral Code */}
// <div className="sm:col-span-2">
//   <label className="block text-sm font-medium text-gray-700 mb-2">Referral Code (Optional)</label>
//   <input
//     type="text"
//     value={formData.referral_code}
//     onChange={(e) => handleChange("referral_code", e.target.value)}
//     className="w-full border border-gray-300 bg-gray-50 px-3 py-2 rounded-md text-sm focus:border-[#905CC1] outline-none focus:ring-1 focus:ring-[#905CC1]"
//     placeholder="Enter referral code"
//   />
// </div>
//               <div className="sm:col-span-2">
//               <label className="block text-sm font-medium text-gray-700 mb-2">Number ID (Optional) </label>
//               <input
//                 type="text"
//                 value={data.numberId}
//                 onChange={(e) => handleChange("numberId", e.target.value)}
//                 className="w-full border border-gray-300 bg-gray-50 px-3 py-2 rounded-md text-sm focus:border-[#905CC1] outline-none focus:ring-1 focus:ring-[#905CC1]"
//                 placeholder="Enter Number ID"
//               />
//             </div>

// {/* Terms & Conditions */}
// <div className="sm:col-span-2 flex items-start mt-2">
//   <input
//     type="checkbox"
//     checked={formData.accept_terms}
//     onChange={(e) => handleChange("accept_terms", e.target.checked)}
//     className="mt-1 mr-2"
//   />
//   <label className="text-sm text-gray-700">
//     I agree to the{" "}
//     <a href="" className="text-blue-600 underline">Terms & Conditions</a>{" "}
//     and{" "}
//     <a href="" className="text-blue-600 underline">Privacy Policy</a>
//   </label>
// </div>
// {errors.accept_terms && <p className="text-red-500 text-xs mt-1">{errors.accept_terms}</p>}

//             {/* Submit Button */}
//             <div className="sm:col-span-2 mt-4">
//               <button
//                 type="submit"
//                 className="w-full h-11 bg-[#905CC1] text-white rounded-md hover:bg-[#7a3fb8] transition"
//               >
//                  {loading ? (
//               <ClipLoader size={24} color="#fff" />
//               ):(
//             "Register Now"
//           )}
//               </button>
//                 <ToastContainer />
//             </div>
//           </div>

//           <p
//             className="text-sm text-center mt-4 text-[#905CC1] font-medium cursor-pointer hover:underline mb-5"
//             onClick={() => navigate("/")}
//           >
//             Already have an account? Login
//           </p>
//         </form>
//       </motion.div>
//     </div>
//   );
// }









import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import logo from "../../assets/cnx_logo.svg";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { CreateAccounts, Register } from "../../api/ApiServices";
import ClipLoader from "react-spinners/ClipLoader";
import { ToastContainer, toast } from "react-toastify";
import { useAuth } from "../../context/AuthContext";

export default function CreateAccount() {
  const navigate = useNavigate();
  const { login } = useAuth();
const [registeredUser, setRegisteredUser] = useState(null);
  // step control
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    password: "",
    confirm_password: "",
    business_name: "",
    website_link: "",
    business_category: "",
    location: "",
    referral_code: "",
    accept_terms: false,
  });

  const [data, setData] = useState({
    api: "",
    bizId: "",
    numberId: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  // handle form changes
  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  // handle account data changes (step 2)
  const handleAccountChange = (key, value) => {
    setData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    setLoading(true);

    // Validation only for step 1
    if (step === 1) {
      if (!formData.fullname.trim())
        newErrors.fullname = "Full Name is required";

      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = "Invalid email format";
      }

      if (!formData.phone.trim()) {
        newErrors.phone = "Phone number is required";
      } else if (formData.phone.length < 10) {
        newErrors.phone = "Phone number must be at least 10 digits";
      }

      if (!formData.password) {
        newErrors.password = "Password is required";
      } else if (formData.password.length < 6) {
        newErrors.password = "Password must be at least 6 characters";
      }

      if (!formData.confirm_password) {
        newErrors.confirm_password = "Please confirm your password";
      } else if (formData.confirm_password !== formData.password) {
        newErrors.confirm_password = "Passwords do not match";
      }

      if (!formData.accept_terms) {
        newErrors.accept_terms = "You must accept Terms & Conditions";
      }

      setErrors(newErrors);
      if (Object.keys(newErrors).length > 0) {
        setLoading(false);
        return;
      }
    }

    try {
      if (step === 1) {
        // ✅ Register API call
        const submissionData = {
          ...formData,
          accept_terms: formData.accept_terms ? "on" : "off",
        };

        const res1 = await Register(submissionData);
        console.log("Register API:", res1);

        if (res1?.status === "success") {
          const { user_id, name } = res1.data || {};
          // login(user_id, name);
setRegisteredUser({ user_id, name });
setData((prev) => ({ ...prev, phone: formData.phone }));
          toast.success("Register successful!");

          setFormData({
            fullname: "",
            email: "",
            phone: "",
            password: "",
            confirm_password: "",
            business_name: "",
            website_link: "",
            business_category: "",
            location: "",
            referral_code: "",
            accept_terms: false,
          });

          setStep(2); // move to step 2
        } else {
          toast.error(res1?.message || "Registration failed!");
        }
      } else if (step === 2) {
        console.log(" formData.phone", formData.phone);
        
        const accountData = {
          phone: data.phone,
          api: data.api,
          bizId: data.bizId,
          numberId: data.numberId,
        };

        const res2 = await CreateAccounts(accountData);
        console.log("CreateAccounts API:", res2);

        if (res2?.status === "success") {
               
        if (registeredUser) {
          login(registeredUser.user_id, registeredUser.name);
        }
          toast.success("Account created successfully!");
          navigate("/Performance-Hub");
        } else {
          toast.error(res2?.message || "Account creation failed!");
        }
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-around items-center min-h-screen bg-gray-100 px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="px-6 rounded-2xl bg-white w-full max-w-2xl shadow-md m-6"
      >
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center mb-6">
            <img src={logo} className="h-[80px] w-[120px]" alt="Logo" />
          </div>

          <h2 className="text-xl font-bold mb-6 text-center">
            {step === 1 ? "Register Your Business" : "Enter WhatsApp Details"}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* ✅ STEP 1 */}
            {step === 1 && (
              <>
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.fullname}
                    onChange={(e) => handleChange("fullname", e.target.value)}
                    className="w-full border border-gray-300 px-3 py-2 rounded-md border_style"
                    placeholder="Enter your full name"
                  />
                  {errors.fullname && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.fullname}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className="w-full border border-gray-300 px-3 py-2 rounded-md border_style"
                    placeholder="Enter your email"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Phone */}
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mobile Number *
                  </label>
                  <PhoneInput
                    country={"in"}
                    value={formData.phone}
                    onChange={(value) => handleChange("phone", value)}
                    inputStyle={{ width: "100%" }}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                  )}
                </div>

                {/* Password */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password *
                  </label>
                  <input
                    type="password"
                    value={formData.password}
                    onChange={(e) => handleChange("password", e.target.value)}
                    className="w-full border border-gray-300 px-3 py-2 rounded-md border_style"
                    placeholder="Enter password"
                  />
                  {errors.password && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.password}
                    </p>
                  )}
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Confirm Password *
                  </label>
                  <input
                    type="password"
                    value={formData.confirm_password}
                    onChange={(e) =>
                      handleChange("confirm_password", e.target.value)
                    }
                    className="w-full border border-gray-300 px-3 py-2 rounded-md border_style"
                    placeholder="Confirm password"
                  />
                  {errors.confirm_password && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.confirm_password}
                    </p>
                  )}
                </div>

                {/* Business Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Business Name / Company (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.business_name}
                    onChange={(e) =>
                      handleChange("business_name", e.target.value)
                    }
                    className="w-full border border-gray-300 px-3 py-2 rounded-md border_style"
                    placeholder="Company name"
                  />
                </div>

                {/* Website */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Website / Social Link (Optional)
                  </label>
                  <input
                    type="url"
                    value={formData.website_link}
                    onChange={(e) =>
                      handleChange("website_link", e.target.value)
                    }
                    className="w-full border border-gray-300 px-3 py-2 rounded-md border_style"
                    placeholder="https://example.com"
                  />
                </div>

                {/* Business Category */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Business Category
                  </label>
                  <select
                    value={formData.business_category}
                    onChange={(e) =>
                      handleChange("business_category", e.target.value)
                    }
                    className="w-full border border-gray-300 px-3 py-2 rounded-md border_style"
                  >
                    <option value="">Select category</option>
                    <option value="Retail">Retail</option>
                    <option value="Education">Education</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Manufacturing">Manufacturing</option>
                    <option value="Others">Others</option>
                  </select>
                </div>

                {/* Location */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => handleChange("location", e.target.value)}
                    className="w-full border border-gray-300 px-3 py-2 rounded-md border_style"
                    placeholder="Country, State, City"
                  />
                </div>

                {/* Referral */}
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Referral Code (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.referral_code}
                    onChange={(e) =>
                      handleChange("referral_code", e.target.value)
                    }
                    className="w-full border border-gray-300 px-3 py-2 rounded-md border_style"
                    placeholder="Enter referral code"
                  />
                </div>

                {/* Terms */}
                <div className="sm:col-span-2 flex items-start mt-2">
                  <input
                    type="checkbox"
                    checked={formData.accept_terms}
                    onChange={(e) => handleChange("accept_terms", e.target.checked)}
                    className="mt-1 mr-2"
                  />
                  <label className="text-sm text-gray-700">
                    I agree to the{" "}
                    <a href="#" className="text-blue-600 underline">
                      Terms & Conditions
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-blue-600 underline">
                      Privacy Policy
                    </a>
                  </label>
                </div>
                {errors.accept_terms && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.accept_terms}
                  </p>
                )}
              </>
            )}

            {/* ✅ STEP 2 */}
            {step === 2 && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    WhatsApp API (Optional)
                  </label>
                  <input
                    type="text"
                    value={data.api}
                    onChange={(e) => handleAccountChange("api", e.target.value)}
                    className="w-full border border-gray-300 px-3 py-2 rounded-md border_style"
                    placeholder="Enter WhatsApp API"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    WhatsApp Business Number (Optional)
                  </label>
                  <input
                    type="text"
                    value={data.bizId}
                    onChange={(e) => handleAccountChange("bizId", e.target.value)}
                    className="w-full border border-gray-300 px-3 py-2 rounded-md border_style"
                    placeholder="Enter Business Number"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number ID (Optional)
                  </label>
                  <input
                    type="text"
                    value={data.numberId}
                    onChange={(e) =>
                      handleAccountChange("numberId", e.target.value)
                    }
                    className="w-full border border-gray-300 px-3 py-2 rounded-md border_style"
                    placeholder="Enter Number ID"
                  />
                </div>
              </>
            )}

            {/* Submit button */}
            <div className="sm:col-span-2 mt-4">
              <button
                type="submit"
                className="w-full h-11 bg-[#905CC1] text-white rounded-md hover:bg-[#7a3fb8] transition mb-4"
              >
                {loading ? (
                  <ClipLoader size={24} color="#fff" />
                ) : step === 1 ? (
                  "Register Now"
                ) : (
                  "Submit"
                )}
                
              </button>
               {/* {step === 2 && (
                <button
                type="submit"
                className="w-full h-11 bg-[#905CC1] text-white rounded-md hover:bg-[#7a3fb8] transition mb-4"
              >
               
                  Skip Details
             
              </button> )} */}
              <ToastContainer />
            </div>
          </div>

          {step === 1 && (
            <p
              className="text-sm text-center mt-4 text-[#905CC1] font-medium cursor-pointer hover:underline mb-5"
              onClick={() => navigate("/")}
            >
              Already have an account? Login
            </p>
          )}
        </form>
      </motion.div>
    </div>
  );
}
