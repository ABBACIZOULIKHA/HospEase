"use client";

import { Bar, Pie, Line, Radar, Doughnut, Scatter } from "react-chartjs-2";
import { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, PointElement, LineElement, RadialLinearScale, RadarController } from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  RadialLinearScale, // Register RadialLinearScale for radar chart
  RadarController // Register RadarController for radar chart
);

export default function DepartmentVisualization() {
  // Static data
  const departments = [
    {
      id: "D001",
      name: "Cardiology",
      head: "Dr. Emily Carter",
      staffCount: 25,
      patientsToday: 30,
      bedsOccupied: 15,
      equipmentAvailable: ["ECG Machine", "Heart Monitors", "Defibrillator"],
      operatingRooms: 2,
    },
    {
      id: "D002",
      name: "Emergency",
      head: "Dr. Mark Lewis",
      staffCount: 40,
      patientsToday: 60,
      bedsOccupied: 20,
      equipmentAvailable: ["Ventilators", "Trauma Kits", "Portable X-Ray"],
      operatingRooms: 3,
    },
    {
      id: "D003",
      name: "Pediatrics",
      head: "Dr. Sarah Bennett",
      staffCount: 30,
      patientsToday: 25,
      bedsOccupied: 10,
      equipmentAvailable: ["Incubators", "Thermometers", "Nebulizers"],
      operatingRooms: 1,
    },
    {
      id: "D004",
      name: "Oncology",
      head: "Dr. David Johnson",
      staffCount: 20,
      patientsToday: 15,
      bedsOccupied: 8,
      equipmentAvailable: ["Radiation Machines", "Chemo Ports", "Infusion Pumps"],
      operatingRooms: 1,
    },
    {
      id: "D005",
      name: "Orthopedics",
      head: "Dr. Lisa Adams",
      staffCount: 35,
      patientsToday: 20,
      bedsOccupied: 12,
      equipmentAvailable: ["X-Ray Machines", "Bone Saws", "Traction Devices"],
      operatingRooms: 2,
    },
  ];

  // Extract data for charts
  const departmentNames = departments.map((d) => d.name);
  const staffCounts = departments.map((d) => d.staffCount);
  const patientsToday = departments.map((d) => d.patientsToday);
  const bedsOccupied = departments.map((d) => d.bedsOccupied);
  const operatingRooms = departments.map((d) => d.operatingRooms);

  // Simulated data for line chart (patients over time, example for 7 days)
  const patientsTrend = departments.map((d) => [d.patientsToday, d.patientsToday + 5, d.patientsToday + 10, d.patientsToday - 3, d.patientsToday + 2, d.patientsToday - 5, d.patientsToday + 7]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">Department Statistics</h1>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {/* Bar Chart */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-center mb-4">Staff vs. Patients</h2>
          <Bar
            data={{
              labels: departmentNames,
              datasets: [
                {
                  label: "Staff Count",
                  data: staffCounts,
                  backgroundColor: "rgba(54, 162, 235, 0.6)",
                },
                {
                  label: "Patients Today",
                  data: patientsToday,
                  backgroundColor: "rgba(255, 99, 132, 0.6)",
                },
              ],
            }}
            options={{
              responsive: true,
              plugins: {
                legend: { position: "top" },
              },
            }}
          />
        </div>

        {/* Pie Chart */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-center mb-4">Beds Occupied</h2>
          <Pie
            data={{
              labels: departmentNames,
              datasets: [
                {
                  data: bedsOccupied,
                  backgroundColor: [
                    "rgba(255, 99, 132, 0.6)",
                    "rgba(54, 162, 235, 0.6)",
                    "rgba(255, 206, 86, 0.6)",
                    "rgba(75, 192, 192, 0.6)",
                    "rgba(153, 102, 255, 0.6)",
                  ],
                },
              ],
            }}
            options={{
              responsive: true,
              plugins: {
                legend: { position: "top" },
              },
            }}
          />
        </div>

        {/* Line Chart */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-center mb-4">Patients Over Time</h2>
          <Line
            data={{
              labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
              datasets: departments.map((d, index) => ({
                label: `${d.name} Patients`,
                data: patientsTrend[index],
                borderColor: `rgba(${(index + 1) * 50}, ${100 + (index + 1) * 20}, 132, 0.8)`,
                fill: false,
                tension: 0.1,
              })),
            }}
            options={{
              responsive: true,
              plugins: {
                legend: { position: "top" },
              },
            }}
          />
        </div>

        {/* Radar Chart */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-center mb-4">Equipment Available</h2>
          <Radar
            data={{
              labels: ["ECG Machine", "Heart Monitors", "Defibrillator", "Ventilators", "Trauma Kits"],
              datasets: departments.map((d, index) => ({
                label: d.name,
                data: d.equipmentAvailable.map((item) => (item ? 1 : 0)),
                backgroundColor: `rgba(${(index + 1) * 50}, ${100 + (index + 1) * 20}, 132, 0.6)`,
              })),
            }}
            options={{
              responsive: true,
              plugins: {
                legend: { position: "top" },
              },
            }}
          />
        </div>

        {/* Doughnut Chart */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-center mb-4">Operating Rooms</h2>
          <Doughnut
            data={{
              labels: departmentNames,
              datasets: [
                {
                  data: operatingRooms,
                  backgroundColor: [
                    "rgba(255, 99, 132, 0.6)",
                    "rgba(54, 162, 235, 0.6)",
                    "rgba(255, 206, 86, 0.6)",
                    "rgba(75, 192, 192, 0.6)",
                    "rgba(153, 102, 255, 0.6)",
                  ],
                },
              ],
            }}
            options={{
              responsive: true,
              plugins: {
                legend: { position: "top" },
              },
            }}
          />
        </div>

        {/* Scatter Plot */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-center mb-4">Staff vs. Patients Today</h2>
          <Scatter
            data={{
              datasets: [
                {
                  label: "Departments",
                  data: departments.map((d) => ({
                    x: d.staffCount,
                    y: d.patientsToday,
                    r: 10,
                  })),
                  backgroundColor: "rgba(75, 192, 192, 0.6)",
                },
              ],
            }}
            options={{
              responsive: true,
              plugins: {
                legend: { position: "top" },
              },
              scales: {
                x: { min: 0, max: 50 },
                y: { min: 0, max: 70 },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
