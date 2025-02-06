import React from "react";
import SectionTitle from "../../components/SectionTitle";
import Banner from "./Banner";
import Speciality from "./Speciality";
import BookAppointment from "./BookAppointment";
import TopDoctors from "./TopDoctors";

const Home = () => {
  return (
    <div>
      <Banner />
      <Speciality />
      <TopDoctors />
      <BookAppointment />
    </div>
  );
};

export default Home;
