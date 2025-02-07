import React, { useState } from "react";
import { AiOutlineCalendar } from "react-icons/ai";

const BookingSlots = () => {
  const [selectedDay, setSelectedDay] = useState("Mon");
  const [selectedTime, setSelectedTime] = useState("9:00 am");

  const days = [
    "Mon 10",
    "Tue 11",
    "Wed 12",
    "Thu 13",
    "Fri 14",
    "Sat 15",
    "Sun 16",
  ];
  const times = [
    "8:00 am",
    "8:30 am",
    "9:00 am",
    "9:30 am",
    "10:00 am",
    "10:30 am",
    "11:00 am",
    "11:30 am",
  ];

  return (
    <div className="p-6  mx-auto ">
      <h1 className="text-2xl font-bold text-gray-700 mb-4 flex items-center gap-2">
        <AiOutlineCalendar className="text-blue-600 w-6 h-6" /> Booking Slots
      </h1>

      <div className="flex  space-x-2 mb-4">
        {days.map((day) => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors duration-200 ${
              selectedDay === day
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-blue-100"
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-4 gap-2 mb-4">
        {times.map((time) => (
          <button
            key={time}
            onClick={() => setSelectedTime(time)}
            className={`px-3 py-2 rounded-md font-medium text-sm transition-colors duration-200 ${
              selectedTime === time
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-blue-100"
            }`}
          >
            {time}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BookingSlots;
