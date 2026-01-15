"use client";

import React, { useEffect, useState } from "react";
import { Eye } from "lucide-react";
import Image from "next/image";

// Skeleton pour les départements principaux
function DepartmentSkeletonTable() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      <table className="w-full">
        <thead className="bg-[#44adc9]/10">
          <tr>
            <th className="px-6 py-4 text-left">Département</th>
            <th className="px-6 py-4 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3, 4, 5].map((i) => (
            <tr key={i} className="border-t border-slate-100">
              <td className="px-6 py-4">
                <div className="h-4 w-48 bg-slate-200 rounded animate-pulse" />
              </td>
              <td className="px-6 py-4">
                <div className="h-9 w-24 bg-slate-200 rounded-xl animate-pulse" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Skeleton pour les départements disponibles
function AvailableDepartmentSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div
          key={i}
          className="relative bg-white rounded-2xl border border-slate-100 shadow-sm p-4 max-w-sm mx-auto animate-pulse"
        >
          <div className="absolute left-[-42px] top-3/5 -translate-y-1/2 w-36 h-36 bg-slate-200 rounded-xl" />
          <div className="ml-20 space-y-3">
            <div className="h-4 w-32 bg-slate-200 rounded" />
            <div className="h-7 w-20 bg-slate-200 rounded-full" />
            <div className="space-y-2">
              <div className="h-3 w-full bg-slate-200 rounded" />
              <div className="h-3 w-3/4 bg-slate-200 rounded" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// Skeleton pour les actes (modal)
function ActesSkeleton() {
  return (
    <div className="space-y-4">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="bg-white rounded-2xl border border-slate-100 p-4 shadow-sm animate-pulse"
        >
          <div className="h-5 w-64 bg-slate-200 rounded mb-4"></div>
          <div className="space-y-3">
            {[1, 2, 3].map((j) => (
              <div key={j} className="flex justify-between">
                <div className="h-4 w-40 bg-slate-200 rounded"></div>
                <div className="h-4 w-40 bg-slate-200 rounded"></div>
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
  const [availableDepartments, setAvailableDepartments] = useState<any[]>([]);
  const [loadingAll, setLoadingAll] = useState(true);

  const [selectedDep, setSelectedDep] = useState<any>(null);
  const [actes, setActes] = useState<any[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [loadingActes, setLoadingActes] = useState(false);

  const [joinModalOpen, setJoinModalOpen] = useState(false);
  const [depToJoin, setDepToJoin] = useState<any>(null);
  const [joining, setJoining] = useState(false);

  // ✅ Fetch combiné pour les départements principaux et disponibles
  useEffect(() => {
    async function fetchAll() {
      setLoadingAll(true);
      try {
        const [resDepartments, resAvailable] = await Promise.all([
          fetch("/api/teacher/department"),
          fetch("/api/teacher/department/available")
        ]);

        if (!resDepartments.ok) throw new Error("Erreur chargement départements");
        if (!resAvailable.ok) throw new Error("Erreur chargement départements disponibles");

        const dataDepartments = await resDepartments.json();
        const dataAvailable = await resAvailable.json();

        setDepartments(dataDepartments);
        setAvailableDepartments(dataAvailable);
      } catch (error) {
        console.error(error);
      } finally {
        setLoadingAll(false); // Les deux skeletons disparaissent en même temps
      }
    }

    fetchAll();
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

  // 🔹 Skeletons pour départements et départements disponibles
  if (loadingAll) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4 text-slate-800">Mes Départements</h1>
        <DepartmentSkeletonTable />

        <div className="mt-10">
          <h2 className="text-xl font-bold text-slate-800 mb-6">Départements disponibles</h2>
          <AvailableDepartmentSkeleton />
        </div>
      </div>
    );
  }

  // 🔹 Rendu réel une fois les données chargées
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Mes Départements</h1>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-[#44adc9]/10 text-slate-700">
            <tr>
              <th className="px-6 py-4 text-left font-semibold">Nom du département</th>
              <th className="px-6 py-4 text-left font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {departments.map((dep) => (
              <tr key={dep.ID_Dep} className="border-t border-slate-100 hover:bg-slate-50 transition">
                <td className="px-6 py-4 font-medium text-slate-800">{dep.Nom_Dep}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleOpenModal(dep)}
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#44adc9] border border-[#44adc9] rounded-xl hover:bg-[#44adc9]/10 transition focus:outline-none focus:ring-2 focus:ring-[#44adc9]/40"
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
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl shadow-xl w-[650px] max-h-[80vh] overflow-y-auto border border-slate-100 p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-slate-800">
                Actes : <span className="text-[#44adc9]">{selectedDep?.Nom_Dep}</span>
              </h2>
              <button className="text-slate-400 hover:text-red-500 transition" onClick={() => setShowModal(false)}>✕</button>
            </div>

            {loadingActes ? (
              <ActesSkeleton />
            ) : actes.length === 0 ? (
              <p className="text-slate-500 text-sm">Aucun acte trouvé pour ce département.</p>
            ) : (
              <div className="space-y-4">
                {actes.map((acte) => (
                  <div key={acte.ID_Actes} className="bg-slate-50 border border-slate-100 rounded-2xl p-4">
                    <h3 className="font-bold text-slate-800 mb-3">{acte.Desc_Actes}</h3>
                    <ul className="space-y-2">
                      {acte.sous_actes.map((sa: any) => (
                        <li key={sa.ID_SActes} className="flex justify-between items-center border-b border-slate-200 pb-2">
                          <span className="text-slate-700">{sa.Desc_SActes}</span>
                          <span className="font-semibold text-slate-800">{sa.Prix} Ar</span>
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

      {/* ================= DÉPARTEMENTS DISPONIBLES ================= */}
      <div className="mt-10">
        <h2 className="text-xl font-bold text-slate-800 mb-6">Départements disponibles</h2>

        {availableDepartments.length === 0 ? (
          <p className="text-slate-500 text-sm">Aucun département disponible pour le moment.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {availableDepartments.map((dep) => (
              <div
                key={dep.ID_Dep}
                className="relative bg-white rounded-2xl border border-slate-100 shadow-sm p-4 transition hover:shadow-md hover:-translate-y-1 max-w-sm mx-auto"
              >
                <Image
                  src="/departement Cards.png"
                  alt={dep.Nom_Dep}
                  className="absolute left-[-42px] top-3/5 -translate-y-1/2 w-36 h-36 object-cover"
                />
                <div className="ml-20">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-base font-bold text-slate-800">{dep.Nom_Dep}</h3>
                    <button
                      onClick={() => {
                        setDepToJoin(dep);
                        setJoinModalOpen(true);
                      }}
                      className="text-xs font-semibold text-[#44adc9] border border-[#44adc9] px-3 py-1 rounded-full hover:bg-[#44adc9]/10 transition"
                    >
                      Joindre
                    </button>
                  </div>
                  <p className="text-sm text-slate-500 leading-snug">
                    Accédez aux actes et sous-actes de ce département.
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ================= MODAL JOIN ================= */}
      {joinModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-xl w-[420px] p-6 border border-slate-100">
            <h3 className="text-lg font-bold text-slate-800 mb-3">Confirmation</h3>
            <p className="text-sm text-slate-600 mb-6">
              Voulez-vous vraiment rejoindre le département{" "}
              <span className="font-semibold text-[#44adc9]">{depToJoin?.Nom_Dep}</span> ?
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setJoinModalOpen(false)}
                className="px-4 py-2 text-sm rounded-xl border border-slate-300 hover:bg-slate-100"
              >
                Annuler
              </button>
              <button
                disabled={joining}
                onClick={async () => {
                  try {
                    setJoining(true);
                    const res = await fetch(`/api/teacher/department/${depToJoin.ID_Dep}/join`, { method: "POST" });
                    if (!res.ok) throw new Error();
                    setAvailableDepartments(prev => prev.filter(d => d.ID_Dep !== depToJoin.ID_Dep));
                    setDepartments(prev => [...prev, depToJoin]);
                    setJoinModalOpen(false);
                  } catch {
                    alert("Erreur lors de la liaison");
                  } finally {
                    setJoining(false);
                  }
                }}
                className="px-4 py-2 text-sm rounded-xl bg-[#44adc9] text-white hover:bg-[#3b9ab4] disabled:opacity-50"
              >
                {joining ? "Confirmation en cours..." : "Confirmer"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
