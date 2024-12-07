"use client";
import React from "react";
import { ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis } from "recharts";

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

export default function BarChartComponent() {
  const barData = inventoryData.map((item) => ({
    name: item.name,
    usageRate: item.usageRate,
  }));

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-1/2 max-w-2xl mx-auto">
      <h3 className="text-center text-2xl font-semibold text-gray-800 mb-6">
        Usage Rate Comparison
      </h3>
      <div className="flex justify-center items-center">
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={barData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
            <XAxis 
              dataKey="name" 
              tick={{ fill: "#555", fontSize: 12 }} 
              axisLine={{ stroke: "#ddd" }} 
              tickLine={false} 
            />
            <YAxis 
              tick={{ fill: "#555", fontSize: 12 }} 
              axisLine={{ stroke: "#ddd" }} 
              tickLine={false} 
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: "#fff",
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            />
            <Bar 
              dataKey="usageRate" 
              fill="#82ca9d" 
              radius={[4, 4, 0, 0]} 
              isAnimationActive={true} 
              barSize={40} 
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
