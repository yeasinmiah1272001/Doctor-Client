import React from "react";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="relative w-full max-w-2xl mx-auto py-4 px-2 mt-4">
      {/* Left diagonal accent with gradient */}
      <div className="absolute left-0 top-0 h-full transform -skew-x-12">
        <div className="w-2 h-full bg-gradient-to-b from-red-400 to-orange-400"></div>
      </div>

      {/* Right diagonal accent with gradient */}
      <div className="absolute right-0 top-0 h-full transform skew-x-12">
        <div className="w-2 h-full bg-gradient-to-b from-red-400 to-orange-400"></div>
      </div>

      {/* Main content container */}
      <div className="relative bg-white border-t-2 border-b-2 border-red-400 py-4 text-center shadow-sm">
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400 font-extrabold text-2xl md:text-3xl uppercase">
          {heading}
        </h2>
        <p className="text-gray-700 text-sm md:text-base mt-1 italic max-w-xl mx-auto">
          {subHeading}
        </p>
      </div>
    </div>
  );
};

export default SectionTitle;
