import axios from "axios";

const API = axios.create({
  // ✅ LOCAL + DEPLOY FRIENDLY
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://jobtrackr-hxk9.onrender.com//api" // 👈 apna backend URL
      : "http://localhost:5000/api",
});

// ✅ TOKEN INTERCEPTOR (SAME LOGIC, SAFE)
API.interceptors.request.use(
  (req) => {
    const token = localStorage.getItem("token");
    if (token) {
      req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
  },
  (error) => Promise.reject(error)
);

export default API;
