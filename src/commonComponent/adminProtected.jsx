import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function AdminRoleProtected({ children, roleRedirects = [] }) {
  const userRole = useSelector((state) => state.user.value.role);
  const navigate = useNavigate();

  useEffect(() => {
    const redirect = roleRedirects.find(item => item.role === userRole);
    if (redirect) {
      navigate(redirect.url);
    }
  }, [userRole, navigate, roleRedirects]);

  const shouldRedirect = roleRedirects.some(item => item.role === userRole);
  if (shouldRedirect) {
    return null;
  }

  return children;
}

export default AdminRoleProtected;
