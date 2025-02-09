import React from "react";
import Container from "../../components/Container";
import SectionTitle from "../../components/SectionTitle";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { FaUser, FaUserShield } from "react-icons/fa";

const AllUserList = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        toast.success("Admin created success");
      }
      refetch();
    });
  };

  return (
    <Container>
      <SectionTitle
        heading="All Doctors List"
        subHeading="Doctors List Related Details"
      />

      <h1 className="text-2xl font-bold text-center my-4">
        Total Users: <span className="text-blue-600">{users.length}</span>
      </h1>

      <div className="overflow-x-auto rounded-lg shadow-lg">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="border border-gray-300 px-6 py-3 text-left">
                Name
              </th>
              <th className="border border-gray-300 px-6 py-3 text-left">
                Email
              </th>
              <th className="border border-gray-300 px-6 py-3 text-left">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user.email}
                className="hover:bg-gray-100 transition-colors"
              >
                <td className="border border-gray-300 px-6 py-4">
                  {user.name}
                </td>
                <td className="border border-gray-300 px-6 py-4">
                  {user.email}
                </td>
                <td className="border border-gray-300 px-6 py-4">
                  <div className="flex items-center gap-4">
                    {user.role === "admin" ? (
                      <span className="px-3 py-1 bg-green-500 text-white text-sm rounded">
                        Admin
                      </span>
                    ) : (
                      <button
                        onClick={() => handleAdmin(user)}
                        className="flex items-center gap-1 px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
                      >
                        <FaUserShield size={20} />
                        Make Admin
                      </button>
                    )}
                    <button className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default AllUserList;
