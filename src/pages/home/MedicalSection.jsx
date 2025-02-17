import React, { useState, useEffect } from "react";
import { FaHeartbeat, FaStethoscope, FaUserMd, FaSmile } from "react-icons/fa";
import SectionTitle from "../../components/SectionTitle";
import Container from "../../components/Container";
import img from "../../assets/assets_frontend/contact_image.png";

const MedicalSection = () => {
  // Counter state
  const [counters, setCounters] = useState({
    recovered: 0,
    response: 0,
    monitoring: 0,
    satisfaction: 0,
  });

  useEffect(() => {
    // Increment counters gradually
    const interval = setInterval(() => {
      setCounters((prev) => ({
        recovered: prev.recovered < 75 ? prev.recovered + 1 : 75,
        response: prev.response < 83 ? prev.response + 1 : 83,
        monitoring: prev.monitoring < 68 ? prev.monitoring + 1 : 68,
        satisfaction: prev.satisfaction < 92 ? prev.satisfaction + 1 : 92,
      }));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container className={""}>
      <SectionTitle
        heading="Discover a Path To a Great Family Health"
        subHeading="Enhancing Life, Excelling In Care"
      />
      <div className="flex flex-col lg:flex-row items-center gap-8 mt-6">
        {/* Left Content */}
        <div className="lg:w-1/2">
          <p className="text-gray-600 mt-4">
            We provide excellent medical care to a wide variety of skin
            conditions, as well as offer a comprehensive range of procedures
            from skin rejuvenation to body contouring and ingrown hair to
            stretch marks, just to name a few.
          </p>
          <p className="text-gray-600 mt-4">
            Distinctively exploit optimal alignments for intuitive bandwidth.
            Quickly coordinate e-business applications through revolutionary
            catalysts for changes.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="flex flex-col items-center">
              <FaHeartbeat className="text-red-500 text-4xl mb-2" />
              <h2 className="text-2xl font-bold text-gray-800">
                {counters.recovered}%
              </h2>
              <p className="text-gray-600">Patients Recovered</p>
            </div>
            <div className="flex flex-col items-center">
              <FaStethoscope className="text-blue-500 text-4xl mb-2" />
              <h2 className="text-2xl font-bold text-gray-800">
                {counters.response}%
              </h2>
              <p className="text-gray-600">Situation Respond</p>
            </div>
            <div className="flex flex-col items-center">
              <FaUserMd className="text-green-500 text-4xl mb-2" />
              <h2 className="text-2xl font-bold text-gray-800">
                {counters.monitoring}%
              </h2>
              <p className="text-gray-600">Patient Monitoring</p>
            </div>
            <div className="flex flex-col items-center">
              <FaSmile className="text-yellow-500 text-4xl mb-2" />
              <h2 className="text-2xl font-bold text-gray-800">
                {counters.satisfaction}%
              </h2>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={img}
            alt="Medical Care"
            className="rounded-lg shadow-lg w-full max-w-sm"
          />
        </div>
      </div>
    </Container>
  );
};

export default MedicalSection;
