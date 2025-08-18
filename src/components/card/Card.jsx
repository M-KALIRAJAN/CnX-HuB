import React from 'react';
import CountUp from 'react-countup';

// export default function Card({ text, count, bgColor, textColor, image, ...rest }) {
//   return (
//     <div
//       className={`w-[270px] h-[90px] flex justify-around items-center rounded-2xl ${bgColor}`}
//       {...rest} //  allows props like data-aos, data-aos-delay
//     >
//       <div>
//         <p>{text}</p>
//         <h2 className={`font-bold text-[30px] ${textColor}`}> <CountUp end={count} duration={1} /></h2>
//       </div>
      
//       {image && (
//         <div className="h-[62px] w-[62px] rounded-full bg-white flex justify-center items-center">
//           <img src={image} alt={text} className="w-6 h-6" />
//         </div>
//       )}
//     </div>
//   );
// }

export default function Card({
  text,
  count,
  bgColor,
  textColor,
  image,
  imageWrapperClass = "", // 👈 default empty if not passed
  ...rest
}) {
  return (
    <div
      className={`w-[270px] h-[90px] flex justify-between items-center rounded-2xl ${bgColor} px-4`}
      {...rest}
    >
      <div>
        <p>{text}</p>
        <h2 className={`font-bold text-[30px] ${textColor}`}>
          <CountUp end={count} duration={1} />
        </h2>
      </div>

{image && (
  <div
    className={`rounded-full bg-white flex justify-center items-center ${imageWrapperClass || "h-[50px] w-[50px]"}`}
  >
    <img src={image} alt={text} className="w-[30px] h-[30px] object-contain" />
  </div>
)}

    </div>
  );
}




