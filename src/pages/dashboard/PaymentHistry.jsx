import React, { useContext } from "react";
import Container from "../../components/Container";
import SectionTitle from "../../components/SectionTitle";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { AuthContext } from "../../provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const PaymentHistry = () => {
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
      // console.log(res.data);
      return res.data;
    },
  });

  if (isLoading) return <p>Loading payment history...</p>;
  if (isError) return <p>Error loading payment history</p>;
  return (
    <Container>
      <SectionTitle
        heading={"Your Payment histry"}
        subHeading={"Histry Details"}
      />
      <div>
        <h1 className="text-2xl font-semibold text-green-400 mb-4">
          Total Payments: {payment.length}
        </h1>

        <div className="overflow-x-auto">
          <table className="table-auto w-full text-left border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 p-2">Email</th>
                <th className="border border-gray-300 p-2">Price</th>
                <th className="border border-gray-300 p-2">
                  Payment Intent ID
                </th>
                <th className="border border-gray-300 p-2">Date</th>
                <th className="border border-gray-300 p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {payment.map((item) => (
                <tr key={item._id} className="border-t">
                  <td className="border border-gray-300 p-2">{item.email}</td>
                  <td className="border border-gray-300 p-2">{item.fees}</td>
                  <td className="border border-gray-300 p-2">
                    {item.paymentIntentId}
                  </td>
                  <td className="border border-gray-300 p-2">{item.date}</td>
                  <td className="border border-gray-300 p-2">{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  );
};

export default PaymentHistry;
