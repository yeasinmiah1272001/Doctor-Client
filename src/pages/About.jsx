import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import aboutImg from "../assets/assets_frontend/about_image.png";

const About = () => {
  return (
    <Container>
      <SectionTitle
        heading={"About Page"}
        subHeading={"About Related Details"}
      />

      <div className=" p-10 rounded-2xl ">
        {/* About Section */}
        <div className="grid grid-cols-1 md:grid-cols-2  items-center mx-auto mb-10">
          {/* left side */}
          <div className="">
            <img
              src={aboutImg}
              alt="About"
              className=" h-96 rounded-2xl w-[450px] lg:ml-16"
            />
          </div>
          {/* right side */}
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Welcome to Prescripto, your trusted partner in managing your
              healthcare needs conveniently and efficiently. At Prescripto, we
              understand the challenges individuals face when it comes to
              scheduling doctor appointments and managing their health records.
            </p>
            <h1 className="text-2xl font-bold text-gray-800">Our Vision</h1>
            <p className="text-gray-700 leading-relaxed">
              Our vision at Prescripto is to create a seamless healthcare
              experience for every user. We aim to bridge the gap between
              patients and healthcare providers, making it easier for you to
              access the care you need, when you need it.
            </p>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <h3 className="text-center text-3xl font-bold text-gray-800 mb-10">
          WHY CHOOSE US
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Efficiency Card */}
          <div className="p-6 bg-gray-50 rounded-xl text-center shadow hover:shadow-lg transition-shadow">
            <FaCheckCircle className="text-4xl text-green-500 mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-gray-700">EFFICIENCY</h4>
            <p className="text-gray-600 mt-2">
              Streamlined appointment scheduling that fits into your busy
              lifestyle.
            </p>
          </div>
          {/* Convenience Card */}
          <div className="p-6 bg-gray-50 rounded-xl text-center shadow hover:shadow-lg transition-shadow">
            <FaCheckCircle className="text-4xl text-green-500 mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-gray-700">CONVENIENCE</h4>
            <p className="text-gray-600 mt-2">
              Access to a network of trusted healthcare professionals in your
              area.
            </p>
          </div>
          {/* Personalization Card */}
          <div className="p-6 bg-gray-50 rounded-xl text-center shadow hover:shadow-lg transition-shadow">
            <FaCheckCircle className="text-4xl text-green-500 mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-gray-700">
              PERSONALIZATION
            </h4>
            <p className="text-gray-600 mt-2">
              Tailored recommendations and reminders to help you stay on top of
              your health.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
