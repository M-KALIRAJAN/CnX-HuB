import { useState } from "react";
import Inputs from "../../utils/Inputs";
import Loginlogo from "../../assets/login-logo.jpg";
import logo from "../../assets/cnx_logo.svg";
import { useNavigate } from "react-router-dom";
import { login as loginAPI } from "../../api/ApiServices";
import { motion } from "framer-motion";
import { debugLog } from "../../utils/debugLog";
import ClipLoader from "react-spinners/ClipLoader";
import { useAuth } from "../../context/AuthContext";
import { BsFillEyeSlashFill, BsFillEyeFill } from "react-icons/bs";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { login } = useAuth();
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const newErrors = {};

    // Manual validation
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Invalid email format";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setLoading(false);
      return;
    }

    try {
      const response = await loginAPI(email, password);

      if (response?.status === "success") {
        const { user_id, name, role } = response;
        console.log("data", response);

        // Save to context
        login(user_id, name);

        navigate("/Performance-Hub");
      } else {
        setErrors({ general: response?.message || "Login failed" });
      }
    } catch (err) {
      debugLog("Login Failed:", err);
      setErrors({ general: "Something went wrong. Try again." });
    } finally {
      setLoading(false);
    }
  };

  const goToCreateAccount = () => {
    navigate("/Register");
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
        <img src={Loginlogo} alt="Login Visual" />
      </motion.div>

      {/* Right Panel - Login Form */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="p-6 rounded-2xl bg-white w-full max-w-sm shadow-md"
      >
        <form onSubmit={handleLogin}>
          <div className="flex justify-center mb-3">
            <img src={logo} className="h-[80px] w-[120px]" alt="logo" />
          </div>

          <h2 className="text-[18px] font-bold mb-6 text-center">
            WELCOME TO CNX-HUB LOGIN NOW !
          </h2>

          {/* Email */}
          <Inputs
            label="Email"
            name="Email"
            type="email"
            placeholder="Enter the Email"
            value={email}
            onChange={setEmail}
            externalError={errors.email}
          />

          {/* Password + toggle */}
          <div className="relative">
            <Inputs
              label="Password"
              name="Password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter the Password"
              value={password}
              onChange={setPassword}
              externalError={errors.password}
            />
            <span
              className="absolute right-4 top-[45px] cursor-pointer text-gray-600"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <BsFillEyeFill /> : <BsFillEyeSlashFill />}
            </span>
            <div className=" text-end">
 <h2
              className="text-sm text-[#905CC1] hover:underline cursor-pointer font-medium"
              // onClick={goToCreateAccount}
            >
              <span>Forget Password ?</span> 
            </h2>
            </div>
            
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full h-[45px] text-white bg-[#905CC1] rounded-sm hover:bg-[#7a3fb8] transition mt-4 flex items-center justify-center"
          >
            {loading ? <ClipLoader size={24} color="#fff" /> : "Login"}
          </button>



          {/* Register link */}
          <div className="text-center mt-5">
            <h2
              className="text-sm text-[#905CC1] hover:underline cursor-pointer font-medium"
              onClick={goToCreateAccount}
            >
              <span>New User?</span> Create Account
            </h2>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
