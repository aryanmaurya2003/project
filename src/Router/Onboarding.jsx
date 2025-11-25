import { Route } from "react-router-dom";
import OnboardingLayout from "../layout/Onboarding.Layout";
import Onboarding from "../pages/onboarding/Onboarding";
import OnboadingPage2 from "../pages/onboarding/OnboadingPage2";
const OnboardingRoutes = (
  <>
    <Route path="onboard" element={<OnboardingLayout />}>
      <Route path="" element={<Onboarding />} />
      <Route path="add" element={<OnboadingPage2 />} />
    </Route>
  </>
);
export default OnboardingRoutes;
