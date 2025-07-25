import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

export default function MessageChart({ chartLabels, messagesSentChart }) {
  // Map API data into format for chart
  const data =
    chartLabels?.map((day, index) => ({
      day,
      value: messagesSentChart?.[index] ? messagesSentChart[index] / 100 : 0,
    })) || [];

  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <AreaChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#905CC1" stopOpacity={0.6} />
              <stop offset="95%" stopColor="#905CC1" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="day" />
          <YAxis domain={[0, 1]} ticks={[0, 0.2, 0.4, 0.6, 0.8, 1]} />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip formatter={(value) => [`${Math.round(value * 100)}`, 'Messages']} />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#905CC1"
            fillOpacity={1}
            fill="url(#colorValue)"
            dot={{ fill: '#905CC1', r: 4 }}
            activeDot={{ r: 6 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

// import React from 'react';
// import {
//   AreaChart,
//   Area,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from 'recharts';

// export default function MessageChart({ chartLabels, messagesSentChart, messagesReceivedChart }) {
//   // Prepare chart data by combining both series
//   const data =
//     chartLabels?.map((day, index) => ({
//       day,
//       sent: messagesSentChart?.[index] ? messagesSentChart[index] / 100 : 0,
//       received: messagesReceivedChart?.[index] ? messagesReceivedChart[index] / 100 : 0,
//     })) || [];

//   return (
//     <div style={{ width: '100%', height: 300 }}>
//       <ResponsiveContainer>
//         <AreaChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
//           <defs>
//             <linearGradient id="colorSent" x1="0" y1="0" x2="0" y2="1">
//               <stop offset="5%" stopColor="#905CC1" stopOpacity={0.6} />
//               <stop offset="95%" stopColor="#905CC1" stopOpacity={0} />
//             </linearGradient>
//             <linearGradient id="colorReceived" x1="0" y1="0" x2="0" y2="1">
//               <stop offset="5%" stopColor="#4EB3A3" stopOpacity={0.6} />
//               <stop offset="95%" stopColor="#4EB3A3" stopOpacity={0} />
//             </linearGradient>
//           </defs>
//           <XAxis dataKey="day" />
//           <YAxis domain={[0, 1]} ticks={[0, 0.2, 0.4, 0.6, 0.8, 1]} />
//           <CartesianGrid strokeDasharray="3 3" />
//           <Tooltip
//             formatter={(value, name) => [`${Math.round(value * 100)}`, name === 'sent' ? 'Sent' : 'Received']}
//           />
//           <Area
//             type="monotone"
//             dataKey="sent"
//             stroke="#905CC1"
//             fillOpacity={1}
//             fill="url(#colorSent)"
//             dot={{ fill: '#905CC1', r: 4 }}
//             activeDot={{ r: 6 }}
//           />
//           <Area
//             type="monotone"
//             dataKey="received"
//             stroke="#4EB3A3"
//             fillOpacity={1}
//             fill="url(#colorReceived)"
//             dot={{ fill: '#4EB3A3', r: 4 }}
//             activeDot={{ r: 6 }}
//           />
//         </AreaChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }

