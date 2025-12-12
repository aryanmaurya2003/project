import React, { useState } from "react";
import cloudkeeper from "../../assets/Cloudkeeper_New.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Footer from "../../commonComponent/Footer";
import { loginApi } from "../../API/Login.api";
import { toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setErrors] = useState({});

  const validateFeild = (email, password) => {
    const newErrors = {};

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const clickhandler = async (e) => {
    e.preventDefault();

    if (validateFeild(email, password)) {
      const response = await loginApi("/login", {
        email: email,
        password: password,
      });
      console.log("Login API Response:", response.data);

      if (response.error) {
        toast.error("Login Failed: " + response.error.data.message);
        console.log("---------", response);
      }
      else if (response.data.status == 202) {
        toast.success("Login Successful");
           setTimeout(() => {   },1500)
        navigate("/dashboard/user");
      }
    }
  };
  return (
    <div className=" flex  flex-col justify-between">
      <div className="w-screen h-[calc(100vh-40px)] flex justify-center items-center">
        <div className="w-[471px] h-[500px] mt-9   ">
          <div className="w-full flex justify-center items-center ">
            <img
              src={cloudkeeper}
              alt="Cloudkeeper"
              className="w-[210px] h-[46px]"
            />
          </div>
          <form>
            <label
              htmlFor="email"
              className="block font-extralight text-[14px] mt-[25px]"
            >
              Email
            </label>
            <input
              className="email block w-full h-[43px] border border-slate-300 indent-3 mt-3.5 rounded-sm placeholder:text-[14px] placeholder:text-slate-400"
              type="text"
              placeholder="Business email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error.email && <div>{error.email}</div>}

            <label
              htmlFor="password "
              className="block mt-8 font-medium text-slate-900 text-[14px]"
            >
              Password
            </label>
            <input
              className="password block w-full h-[43px] border  border-slate-300 indent-3 mt-3.5 rounded-sm placeholder:text-[14px] placeholder:text-slate-400"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error.password && <div>{error.password}</div>}

            <div className="text-end mt-4">
              {" "}
              <Link
                to={"#"}
                className="skyColor 
                        text-[12px] font-semibold"
              >
                Forgot Password
              </Link>
            </div>

            <button
              className="login w-full h-[45px]  skyBackColor text-white mt-9  rounded-lg text-[14px]"
              onClick={clickhandler}
            >
              LOGIN
            </button>
          </form>
        </div>
      </div>

      <div>
        <Footer
          left={`Have Question ? talk to our Team`}
          right="CloudKeeper 2025 | All right reserved"
        />
      </div>
    </div>
  );
}

export default Login;
