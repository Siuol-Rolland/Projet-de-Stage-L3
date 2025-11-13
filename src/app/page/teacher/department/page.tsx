// "use client"

// import React from 'react'

// export default function TeachDepartmentPage() {
//   return (
//     <div>TeachDepartmentPage</div>
//   )
// }

// "use client";

// import React, { useEffect, useState } from "react";

// export default function TeachDepartmentPage() {
//   const [departments, setDepartments] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchDepartments() {
//       try {
//         const res = await fetch("/api/teacher/department");
//         if (!res.ok) throw new Error("Erreur lors du chargement");
//         const data = await res.json();
//         setDepartments(data);
//       } catch (error) {
//         console.error(error);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchDepartments();
//   }, []);

//   if (loading) return <p className="text-center p-4">Chargement...</p>;

//   if (departments.length === 0)
//     return <p className="text-center p-4">Aucun département trouvé.</p>;

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4 text-blue-600">
//         Mes Départements
//       </h1>

//       <ul className="space-y-2">
//         {departments.map((dep) => (
//           <li
//             key={dep.ID_Dep}
//             className="border rounded-lg p-3 shadow-sm hover:shadow-md transition"
//           >
//             <span className="font-semibold">{dep.Nom_Dep}</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

"use client";

import React, { useEffect, useState } from "react";

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

  if (loading) return <p className="text-center p-4">Chargement...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-blue-600">
        Mes Départements
      </h1>

      <ul className="space-y-2">
        {departments.map((dep) => (
          <li
            key={dep.ID_Dep}
            onClick={() => handleOpenModal(dep)}
            className="border rounded-lg p-3 shadow-sm hover:shadow-md transition cursor-pointer"
          >
            <span className="font-semibold">{dep.Nom_Dep}</span>
          </li>
        ))}
      </ul>

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
              <p>Chargement des actes...</p>
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
                          <div className="flex justify-between">
                            <span>{sa.Desc_SActes}</span>
                            <span className="text-sm text-gray-500">
                              {sa.Prix} Ar
                            </span>
                          </div>
                          <span
                            className={`text-xs ${
                              sa.Statut_Valide ? "text-green-600" : "text-red-500"
                            }`}
                          >
                            {sa.Statut_Valide
                              ? "Validé"
                              : "Non validé"}
                          </span>
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
