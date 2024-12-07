// src/components/KPIIndicator.tsx
interface KPIIndicatorProps {
    title: string;
    value: number;
    unit: string;
  }
  
  const KPIIndicator = ({ title, value, unit }: KPIIndicatorProps) => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h3 className="text-lg font-medium text-gray-700">{title}</h3>
        <p className="text-3xl font-bold text-blue-500">
          {value} {unit}
        </p>
      </div>
    );
  };
  
  export default KPIIndicator;
  