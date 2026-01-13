import axios from "axios";

const app = axios.create({
  baseURL: "http://localhost:8080",
  // timeout: 3000,
  withCredentials: true,
});

app.interceptors.request.use(
  (config) => {
    const token = JSON.parse(localStorage.getItem("token"));
    const authtoken = `Bearer ${token}`;
    config.headers.Authorization = authtoken;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

app.interceptors.response.use(
  (config) => {
    console.log("response Config:", config);
    return config;
  },
  (error) => {
    console.log("error is this", error);
    if (error.status == 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("userAuthenticated");
      localStorage.removeItem("userData");
    }

    return Promise.reject(error);
  }
);

export default app;
