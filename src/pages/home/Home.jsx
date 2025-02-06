import React from "react";
import SectionTitle from "../../components/SectionTitle";
import Banner from "./Banner";
import Speciality from "./Speciality";
import BookAppointment from "./BookAppointment";

const Home = () => {
  return (
    <div>
      <Banner />
      <Speciality />
      <BookAppointment />
    </div>
  );
};

export default Home;
