import React from "react";
import SectionTitle from "../../components/SectionTitle";
import useCarts from "../../hooks/useCarts";
import { IoCheckmarkCircle } from "react-icons/io5";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import Container from "../../components/Container";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserCarts = () => {
  const [doctorsCart, refetch] = useCarts();
  // const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  const totalPrice = doctorsCart.reduce((sum, doctor) => sum + doctor.fees, 0);

  const handleRemove = (email) => {
    axiosSecure.delete(`/doctors-carts/${email}`).then((res) => {
      if (res.data.deletedCount > 0) {
        toast("Deleted successfully");
      }
      refetch();
    });
  };

  return (
    <Container>
      <SectionTitle
        heading={"Carts Page"}
        subHeading={"Carts Related Details"}
      />
      <div className="flex items-center justify-between mx-6">
        <h1 className="text-xl font-semibold">Cart: {doctorsCart.length}</h1>
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-semibold">Fees: {totalPrice} $</h1>
          <button className="bg-blue-500 animate-bounce text-white px-2 py-1 rounded-lg hover:bg-blue-600 transition">
            Pay
          </button>
        </div>
      </div>

      <div>
        {doctorsCart.map((doctor) => (
          <div key={doctor._id}>
            <div className="mt-7">
              <div className="flex items-center gap-10">
                <div className="bg-blue-500 w-96 h-72 rounded-md">
                  <img
                    className="w-full h-full object-cover rounded-md"
                    src={doctor.image}
                    alt={doctor.name}
                  />
                </div>
                <div className="border border-gray-500 p-6 h-72 rounded-md">
                  <div className="mt-6 space-y-2">
                    <h1 className="text-2xl font-semibold text-black flex items-center gap-2">
                      {doctor.name}
                      <IoCheckmarkCircle className="text-blue-500" />
                    </h1>
                    <div className="flex items-center gap-2">
                      <h2>{doctor.degree}</h2> -<h3>{doctor.speciality}</h3>
                      <span className="border text-sm h-8 text-center items-center border-gray-400 rounded-full p-2">
                        {doctor.experience}
                      </span>
                    </div>
                    <div>
                      <h1 className="text-2xl font-semibold text-black">
                        About
                      </h1>
                      <p>{doctor.about}</p>
                    </div>
                    <h2>
                      Appointment Fees:
                      <span className="text-black font-medium mt-2 ml-2">
                        {doctor.fees} $
                      </span>
                    </h2>
                    <div className="space-x-4">
                      <button
                        onClick={() => handleRemove(doctor.email)}
                        className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                      <button className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600">
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default UserCarts;
