import React from "react";
import { BsArrowRight } from "react-icons/bs";
import banner from "../../assets/assets_frontend/header_img.png";
import Container from "../../components/Container";

const Banner = () => {
  return (
    <div className="bg-blue-500 text-white h-auto md:h-[520px] py-8">
      <Container className="flex flex-col-reverse md:flex-row items-center justify-between gap-6">
        {/* Left Section */}
        <div className="text-center md:text-left max-w-lg">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Book Appointment With Trusted Doctors
          </h1>
          <p className="text-sm md:text-base mb-6">
            Simply browse through our extensive list of trusted doctors,
            schedule your appointment hassle-free.
          </p>
          <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow-md inline-flex items-center hover:bg-blue-100">
            Book Appointment <BsArrowRight className="ml-2" />
          </button>
        </div>

        {/* Right Section */}
        <div className="flex justify-center md:justify-end">
          <img
            className="w-full max-w-md md:max-w-xl h-auto"
            src={banner}
            alt="Doctor Banner"
          />
        </div>
      </Container>
    </div>
  );
};

export default Banner;
