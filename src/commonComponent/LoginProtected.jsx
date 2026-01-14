import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function LoginProtected({children}) {
  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem("token"));
  console.log("the token in login pkjdsalrotected is this ---- ", token);
  useEffect(() => {
    if(token) {
      const userData = JSON.parse(localStorage.getItem("userData"));
      if(userData?.role === "admin" || userData?.role === "read_Only") {
        navigate("/dashboard/user");
      } else {
        navigate("/dashboard/costExplorer?group=SERVICE");
      }
    }
  }, [token]);

  if(token) {
    return null; // Don't render children while redirecting
  }
  
  return children;
}

export default LoginProtected
