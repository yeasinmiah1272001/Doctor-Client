import React from "react";
import SectionTitle from "../../components/SectionTitle";
import Banner from "./Banner";
import Speciality from "./Speciality";
import BookAppointment from "./BookAppointment";
import TopDoctors from "./TopDoctors";
import SpecialDoctors from "./SpecialDoctors";
import MedicalSection from "./MedicalSection";

const Home = () => {
  return (
    <div>
      <Banner />
      <Speciality />
      <TopDoctors />
      <BookAppointment />
      <SpecialDoctors />
      <MedicalSection />
    </div>
  );
};

export default Home;
