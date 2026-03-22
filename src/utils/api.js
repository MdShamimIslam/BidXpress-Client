import axios from "axios";

const baseURL = import.meta.env.VITE_BACKEND_URL || "https://bidly-server-nu.vercel.app/api";
const api = axios.create({ baseURL, withCredentials: true });

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("user");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default api;
