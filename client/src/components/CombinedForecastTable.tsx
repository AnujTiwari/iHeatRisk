// src/components/CombinedForecastTable.tsx
import React from "react";

const riskLevels: Record<number, string> = {
  0: "Little to None",
  1: "Minor",
  2: "Moderate",
  3: "Major",
  4: "Extreme",
};
const riskColors: Record<number, string> = {
  0: "bg-green-100 text-green-800",
  1: "bg-yellow-100 text-yellow-800",
  2: "bg-orange-100 text-orange-800",
  3: "bg-red-100 text-red-800",
  4: "bg-purple-100 text-purple-800",
};

interface WeatherEntry {
  date: string;    // "YYYY-MM-DD"
  min: number;     // °C
  max: number;     // °C
  humidity: number;// %
}

interface Props {
  weatherData: WeatherEntry[];
  heatRiskData: Array<Record<string, any>>;
}

export default function CombinedForecastTable({
  weatherData,
  heatRiskData,
}: Props) {
  const riskObj = heatRiskData[0] || {};

  let baseMs = Number(riskObj.timestamp ?? riskObj.validTimeUtc);
  if (isNaN(baseMs)) {
    baseMs =
      weatherData.length > 0
        ? new Date(weatherData[0].date).getTime()
        : Date.now();
  }

  const weekdayFmt = new Intl.DateTimeFormat("en-US", {
    timeZone: "UTC",
    weekday: "long",
  });
  const dateFmt = new Intl.DateTimeFormat("en-US", {
    timeZone: "UTC",
    month: "short",
    day: "numeric",
  });

  const toF = (c: number) => (c * 9) / 5 + 32;

  const rows = Array.from({ length: 7 }, (_, i) => {
    const dtUTC = new Date(baseMs + i * 86_400_000);
    const iso = dtUTC.toISOString().slice(0, 10);
    const w = weatherData.find((w) => w.date === iso);

    const minF = w ? toF(w.min).toFixed(1) : "-";
    const maxF = w ? toF(w.max).toFixed(1) : "-";
    const hum = w ? w.humidity.toFixed(0) : "-";

    const rv = riskObj[`day${i}`] ?? -1;
    const rt = riskLevels[rv] ?? "N/A";
    const rc = riskColors[rv] ?? "bg-gray-100 text-gray-500";

    return (
      <tr key={i} className="hover:bg-gray-50">
        <td className="px-6 py-3 text-gray-800">{weekdayFmt.format(dtUTC)}</td>
        <td className="px-6 py-3 text-gray-700">{dateFmt.format(dtUTC)}</td>
        <td className="px-6 py-3 text-gray-700">{minF}°F</td>
        <td className="px-6 py-3 text-gray-700">{maxF}°F</td>
        <td className="px-6 py-3 text-gray-700">{hum}%</td>
        <td className={`px-6 py-3 text-center font-medium rounded ${rc}`}>
          {rt}
        </td>
      </tr>
    );
  });

  return (
    <div className="mt-12 bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="px-6 pt-6 pb-3 border-b border-gray-200">
        <h3 className="text-2xl font-bold text-blue-800 text-center">
          HeatRisk Forecast
        </h3>
        <p className="text-sm text-gray-500 text-center">
          Forecast based on your ZIP code
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="table-fixed min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-100 text-gray-700 uppercase">
            <tr>
              <th className="w-1/6 px-6 py-3 text-left font-semibold">Day</th>
              <th className="w-1/6 px-6 py-3 text-left font-semibold">Date</th>
              <th className="w-1/6 px-6 py-3 text-left font-semibold">
                Min Temp (°F)
              </th>
              <th className="w-1/6 px-6 py-3 text-left font-semibold">
                Max Temp (°F)
              </th>
              <th className="w-1/6 px-6 py-3 text-left font-semibold">
                Humidity (%)
              </th>
              <th className="w-1/6 px-6 py-3 text-center font-semibold">
                Risk Level
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">{rows}</tbody>
        </table>
      </div>
    </div>
  );
}
