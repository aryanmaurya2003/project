import { Route } from "react-router-dom";
import OnboardingLayout from "../layout/Onboarding.Layout";
import Onboarding from "../pages/onboarding/Onboarding";
const OnboardingRoutes = (
  <>
    <Route path="onboard" element={<OnboardingLayout />}>
      <Route path="" element={<Onboarding />} />
    </Route>
  </>
);
export default OnboardingRoutes;
