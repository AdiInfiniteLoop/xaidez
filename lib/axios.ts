import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
});

axiosInstance.interceptors.request.use((config) => {
  const token = process.env.NEXT_PUBLIC_TOKEN
  if (token) {
    config.headers.Authorization = `${token}`
  } else {
    console.warn("⚠️ No token found in env")
  }
  return config
})

export default axiosInstance;
