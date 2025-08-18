import React, { lazy, Suspense, useEffect, useState } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import SuperAdminPage from "../components/Super_Admin_Page/SuperAdminPage";
import UserManagement from "../components/Super_Admin_Page/UserManagement";
import AccountDetails from "../components/Super_Admin_Page/AccountDetails";
import UserActivityLog from "../components/Super_Admin_Page/UserActivityLog";
import UserAccessControl from "../components/Super_Admin_Page/UserAccessControl";

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
const Chatbot = lazy(() => import("../Pages/Chatbot"));

//SUPER-ADMIN

export default function Approutes() {
  const { userId ,role  } = useAuth()
  return (
    <Suspense fallback={<div className="text-center mt-10"></div>}>
      <Routes>

        <Route
          path="/"
          element={!userId ? <LoginPage /> : <Navigate to="/Performance-Hub" />}
        />
        <Route
          path="/otp"
          element={!userId ? <Otp /> : <Navigate to="/Performance-Hub" />}
        />
        <Route
          path="/Register"
          element={!userId ? <CreateAccount /> : <Navigate to="/Performance-Hub" />}
        />

        {/* Protected routes */}

       {/* {role === "superadmin" && (
      <><Route
            path="/admin_dashboard"
            element={<Maduralayout>
              <SuperAdminPage />
            </Maduralayout>} />
            <Route
              path="/admin-userlist"
              element={<Maduralayout>
                <UserManagement />
              </Maduralayout>} />

                <Route
              path="/account-details"
              element={<Maduralayout>
                <AccountDetails />
              </Maduralayout>} />
              <Route
              path="/useraccess-control"
              element={<Maduralayout>
                <UserAccessControl />
              </Maduralayout>} />
                 <Route
              path="/useractivity-log"
              element={<Maduralayout>
                <UserActivityLog />
              </Maduralayout>} />
              </>
    )} */}
         {/* {userId && ( */}
          <>
            <Route
              path="/Performance-Hub"
              element={
                <Maduralayout>
                  <DashboardPage />
                </Maduralayout>
              }
            />
            <Route
              path="/Layout-Hub"
              element={
                <Maduralayout>
                  <CreateTemplate />
                </Maduralayout>
              }
            />
            <Route
              path="/Layout-Hub/Library"
              element={
                <Maduralayout>
                  <TemplateLibrary />
                </Maduralayout>
              }
            />
            <Route
              path="/Send-Message"
              element={
                <Maduralayout>
                  <BulkMessage />
                </Maduralayout>
              }
            />
            <Route
              path="/Send-Message/Individual"
              element={
                <Maduralayout>
                  <SendSingleMessage />
                </Maduralayout>
              }
            />
            <Route
              path="/Realtime-chat"
              element={
                <Maduralayout>
                  <Livechat />
                </Maduralayout>
              }
            />
            <Route
              path="/Connections"
              element={
                <Maduralayout>
                  <Contacts />
                </Maduralayout>
              }
            />
            <Route
              path="/Connections/uploadcontact"
              element={
                <Maduralayout>
                  <UploadContact />
                </Maduralayout>
              }
            />
            <Route
              path="/Analytics"
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
                <Route
              path="/Chatbot"
              element={
                <Maduralayout>
                  < Chatbot />
                </Maduralayout>
              }
            />


          </>
        {/* )} */}

        {/* Fallback route */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </Suspense>
  );
}

