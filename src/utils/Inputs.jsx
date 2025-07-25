// import React, { useState, useEffect } from "react";
// import { GoAlertFill } from "react-icons/go";
// export default function Inputs({ label, type = "text", name, value, onChange, placeholder, inputClassName, externalError }) {
//   const [error, setError] = useState("");

//   useEffect(() => {
//     if (value === "") {
//       setError("");
//     } else if (type === "number") {
//       const isValid = /^[0-9]+$/.test(value);
//       setError(isValid ? "" : "Invalid number");

//     } else if (type === "otp") {
//       setError(value.length >= 6 ? "" : "otp must be at least 6 characters");
//     } else {
//       setError("");
//     }
//   }, [value, type]);

//   return (
//     <div className="mb-4">
//       <label className="block text-sm font-medium text-gray-700 mb-3">
//         {label}
//       </label>

//       <input
//         type={type}
//         name={name}
//         placeholder={placeholder}
//         value={value}
//         onChange={(e) => onChange(e.target.value)}
//         className=
//         {`w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-[#905CC1] 
//           focus:ring-1 focus:ring-[#905CC1] bg-gray-50 ${inputClassName}`}

//       />
//       {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
//       {!error && externalError && (
//         <div className="flex gap-2 mt-2"> 
//           <GoAlertFill className="mt-1 text-red-400" />
//           <p className="text-red-500 text-sm mt-1">{externalError}</p>
//         </div>
//       )}
//     </div>
//   );
// }


import React, { useState, useEffect } from "react";
import { GoAlertFill } from "react-icons/go";

export default function Inputs({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  inputClassName,
  externalError,
}) {
  const [error, setError] = useState("");

  useEffect(() => {
    if (value === "") {
      setError("");
    } else if (type === "number") {
      const isValid = /^[0-9]+$/.test(value);
      setError(isValid ? "" : "Invalid number");
    } else if (type === "otp") {
      setError(value.length >= 6 ? "" : "OTP must be at least 6 characters");
    } else {
      setError("");
    }
  }, [value, type]);

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-3">
        {label}
      </label>

      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full rounded px-3 py-2 outline-none border bg-gray-50 transition duration-200
    ${error || externalError
            ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
            : "border-gray-300 focus:border-[#905CC1] focus:ring-1 focus:ring-[#905CC1]"} 
    ${inputClassName}`}
      />

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

      {!error && externalError && (
        <div className="flex gap-2 mt-2">
          <GoAlertFill className="mt-1 text-red-400" />
          <p className="text-red-500 text-sm mt-1">{externalError}</p>
        </div>
      )}
    </div>
  );
}
