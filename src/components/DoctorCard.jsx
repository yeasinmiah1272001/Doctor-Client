import React from "react";
import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";

const DoctorCard = ({ item }) => {
  return (
    <div className="border border-gray-400 rounded-md overflow-hidden">
      <div className="bg-[#EAEFFF] mx-auto group">
        <Link to={`/appointmentDetails/${item._id}`}>
          <img
            className="h-60 w-full object-cover mx-auto group-hover:scale-105 transition-transform duration-500"
            src={item.image}
            alt={`${item.name}'s profile`}
          />
        </Link>
      </div>
      <div className="mt-1 p-4 space-y-2">
        <div className="text-green-400 flex items-center gap-2">
          <GoDotFill />
          <p>Available</p>
        </div>
        <h1 className="text-black text-xl font-semibold">{item.name}</h1>
        <p className="text-gray-400">{item.speciality}</p>
      </div>
    </div>
  );
};

export default DoctorCard;
