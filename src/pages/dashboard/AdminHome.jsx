import React from "react";
import SectionTitle from "../../components/SectionTitle";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { BiUser, BiShoppingBag, BiDollar, BiUserCheck } from "react-icons/bi";

const COLORS = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1"];

const AdminHome = () => {
  const axiosSecure = useAxiosSecure();

  const { data: state = {} } = useQuery({
    queryKey: ["admin-states"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-states");
      return res.data;
    },
  });

  const data = [
    { name: "Doctors", value: state.allDoctors || 0 },
    { name: "Orders", value: state.orders || 0 },
    { name: "Revenue", value: state.revenue || 0 },
    { name: "Users", value: state.users || 0 },
  ];

  return (
    <div className="p-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-h-screen text-white">
      <SectionTitle heading="Admin Home" subHeading="Admin Home Details" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {[
          {
            icon: <BiUser className="text-blue-500" size={32} />,
            label: "Total Users",
            value: state.users || 0,
          },
          {
            icon: <BiShoppingBag className="text-green-500" size={32} />,
            label: "Total Orders",
            value: state.orders || 0,
          },
          {
            icon: <BiDollar className="text-yellow-500" size={32} />,
            label: "Total Revenue",
            value: `$${state.revenue || 0}`,
          },
          {
            icon: <BiUserCheck className="text-orange-500" size={32} />,
            label: "Total Doctors",
            value: state.allDoctors || 0,
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg flex items-center gap-4 transform transition-transform hover:scale-105"
          >
            {item.icon}
            <div>
              <p className="text-2xl font-bold text-gray-900">{item.value}</p>
              <p className="text-gray-500">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white p-6 mt-6 rounded-xl shadow-md text-gray-900">
        <h2 className="text-2xl font-semibold mb-4 text-center">Overview</h2>
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={150}
              innerRadius={70}
              fill="#8884d8"
              dataKey="value"
              labelLine={false}
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip
            // contentStyle={{ backgroundColor: "#333", color: "#fffF" }}
            />
            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AdminHome;
