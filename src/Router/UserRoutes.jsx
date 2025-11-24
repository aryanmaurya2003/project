import React from "react";
import { Route } from "react-router-dom";
import UserListing from "../pages/user management/UserListing";
import UserCreation from "../pages/user management/userCreation";
import UserEdit from "../pages/user management/userEdit";
import UserLayout from "../layout/UserLayout";

const UserRoutes = (
  <>
    <Route path="user" element={<UserLayout />}>
      <Route path="" element={<UserListing />} />
      <Route path="addUser" element={<UserCreation />} />
      <Route path="editUser" element={<UserEdit />} />
    </Route>
  </>
);

export default UserRoutes;
