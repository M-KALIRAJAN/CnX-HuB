import React from 'react';

export default function Card({ text, count, bgColor, textColor, image }) {
  return (
    <div
      className={`w-[250px] h-[92px] flex justify-around items-center rounded-2xl ${bgColor} ${textColor}`}
    >
      <div>
        <p>{text}</p>
        <h2 className="font-bold">{count}</h2>
      </div>
      { image && 
      <div className="h-[62px] w-[62px] rounded-full bg-white flex justify-center items-center">
        <img src={image} alt={text} className="w-6 h-6" />
      </div> 
}
    </div> 
  );
}

