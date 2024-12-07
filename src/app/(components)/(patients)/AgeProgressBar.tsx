import React from 'react';

// Define the possible age range keys
type AgeRange = '0-10' | '11-30' | '31-60' | '>60';

interface AgeSegment {
  range: AgeRange;
  percentage: number;
}

interface AgeProgressBarProps {
  patientsAge: { age: number }[];
}

const AgeProgressBar: React.FC<AgeProgressBarProps> = ({ patientsAge }) => {
  const calculateAgeSegments = () => {
    // Use the AgeRange type to ensure the keys are properly typed
    const ageRanges: Record<AgeRange, number> = {
      '0-10': 0,
      '11-30': 0,
      '31-60': 0,
      '>60': 0,
    };

    // Count patientsAge in each age range
    patientsAge.forEach((patient) => {
      const age = patient.age;
      if (age >= 0 && age <= 10) {
        ageRanges['0-10'] += 1;
      } else if (age >= 11 && age <= 30) {
        ageRanges['11-30'] += 1;
      } else if (age >= 31 && age <= 60) {
        ageRanges['31-60'] += 1;
      } else if (age > 60) {
        ageRanges['>60'] += 1;
      }
    });

    // Calculate percentages for each range
    const totalpatientsAge = patientsAge.length;
    return Object.keys(ageRanges).map((range) => {
      const rangeKey = range as AgeRange; // Cast to AgeRange
      const count = ageRanges[rangeKey];
      return {
        range: rangeKey,
        percentage: (count / totalpatientsAge) * 100,
      };
    });
  };

  const ageSegments: AgeSegment[] = calculateAgeSegments();

  return (
    <div className="p-6 w-1/2 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-Blue mb-6 text-center">
        Age Distribution of patientsAge
      </h2>
      {ageSegments.map((segment) => (
        <div key={segment.range} className="mb-6">
          <div className="flex justify-between mb-3 text-lg text-gray-700">
            <span className="font-semibold">{segment.range}</span>
            <span className="text-Blue">{segment.percentage.toFixed(2)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-6 shadow-inner">
            <div
              className="bg-gradient-to-r from-blue-500 to-blue-700 h-6 rounded-full transition-all duration-300 ease-in-out"
              style={{ width: `${segment.percentage}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AgeProgressBar;
