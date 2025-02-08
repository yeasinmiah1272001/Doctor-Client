import React, { useContext } from "react";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import { useLoaderData, useNavigate } from "react-router-dom";
import { IoCheckmarkCircle } from "react-icons/io5";
import BookingSlots from "../components/BookingSlots";
import useAllDoctors from "../hooks/useAllDoctors";
import DoctorCard from "../components/DoctorCard";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../hooks/useAxiosPublic";
import toast from "react-hot-toast";

const DoctorsDetails = () => {
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const appointmentDetails = useLoaderData();
  const category = appointmentDetails.speciality;
  const [doctors] = useAllDoctors();
  const relatedDoctors = doctors.filter((item) => item.speciality === category);

  const handleAddToAppointment = () => {
    if (user) {
      const doctorInfo = {
        name: appointmentDetails.name,
        doctorsId: appointmentDetails._id,
        image: appointmentDetails.image,
        fees: appointmentDetails.fees,
        about: appointmentDetails.about,
        speciality: appointmentDetails.speciality,
        degree: appointmentDetails.degree,
        experience: appointmentDetails.experience,
        email: user.email,
        userName: user.name,
      };
      axiosPublic.post(`/doctors-carts`, doctorInfo).then((res) => {
        console.log(res.data);
        if (res.data.intertedId) {
          Swal.fire({
            title: "Appointment Booked!",
            text: "Your appointment has been successfully booked.",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
        toast.success("appointment success");
      });
    } else {
      Swal.fire({
        title: "You are not logged in!",
        text: "Please log in to add items to your cart.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Log In",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };

  return (
    <Container>
      <SectionTitle
        heading={"Doctors Appointment"}
        subHeading={"Appointment Related Details"}
      />
      <div className="mt-7">
        <div className="flex items-center gap-10">
          <div className="bg-blue-500 w-96 h-72 rounded-md">
            <img
              className="w-full h-full object-cover rounded-md"
              src={appointmentDetails.image}
              alt={appointmentDetails.name}
            />
          </div>
          <div className="border border-gray-500 p-6 h-72 rounded-md">
            <div className="mt-6 space-y-2">
              <h1 className="text-2xl font-semibold text-black flex items-center gap-2">
                {appointmentDetails.name}
                <IoCheckmarkCircle className="text-blue-500" />
              </h1>
              <div className="flex items-center gap-2">
                <h2>{appointmentDetails.degree}</h2> -
                <h3>{appointmentDetails.speciality}</h3>
                <span className="border text-sm h-8 text-center items-center border-gray-400 rounded-full p-2">
                  {appointmentDetails.experience}
                </span>
              </div>
              <div>
                <h1 className="text-2xl font-semibold text-black">About</h1>
                <p>{appointmentDetails.about}</p>
              </div>
              <h2>
                Appointment Fees:
                <span className="text-black font-medium mt-2">
                  {appointmentDetails.fees} $
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <BookingSlots />
      <button
        onClick={handleAddToAppointment}
        className="p-4 ml-6 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        Book an appointment
      </button>

      <div>
        <SectionTitle
          heading={"Related Doctors"}
          subHeading={"Appointment Related Details"}
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center mx-auto mt-4">
          {relatedDoctors.map((item) => (
            <DoctorCard item={item} key={item._id} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default DoctorsDetails;
