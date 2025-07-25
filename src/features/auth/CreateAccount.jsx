import React, { useState } from "react";
import Inputs from "../../utils/Inputs";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { CreateAccounts, login, OTP, Register } from "../../api/ApiServices";
import { debugLog } from "../../utils/debugLog";
import logo from "../../assets/cnx_logo.svg";

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
  const [errors, setErrors] = useState({});
  const [successotp, setSuccessOtp] = useState(false);
  const navigate = useNavigate();

  const validateFields = () => {
    const newErrors = {};

    if (!fullname.trim()) newErrors.fullname = "Full Name is required";
    if (!email.trim()) newErrors.email = "Email is required";
    else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) newErrors.email = "Invalid email format";
    if (!phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(phone)) newErrors.phone = "Phone must be 10 digits";

    if (showOtpInput && otp.trim().length !== 6) newErrors.otp = "OTP must be 6 digits";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const sendOtpApi = async () => {
    try {
      const res = await Register(fullname, email, phone);
      if (res.status == "otp_sent") {
        setSuccessOtp(true);
        setShowOtpInput(true); 
        setErrors((prev) => ({ ...prev, phone: "" }));
      } else if (res.status == "exists") {
        setSuccessOtp(false);
        setShowOtpInput(false); 
        setErrors((prev) => ({
          ...prev,
          phone: res.message || "Mobile number is already registered"
        }));
      }
      console.log(res);
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleOtpVerification = async () => {
    try {
      const payload = { phone, otp };
      const res = await OTP(payload);
      if (res?.status === "verified") {
        console.log("payload",res);
                localStorage.setItem("name", res.data.name);
        localStorage.setItem("user_id", res.data.user_id);
        setVerifyOtp(true);
      } else {
        debugLog("OTP verification failed:", res.message);
        setErrors((prev) => ({ ...prev, otp: res.message || "OTP verification failed" }));
      }

    } catch (e) {
      console.log(e.message);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateFields()) return;
 
    // Step 1: First click - Send OTP
    if (!showOtpInput && !successotp) {
      await sendOtpApi();
      return;
    }


    // Step 2: Second click - Verify OTP
    if (!VerifyOtp) {
      await handleOtpVerification();
      return;
    }

    // Step 3: Third click - Create account only if OTP is verified
    const accountdata = {
      phone,
      api,
      bizId,
      numberId,
    };
    console.log("accountdata", accountdata);

    try {
      const res = await CreateAccounts(accountdata);
      console.log("response", res);
      if (res.status === 'success') {
        navigate("/Performance-Hub");
      }

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
                    <div className="flex justify-center">
                 <img src={logo} className=" h-[80px] w-[120px]"/>
                    </div>
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
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0 }}
            >
              <Inputs
                label="Full Name"
                name="fullname"
                value={fullname}
                onChange={setName}
                placeholder="Enter your name"
                externalError={errors.fullname}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <Inputs
                label="Email"
                type="email"
                name="email"
                value={email}
                onChange={setEmail}
                placeholder="Enter your email"
                externalError={errors.email}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <Inputs
                label="Phone Number"
                type="tel"
                name="phone"
                value={phone}
                onChange={setPhone}
                placeholder="Enter your phone"
                externalError={errors.phone}
              />
            </motion.div>


            {(showOtpInput || successotp) && (
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
                  externalError={errors.otp}
                />
              </motion.div>
            )}


            {VerifyOtp && (
              <>
                {[{
                  label: "WhatsApp API (Optional)",
                  value: api,
                  onChange: setWhatsappApi,
                  name: "whatsappApi",
                  placeholder: "Enter WhatsApp API"
                }, {
                  label: "WhatsApp Business ID (Optional)",
                  value: bizId,
                  onChange: setBusinessId,
                  name: "businessId",
                  placeholder: "Enter WhatsApp Business ID"
                }, {
                  label: "Number ID (Optional)",
                  value: numberId,
                  onChange: setNumberId,
                  name: "numberId",
                  placeholder: "Enter Number ID"
                }].map((input, idx) => (
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
