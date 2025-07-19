import React, { useState, useEffect } from "react"; 

export default function Inputs({ label, type = "text", name, value, onChange,placeholder,inputClassName  }) {
  const [error, setError] = useState("");

  useEffect(() => {
    if (value === "") {
      setError("");
    } else if (type === "number") {
  const isValid = /^[0-9]+$/.test(value); // only digits allowed
  setError(isValid ? "" : "Invalid number");


    } else if (type === "otp") {
      setError(value.length >= 6 ? "" : "otp must be at least 6 characters");
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
    className={`w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-[#905CC1] focus:ring-1 focus:ring-[#905CC1] bg-gray-50 ${inputClassName}`}
      
/>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
