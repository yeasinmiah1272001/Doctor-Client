import React, { useState } from "react";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import useAllDoctors from "../hooks/useAllDoctors";
import DoctorCard from "../components/DoctorCard";

const AllDoctors = () => {
  const [doctors] = useAllDoctors();
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Extract unique specialities
  const categories = [
    "All",
    ...new Set(doctors.map((item) => item.speciality)),
  ];

  // Handle filtering by category
  const filteredDoctors =
    selectedCategory === "All"
      ? doctors
      : doctors.filter((doctor) => doctor.speciality === selectedCategory);

  return (
    <Container>
      <SectionTitle
        heading={"All Doctor Page"}
        subHeading={"All Doctor Related Details"}
      />

      <div className="flex gap-8">
        {/* Category Filter Section */}
        <div className="w-1/4">
          <h2 className="text-lg font-semibold">
            Browse through the doctors specialist.
          </h2>
          <div className="mt-4 space-y-2">
            {categories.map((category, index) => (
              <div
                key={index}
                className="flex items-center gap-2 border border-gray-500 p-2"
              >
                <input
                  type="radio"
                  id={category}
                  name="category"
                  value={category}
                  checked={selectedCategory === category}
                  onChange={() => setSelectedCategory(category)}
                  className="w-4 h-4"
                />
                <label
                  htmlFor={category}
                  className="text-gray-800 cursor-pointer"
                >
                  {category}
                </label>
              </div>
            ))}
          </div>
          <button
            className="mt-4 bg-blue-500 text-white px-4 py-2 w-full rounded-lg"
            onClick={() => setSelectedCategory("All")}
          >
            Clear Filter
          </button>
        </div>

        {/* Doctors List Section */}
        <div className="w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doctor) => (
              <DoctorCard item={doctor} key={doctor._id} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500 text-lg">
              No doctors available for the selected category.
            </p>
          )}
        </div>
      </div>
    </Container>
  );
};

export default AllDoctors;
