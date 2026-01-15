import { Route } from "react-router-dom";
import OnboardingLayout from "../layout/Onboarding.Layout";
import Onboarding from "../pages/onboarding/Onboarding.jsx";
import OnboadingPage2 from "../pages/onboarding/OnboadingPage2";
import AccountListing from "../pages/onboarding/AccountListing";
import ProtectedRoutes from "../commonComponent/ProtectedRoutes";
import Onboardingpage3 from "../pages/onboarding/Onboardingpage3";
import RoleProtected from "../commonComponent/RoleProtected";
import AdminRoleProtected from "../commonComponent/adminProtected.jsx";
import { onboardRestrictRole } from "../commonComponent/data.js";
const OnboardingRoutes = (
  <>
    <Route
      path="onboard"
      element={
        <ProtectedRoutes><RoleProtected>
          <OnboardingLayout />
        </RoleProtected></ProtectedRoutes>
      }
    >
      <Route path="" element={<AccountListing />} />

      <Route path="add" element={<AdminRoleProtected roleRedirects={onboardRestrictRole}><Onboarding /></AdminRoleProtected>} />
      <Route path="add2" element={<AdminRoleProtected roleRedirects={onboardRestrictRole}><OnboadingPage2 /></AdminRoleProtected>} />
      <Route path="add3" element={<AdminRoleProtected roleRedirects={onboardRestrictRole}><Onboardingpage3 /></AdminRoleProtected>} />
    </Route>
  </>
);
export default OnboardingRoutes;
