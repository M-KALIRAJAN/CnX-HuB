import React, { useState } from "react";
import Inputs from "../../utils/Inputs";
import Apple from "../../assets/Apple.svg";
import Fb from "../../assets/Fb.svg";
import Google from "../../assets/Google.svg";
import Loginlogo from "../../assets/login-logo.jpg";
import { useLocation, useNavigate } from "react-router-dom";
import { OTP } from "../../api/ApiServices";
import { debugLog } from "../../utils/debugLog";
import { ToastContainer, toast } from 'react-toastify';
import { motion } from "framer-motion";
import { useAuth } from "../../context/AuthContext";
import logo from "../../assets/cnx_logo.svg";
export default function Otp() {
  const {login} = useAuth()
  const location = useLocation();
  const navigate = useNavigate();
  const phone = location.state?.phone;

  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState(null);
  
 
  const handleOtp = async (e) => {
    e.preventDefault();
    if (otp === "") {
      setOtpError("Field cannot be empty");
    } else if (otp.length < 6) {
      setOtpError("Please enter a valid 6-digit OTP");
      return;
    } else {
      setOtpError("");
    }

    try {
      const payload = { phone, otp };

      const data = await OTP(payload);
 console.log("payload",payload);
 
      if (data?.status === "verified") {
       login(data.data.user_id, data.data.name);

     
        toast.success("Login successful!");
      navigate("/Performance-Hub",);

      } else {
         debugLog("OTP verification failed:", data.message);
setOtpError(data.message)
      }
    } catch (err) {
      debugLog("Error:", err.message);
    }
  };
return (
  <div className="flex flex-col md:flex-row gap-5 justify-around items-center min-h-screen bg-gray-100 px-4 py-10">
    {/* Left Panel */}
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="hidden md:flex md:w-[736px] md:h-[570px] bg-[#FBF6FF] rounded-2xl justify-center items-center"
    >
      <img src={Loginlogo} className="w-full h-auto object-contain p-4" alt="Login" />
    </motion.div>

    {/* Right Panel - Login */}
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="w-full max-w-sm bg-white p-6 rounded-2xl shadow-md"
    >
      <form onSubmit={handleOtp}>
                  <div className="flex justify-center">
               <img src={logo} className=" h-[80px] w-[120px]"/>
                  </div>
        <h2 className="text-[18px] font-bold mb-6 text-center">Welcome!</h2>

        <Inputs
          label="OTP"
          name="OTP"
          type="text"
          placeholder="Enter the OTP"
          value={otp}
          onChange={setOtp}
          externalError={otpError}
        />

        <div className="w-full text-right mb-2">
          <p className="text-sm text-[#905CC1] hover:underline cursor-pointer font-medium">
            Forgot OTP?
          </p>
        </div>

        <button
          type="submit"
          className="w-full h-[45px] text-white bg-[#905CC1] rounded-sm hover:bg-[#7a3fb8] transition"
        >
          Login
        </button>
        <ToastContainer />
      </form>
   <div className="flex justify-center mt-4">
  <p className="text-gray-400 text-sm">
    © {new Date().getFullYear()} Designed by Saras Web Solution
  </p>
</div>
       
      {/* Divider */}
      {/* <div className="flex items-center my-6">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="mx-4 text-gray-500 text-sm">or continue with</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div> */}

      {/* Social Icons */}
      {/* <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex justify-center gap-5"
      >
        {[Apple, Google, Fb].map((icon, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1 }}
            className="w-[60px] h-[45px] bg-white rounded-sm shadow-xl flex justify-center items-center"
          >
            <img src={icon} alt="Social" className="w-6 h-6" />
          </motion.div>
        ))}
      </motion.div> */}
    </motion.div>
  </div>
);

}
