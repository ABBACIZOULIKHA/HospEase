"use client";

import Image from "next/image";
import patientImg from "@/app/images/patient.jpg";

interface Patient {
  id: string;
  name: string;
  age: number;
  gender: string;
  admissionDate: string;
  department: string;
  bedNumber: string;
  status: string;
  additionalInfo: string;
  imageUrl: string;
  history: string[]; // Array to hold historical data
}

export default function PatientDetails() {
  // Static patient data with history and image URL
  const patient: Patient = {
    id: "1",
    name: "John Doe",
    age: 45,
    gender: "Male",
    admissionDate: "2024-01-10",
    department: "Cardiology",
    bedNumber: "B-12",
    status: "Active",
    additionalInfo: "Heart surgery scheduled.",
    imageUrl: "/images/john-doe.jpg", // Path to the image (can be a local or remote URL)
    history: [
      "2024-01-10: Admitted for chest pain and heart irregularities.",
      "2024-02-15: Underwent coronary angioplasty.",
      "2024-04-02: Follow-up check-up - stable condition.",
      "2024-05-10: Additional tests performed for heart function monitoring."
    ]
  };

  return (
    <div className="p-8 bg-gradient-to-r from-blue-100 to-blue-200 rounded-2xl shadow-2xl max-w-3xl mx-auto my-10">
      <h1 className="text-4xl font-semibold text-blue-800 mb-8 text-center">Patient Details</h1>

      {/* Patient Image */}
      <div className="flex justify-center mb-8">
        <Image
          src={patientImg}
          alt={patient.name}
          className="w-36 h-36 rounded-full object-cover border-4 border-blue-600 shadow-lg"
        />
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Basic Information</h2>
        <div className="space-y-3">
          <p className="text-lg"><strong>Name:</strong> {patient.name}</p>
          <p className="text-lg"><strong>Age:</strong> {patient.age}</p>
          <p className="text-lg"><strong>Gender:</strong> {patient.gender}</p>
          <p className="text-lg"><strong>Admission Date:</strong> {patient.admissionDate}</p>
          <p className="text-lg"><strong>Department:</strong> {patient.department}</p>
          <p className="text-lg"><strong>Bed Number:</strong> {patient.bedNumber}</p>
          <p className="text-lg">
            <strong>Status:</strong>{" "}
            <span
              className={`font-bold ${
                patient.status === "Active" ? "text-green-600" : "text-red-600"
              }`}
            >
              {patient.status}
            </span>
          </p>
        </div>
      </div>

      <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Additional Information</h2>
        <p className="text-lg">{patient.additionalInfo}</p>
      </div>

      {/* Enhanced Patient History Section */}
      <div className="mt-6 bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-600">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Patient History</h2>
        <div className="space-y-4">
          {patient.history.length > 0 ? (
            patient.history.map((event, index) => (
              <div key={index} className="bg-blue-50 p-4 rounded-lg shadow-sm hover:bg-blue-100 transition duration-300 ease-in-out">
                <div className="flex items-center space-x-4 mb-2">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex justify-center items-center">
                    <span className="font-semibold text-lg">{index + 1}</span>
                  </div>
                  <div className="text-lg font-medium text-blue-800">{event}</div>
                </div>
                <div className="border-t-2 border-blue-300 mt-2 pt-2 text-sm text-gray-600">
                  <span className="italic">Historical Event</span>
                </div>
              </div>
            ))
          ) : (
            <p className="text-lg text-gray-500">No history available.</p>
          )}
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex justify-center gap-4">
        <button
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Edit Patient Info
        </button>
        <button
          className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition duration-300"
        >
          Discharge Patient
        </button>
      </div>
    </div>
  );
}
