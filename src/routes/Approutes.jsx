import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Maduralayout from "../layout/Maduralayout";
import LoginPage from "../features/auth/LoginPage";
import Navbar from "../components/Navbar/Navbar";
import Card from "../components/card/Card";
import DashboardPage from "../components/dashboard/DashboardPage";
import SendwhatsApp from "../Pages/SendSingleMessage";
import Livechat from "../Pages/Livechat";
import Contacts from "../Pages/Contacts";
import Report from "../Pages/Report";
import Support from "../Pages/Support";
import BulkMessage from "../Pages/BulkMessage";
import CreateTemplate from "../Pages/CreateTemplate";
import SendSingleMessage from "../Pages/SendSingleMessage";
import SupportTicket from "../Pages/SupportTicket";
import TemplateLibrary from "../Pages/TemplateLibrary";
import UploadContact from "../Pages/UploadContact";
import Otp from "../features/auth/Otp";
import NotFound from "../Pages/NotFound";
import CreateAccount from "../features/auth/CreateAccount";
export default function Approutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/Register" element={<CreateAccount />} />

        <Route
          path="/dashboard"
          element={
            <Maduralayout>
              <DashboardPage />
            </Maduralayout>
          }
        />
        <Route
          path="/template"
          element={
            <Maduralayout>
              <CreateTemplate />
            </Maduralayout>
          }
        />
        <Route
          path="/template/history"
          element={
            <Maduralayout>
              <TemplateLibrary />
            </Maduralayout>
          }
        />
        <Route
          path="/send"
          element={
            <Maduralayout>
              <BulkMessage />
            </Maduralayout>
          }
        />
        <Route
          path="/send/singlemessage"
          element={
            <Maduralayout>
              <SendSingleMessage />
            </Maduralayout>
          }
        />

        <Route
          path="/live"
          element={
            <Maduralayout>
              <Livechat />
            </Maduralayout>
          }
        />
        <Route
          path="/contacts"
          element={
            <Maduralayout>
              <Contacts />
            </Maduralayout>
          }
        />
        <Route
          path="/contacts/uploadcontact"
          element={
            <Maduralayout>
              <UploadContact />
            </Maduralayout>
          }
        />
        <Route
          path="/report"
          element={
            <Maduralayout>
              <Report />
            </Maduralayout>
          }
        />
        <Route
          path="/support"
          element={
            <Maduralayout>
              <Support />
            </Maduralayout>
          }
        />
        <Route
          path="/support/ticket"
          element={
            <Maduralayout>
              <SupportTicket />
            </Maduralayout>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
