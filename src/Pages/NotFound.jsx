// src/Pages/NotFound.jsx
import React from 'react';
import NotFount from "../assets/NotFount.jpg"
export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen text-center">
      <div>
        {/* <h1 className="text-5xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600">Page Not Found</p> */}
        <img src={NotFount} className='w-full h-full'/>
      </div>
    </div>
  );
}
