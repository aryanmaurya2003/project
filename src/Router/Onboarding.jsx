import { Route } from "react-router-dom";
import OnboardingLayout from "../layout/Onboarding.Layout";
import Onboarding from "../pages/onboarding/Onboarding";
import OnboadingPage2 from "../pages/onboarding/OnboadingPage2";
import AccountListing from "../pages/onboarding/AccountListing";
import ProtectedRoutes from "../commonComponent/ProtectedRoutes";
import Onboardingpage3 from "../pages/onboarding/Onboardingpage3";

const OnboardingRoutes = (
  <>
    <Route
      path="onboard"
      element={
        <ProtectedRoutes>
          <OnboardingLayout />
        </ProtectedRoutes>
      }
    >
      <Route path="" element={<AccountListing />} />

      <Route path="add" element={<Onboarding />} />
      <Route path="add2" element={<OnboadingPage2 />} />
      <Route path="add3" element={<Onboardingpage3 />} />
    </Route>
  </>
);
export default OnboardingRoutes;
