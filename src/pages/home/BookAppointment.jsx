import React from "react";
import Container from "../../components/Container";
import img from "../../assets/assets_frontend/appointment_img.png";
import { BsArrowRight } from "react-icons/bs";

const BookAppointment = () => {
  return (
    <Container className="bg-blue-500 mt-10 text-white rounded-md h-auto md:h-[400px] py-8">
      <div className="flex flex-col-reverse lg:px-16 md:flex-row items-center justify-between gap-6">
        {/* Left Section */}
        <div className="text-center md:text-left max-w-lg">
          <h1 className="text-3xl md:text-5xl font-semibold mb-4">
            Book Appointment With 100+ Trusted Doctors
          </h1>
          <p className="text-sm md:text-base mb-6">
            Simply browse through our extensive list of trusted doctors,
            schedule your appointment hassle-free.
          </p>
          <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow-md inline-flex items-center hover:bg-blue-100">
            Create Accoutn <BsArrowRight className="ml-2" />
          </button>
        </div>

        {/* Right Section */}
        <div className="flex justify-center md:justify-end">
          <img
            className="w-96 max-w-md md:max-w-xl h-[370px]"
            src={img}
            alt="Doctor Banner"
          />
        </div>
      </div>
    </Container>
  );
};

export default BookAppointment;
