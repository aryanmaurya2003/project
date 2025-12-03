import { Route } from "react-router-dom";
import OnboardingLayout from "../layout/Onboarding.Layout";
import Onboarding from "../pages/onboarding/Onboarding";
import OnboadingPage2 from "../pages/onboarding/OnboadingPage2";
import AccountListing from "../pages/onboarding/AccountListing";

const OnboardingRoutes = (
  <>
    <Route path="onboard" element={<OnboardingLayout />}>
          <Route path="" element={<AccountListing/>}/>

      <Route path="add" element={<Onboarding />} />
      <Route path="add2" element={<OnboadingPage2 />} />
    </Route>
  </>
);
export default OnboardingRoutes;
