import CostExplorer from "../pages/Cost explorer/costExplorer";
import { Route } from "react-router-dom";
import CostExplorerLayout from "../layout/CostExplorer.layout";
const CostExplorerRoutes = (

 <>
    <Route path="costExplorer" element={<CostExplorerLayout />}>
      <Route path="" element={<CostExplorer />} />
    </Route>
  </>
    
  
);

export default CostExplorerRoutes;
