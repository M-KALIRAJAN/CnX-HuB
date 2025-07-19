import React, { useState } from "react";
import Inputs from "../../utils/Inputs";
import Apple from "../../assets/Apple.svg";
import Fb from "../../assets/Fb.svg";
import Google from "../../assets/Google.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { OTP } from "../../api/ApiServices";
export default function Otp() {
  const location = useLocation();
  const navigate = useNavigate();
  const phone = location.state?.phone;

  console.log("*************************", phone);
  const [otp, setOtp] = useState("");
  const handleOtp = async (e) => {
    e.preventDefault();
    try {
      const payload = { phone, otp };
      console.log("*********", payload);

      const data = await OTP(payload);
      console.log("OTP Verified:", data);

      if (data?.status === "verified") {
        localStorage.setItem("name", data.data.name);
        localStorage.setItem("user_id", data.data.user_id);

        console.log("user_id***********", data.data.user_id);

        navigate("/dashboard");
      } else {
        console.log("OTP verification failed:", data.message);
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div className="flex  gap-5 justify-around items-center min-h-screen bg-gray-100 px-4">
      {/* Left Panel */}
      <div className="hidden md:block w-[756px] h-[600px] bg-[#FBF6FF] rounded-2xl flex justify-center items-center"></div>

      {/* Right Panel - Login */}
      <div className="p-6 rounded-2xl bg-white w-full max-w-sm shadow-md">
        <form onSubmit={handleOtp}>
          <h2 className="text-[18px] font-bold mb-6 text-center">Welcome!</h2>

          {/* <Inputs
           label="Number"
           name="phone"
           type="phone"
           placeholder="Enter the number"
           value={number}
           onChange={setNumber}
         /> */}

          <Inputs
            label="OTP"
            name="OTP"
            type="OTP"
            placeholder="Enter the OTP"
            value={otp}
            onChange={setOtp}
          />

          <div className="w-full text-right mb-2">
            <p className="text-sm text-[#905CC1] hover:underline cursor-pointer font-medium">
              Forgot Password?
            </p>
          </div>

          <button
            type="submit"
            className="w-full h-[45px] text-white bg-[#905CC1] rounded-sm hover:bg-[#7a3fb8] transition"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-gray-500 text-sm">or continue with</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-5">
          <div className="w-[60px] h-[45px] bg-white rounded-sm shadow-xl flex justify-center items-center">
            <img src={Apple} alt="Apple logo" className="w-6 h-6" />
          </div>
          <div className="w-[60px] h-[45px] bg-white rounded-sm shadow-xl flex justify-center items-center">
            <img src={Google} alt="Google logo" className="w-6 h-6" />
          </div>
          <div className="w-[60px] h-[45px] bg-white rounded-sm shadow-xl flex justify-center items-center">
            <img src={Fb} alt="Facebook logo" className="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
}
