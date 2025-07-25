import React from 'react';
import CountUp from 'react-countup';

export default function Card({ text, count, bgColor, textColor, image, ...rest }) {
  return (
    <div
      className={`w-[270px] h-[90px] flex justify-around items-center rounded-2xl ${bgColor}`}
      {...rest} //  allows props like data-aos, data-aos-delay
    >
      <div>
        <p>{text}</p>
        <h2 className={`font-bold text-[30px] ${textColor}`}> <CountUp end={count} duration={1} /></h2>
      </div>
      
      {image && (
        <div className="h-[62px] w-[62px] rounded-full bg-white flex justify-center items-center">
          <img src={image} alt={text} className="w-6 h-6" />
        </div>
      )}
    </div>
  );
}



