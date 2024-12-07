"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { GrCircleInformation } from "react-icons/gr";

interface Staff {
  id: string;
  name: string;
  role: string;
  department: string;
  status: string;
  yearsOfExperience: number;
  shifts: string[];
}

export default function DoctorsTable() {
  const [staff, setStaff] = useState<Staff[]>([]);
  const [filteredStaff, setFilteredStaff] = useState<Staff[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortKey, setSortKey] = useState<keyof Staff | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5; // Number of rows per page

  useEffect(() => {
    const fetchStaff = async () => { 
      
        const response = await fetch("/api/Staff");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setStaff(data);
        setFilteredStaff(data);
      
    };
  
    fetchStaff();
  }, []);
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    const search = e.target.value.toLowerCase();
    const filtered = staff.filter(
      (s) =>
        s.name.toLowerCase().includes(search) ||
        s.role.toLowerCase().includes(search) ||
        s.department.toLowerCase().includes(search)
    );
    setFilteredStaff(filtered);
    setCurrentPage(1); // Reset to first page when searching
  };

  const handleSort = (key: keyof Staff) => {
    const direction = sortKey === key && sortDirection === "asc" ? "desc" : "asc";
    setSortKey(key);
    setSortDirection(direction);

    const sorted = [...filteredStaff].sort((a, b) => {
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

    setFilteredStaff(sorted);
    setCurrentPage(1); // Reset to first page when sorting
  };

  const paginatedStaff = filteredStaff.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const totalPages = Math.ceil(filteredStaff.length / rowsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  

  return (
    <div className="p-6 bg-gradient-to-r from-blue-50 to-bleu-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-semibold text-Bleu mb-6 text-center">Doctors List</h1>

      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search doctors..."
          className="border-2 border-Bleu-500 rounded-lg p-3 w-3/4 md:w-1/2 shadow-md focus:outline-none focus:ring-2 focus:ring-Bleu-300"
        />
      </div>

      {/* Table */}
      <table className="min-w-full table-auto border-collapse bg-white rounded-lg shadow-lg">
        <thead className="bg-Bleu text-white">
          <tr>
            <th
              className="px-6 py-3 cursor-pointer hover:bg-Bleu-500"
              onClick={() => handleSort("id")}
            >
              ID {sortKey === "id" && (sortDirection === "asc" ? "↑" : "↓")}
            </th>
            <th
              className="px-6 py-3 cursor-pointer hover:bg-Bleu-500"
              onClick={() => handleSort("name")}
            >
              Name {sortKey === "name" && (sortDirection === "asc" ? "↑" : "↓")}
            </th>
            <th
              className="px-6 py-3 cursor-pointer hover:bg-Bleu-500"
              onClick={() => handleSort("role")}
            >
              Role {sortKey === "role" && (sortDirection === "asc" ? "↑" : "↓")}
            </th>
            <th
              className="px-6 py-3 cursor-pointer hover:bg-Bleu-500"
              onClick={() => handleSort("department")}
            >
              Department {sortKey === "department" && (sortDirection === "asc" ? "↑" : "↓")}
            </th>
            <th
              className="px-6 py-3 cursor-pointer hover:bg-Bleu-500"
              onClick={() => handleSort("status")}
            >
              Status {sortKey === "status" && (sortDirection === "asc" ? "↑" : "↓")}
            </th>
            <th
              className="px-6 py-3 cursor-pointer hover:bg-Bleu-500"
              onClick={() => handleSort("yearsOfExperience")}
            >
              Experience {sortKey === "yearsOfExperience" && (sortDirection === "asc" ? "↑" : "↓")}
            </th>
            <th className="px-6 py-3">Shifts</th>
            <th className="px-6 py-3">Details</th>
          </tr>
        </thead>
        <tbody>
          {paginatedStaff.map((member) => (
            <tr
              key={member.id}
              className={`hover:bg-Bleu-50 ${
                member.status === "Active"
                  ? "border-l-4 border-green-500"
                  : member.status === "Inactive"
                  ? "border-l-4 border-red-500"
                  : ""
              }`}
            >
              <td className="px-6 py-4">{member.id}</td>
              <td className="px-6 py-4">{member.name}</td>
              <td className="px-6 py-4">{member.role}</td>
              <td className="px-6 py-4">{member.department}</td>
              <td className="px-6 py-4">{member.status}</td>
              <td className="px-6 py-4">{member.yearsOfExperience}</td>
              <td className="px-6 py-4">{member.shifts.join(", ")}</td>
              <td className="flex justify-center items-center px-6 py-4">
                <Link href={`/Doctors/${member.id}`}>
                  <GrCircleInformation size={25} className="text-Bleu hover:text-Bleu-800" />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-6">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`px-6 py-2 mx-2 rounded-lg ${
              currentPage === index + 1
                ? "bg-Bleu text-white"
                : "bg-Bleu-100 text-Bleu hover:bg-Bleu-200"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
