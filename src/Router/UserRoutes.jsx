import React from "react";
import { Route } from "react-router-dom";
import UserListing from "../pages/user management/UserListing";
import UserEdit from "../pages/user management/userEdit";
import UserLayout from "../layout/UserLayout";
import ProtectedRoutes from "../commonComponent/ProtectedRoutes";

const UserRoutes = (
  <>
    <Route path="user" element={<ProtectedRoutes> <UserLayout /></ProtectedRoutes>}>
      <Route path="" element={<UserListing />} />
      <Route path="addUser" element={<UserEdit />} />
      <Route path="editUser" element={<UserEdit />} />
    </Route>
  </>
);

export default UserRoutes;
