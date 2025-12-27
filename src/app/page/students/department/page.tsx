// import React from 'react'

// export default function EtDepartmentPage() {
//   return (
//     <div>EtDepartmentPagepage</div>
//   )
// }

"use client";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export default function EtDepartmentPage() {
  const department = {
    name: "Informatique",
    totalDebt: 1_250_000, // Ar
    quotaTotal: 1000,
  };

  const studentsProgress = [
    { name: "Alice", quotaRealised: 800 },
    { name: "Bob", quotaRealised: 600 },
    { name: "Charlie", quotaRealised: 950 },
    { name: "Diana", quotaRealised: 700 },
    { name: "Ethan", quotaRealised: 500 },
  ];

  // Calcul de la progression cumulative globale
  let cumulative = 0;
  const lineData = studentsProgress.map((s) => {
    cumulative += s.quotaRealised;
    return {
      student: s.name,
      cumulativePercent: Math.round(
        (cumulative / (department.quotaTotal * studentsProgress.length)) * 100
      ),
    };
  });

  return (
    <div className="p-6 space-y-6">
      {/* Ligne titre + dette totale */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-[#162655]">
          Département d&apos;{department.name}
        </h1>

        <div className="p-4 bg-[#91c8ff] border-l-4 border-[#3786fa] rounded shadow-sm">
          <p className="text-sm text-[#162655]">
            Dette totale des étudiants
          </p>
          <p className="text-xl font-bold text-[#162655] text-right">
            {department.totalDebt.toLocaleString()} Ar
          </p>
        </div>
      </div>

      {/* Graphique */}
      <div className="p-4 bg-white rounded-lg shadow border">
        <h2 className="font-semibold text-[#162655] mb-2">
          Progression globale cumulative
        </h2>

        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={lineData}>
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <XAxis dataKey="student" />
            <YAxis unit="%" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="cumulativePercent"
              stroke="#3786fa"
              strokeWidth={3}
              dot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
