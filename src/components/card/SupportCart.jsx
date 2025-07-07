import React from 'react';

export default function SupportCart({ icon, title, actionText, actionIcon }) {
  return (
    <div className="w-[300px] h-[167px] bg-[#F8F8F8] rounded-2xl p-4 flex flex-col justify-center items-center gap-3">
      {/* Icon */}
      <div className="h-[38px] w-[38px] rounded-full bg-white flex items-center justify-center">
        <img src={icon} alt="icon" className="w-5 h-5" />
      </div>

      {/* Title */}
      <h2 className="text-lg font-semibold text-[#333]">{title}</h2>

      {/* Divider */}
      <div className="w-full border-t border-gray-400 mt-2 flex justify-center items-center gap-2">
        <h2 className="text-[#905CC1] text-sm cursor-pointer hover:underline">{actionText}</h2>
        {actionIcon && <img src={actionIcon} className="w-4 h-4" alt="arrow" />}
      </div>
    </div>
  );
}
