import { Route } from "react-router-dom";
import AwsService from "../pages/aws service/AwsService";
import Awslayout from "../layout/Aws.layout";
import ProtectedRoutes from "../commonComponent/ProtectedRoutes";
const AwsRoutes = (
  <>
    <Route path="aws" element={  <ProtectedRoutes> <Awslayout /></ProtectedRoutes>}>
      <Route path="" element={<AwsService />} />
    </Route>
  </>
);
export default AwsRoutes;
