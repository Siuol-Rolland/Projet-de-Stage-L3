"use client";

export default function EvaluationTableSkeleton() {
  return (
    <div className="overflow-x-auto bg-white shadow-md rounded-lg">
      <table className="min-w-full text-left">
        <thead className="bg-gray-100 border-b">
          <tr>
            <th className="px-4 py-3">Nom</th>
            <th className="px-4 py-3">Sous-actes</th>
            <th className="px-4 py-3">Note</th>
            <th className="px-4 py-3">Date de réalisation</th>
          </tr>
        </thead>

        <tbody>
          {Array.from({ length: 5 }).map((_, i) => (
            <tr key={i} className="border-b">
              <td className="px-4 py-3">
                <div className="h-4 w-32 bg-gray-200 animate-pulse rounded" />
              </td>
              <td className="px-4 py-3">
                <div className="h-4 w-48 bg-gray-200 animate-pulse rounded" />
              </td>
              <td className="px-4 py-3">
                <div className="h-4 w-16 bg-gray-200 animate-pulse rounded" />
              </td>
              <td className="px-4 py-3">
                <div className="h-4 w-24 bg-gray-200 animate-pulse rounded" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
