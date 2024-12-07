"use client";

import { useEffect, useState } from "react";
import BarChart from "../app/(components)/(dashbord)/BarChart";
import PieChart from "../app/(components)/(dashbord)/PieChart";
import KPIIndicator from "../app/(components)/(dashbord)/KPIIndicator";
import LineChart from "../app/(components)/(dashbord)/LineChartProps";

interface OverviewData {
  totalPatientsToday: number;
  totalAdmissionsToday: number;
  totalRevenueToday: number;
  patientSatisfactionScore: number;
  newAdmissions: Record<string, number>;
}

export default function Home() {
  const [overview, setOverview] = useState<OverviewData | null>(null);

  useEffect(() => {
    // Fetch the data from the API
    const fetchOverviewData = async () => {
      const response = await fetch("/api/overview");
      const data = await response.json();
      setOverview(data);
    };

    fetchOverviewData();
  }, []);

  if (!overview) {
    return null; // Return null since the default loading.tsx will handle this
  }

  const departmentData = {
    labels: Object.keys(overview.newAdmissions),
    values: Object.values(overview.newAdmissions),
  };

  const genderData = {
    labels: ["Male", "Female"],
    values: [overview.totalPatientsToday * 0.46, overview.totalPatientsToday * 0.54], // Hypothetical distribution
  };

  return (
    <div className="w-full space-y-4">
      <h2 className="text-xl md:text-2xl font-semibold">Dashboard - Hospital Overview</h2>

      {/* KPI Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <KPIIndicator title="Patients Today" value={overview.totalPatientsToday} unit="patients" />
        <KPIIndicator title="Revenue Today" value={overview.totalRevenueToday} unit="USD" />
        <KPIIndicator title="Satisfaction Score" value={overview.patientSatisfactionScore} unit="%" />
      </div>

      {/* Bar Chart */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <BarChart data={departmentData} />
      </div>

      <div className="flex sm:flex-row flex-col gap-2">
        {/* Pie Chart */}
        <div className="bg-white md:w-1/2 mr-2 p-2 rounded-lg shadow-lg flex items-center justify-center">
          <PieChart data={genderData} />
        </div>

        {/* Line Chart */}
        <div className="bg-white md:w-1/2 p-3 rounded-lg shadow-lg">
          <LineChart data={genderData} />
        </div>
      </div>
    </div>
  );
}
