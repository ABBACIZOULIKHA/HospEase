"use client";

import { useState } from "react";
import { GrCircleInformation } from "react-icons/gr";
import Link from "next/link";

interface Patient {
  id: string;
  name: string;
  age: number;
  gender: string;
  admissionDate: string;
  department: string;
  bedNumber: string;
  status: string;
}

export default function PatientsTable() {
  const [patients] = useState<Patient[]>([
    { id: "1", name: "John Doe", age: 45, gender: "Male", admissionDate: "2024-01-10", department: "Cardiology", bedNumber: "B-12", status: "Active" },
    { id: "2", name: "Jane Smith", age: 30, gender: "Female", admissionDate: "2024-02-20", department: "Neurology", bedNumber: "A-5", status: "Active" },
    { id: "3", name: "Emily Johnson", age: 65, gender: "Female", admissionDate: "2024-03-15", department: "Orthopedics", bedNumber: "C-8", status: "Inactive" },
    { id: "4", name: "Michael Brown", age: 50, gender: "Male", admissionDate: "2024-04-05", department: "Pediatrics", bedNumber: "D-10", status: "Active" },
    { id: "5", name: "Sarah Davis", age: 40, gender: "Female", admissionDate: "2024-05-18", department: "Gastroenterology", bedNumber: "E-4", status: "Inactive" },
    { id: "6", name: "David Wilson", age: 38, gender: "Male", admissionDate: "2024-06-22", department: "Dermatology", bedNumber: "F-3", status: "Active" },
    { id: "7", name: "Sophia Turner", age: 25, gender: "Female", admissionDate: "2024-07-05", department: "Endocrinology", bedNumber: "G-7", status: "Active" },
    { id: "8", name: "William Lee", age: 55, gender: "Male", admissionDate: "2024-08-15", department: "Urology", bedNumber: "H-1", status: "Inactive" },
    { id: "9", name: "Olivia Martinez", age: 60, gender: "Female", admissionDate: "2024-09-03", department: "Gastroenterology", bedNumber: "I-9", status: "Active" },
    { id: "10", name: "James Harris", age: 42, gender: "Male", admissionDate: "2024-10-12", department: "Cardiology", bedNumber: "J-5", status: "Inactive" },
    { id: "11", name: "Mia Clark", age: 28, gender: "Female", admissionDate: "2024-11-08", department: "Neurology", bedNumber: "K-10", status: "Active" },
    { id: "12", name: "Liam Robinson", age: 48, gender: "Male", admissionDate: "2024-12-01", department: "Orthopedics", bedNumber: "L-2", status: "Active" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [sortKey, setSortKey] = useState<keyof Patient | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const patientsPerPage = 5; // Set how many patients per page you want

  // Filter patients by search term
  const filteredPatients = patients.filter(
    (p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Paginate filtered patients
  const indexOfLastPatient = currentPage * patientsPerPage;
  const indexOfFirstPatient = indexOfLastPatient - patientsPerPage;
  const currentPatients = filteredPatients.slice(indexOfFirstPatient, indexOfLastPatient);

  // Sorting patients
  const handleSort = (key: keyof Patient) => {
    const direction = sortKey === key && sortDirection === "asc" ? "desc" : "asc";
    setSortKey(key);
    setSortDirection(direction);

    const sorted = [...filteredPatients].sort((a, b) => {
      const aValue = a[key];
      const bValue = b[key];

      if (typeof aValue === "string" && typeof bValue === "string") {
        return direction === "asc"
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      } else if (typeof aValue === "number" && typeof bValue === "number") {
        return direction === "asc" ? aValue - bValue : bValue - aValue;
      }
      return 0;
    });
  };

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="my-3 p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-semibold text-blue-600 mb-6 text-center">Patients List</h1>

      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search patients..."
          className="border-2 border-blue-500 rounded-lg p-3 w-3/4 md:w-1/2 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
      </div>

      {/* Table */}
      <table className="min-w-full table-auto border-collapse bg-white rounded-lg shadow-lg">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th
              className="px-6 py-3 cursor-pointer hover:bg-blue-500"
              onClick={() => handleSort("id")}
            >
              ID {sortKey === "id" && (sortDirection === "asc" ? "↑" : "↓")}
            </th>
            <th
              className="px-6 py-3 cursor-pointer hover:bg-blue-500"
              onClick={() => handleSort("name")}
            >
              Name {sortKey === "name" && (sortDirection === "asc" ? "↑" : "↓")}
            </th>
            <th
              className="px-6 py-3 cursor-pointer hover:bg-blue-500"
              onClick={() => handleSort("age")}
            >
              Age {sortKey === "age" && (sortDirection === "asc" ? "↑" : "↓")}
            </th>
            <th
              className="px-6 py-3 cursor-pointer hover:bg-blue-500"
              onClick={() => handleSort("department")}
            >
              Department {sortKey === "department" && (sortDirection === "asc" ? "↑" : "↓")}
            </th>
            <th
              className="px-6 py-3 cursor-pointer hover:bg-blue-500"
              onClick={() => handleSort("status")}
            >
              Status {sortKey === "status" && (sortDirection === "asc" ? "↑" : "↓")}
            </th>
            <th className="px-6 py-3">Details</th>
          </tr>
        </thead>
        <tbody>
          {currentPatients.map((patient) => (
            <tr
              key={patient.id}
              className={`hover:bg-blue-50 ${
                patient.status === "Active"
                  ? "border-l-4 border-green-500"
                  : patient.status === "Inactive"
                  ? "border-l-4 border-red-500"
                  : ""
              }`}
            >
              <td className="px-6 py-4">{patient.id}</td>
              <td className="px-6 py-4">{patient.name}</td>
              <td className="px-6 py-4">{patient.age}</td>
              <td className="px-6 py-4">{patient.department}</td>
              <td className="px-6 py-4">{patient.status}</td>
              <td className="flex justify-center items-center px-6 py-4">
                <Link href={`/Patients/${patient.id}`}>
                  <GrCircleInformation size={25} className="text-blue-600 hover:text-blue-800" />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg mr-2 disabled:bg-gray-300"
        >
          Prev
        </button>
        <span className="px-4 py-2">{currentPage}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage * patientsPerPage >= filteredPatients.length}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg ml-2 disabled:bg-gray-300"
        >
          Next
        </button>
      </div>
    </div>
  );
}
