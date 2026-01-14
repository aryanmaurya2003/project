import CostExplorer from "../pages/Cost explorer/costExplorer";
import { Route } from "react-router-dom";
import CostExplorerLayout from "../layout/CostExplorer.layout";
import ProtectedRoutes from "../commonComponent/ProtectedRoutes";
import RoleProtected from "../commonComponent/RoleProtected";

const CostExplorerRoutes = (

 <>
    <Route path="costExplorer" element={<ProtectedRoutes> <CostExplorerLayout /></ProtectedRoutes>}>
      <Route path="" element={<CostExplorer />} />
    </Route>
  </>
    
  
);

export default CostExplorerRoutes;
