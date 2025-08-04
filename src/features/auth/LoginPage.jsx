import { useState } from "react";
import Inputs from "../../utils/Inputs";
import Apple from "../../assets/Apple.svg";
import Fb from "../../assets/Fb.svg";
import Google from "../../assets/Google.svg";
import { useNavigate } from "react-router-dom";
import { login } from "../../api/ApiServices";
import { motion } from "framer-motion";
import { debugLog } from "../../utils/debugLog";
import Loginlogo from "../../assets/login-logo.jpg";
import ClipLoader from "react-spinners/ClipLoader"; // Used instead of Oval
import logo from "../../assets/cnx_logo.svg";
export default function LoginPage() {
  const [number, setNumber] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (number === "") {
      setError("Field cannot be empty");
      return;
    } else if (number.length < 10) {
      setError("Number must be at least 10 digits");
      return;
    } else {
      setError("");
    }

    try {
   
      setLoading(true); // Start loader
      const data = await login({ phone: number });

      if (data.status_code === 200) {
        navigate("/otp", { state: { phone: number } });
      } else {
        debugLog("Login failed with status:", data.status_code);
      }
    } catch (err) {
      debugLog("Login Failed:", err);
    } finally {
      setLoading(false); // Stop loader
    }
  };

  const goToCreateAccount = () => {
    navigate("/Register");
  };

  return (
    <div className="flex gap-5 justify-around items-center min-h-screen bg-gray-100 px-4">
      {/* Left Panel */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="hidden md:flex w-[756px] h-[600px] bg-[#FBF6FF] rounded-2xl justify-center items-center"
      >
        <img src={Loginlogo} alt="Login Visual" />
      </motion.div>

      {/* Right Panel */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="p-6 rounded-2xl bg-white w-full max-w-sm shadow-md"
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
            Login With OTP!
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            


            <Inputs
              label="Mobile Number"
              name="phone"
              type="phone"
              placeholder="Enter the number"
              value={number}
              onChange={setNumber}
              externalError={error}
            />
          </motion.div>

          <motion.button
            type="submit"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.03 }}
            className="w-full h-[45px] text-white bg-[#905CC1] rounded-sm hover:bg-[#7a3fb8] transition mt-4 flex items-center justify-center"
          >
            {loading ? (
              <ClipLoader size={24} color="#fff" />
            ) : (
              "Send OTP"
            )}
          </motion.button>

          <motion.div
            className="w-full text-center mb-2 mt-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h2
              className="text-sm text-[#905CC1] hover:underline cursor-pointer font-medium"
              onClick={goToCreateAccount}
            >
              <span>New User?</span> Create Account
            </h2>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
}
