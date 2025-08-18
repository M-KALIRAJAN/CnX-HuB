import { LuBookOpenText } from "react-icons/lu";
import { HiOutlineHome } from "react-icons/hi";
import person from "../assets/person.png"; // Replace with actual path
import Inputs from "../utils/Inputs";
import { useAuth } from "../context/AuthContext";
import { useSpring } from "framer-motion";
import { useState } from "react";
import { chatBot } from "../api/ApiServices";
import { ToastContainer, toast } from 'react-toastify';
export default function App() {
    const { userId ,role  } = useAuth()
    const [keyword,setKeyword]=useState("")
    const [replay,setReplay] = useState("")
    const [fallback_message ,setFallback_Message] = useState("")
    console.log("***********",userId);
    
    const HandleChatBot = async(e) =>{
        e.preventDefault()
        const data = {
            user_id:userId ,
            reply: replay, 
            keyword,
            fallback_message
        }
        console.log("data",data);
        
        try{
            const res = await chatBot(data)
            console.log("res",res);
             toast.success("Chatbot created successfully!");
            setReplay("")
            setKeyword("")
            setFallback_Message("")
        }catch(e){
            console.log(e)
        }

    }
    return (
        <div className="flex gap-5 min-h-screen bg-gray-100 p-4">

            {/* Left Sidebar */}
            <div className="w-[250px] bg-white border border-gray-300 p-4 rounded-2xl shadow-md flex flex-col justify-between">
                <div>
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-bold text-gray-800">Chat Weight</h2>
                        <div className="flex gap-1 items-center px-2 py-1 border border-gray-300 rounded-lg">
                            <LuBookOpenText size={20} />
                            <p className="text-sm font-medium text-gray-700">Learn</p>
                        </div>
                    </div>

                    <div className="group flex items-center gap-2.5 hover:bg-gray-100 p-3 rounded-xl transition-all duration-200 cursor-pointer">
                        <HiOutlineHome className="text-gray-600 group-hover:text-violet-600 text-xl" />
                        <p className="text-gray-700 group-hover:text-violet-600 font-semibold">General</p>
                    </div>
                </div>
            </div>

            {/* Center Panel - Main Content */}
            <div className="flex-1 bg-white p-6 rounded-2xl shadow-md">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold text-gray-800">General</h1>
                    <button className="bg-black px-5 py-2 rounded-2xl text-white font-semibold">
                        Save Changes
                    </button>
                </div>

                <div className="space-y-6">
                    {/* Bot Name */}
                    <div>
                        <p className="font-medium text-gray-800 mb-1">Bot Name</p>
                        <Inputs
                            type="text"
                            placeholder="Enter Bot Name"
                            value={keyword}
                            onChange={(e) => setKeyword(e)}
                            inputClassName="w-[200px] h-[50px] mt-1 rounded-2xl bg-gray-200 border-none focus:outline-none focus:ring-0 focus:border-none" />
                    </div>

                    {/* Bot Description */}
                    <div>
                        <p className="font-medium text-gray-800 mb-1">Bot Description</p>
                        <Inputs
                            type="text"
                            placeholder="Enter Description"
                            value={replay}
                            onChange={(e) => setReplay(e)}
                            inputClassName="w-[200px] h-[70px] mt-1 rounded-2xl bg-gray-200 border-none focus:outline-none focus:ring-0 focus:border-none"
                        />
                    </div>
  <div>
                        <p className="font-medium text-gray-800 mb-1">Fallback_Message</p>
                        <Inputs
                            type="text"
                            placeholder="Fallback_Message"
                                    value={fallback_message}
                            onChange={(e) => setFallback_Message(e)}
                            inputClassName="w-[200px] h-[50px] mt-1 rounded-2xl bg-gray-200 border-none focus:outline-none focus:ring-0 focus:border-none" />
                    </div>
                    {/* Bot Avatar */}
                    <div>
                        <p className="font-medium text-gray-800 mb-2">Bot Avatar</p>
                        <Inputs
                            type="file"
                            placeholder="Upload Avatar"
                            inputClassName="w-full max-w-sm h-16 rounded-2xl pl-3 bg-white text-gray-700 border-none focus:outline-none bg-gray-200
                file:bg-gray-200 file:text-violet-700 file:rounded-lg file:px-7 file:py-2 file:gap-3 
                file:border-0 file:font-medium file:cursor-pointer"
                            onChange={(file) => {
                                console.log(file);
                            }}
                        />
                    </div>

                     <button
                        className="w-full color text-white font-semibold py-3 rounded-2xl transition duration-300"
                        onClick={HandleChatBot}
                    >
                        Chat With Us
                    </button>
                    <ToastContainer/>
                </div>
            </div>

            {/* Right Sidebar */}
            <div
                className="w-[300px] h-[300px] bg-amber-200 p-6 rounded-2xl shadow-md flex flex-col justify-between"
                style={{
                    backgroundImage: "linear-gradient(to bottom, #E0BCFF 0px, #F8F8F8 120px, #F8F8F8 100%)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <h2 className="font-bold text-2xl text-gray-800 mb-4 "> 👋 Hello, nice to see you here...</h2>

                <div className="bg-white rounded-2xl p-4 shadow-md w-full h-[200px]">

                    <div className="flex items-center gap-4 mb-4">
                        <img
                            src={person}
                            alt="Person"
                            className="h-[60px] w-[60px] rounded-full object-cover"
                        />
                        <p className="text-gray-700 text-sm">
                            This is a placeholder for the right sidebar content.
                        </p>
                    </div>

                    {/* Chat Button */}
                    <button
                        className="w-full color text-white font-semibold py-3 rounded-2xl transition duration-300"
                        // onClick={HandleChatBot}
                    >
                        Chat With Us
                    </button>
                </div>

            </div>
        </div>
    );
}
