import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Lazy load all pages/components
const Maduralayout = lazy(() => import("../layout/Maduralayout"));
const LoginPage = lazy(() => import("../features/auth/LoginPage"));
const Otp = lazy(() => import("../features/auth/Otp"));
const CreateAccount = lazy(() => import("../features/auth/CreateAccount"));
const DashboardPage = lazy(() => import("../components/dashboard/DashboardPage"));
const CreateTemplate = lazy(() => import("../Pages/CreateTemplate"));
const TemplateLibrary = lazy(() => import("../Pages/TemplateLibrary"));
const BulkMessage = lazy(() => import("../Pages/BulkMessage"));
const SendSingleMessage = lazy(() => import("../Pages/SendSingleMessage"));
const Livechat = lazy(() => import("../Pages/Livechat"));
const Contacts = lazy(() => import("../Pages/Contacts"));
const UploadContact = lazy(() => import("../Pages/UploadContact"));
const Report = lazy(() => import("../Pages/Report"));
const Support = lazy(() => import("../Pages/Support"));
const SupportTicket = lazy(() => import("../Pages/SupportTicket"));
const NotFound = lazy(() => import("../Pages/NotFound"));

export default function Approutes() {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
       console.log("isLoggedIn",isLoggedIn);
       

  return (
    <BrowserRouter>
      <Suspense fallback={<div className="text-center mt-10"></div>}>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<LoginPage />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/Register" element={<CreateAccount />} />

          {/* Protected routes – rendered only if logged in */}
          {isLoggedIn && (
            <>
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
            </>
          )}

          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
