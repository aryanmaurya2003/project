import "./App.css";
import React from "react";  
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login/Login";
import Dashboard from "./layout/Layout";
import UserRoutes from "./Router/UserRoutes";
import OnboardingRoutes from "./Router/Onboarding";
import CostExplorerRoutes from "./Router/CostExplorer";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginProtected from "./commonComponent/LoginProtected";

function App() {




  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} theme="colored" />
      <Routes>
        <Route path="/" element={<LoginProtected><Login /></LoginProtected>} />
        
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Navigate to="user" replace/>}/>
          {UserRoutes}
          {OnboardingRoutes}
          {CostExplorerRoutes}
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
