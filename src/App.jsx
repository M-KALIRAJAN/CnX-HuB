
import { useEffect } from 'react';
import './App.css'
import Approutes from './routes/Approutes'
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './context/AuthContext';
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import React from "react";
function App() {
 useEffect(() => {
  AOS.init({ duration: 1000, once: true });
}, []);

  return (   
      <React.StrictMode>
    <BrowserRouter>
    <AuthProvider>
      <Approutes />
    </AuthProvider>  
    </BrowserRouter>
    </React.StrictMode>
  )
}

export default App
