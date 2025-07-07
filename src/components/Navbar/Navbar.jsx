import React from 'react'
import Bell from "../../assets/Bell.svg"
import User from "../../assets/User.svg"
import Down from "../../assets/Down.svg"
export default function Navbar() {
  return (
    <div className=' h-[48px] m-5'>
        <div className=' flex justify-between items-center'>
            <div>
                <h2 className='font-bold text-[22px]'>Welcome</h2>
            </div>
            <div className='flex justify-center items-center gap-5'>
                <div className=' h-[39px] w-[39px] rounded-full sidebar flex justify-center items-center'>
                <img src={Bell}/>
                </div>

               <div className="border border-gray-200 gap-2.5 h-[45px] w-[155px] rounded-3xl flex justify-around items-center">
                 <div className=' h-[39px] w-[39px] rounded-full sidebar flex justify-center items-center'>
                     <img src={User}/>
                 </div>
                   <p>Kali</p>
                   <img src={Down}/>
                </div>

            </div>

        </div>

    </div>
  )
}
