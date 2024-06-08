import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://rent-a-car-api-indol.vercel.app/api",
});

export default axiosInstance;
