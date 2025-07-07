import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Maduralayout from '../layout/Maduralayout'
import LoginPage from '../features/auth/LoginPage'
import Navbar from '../components/Navbar/Navbar'
import Card from '../components/card/Card'
import DashboardPage from '../components/dashboard/DashboardPage'
import SendwhatsApp from '../Pages/SendwhatsApp'
import Livechat from '../Pages/Livechat'
import Contacts from '../Pages/Contacts'
import Report from '../Pages/Report'
import Support from '../Pages/Support'
import BulkMessage from '../Pages/BulkMessage'
import CreateTemplate from '../Pages/CreateTemplate'

export default function Approutes() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<Maduralayout><DashboardPage /></Maduralayout>} />
            {/* <Route path="/send" element={<Maduralayout><SendwhatsApp /></Maduralayout>} /> */}
            <Route path="/send" element={<Maduralayout><BulkMessage/></Maduralayout>} />
            <Route path="/live" element={<Maduralayout><Livechat/></Maduralayout>} />
            <Route path="/contacts" element={<Maduralayout><Contacts /></Maduralayout>} />
            <Route path="/report" element={<Maduralayout><Report/></Maduralayout>} />
             <Route path="/support" element={<Maduralayout><Support /></Maduralayout>} />
            {/* <Route path=/' element={<LoginPage/>} /> */}
         </Routes>
      </BrowserRouter>
   )
}
