
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Dashboard from "./layout/Layout";
import UserRoutes from "./Router/UserRoutes";
import OnboardingRoutes from "./Router/Onboarding";
import CostExplorerRoutes from "./Router/CostExplorer";
import AwsRoutes from "./Router/AwsRoutes";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}>
          {UserRoutes}
          {OnboardingRoutes}
          {CostExplorerRoutes}
          {AwsRoutes}
        </Route>
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </>
  );
}

export default App;
