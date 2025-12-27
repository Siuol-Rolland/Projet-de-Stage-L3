"use client";
import React from "react";

export function PaiementTableSkeleton() {
  return (
    <div className="overflow-x-auto bg-white shadow-md rounded-lg">
      <table className="min-w-full text-left">
        <thead className="bg-gray-100 border-b">
          <tr>
            <th className="px-4 py-3">Sous-actes</th>
            <th className="px-4 py-3">Note</th>
            <th className="px-4 py-3">Prix unitaire</th>
            <th className="px-4 py-3">Montant payé</th>
            <th className="px-4 py-3">Montant restant</th>
            <th className="px-4 py-3">Date paiement</th>
            <th className="px-4 py-3">Statut</th>
            <th className="px-4 py-3 text-center"></th>
          </tr>
        </thead>

        <tbody>
          {Array.from({ length: 5 }).map((_, i) => (
            <tr key={i} className="border-b">
              {Array.from({ length: 8 }).map((_, j) => (
                <td key={j} className="px-4 py-3">
                  <div className="h-4 w-full bg-gray-200 animate-pulse rounded" />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
