import React from "react";
import SectionTitle from "../../components/SectionTitle";
import Container from "../../components/Container";
import useAllDoctors from "../../hooks/useAllDoctors";
import { Link } from "react-router-dom";

const SpecialDoctors = () => {
  const [doctors] = useAllDoctors();
  return (
    <Container>
      <SectionTitle
        heading={"Our Special Doctors"}
        subHeading={"Doctor-related information"}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-5">
        {doctors.slice(9, 13).map((doctor, index) => (
          <div
            key={index}
            className="border border-gray-300 shadow-xl rounded-2xl overflow-hidden bg-white flex flex-col md:flex-row items-center p-6  hover:shadow-2xl hover:shadow-black duration-300"
          >
            <img
              src={doctor.image}
              alt={doctor.name}
              className="object-cover h-72 w-full md:w-1/2 rounded-lg"
            />
            <div className="text-left mt-4 md:ml-6 flex flex-col justify-center">
              <h1 className="text-2xl font-bold text-gray-800">
                {doctor.name}
              </h1>
              <h2 className="text-lg text-blue-600 font-semibold">
                {doctor.speciality}
              </h2>
              <p className="text-xl text-gray-600 mt-1">
                Degree: <span className="font-medium">{doctor.degree}</span>
              </p>
              <p className="text-xl text-gray-600">
                Experience:{" "}
                <span className="font-medium">{doctor.experience}</span>
              </p>
              <p className="text-sl text-gray-600">
                Fee: <span className="font-semibold">${doctor.fees}</span>
              </p>
              <p className="text-sm text-gray-500 mt-2 italic">
                {doctor.about.slice(0, 80)}...
              </p>
              <Link
                to={`/appointmentDetails/${doctor._id}`}
                className="mt-4 bg-blue-600 text-white text-center px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                View Profile
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default SpecialDoctors;
