"use client";
import React from "react";
import {
  ResponsiveContainer,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  Legend,
} from "recharts";

import InventoryTable from "@/app/(components)/(inventory)/InventoryTable"

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

interface InventoryItem {
  id: string;
  name: string;
  category: string;
  quantity: number;
  unitOfMeasure: string;
  lastRestocked: string;
  supplier: string;
  manufacturer: string;
  costPerUnit: number;
  stockValue: number;
  expirationDate: string;
  reorderLevel: number;
  location: string;
  usageRate: number;
  lastPurchasedDate: string;
  expiryWarning: boolean;
}

const inventoryData: InventoryItem[] = [
  {
    id: "I001",
    name: "Surgical Masks",
    category: "Personal Protective Equipment",
    quantity: 500,
    unitOfMeasure: "Boxes",
    lastRestocked: "2024-11-30",
    supplier: "MedEquip Supplies",
    manufacturer: "HealthPro",
    costPerUnit: 0.5,
    stockValue: 500 * 0.5,
    expirationDate: "2025-06-01",
    reorderLevel: 100,
    location: "Room 101, Shelf A",
    usageRate: 20,
    lastPurchasedDate: "2024-10-20",
    expiryWarning: false,
  },
  {
    id: "I002",
    name: "Paracetamol Tablets",
    category: "Medicine",
    quantity: 2000,
    unitOfMeasure: "Bottles",
    lastRestocked: "2024-12-01",
    supplier: "HealthPharma",
    manufacturer: "PharmaCo",
    costPerUnit: 0.1,
    stockValue: 2000 * 0.1,
    expirationDate: "2026-01-01",
    reorderLevel: 500,
    location: "Room 102, Shelf B",
    usageRate: 50,
    lastPurchasedDate: "2024-11-15",
    expiryWarning: false,
  },
  {
    id: "I003",
    name: "Sterile Gloves",
    category: "Personal Protective Equipment",
    quantity: 800,
    unitOfMeasure: "Boxes",
    lastRestocked: "2024-11-25",
    supplier: "MedEquip Supplies",
    manufacturer: "SafeHands",
    costPerUnit: 1.2,
    stockValue: 800 * 1.2,
    expirationDate: "2025-12-01",
    reorderLevel: 200,
    location: "Room 103, Shelf C",
    usageRate: 30,
    lastPurchasedDate: "2024-10-15",
    expiryWarning: false,
  },
];

export default function Dashboard() {
  const pieData = inventoryData.map((item) => ({
    name: item.name,
    value: item.stockValue,
  }));

  const barData = inventoryData.map((item) => ({
    name: item.name,
    usageRate: item.usageRate,
  }));

  const lineData = inventoryData.map((item) => ({
    name: item.name,
    reorderLevel: item.reorderLevel,
    quantity: item.quantity,
  }));

  const totalStockValue = inventoryData.reduce((sum, item) => sum + item.stockValue, 0);
  const totalItems = inventoryData.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="p-6 min-h-screen">
      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Inventory Dashboard</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-white shadow rounded-lg p-4">
          <h3 className="text-xl font-semibold text-gray-800">Total Stock Value</h3>
          <p className="text-2xl text-blue-600 font-bold">${totalStockValue.toFixed(2)}</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <h3 className="text-xl font-semibold text-gray-800">Total Items</h3>
          <p className="text-2xl text-green-600 font-bold">{totalItems}</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <h3 className="text-xl font-semibold text-gray-800">Categories</h3>
          <p className="text-2xl text-yellow-600 font-bold">{new Set(inventoryData.map((item) => item.category)).size}</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <h3 className="text-xl font-semibold text-gray-800">Suppliers</h3>
          <p className="text-2xl text-red-600 font-bold">{new Set(inventoryData.map((item) => item.supplier)).size}</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Pie Chart */}
        <div className="bg-gradient-to-tr from-blue-50 to-indigo-100 rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Stock Value Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
                {pieData.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div className="bg-gradient-to-tr from-blue-50 to-indigo-100 rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Usage Rate Comparison</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <XAxis dataKey="name" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Bar dataKey="usageRate" fill="#82ca9d" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

{/* LineChart */}
<div className="bg-gradient-to-tr from-blue-50 to-indigo-100 rounded-lg shadow-lg p-6 lg:col-span-2">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Reorder Levels and Quantities</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={lineData}>
              <XAxis dataKey="name" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="reorderLevel" stroke="#8884d8" />
              <Line type="monotone" dataKey="quantity" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>

      </div>

      <InventoryTable/>
    </div>
  );
}
