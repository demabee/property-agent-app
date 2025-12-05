import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 5000,
});

http.interceptors.request.use(
  (config) => {
    console.log(`[Request] ${config.method?.toUpperCase()} → ${config.url}`);
    return config;
  },
  (error) => {
    console.error("[Request Error]", error);
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (response) => {
    console.log("[Response]", response.status, response.data);
    return response;
  },
  (error) => {
    console.error("[Response Error]", error.response?.status, error.response?.data);
    alert("Something went wrong. Check console.");
    return Promise.reject(error);
  }
);

export default http;
