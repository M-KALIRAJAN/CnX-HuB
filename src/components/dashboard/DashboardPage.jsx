import React, { useEffect, useState } from "react";
import Card from "../card/Card";

import Totalsent from "../../assets/Totalsent.svg";
import Delivered from "../../assets/Delivered.svg";
import Read from "../../assets/Read.svg";
import Failed from "../../assets/Failed.svg";
import Pattern from "../../assets/Pattern.svg";
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
import { Dashboard } from "../../api/ApiServices";
import { useAuth } from "../../context/AuthContext";
import InfoCard from "../Chart/InfoCard ";

export default function DashboardPage() {
   const { userId } = useAuth();
  const [dashboardData, setDashboardData] = useState({
    status_summary: {},
    wallet_balance: 0,
    template_count: 0,
    total_contacts: 0,
    per_message_cost:0,
    recent_activity: [],
    chart_labels: [],
    messages_sent_chart: [],
    delivery_chart_data:[]
  });
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // animate only once
    });
  }, []);

  useEffect(() => {
     console.log("userId" ,userId);
    const Dashboard_data = async () => {
      if (!userId) return;
     
      
      const res = await Dashboard(userId);
      console.log("res",res);
      
      setDashboardData(res);
    };
    Dashboard_data();
  }, [userId]);

  const {
    status_summary = {},
    wallet_balance = 0,
    template_count = 0,
    total_contacts = 0,
    per_message_cost = 0,
    recent_activity = [],
    chart_labels = [],
    messages_sent_chart = [],
    delivery_chart_data=[]
  } = dashboardData;

  return (
   <div className="w-full h-auto flex flex-col gap-10 overflow-x-hidden">
      {/* Top Cards Section */}
      <div className="flex flex-col  lg:flex-row gap-3 lg:gap-5 justify-around items-center rounded-3xl bg-[#F8F8F8] p-3 h-auto lg:h-[157px]">
        {/* Left */}
        <Card
          text="Total Send"
          count={status_summary.total_sent || 0}
          image={Totalsent}
          bgColor="bg-[#B3D0FF]"
          textColor="text-[#3B70C7]"
          data-aos="fade-right"
          data-aos-delay="0"
        />

        {/* Center */}
        <Card
          text="Delivered"
          count={status_summary.delivered || 0}
          image={Delivered}
          bgColor="bg-[#CDD4FD]"
          textColor="text-[#4153BC]"
          data-aos="zoom-in-up"
          data-aos-delay="100"
        />

        {/* Right */}
        <Card
          text="Read"
          count={status_summary.read || 0}
          image={Read}
          bgColor="bg-[#EFCEFE]"
          textColor="text-[#A037CF]"
          data-aos="fade-left"
          data-aos-delay="200"
        />

        {/* Extra card – fade-left again with more delay */}
        <Card
          text="Failed"
          count={status_summary.failed || 0}
          image={Failed}
          bgColor="bg-[#C5F6D1]"
          textColor="text-[#2AB17B]"
          data-aos="fade-left"
          data-aos-delay="300"
        />
      </div>

      {/* Charts + Wallet Info Section */}
    <div className="w-full border border-gray-400 p-4 rounded-2xl mt-10">
  <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center lg:items-start">

    {/* Line Chart */}
    <div className="w-full lg:w-1/3">
      <h2 className="font-bold text-[#59565C] mb-4">Message Sent (Last 7 days)</h2>
      <LineChart
        chartLabels={dashboardData.chart_labels}
        messagesSentChart={dashboardData.messages_sent_chart}
      />
    </div>

    {/* Read Chart */}
    <div className="w-full sm:w-[250px] lg:w-1/4 mt-6 lg:mt-0">
      <h2 className="font-bold text-center mb-5 text-[#59565C]">Read Chart</h2>
      <ReadRateChart delivery_chart_data={dashboardData.delivery_chart_data} />
    </div>

    {/* Wallet Info */}
    <div className="w-full lg:w-1/3">
      <div className="bg-white rounded-2xl shadow-md p-4 space-y-4">

        {/* Wallet Balance */}
        <InfoCard
          icon={<FaWallet className="text-[#9B5CE0] text-xl" />}
          label="Wallet Balance"
          value={`₹${wallet_balance}`}
        />

        {/* Templates */}
        <InfoCard
          icon={<FiLayout className="text-[#9B5CE0] text-xl" />}
          label="Templates"
          value={<CountUp end={template_count} duration={1} />}
        />

        {/* Per Message Cost */}
        <InfoCard
          icon={<FiLayout className="text-[#9B5CE0] text-xl" />}
          label="Per Message Cost"
          value={<CountUp end={per_message_cost} duration={1} />}
        />

        {/* Contact Categories */}
        <InfoCard
          icon={<BsJournalBookmarkFill className="text-[#9B5CE0] text-xl" />}
          label="Contact Categories"
          value={<CountUp end={4} duration={1} />}
        />
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
          {/* <div className="max-h-[90px] overflow-y-auto pr-2">
            {recent_activity.slice(0, 10).map((activity, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row gap-5 items-start sm:items-center mb-4"
              >
                <PiChecksBold className="text-[#905CC1] mt-1" />
                <div className="flex gap-5">
                  <h2 className="font-medium">{activity.event}</h2>
                  <p className="text-gray-500 text-sm">- {activity.time}</p>
                </div>
              </div>
            ))}
          </div> */}
          <div className="max-h-[90px] overflow-y-auto pr-2">
  {recent_activity && recent_activity.length > 0 ? (
    recent_activity.slice(0, 10).map((activity, index) => (
      <div
        key={index}
        className="flex flex-col sm:flex-row gap-5 items-start sm:items-center mb-4"
      >
        <PiChecksBold className="text-[#905CC1] mt-1" />
        <div className="flex gap-5">
          <h2 className="font-medium">{activity.event}</h2>
          <p className="text-gray-500 text-sm">- {activity.time}</p>
        </div>
      </div>
    ))
  ) : (
    <p className="text-gray-400 text-center">No recent activity found</p>
  )}
</div>

        </div>
        {/* <div className="w-[290px] h-[170px] mt-5 bg-[#F8F8F8] rounded-2xl">
          <p className="text-center font-bold mt-5">Current Discription Plan</p>
        </div> */}
        <div>
          <img src={Pattern}/>
        </div>
      </div>
    </div>
  );
}
