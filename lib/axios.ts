import axios from "axios";

const token = `${process.env.TOKEN}`;

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  headers: {
    Authorization: `${token}`
  },
});

export default axiosInstance;
