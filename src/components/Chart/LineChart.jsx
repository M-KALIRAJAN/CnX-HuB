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

const data = [
  { day: 'WED', value: 0.1 },
  { day: 'THU', value: 0.3 },
  { day: 'FRI', value: 0.5 },
  { day: 'SAT', value: 0.55 },
  { day: 'SUN', value: 0.8 },
  { day: 'MON', value: 0.7 },
  { day: 'TUE', value: 0.75 },
];

export default function MessageChart() {
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
          <Tooltip
            formatter={(value) => [`${Math.round(value * 110)} Messages`, '']}
          />
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
