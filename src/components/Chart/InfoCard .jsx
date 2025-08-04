// const InfoCard = ({ icon, label, value }) => (
//   <div className="flex items-center gap-4 border-b pb-2 last:border-b-0">
//     <div className="bg-[#f4edff] p-3 rounded-xl">{icon}</div>
//     <div>
//       <p className="text-sm text-gray-600">{label}</p>
//       <p className="text-xl font-bold text-[#9B5CE0]">{value}</p>
//     </div>
//   </div>
// );
import React from 'react'

export default function InfoCard ({ icon, label, value }) {
  return (
     <div className="flex items-center gap-4 border-b pb-2 last:border-b-0">
    <div className="bg-[#f4edff] p-3 rounded-xl">{icon}</div>
    <div>
      <p className="text-sm text-gray-600">{label}</p>
      <p className="text-xl font-bold text-[#9B5CE0]">{value}</p>
    </div>
  </div>
  )
}

