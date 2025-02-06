import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../hooks/useAxiosPublic";
const useAllDoctors = () => {
  const axiosPublic = useAxiosPublic();
  const { data: doctors = [], refetch } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      const res = await axiosPublic.get("/doctors");
      //   console.log(res.data);
      return res.data;
    },
  });
  return [doctors, refetch];
};

export default useAllDoctors;
