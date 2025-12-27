"use client";

import React, { useEffect, useState } from "react";
import { Eye } from "lucide-react";


function DepartmentSkeletonTable() {
  return (
    <div className="overflow-hidden border rounded-lg">
      <table className="w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-3 text-left">Département</th>
            <th className="px-4 py-3 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3, 4, 5].map((i) => (
            <tr key={i} className="border-t">
              <td className="px-4 py-3">
                <div className="h-4 w-40 bg-gray-200 rounded animate-pulse" />
              </td>
              <td className="px-4 py-3">
                <div className="h-8 w-24 bg-gray-200 rounded animate-pulse" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}



function ActesSkeleton() {
  return (
    <div className="space-y-4">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="border rounded-lg p-3 bg-gray-50"
        >
          <div className="h-5 w-64 bg-gray-200 rounded mb-3 animate-pulse"></div>

          <div className="space-y-2">
            {[1, 2, 3].map((j) => (
              <div
                key={j}
                className="flex justify-between"
              >
                <div className="h-4 w-40 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}



export default function TeachDepartmentPage() {
  const [departments, setDepartments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [selectedDep, setSelectedDep] = useState<any>(null);
  const [actes, setActes] = useState<any[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [loadingActes, setLoadingActes] = useState(false);

  useEffect(() => {
    async function fetchDepartments() {
      try {
        const res = await fetch("/api/teacher/department");
        if (!res.ok) throw new Error("Erreur lors du chargement");
        const data = await res.json();
        setDepartments(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchDepartments();
  }, []);

  const handleOpenModal = async (dep: any) => {
    setSelectedDep(dep);
    setShowModal(true);
    setLoadingActes(true);
    try {
      const res = await fetch(`/api/teacher/department/${dep.ID_Dep}/actes`);
      if (!res.ok) throw new Error("Erreur lors du chargement des actes");
      const data = await res.json();
      setActes(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingActes(false);
    }
  };

  if (loading) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4 text-blue-600">
          Mes Départements
        </h1>
        <DepartmentSkeletonTable />
      </div>
    );
  }



  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 ">
        Mes Départements
      </h1>

      <div className="overflow-hidden border rounded-lg shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-3 text-left">Nom du département</th>
              <th className="px-4 py-3 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {departments.map((dep) => (
              <tr
                key={dep.ID_Dep}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="px-4 py-3 font-semibold text-gray-800">
                  {dep.Nom_Dep}
                </td>

                <td className="px-4 py-3">
                  <button
                    onClick={() => handleOpenModal(dep)}
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium
                              text-blue-600 border border-blue-600 rounded-lg
                              hover:bg-blue-50 focus:outline-none focus:ring-2
                              focus:ring-blue-400"
                  >
                    <Eye size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>



      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl shadow-lg w-[600px] max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-blue-600">
                Actes du département : {selectedDep?.Nom_Dep}
              </h2>
              <button
                className="text-gray-500 hover:text-red-500"
                onClick={() => setShowModal(false)}
              >
                ✕
              </button>
            </div>

            {loadingActes ? (
              <ActesSkeleton />
            ) : actes.length === 0 ? (
              <p>Aucun acte trouvé pour ce département.</p>
            ) : (
              <div className="space-y-4">
                {actes.map((acte) => (
                  <div
                    key={acte.ID_Actes}
                    className="border rounded-lg p-3 bg-gray-50"
                  >
                    <h3 className="font-semibold text-lg mb-2 text-blue-700">
                      {acte.Desc_Actes}
                    </h3>
                    <ul className="ml-4 space-y-1">
                      {acte.sous_actes.map((sa: any) => (
                        <li
                          key={sa.ID_SActes}
                          className="border-b border-gray-200 pb-1"
                        >
                          <div className="flex justify-between items-center">
                            <span>{sa.Desc_SActes}</span>
                            <span className="text-sm font-medium text-gray-700">
                              {sa.Prix} Ar
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
