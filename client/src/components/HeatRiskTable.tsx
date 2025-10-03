import React from "react";

// Mapping for risk levels and corresponding colors
const riskLevels: any = {
  0: "Little to None",
  1: "Minor",
  2: "Moderate",
  3: "Major",
  4: "Extreme"
};

const riskColors: any = {
  0: "bg-green-100 text-green-800",
  1: "bg-yellow-100 text-yellow-800",
  2: "bg-orange-100 text-orange-800",
  3: "bg-red-100 text-red-800",
  4: "bg-purple-100 text-purple-800"
};

const HeatRiskTable = ({ data }: { data: any[] }) => {
  const today = new Date();

  const rows = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(today);
    date.setDate(date.getDate() + i);

    const dayLabel = date.toLocaleDateString("en-US", { weekday: "long" });
    const dateLabel = date.toLocaleDateString("en-US", { month: "short", day: "numeric" });

    const riskValue = data[0][`day${i}`]; // Corrected template literal
    const riskText = riskLevels[riskValue] || "N/A";
    const riskClass = riskColors[riskValue] || "bg-gray-100 text-gray-500";

    return (
      <tr key={i} className="border-b border-neutral-300 hover:bg-neutral-100 transition">
        <td className="py-3 px-4 font-semibold text-gray-800 whitespace-nowrap">{dayLabel}</td>
        <td className="py-3 px-4 text-gray-600 whitespace-nowrap">{dateLabel}</td>
        <td className={`py-3 px-4 text-center font-medium rounded ${riskClass}`}>{riskText}</td>
      </tr>
    );
  });

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden mt-6">
      <div className="px-6 pt-6 pb-3 border-b border-gray-200">
        <h3 className="text-2xl font-bold text-blue-800">HeatRisk Forecast</h3>
        <p className="text-sm text-gray-500">Forecast based on your ZIP code</p>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="text-left px-6 py-3 font-semibold">Day</th>
              <th className="text-left px-6 py-3 font-semibold">Date</th>
              <th className="text-center px-6 py-3 font-semibold">Risk Level</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">{rows}</tbody>
        </table>
      </div>
    </div>
  );
};

export default HeatRiskTable;
