import React, { useState } from "react";
import Inputs from "../../utils/Inputs";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { CreateAccounts, login, OTP, Register } from "../../api/ApiServices";
import { debugLog } from "../../utils/debugLog";

export default function CreateAccount() {
  const [fullname, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [VerifyOtp, setVerifyOtp] = useState(false);
  const [api, setWhatsappApi] = useState("");
  const [bizId, setBusinessId] = useState("");
  const [numberId, setNumberId] = useState("");

  const navigate = useNavigate();

  const sendOtpApi = async () => {
    try {
      const res = await Register(fullname,email,phone);
      console.log(res);
    } catch (e) {
      console.log(e.message);
    }
  }; 

  const handleOtpVerification = async () =>{

    try{
        const payload = { phone, otp };
       const res = await OTP(payload);
       setVerifyOtp(true)
       console.log(res);

    }catch(e){
       console.log(e.message);   
    }
  }

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!showOtpInput) {
      await sendOtpApi();
      setShowOtpInput(true);
      return;
    }

    await handleOtpVerification();

    const accountdata = {
      phone,
      api,
      bizId,
      numberId,
    };
    try {
      const res = await CreateAccounts(accountdata);

      navigate("/dashboard")
    } catch (e) {
      debugLog("Account create error:", e.message);
    }
  };

  const GoToLogin = () => {
    navigate("/");
  };

  return (
    <div className="flex gap-5 justify-around items-center min-h-screen bg-gray-100 px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="p-6 rounded-2xl bg-white w-full max-w-2xl shadow-md"
      >
        <form onSubmit={handleLogin}>
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[18px] font-bold mb-6 text-center"
          >
            Create Your Business Account
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {[
              // inputs rendered with map-style syntax for animation
              {
                label: "Full Name",
                value: fullname,
                onChange: setName,
                type: "text",
                name: "name",
                placeholder: "Enter your name",
              },
              {
                label: "Email",
                value: email,
                onChange: setEmail,
                type: "email",
                name: "email",
                placeholder: "Enter your email",
              },
              {
                label: "Phone Number",
                value: phone,
                onChange: setPhone,
                type: "tel",
                name: "phone",
                placeholder: "Enter your phone",
              },
            ].map((input, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Inputs {...input} />
              </motion.div>
            ))}

            {showOtpInput && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Inputs
                  label="OTP"
                  name="otp"
                  type="text"
                  placeholder="Enter the OTP"
                  value={otp}
                  onChange={setOtp}
                />
              </motion.div>
            )}

            {VerifyOtp && (
              <>
                {[
                  // Optional WhatsApp fields
                  {
                    label: "WhatsApp API (Optional)",
                    value: api,
                    onChange: setWhatsappApi,
                    type: "text",
                    name: "whatsappApi",
                    placeholder: "Enter WhatsApp API",
                  },
                  {
                    label: "WhatsApp Business ID (Optional)",
                    value: bizId,
                    onChange: setBusinessId,
                    type: "text",
                    name: "businessId",
                    placeholder: "Enter WhatsApp Business ID",
                  },
                  {
                    label: "Number ID (Optional)",
                    value: numberId,
                    onChange: setNumberId,
                    type: "text",
                    name: "numberId",
                    placeholder: "Enter Number ID",
                  },
                ].map((input, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                  >
                    <Inputs {...input} />
                  </motion.div>
                ))}
              </>
            )}
          </motion.div>

          <motion.button
            type="submit"
            className="w-full h-[45px] text-white bg-[#905CC1] rounded-sm hover:bg-[#7a3fb8] transition mt-5"
            whileTap={{ scale: 0.98 }}
            whileHover={{ scale: 1.02 }}
          >
            {VerifyOtp ? "Submit" : showOtpInput ? "Verify OTP" : "Send OTP"}
          </motion.button>

          <motion.div
            className="w-full text-center mb-2 mt-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <p
              className="text-sm text-[#905CC1] hover:underline cursor-pointer font-medium"
              onClick={GoToLogin}
            >
              <span>Already have an account?</span> Login
            </p>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
}
