import React from "react";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import contactImg from "../assets/assets_frontend/contact_image.png";

const Contact = () => {
  return (
    <Container>
      <SectionTitle
        heading={"Contact Page"}
        subHeading={"Contact Related Details"}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 mt-7 items-center mx-auto mb-10">
        {/* left side */}
        <div>
          <img
            src={contactImg}
            alt="About"
            className="h-96 rounded-2xl w-[450px] lg:ml-20"
          />
        </div>
        {/* right side */}
        <div className="space-y-4">
          <h1 className="text-black font-semibold text-2xl leading-relaxed">
            OUR OFFICE
          </h1>
          <p className="text-gray-700 leading-relaxed">
            00000 Willms Station Suite 000, Washington, USA
          </p>
          <p className="text-gray-700 leading-relaxed">
            00000 Willms Station Suite 000, Washington, USA
          </p>
          <h1 className="text-2xl font-bold text-gray-800">
            CAREERS AT PRESCRIPTO
          </h1>
          <p className="text-gray-700 leading-relaxed">
            Our vision at Prescripto is to create a seamless healthcare
            experience for every user. We aim to bridge the gap between patients
            and healthcare providers, making it easier for you to access the
            care you need, when you need it.
          </p>
          <button className="bg-white text-black font-semibold px-6 py-3 inline-flex items-center hover:bg-blue-100 border border-gray-500">
            Explore Job
          </button>
        </div>
      </div>

      {/* Related Section */}
      <div className="mt-14">
        <SectionTitle
          heading={"Related Information"}
          subHeading={"Discover more about our services and opportunities."}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="p-6 border rounded-2xl bg-gray-50 shadow-md">
            <h2 className="text-xl font-semibold mb-2 text-gray-800">
              Our Services
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Learn about the healthcare services we offer to support your
              well-being and improve healthcare access.
            </p>
          </div>
          <div className="p-6 border rounded-2xl bg-gray-50 shadow-md">
            <h2 className="text-xl font-semibold mb-2 text-gray-800">
              Client Support
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our dedicated support team is available to assist you with any
              queries or concerns.
            </p>
          </div>
          <div className="p-6 border rounded-2xl bg-gray-50 shadow-md">
            <h2 className="text-xl font-semibold mb-2 text-gray-800">
              Upcoming Events
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Stay updated with our latest events, webinars, and healthcare
              initiatives.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
