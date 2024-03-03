"use client";
import { useState } from "react";

const scheduleData = {
  day1: [
    { name: "Event 1", time: "10:00 AM", location: "Location 1" },
    { name: "Event 2", time: "12:00 PM", location: "Location 2" },
    // Add more events for day 1
  ],
  day2: [
    { name: "Event A", time: "9:00 AM", location: "Location A" },
    { name: "Event B", time: "11:00 AM", location: "Location B" },
    // Add more events for day 2
  ],
  day3: [
    { name: "Event X", time: "1:00 PM", location: "Location X" },
    { name: "Event Y", time: "3:00 PM", location: "Location Y" },
    // Add more events for day 3
  ],
};

const Schedule = ({ data }) => {
  const [selectedDay, setSelectedDay] = useState("day1");

  const handleChangeDay = (day) => {
    setSelectedDay(day);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Schedule</h1>
      <div className="flex mb-4 space-x-4">
        {Object.keys(data).map((day) => (
          <button
            key={day}
            onClick={() => handleChangeDay(day)}
            className={`px-4 py-2 rounded-full ${
              selectedDay === day
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            {day}
          </button>
        ))}
      </div>
      <div>
        {data[selectedDay].map((event, index) => (
          <div
            key={index}
            className="p-4 rounded-md border border-gray-200 hover:border-blue-500 hover:shadow-lg transition duration-300 grid grid-cols-1 gap-4 md:grid-cols-3 my-4"
          >
            <h2 className="text-lg font-bold mb-2">{event.name}</h2>
            <div className="grid grid-cols-2 gap-4 md:flex md:justify-end">
              <p className="mb-2">
                <span className="font-bold">Time:</span> {event.time}
              </p>
              <p>
                <span className="font-bold">Location:</span> {event.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const SchedulePage = () => {
  return <Schedule data={scheduleData} />;
};

export default SchedulePage;
