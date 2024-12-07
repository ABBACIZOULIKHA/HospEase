"use client";
import React from "react";
import AgeProgressBar from "../(components)/(patients)/AgeProgressBar";
import StatusBarChart from "../(components)/(patients)/StatusBarChart";
import PatientsTable from "../(components)/(patients)/PatientsTable";

// Define the status type for patients
type PatientStatus = "Admitted" | "Under Observation" | "Discharged";

interface Patient {
  age?: number; // Age is optional
  status?: PatientStatus; // Status is optional
}

function Patients() {
  // Example patients data for age
  const agePatients: Patient[] = [
    { age: 25 },
    { age: 40 },
    { age: 60 },
    { age: 8 },
    { age: 75 },
    { age: 30 },
    { age: undefined }, // Example of an undefined age
  ];

  // Example patients data for status
  const statusPatients: Patient[] = [
    { status: "Admitted" },
    { status: "Admitted" },
    { status: "Under Observation" },
    { status: "Discharged" },
    { status: "Admitted" },
    { status: "Under Observation" },
    { status: "Discharged" },
    { status: "Discharged" },
  ];

  // Filter out patients with undefined age
  const validAgePatients = agePatients.filter(
    (patient) => patient.age !== undefined
  ) as { age: number }[];

  return (
    <div>
      <div className="flex flex-row gap-5">
        <AgeProgressBar patientsAge={validAgePatients} />
        <StatusBarChart patientsInfo={statusPatients} />
      </div>
      <PatientsTable />
    </div>
  );
}

export default Patients;
