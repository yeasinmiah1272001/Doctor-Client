import React from "react";
import SectionTitle from "../../components/SectionTitle";
import img1 from "../../assets/assets_frontend/Pediatricians.svg";
import img2 from "../../assets/assets_frontend/Neurologist.svg";
import img3 from "../../assets/assets_frontend/Gynecologist.svg";
import img4 from "../../assets/assets_frontend/General_physician.svg";
import img5 from "../../assets/assets_frontend/Gastroenterologist.svg";
import img6 from "../../assets/assets_frontend/dropdown_icon.svg";
import Container from "../../components/Container";

const Speciality = () => {
  const specialties = [
    { img: img1, title: "Pediatricians" },
    { img: img2, title: "Neurologist" },
    { img: img3, title: "Gynecologist" },
    { img: img4, title: "General physician" },
    { img: img5, title: "Gastroenterologist" },
    { img: img1, title: "Dropdown" },
  ];

  return (
    <Container>
      <SectionTitle
        heading={"Find by Speciality"}
        subHeading={
          "Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free."
        }
      />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6  mt-6 mx-auto items-center">
        {specialties.map((speciality, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4 hover:shadow-lg rounded-xl transition-all duration-200 bg-white"
          >
            <img
              src={speciality.img}
              alt={speciality.title}
              className="w-16 h-16 mb-2"
            />
            <span className="text-sm font-semibold">{speciality.title}</span>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Speciality;
