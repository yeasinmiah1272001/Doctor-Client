import React from "react";
import useAllDoctors from "../../hooks/useAllDoctors";
import Container from "../../components/Container";
import SectionTitle from "../../components/SectionTitle";
import DoctorCard from "../../components/DoctorCard";

const TopDoctors = () => {
  const [doctors] = useAllDoctors();
  console.log("all", doctors);
  return (
    <Container>
      <SectionTitle
        heading={"Top Doctors to Book"}
        subHeading={
          "Simply browse through our extensive list of trusted doctors."
        }
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mx-auto mt-8">
        {doctors.slice(0, 8).map((item) => (
          <DoctorCard key={item._id} item={item} />
        ))}
      </div>
    </Container>
  );
};

export default TopDoctors;
