import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useCarts = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const { data: doctorsCart = [], refetch } = useQuery({
    queryKey: ["doctors-carts", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/doctors-carts/${user?.email}`);
      // console.log("res cart", res.data);
      return res.data;
    },
  });
  return [doctorsCart, refetch];
};

export default useCarts;
