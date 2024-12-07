"use client";

import { useState } from "react";
import { GrCircleInformation } from "react-icons/gr";
import Link from "next/link";

interface InventoryItem {
  id: string;
  name: string;
  category: string;
  quantity: number;
  unitOfMeasure: string;
  stockValue: number;
  location: string;
  status: string; // Active, Low Stock, Out of Stock
}

export default function InventoryTable() {
  const [inventory] = useState<InventoryItem[]>([
    {
      id: "I001",
      name: "Surgical Masks",
      category: "PPE",
      quantity: 500,
      unitOfMeasure: "Boxes",
      stockValue: 250,
      location: "Room 101, Shelf A",
      status: "Active",
    },
    {
      id: "I002",
      name: "Paracetamol Tablets",
      category: "Medicine",
      quantity: 50,
      unitOfMeasure: "Bottles",
      stockValue: 5,
      location: "Room 102, Shelf B",
      status: "Low Stock",
    },
    {
      id: "I003",
      name: "Sterile Gloves",
      category: "PPE",
      quantity: 0,
      unitOfMeasure: "Boxes",
      stockValue: 0,
      location: "Room 103, Shelf C",
      status: "Out of Stock",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [sortKey, setSortKey] = useState<keyof InventoryItem | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filteredInventory = inventory.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSort = (key: keyof InventoryItem) => {
    const direction = sortKey === key && sortDirection === "asc" ? "desc" : "asc";
    setSortKey(key);
    setSortDirection(direction);
  };

  const sortedInventory = [...filteredInventory].sort((a, b) => {
    if (sortKey) {
      const aValue = a[sortKey];
      const bValue = b[sortKey];
      if (typeof aValue === "string" && typeof bValue === "string") {
        return sortDirection === "asc"
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      } else if (typeof aValue === "number" && typeof bValue === "number") {
        return sortDirection === "asc" ? aValue - bValue : bValue - aValue;
      }
    }
    return 0;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedInventory.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="my-6 p-6 bg-gradient-to-tr from-blue-50 to-indigo-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-semibold text-blue-700 mb-6 text-center">Inventory List</h1>

      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search inventory..."
          className="border border-gray-300 rounded-lg p-3 w-3/4 md:w-1/2 shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Table */}
      <table className="min-w-full bg-white rounded-lg shadow-lg">
        <thead className="bg-blue-600 text-white">
          <tr>
            {["ID", "Name", "Category", "Quantity", "Location", "Status", "Details"].map((col, index) => (
              <th
                key={index}
                className={`px-6 py-3 ${index < 3 ? "cursor-pointer hover:bg-blue-500" : ""}`}
                onClick={() => index < 3 && handleSort(col.toLowerCase() as keyof InventoryItem)}
              >
                {col}
                {sortKey === col.toLowerCase() && (sortDirection === "asc" ? " ↑" : " ↓")}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item) => (
            <tr
              key={item.id}
              className={`hover:bg-gray-50 ${
                item.status === "Active"
                  ? "border-l-4 border-green-500"
                  : item.status === "Low Stock"
                  ? "border-l-4 border-yellow-500"
                  : "border-l-4 border-red-500"
              }`}
            >
              <td className="px-6 py-4">{item.id}</td>
              <td className="px-6 py-4">{item.name}</td>
              <td className="px-6 py-4">{item.category}</td>
              <td className="px-6 py-4">{item.quantity}</td>
              <td className="px-6 py-4">{item.location}</td>
              <td className="px-6 py-4">{item.status}</td>
              <td className="px-6 py-4 flex justify-center">
                <Link href={`/inventory/${item.id}`}>
                  <GrCircleInformation size={25} className="text-blue-600 hover:text-blue-800" />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-blue-600 text-white rounded-l-lg hover:bg-blue-700 disabled:opacity-50"
        >
          Prev
        </button>
        <span className="px-4 py-2 bg-gray-200 text-blue-600">{currentPage}</span>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage * itemsPerPage >= filteredInventory.length}
          className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
