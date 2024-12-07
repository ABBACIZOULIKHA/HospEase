"use client"; // Ensure this page only runs client-side

import { useState, useEffect } from "react";
import Image from "next/image"; // Import the Image component
import DoctorImg from "@/app/images/doctor.jpg"

interface ScheduleItem {
  day: string;
  time: string;
}

interface Doctor {
  id: string;
  name: string;
  role: string;
  department: string;
  status: string;
  yearsOfExperience: number;
  shifts: string[];
  profileImage: string;
  schedule: ScheduleItem[];
}
const staticDoctorData: Doctor = {
  id: "S001",
  name: "Dr. John Doe",
  role: "Cardiologist",
  department: "Cardiology",
  status: "Active",
  yearsOfExperience: 10,
  shifts: ["Morning", "Afternoon"],
  profileImage: "/images/Doctor.jpg", // Path to the profile image after moving it to public/images
  schedule: [
    { day: "Monday", time: "9 AM - 12 PM" },
    { day: "Tuesday", time: "1 PM - 4 PM" },
    { day: "Wednesday", time: "9 AM - 12 PM" },
    { day: "Thursday", time: "2 PM - 5 PM" },
    { day: "Friday", time: "9 AM - 12 PM" },
  ],
};

export default function DoctorDetail() {
  const [doctor, setDoctor] = useState<Doctor | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [isMounted, setIsMounted] = useState(false);  // State to track client-side mounting

  // Use useEffect to track when the component mounts
  useEffect(() => {
    setIsMounted(true);  // Set to true when the component is mounted on the client
  }, []);

  // Static doctor data with profile image and agenda (schedule)
  
  useEffect(() => {
    setDoctor(staticDoctorData);
    setLoading(false); // Simulate loading completion
  }, []); // Only run once when the component mounts
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  
  // Prevent rendering until the component has mounted on the client
  if (!isMounted) return null;

  if (loading) {
    return <div>Loading doctor details...</div>;
  }

  // If doctor is null, display a fallback message
  if (!doctor) {
    return <div>No doctor information available.</div>;
  }

  return (
    <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-100 shadow-xl rounded-lg max-w-4xl mx-auto mt-10">
      <h1 className="text-3xl font-bold text-Bleu mb-6 text-center">Doctor Profile</h1>
      <div className="flex flex-col md:flex-row items-center bg-white rounded-lg p-6 shadow-lg">
        <Image
          src={DoctorImg}
          alt={`Profile of Dr. ${doctor.name}`}
          width={120}
          height={120}
          className="rounded-full border-4 border-Bleu mb-4 md:mb-0 md:mr-6"
        />
        <div>
          <h2 className="text-2xl font-semibold text-Bleu">{doctor.name}</h2>
          <p className="text-lg text-gray-700"><strong>Role:</strong> {doctor.role}</p>
          <p className="text-lg text-gray-700"><strong>Department:</strong> {doctor.department}</p>
          <p className="text-lg text-gray-700"><strong>Status:</strong> {doctor.status}</p>
          <p className="text-lg text-gray-700"><strong>Experience:</strong> {doctor.yearsOfExperience} years</p>
          <p className="text-lg text-gray-700"><strong>Shifts:</strong> {doctor.shifts.join(", ")}</p>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-Bleu mb-4">Doctor Schedule</h2>
        {/* Render schedule only if doctor and schedule are available */}
        {doctor.schedule && doctor.schedule.length > 0 ? (
          <table className="min-w-full border-collapse text-gray-700">
            <thead className="bg-Bleu text-white">
              <tr>
                <th className="p-4 text-left">Day</th>
                <th className="p-4 text-left">Time</th>
              </tr>
            </thead>
            <tbody>
              {doctor.schedule.map((item, index) => (
                <tr
                  key={index}
                  className={`hover:bg-indigo-100 transition-all duration-200 ${index % 2 === 0 ? "bg-indigo-50" : "bg-white"}`}
                >
                  <td className="p-4">{item.day}</td>
                  <td className="p-4">{item.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No schedule available.</p>
        )}
      </div>
    </div>
  );
}
