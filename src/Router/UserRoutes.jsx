import React from "react";
import { Route } from "react-router-dom";
import UserListing from "../pages/user management/UserListing";
import UserEdit from "../pages/user management/userEdit";
import UserLayout from "../layout/UserLayout";
import ProtectedRoutes from "../commonComponent/ProtectedRoutes";
import AdminRoleProtected from "../commonComponent/adminProtected";
import { userRestrictRole,customerRestrict } from "../commonComponent/data";

const UserRoutes = (
  <>
    <Route path="user" element={<ProtectedRoutes> <UserLayout /></ProtectedRoutes>}>
      <Route path="" element={<AdminRoleProtected roleRedirects={customerRestrict}><UserListing /></AdminRoleProtected>} />
      <Route path="addUser" element={<AdminRoleProtected roleRedirects={userRestrictRole}><UserEdit /></AdminRoleProtected>} />
      <Route path="editUser" element={<AdminRoleProtected roleRedirects={userRestrictRole}><UserEdit /></AdminRoleProtected>} />
    </Route>
  </>
);

export default UserRoutes;
