"use client";
import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

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

export default function PieChartComponent() {
  // Prepare data for Pie Chart
  const pieData = inventoryData.map((item) => ({
    name: item.name,
    value: item.stockValue,
  }));

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mx-auto w-1/2 max-w-md md:max-w-lg lg:max-w-2xl">
      <h3 className="text-center text-2xl font-bold text-gray-700 mb-6">
        Stock Value Distribution
      </h3>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={140}
              label={({ name, value }) => `${name}: $${value.toFixed(2)}`}
              labelLine={false}
              isAnimationActive={true}
            >
              {pieData.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "#fff",
                border: "1px solid #ddd",
                borderRadius: "5px",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
