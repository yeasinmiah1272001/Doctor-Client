import React, { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import SectionTitle from "../../components/SectionTitle";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const UserHome = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);

  const {
    data: payment = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user?.email}`);
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-10 h-10 rounded-full bg-gray-300 animate-pulse"></div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
        <p className="text-lg font-semibold">Error loading data.</p>
      </div>
    );
  }

  const chartData = payment.map((fee, index) => ({
    name: `Payment ${index + 1}`,
    fees: fee.fees,
  }));

  const totalFees = payment.reduce((sum, fee) => sum + fee.fees, 0);

  return (
    <div className="p-6">
      <SectionTitle
        heading={"User Home"}
        subHeading={"User Home Related Details"}
      />

      <div className="p-6 shadow-lg rounded-2xl mt-6 bg-white">
        <h2 className="text-2xl font-bold mb-4">User Information</h2>

        <p className="text-lg">Email: {user?.email}</p>
        <h2 className="text-2xl font-bold mt-6 mb-4">Payment Summary</h2>
        <p className="text-lg font-semibold mb-2">
          Total Fees Paid: ${totalFees}
        </p>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <XAxis dataKey="name" stroke="#8884d8" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="fees" fill="#8884d8" radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
        <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg">
          View Details
        </button>
      </div>
    </div>
  );
};

export default UserHome;
