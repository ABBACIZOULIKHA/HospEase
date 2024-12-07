"use client"
import { useEffect, useState } from 'react';

interface Staff {
  id: string;
  name: string;
  role: string;
  department: string;
  contact: {
    email: string;
    phone: string;
  };
  status: string;
  yearsOfExperience: number;
  specialization?: string;
  shifts: string[];
  languagesSpoken?: string[];
}

export default function StaffSummary() {

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center border-l-4 border-green-700">
        <h3 className="text-xl font-semibold">Active Doctors</h3>
        <p className="text-3xl font-bold text-blue-500">120</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg text-center border-l-4 border-yellow-500 ">
        <h3 className="text-xl font-semibold">Morning Shift</h3>
        <p className="text-3xl font-bold text-blue-500">80</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg text-center border-l-4 border-Bleu">
        <h3 className="text-xl font-semibold">Night Shift</h3>
        <p className="text-3xl font-bold text-blue-500">40</p>
      </div>
    </div>
  );
}
