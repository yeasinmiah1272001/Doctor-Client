import React from "react";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import { useLoaderData } from "react-router-dom";
import { IoCheckmarkCircle } from "react-icons/io5";
import BookingSlots from "../components/BookingSlots";
import useAllDoctors from "../hooks/useAllDoctors";
import DoctorCard from "../components/DoctorCard";

const DoctorsDetails = () => {
  const appointmentDetails = useLoaderData();
  const category = appointmentDetails.speciality;
  const [doctors] = useAllDoctors();
  // related filed   speciality
  const relatedDoctors = doctors.filter((item) => item.speciality === category);
  console.log(relatedDoctors);
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
              className="w-full h-full"
              src={appointmentDetails.image}
              alt=""
            />
          </div>
          <div className="border border-gray-500 p-6  h-72 rounded-md ">
            <div className="mt-6 space-y-2 ">
              <h1 className="text-2xl font-semibold text-black flex items-center gap-2">
                {appointmentDetails.name}
                <IoCheckmarkCircle className="text-blue-500" />
              </h1>
              <div className="flex items-center gap-2  ">
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
                {" "}
                Appointment Fees:{" "}
                <span className="text-black font-medium mt-2">
                  {" "}
                  {appointmentDetails.fees} $
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <BookingSlots />
      <button className=" p-4 ml-6 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
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
