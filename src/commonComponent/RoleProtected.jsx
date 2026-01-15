import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function RoleProtected({ children }) {
  const userRole = useSelector((state) => state.user.value.role);
  const navigate = useNavigate();

  useEffect(() => {
    if (userRole === "customer") {
      navigate("/dashboard/costExplorer?group=SERVICE");
    }
  }, [userRole, navigate]);

  if (userRole === "customer") {
    return null;
  }

  

  return children;
}

export default RoleProtected;
