import { useState } from "react";
import { motion } from "framer-motion";
import Inputs from "../utils/Inputs";
import { BsFillEyeSlashFill, BsFillEyeFill } from "react-icons/bs";
import Loginlogo from "../assets/login-logo.jpg";
// import logo from "../../assets/cnx_logo.svg";
import logo from "../assets/cnx_logo.svg"

export default function PasswordChange() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [step, setStep] = useState(1); // 1: Email, 2: OTP, 3: Password Reset

  const handleButtonClick = () => {
    if (step === 1) {
      if (email.trim() !== "") setStep(2); // move to OTP input
    } else if (step === 2) {
      if (otp.trim() !== "") setStep(3); // move to password reset
    } else if (step === 3) {
      // final step, placeholder alert
      alert("Password has been reset!");
    }
  };

  const getButtonText = () => {
    if (step === 1) return "Send OTP";
    if (step === 2) return "Submit";
    if (step === 3) return "Password Reset";
  };

  return (
    <div className="flex gap-5 justify-around items-center min-h-screen bg-gray-100 px-4">
      {/* Left Side Image */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="hidden md:flex w-[756px] h-[600px] bg-[#FBF6FF] rounded-2xl justify-center items-center"
      >
        <img src={Loginlogo} alt="Visual" className="h-full object-contain" />
      </motion.div>

      {/* Right Panel - Form */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="p-6 rounded-2xl bg-white w-full max-w-sm shadow-md"
      >
        <form>
               <div className="flex justify-center mb-3">
                        <img src={logo} className="h-[80px] w-[120px]" alt="logo" />
                      </div>
          <h2 className="text-[18px] font-bold mb-6 text-center">
            Change Your Password
          </h2>

          {/* Step 1: Email Input */}
          <Inputs
            label="Email"
            name="Email"
            type="email"
            placeholder="Enter your Email"
            value={email}
            onChange={setEmail}
            disabled={step > 1}
          />

          {/* Step 2: OTP Input */}
          {step >= 2 && (
            <Inputs
              label="OTP"
              name="OTP"
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={setOtp}
            />
          )}

          {/* Step 3: New Password + Confirm Password */}
          {step === 3 && (
            <>
              <div className="relative">
                <Inputs
                  label="New Password"
                  name="NewPassword"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter New Password"
                  value={newPassword}
                  onChange={setNewPassword}
                />
                <span
                  className="absolute right-4 top-[45px] cursor-pointer text-gray-600"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? <BsFillEyeFill /> : <BsFillEyeSlashFill />}
                </span>
              </div>

              <Inputs
                label="Confirm Password"
                name="ConfirmPassword"
                type={showPassword ? "text" : "password"}
                placeholder="Confirm New Password"
                value={confirmPassword}
                onChange={setConfirmPassword}
              />
            </>
          )}

          {/* Action Button */}
          <button
            type="button"
            onClick={handleButtonClick}
            className="w-full h-[45px] text-white bg-[#905CC1] rounded-sm hover:bg-[#7a3fb8] transition mt-4 flex items-center justify-center"
          >
            {getButtonText()}
          </button>
        </form>
      </motion.div>
    </div>
  );
}
