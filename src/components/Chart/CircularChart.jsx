import React, { useEffect, useState } from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion } from "framer-motion";

export default function ReadRateChart() {
  const [percentage, setPercentage] = useState(0);

 
  useEffect(() => {
    const timeout = setTimeout(() => setPercentage(70), 300);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <motion.div
      style={{ width: "100%", height: 300 }}
      data-aos="zoom-in"
      data-aos-duration="900"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <CircularProgressbarWithChildren
        value={percentage}
        strokeWidth={12}
        styles={buildStyles({
          pathColor: "#905CC1",
          trailColor: "#d6d6d6",
          strokeLinecap: "butt",
          pathTransition: "stroke-dashoffset 1.5s ease-in-out"
        })}
      >
        <motion.div
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3 }}
          style={{ fontSize: 24, fontWeight: "bold", color: "#905CC1" }}
        >
          {percentage}%
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          style={{ fontSize: 14, marginTop: 4, color: "#000" }}
        >
          Read Rate
        </motion.div>
      </CircularProgressbarWithChildren>

      <motion.div
        className="flex justify-center mt-4 gap-4 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-[#905CC1] rounded-full" /> Read
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-[#d6d6d6] rounded-full" /> Unread
        </div>
      </motion.div>
    </motion.div>
  );
}
