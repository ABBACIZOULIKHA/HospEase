"use client";

import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";

export default function Loading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading process (e.g., fetch data or load resources)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Set to 3 seconds for the demo

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-100 to-blue-300">
      {isLoading ? (
        <div className="flex flex-col justify-center items-center">
          <div className="animate-spin text-blue-600">
            <FaSpinner size={50} />
          </div>
          <h1 className="mt-4 text-3xl font-semibold text-blue-800">Loading...</h1>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-4xl font-bold text-green-600">Welcome to the App!</h1>
        </div>
      )}
    </div>
  );
}
