import React from "react";
import SectionTitle from "../../components/SectionTitle";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const Appointments = () => {
  const axiosSecure = useAxiosSecure();

  const { data: payments = [] } = useQuery({
    queryKey: ["payments"],
    queryFn: async () => {
      const res = await axiosSecure.get("/payments");
      console.log(res.data);
      return res.data;
    },
  });

  const groupedPayments = payments.reduce((acc, item) => {
    if (!acc[item.email]) {
      acc[item.email] = {
        ...item,
        totalOrder: item.totalOrder || 0,
        totalPayments: 1,
        totalFees: item.fees || 0,
      };
    } else {
      acc[item.email].totalOrder += item.totalOrder || 0;
      acc[item.email].totalPayments += 1;
      acc[item.email].totalFees += item.fees || 0;
    }
    return acc;
  }, {});

  const uniquePayments = Object.values(groupedPayments);

  return (
    <div>
      <SectionTitle
        heading={"Appointments Page"}
        subHeading={"Appointments Related Details"}
      />
      <div>
        <h1 className="text-2xl font-semibold text-green-400 mb-4">
          Total Unique Emails: {uniquePayments.length}
        </h1>

        <div className="overflow-x-auto">
          <table className="table-auto w-full text-left border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 p-2">Email</th>
                <th className="border border-gray-300 p-2">Total Orders</th>

                <th className="border border-gray-300 p-2">Total Fees</th>
                <th className="border border-gray-300 p-2">
                  Payment Intent ID
                </th>
                <th className="border border-gray-300 p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {uniquePayments.map((item) => (
                <tr key={item._id} className="border-t">
                  <td className="border border-gray-300 p-2">{item.email}</td>

                  <td className="border border-gray-300 p-2">
                    {item.totalPayments}
                  </td>
                  <td className="border border-gray-300 p-2">
                    ${item.totalFees.toFixed(2)}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {item.paymentIntentId}
                  </td>
                  <td className="border border-gray-300 p-2">{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
