import React, { useEffect, useState } from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function ReadRateChart({ delivery_chart_data = [] }) {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const [read = 0, delivered = 0] = delivery_chart_data;
    const total = read + delivered;
    const readPercentage = total > 0 ? Math.round((read / total) * 100) : 0;
    setTimeout(() => setPercentage(readPercentage), 300);
  }, [delivery_chart_data]);

  return (
    <div className="flex flex-col items-center justify-center w-[250px] h-[250px]">
      <CircularProgressbarWithChildren
        value={percentage}
        strokeWidth={16}
        styles={buildStyles({
          pathColor: "#905CC1", // Read
          trailColor: "#D9D9D9", // Unread
          strokeLinecap: "butt",
          pathTransition: "stroke-dashoffset 1.5s ease-in-out",
          // Simulated dashed ring effect
          strokeDasharray: "2,6",
        })}
      >
        <div className="flex flex-col items-center">
          <div className="text-[32px] font-extrabold text-[#905CC1]">
            {percentage}%
          </div>
          <div className="text-[16px] font-medium text-[#59565C]">
            Read Rate
          </div>
        </div>
      </CircularProgressbarWithChildren>

      {/* Legend */}
      <div className="flex justify-center gap-4 mt-4 text-sm text-[#59565C]">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-[#905CC1] rounded-full" />
          Read
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-[#D9D9D9] rounded-full" />
          Unread
        </div>
      </div>
    </div>
  );
}
