import { useState } from "react";
import Inputs from "../../utils/Inputs";
import Apple from "../../assets/Apple.svg"
import Fb from "../../assets/Fb.svg"
import Google from "../../assets/Google.svg"
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      console.log("Login with:", { email, password });
    } else {
      console.log("Validation failed");
    }
  };

  return (
   <div className="flex justify-center items-center min-h-screen ">
  <div className=" p-6 rounded  w-full max-w-sm">
    <form onSubmit={handleLogin}>
      <h2 className="text-[18px] font-bold mb-6 text-center">Welcome!</h2>

      <Inputs
        label="Email"
        name="email"
        type="email"
        placeholder="Enter the Email"
        value={email}
        onChange={setEmail}
      />

      <Inputs
        label="Password"
        name="password"
        type="password"
        placeholder="Enter the Password"
        value={password}
        onChange={setPassword}
      />

      <div className="w-full text-right mb-2">
        <p className="text-sm text-[#905CC1] hover:underline cursor-pointer font-medium text-[12px]">
          Forgot Password?
        </p>
      </div>

      <button
        type="submit"
        className="w-full h-[45px] text-white color rounded-sm"
      >
        Login
      </button>
    </form>

    
    <div className="flex items-center my-6">
      <div className="flex-grow border-t border-gray-300"></div>
      <span className="mx-4 text-gray-500 text-sm">or continue with</span>
      <div className="flex-grow border-t border-gray-300"></div>
    </div>
     
<div className="flex justify-center gap-5">
  {/* Apple */}
  <div className="w-[60px] h-[45px] sidebar rounded-sm shadow-xl flex justify-center items-center">
    <img src={Apple} alt="Apple logo" className="w-6 h-6" />
  </div>

  {/* Google */}
  <div className="w-[60px] h-[45px] bg-white rounded-sm shadow-xl flex justify-center items-center">
    <img src={Google} alt="Google logo" className="w-6 h-6" />
  </div>

  {/* Facebook */}
  <div className="w-[60px] h-[45px] bg-white rounded-sm shadow-xl flex justify-center items-center">
    <img src={Fb} alt="Facebook logo" className="w-30 h-31" />
  </div>
</div>

  </div>
</div>

  );
}
