import axios from "axios";
const baseUrl = import.meta.env.VITE_BASE_URL;

const app = axios.create({
  baseURL: baseUrl,
  
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
