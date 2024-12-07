"use client"
import React from 'react';
import AgeProgressBar from "../(components)/(patients)/AgeProgressBar";
import StatusBarChart from "../(components)/(patients)/StatusBarChart";
import PatientsTable from "../(components)/(patients)/PatientsTable";

// Define the status type for patients
type PatientStatus = 'Admitted' | 'Under Observation' | 'Discharged';

interface Patient {
  age?: number;
  status?: PatientStatus;
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
  ];

  // Example patients data for status with the correct type
  const statusPatients: Patient[] = [
    { status: 'Admitted' },
    { status: 'Admitted' },
    { status: 'Under Observation' },
    { status: 'Discharged' },
    { status: 'Admitted' },
    { status: 'Under Observation' },
    { status: 'Discharged' },
    { status: 'Discharged' },
  ];

  return (
    <div>
      <div className='flex flex-row gap-5'>
        <AgeProgressBar patientsAge={agePatients} />
        <StatusBarChart patientsInfo={statusPatients} />
      </div>
      <PatientsTable />
    </div>
  );
}

export default Patients;
