import React, { useEffect } from "react";
import Card from "../card/Card";

import Totalsent from "../../assets/Totalsent.svg";
import Delivered from "../../assets/Delivered.svg";
import Read from "../../assets/Read.svg";
import Failed from "../../assets/Failed.svg";
import LineChart from "../Chart/LineChart";
import ReadRateChart from "../Chart/CircularChart";
import { CircularProgressbar } from "react-circular-progressbar";
import { PiChecksBold } from "react-icons/pi";
import { FaWallet } from "react-icons/fa";
import { FiLayout } from "react-icons/fi";
import { BsJournalBookmarkFill } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";

export default function DashboardPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // animate only once
    });
  }, []);

  const activityData = [
    { id: 1, message: "Read To 877586867", date: "June 7" },
    { id: 2, message: "Delivered To 987654321", date: "June 8" },
    { id: 3, message: "Failed To 123456789", date: "June 9" },
    { id: 4, message: "Read To 9988776655", date: "June 10" },
    { id: 5, message: "Sent To 1122334455", date: "June 11" },
    { id: 6, message: "Read To 7788990011", date: "June 12" },
    { id: 7, message: "Delivered To 6677889900", date: "June 13" },
  ];
  return (
    <div className="max-h-full max-w-full p-3">
      {/* Top Cards Section */}
      <div className="flex flex-col  lg:flex-row gap-3 lg:gap-5 justify-around items-center rounded-3xl bg-[#F8F8F8] p-3 h-auto lg:h-[157px]">
        {/* Left */}
        <Card
          text="Total Send"
          count="1300"
          image={Totalsent}
          bgColor="bg-[#B3D0FF]"
          textColor="text-[#3B70C7]"
          data-aos="fade-right"
          data-aos-delay="0"
        />

        {/* Center */}
        <Card
          text="Delivered"
          count="1400"
          image={Delivered}
          bgColor="bg-[#CDD4FD]"
          textColor="text-[#4153BC]"
          data-aos="zoom-in-up"
          data-aos-delay="100"
        />

        {/* Right */}
        <Card
          text="Read"
          count="400"
          image={Read}
          bgColor="bg-[#EFCEFE]"
          textColor="text-[#A037CF]"
          data-aos="fade-left"
          data-aos-delay="200"
        />

        {/* Extra card – fade-left again with more delay */}
        <Card
          text="Failed"
          count="1300"
          image={Failed}
          bgColor="bg-[#C5F6D1]"
          textColor="text-[#2AB17B]"
          data-aos="fade-left"
          data-aos-delay="300"
        />
      </div>

      {/* Charts + Wallet Info Section */}
      <div className="border border-gray-400 w-full p-4 rounded-2xl mt-10 lg:h-[360px]">
        <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start h-auto ">
          {/* Line Chart */}
          <div className="w-full lg:w-[400px]">
            <h2 className="font-bold text-[#59565C]">
              Message Send (Last 7 days)
            </h2>
            <LineChart />
          </div>

          {/* Read Chart */}
          <div className="w-full sm:w-[200px] mt-10 lg:mt-0">
            <h2 className="font-bold text-center mb-5 text-[#59565C]">
              Read Chart
            </h2>
            <ReadRateChart />
          </div>

          {/* Wallet Info */}
          <div className="w-full sm:w-[300px]">
            <div className="bg-white rounded-2xl shadow-sm p-6 space-y-6">
              {/* Wallet Balance */}
              <div className="flex items-center justify-between border-b pb-4">
                <div className="flex items-center gap-4">
                  <div className="bg-[#f4edff] p-3 rounded-xl">
                    <FaWallet className="text-[#9B5CE0] text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Wallet Balance</p>
                    <p className="text-2xl font-bold text-[#9B5CE0]">
                      ₹<CountUp end={20000} duration={1.5} separator="," />
                    </p>
                  </div>
                </div>
              </div>

              {/* Templates */}
              <div className="flex items-center justify-between border-b pb-4">
                <div className="flex items-center gap-4">
                  <div className="bg-[#f4edff] p-3 rounded-xl">
                    <FiLayout className="text-[#9B5CE0] text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Templates</p>
                    <p className="text-xl font-bold text-[#9B5CE0]">
                      <CountUp end={5} duration={1} />
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Categories */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="bg-[#f4edff] p-3 rounded-xl">
                    <BsJournalBookmarkFill className="text-[#9B5CE0] text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Contact Categories</p>
                    <p className="text-xl font-bold text-[#9B5CE0]">
                      <CountUp end={4} duration={1} />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex items-center gap-7">
        {/* Recent Activity */}
        <div className="border border-gray-400 h-full w-full sm:w-[450px] p-3 rounded-2xl mt-10">
          <h1 className="font-bold text-2xl text-[#59565C] mb-4">
            Recent Activity
          </h1>
          <div className="max-h-[90px] overflow-y-auto pr-2">
            {activityData.map((activity) => (
              <div
                key={activity.id}
                className="flex flex-col sm:flex-row gap-5 items-start sm:items-center mb-4"
              >
                <PiChecksBold className="text-[#905CC1] mt-1" />
                <div className=" flex gap-5">
                  <h2 className="font-medium">{activity.message}</h2>
                  <p className="text-gray-500 text-sm">- {activity.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-[290px] h-[170px] mt-5 bg-[#F8F8F8] rounded-2xl">
          <p className="text-center font-bold mt-5">Current Discription Plan</p>
        </div>
      </div>
    </div>
  );
}
