import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://doctor-server-pi.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
