// import React from 'react'

// export default function StudentEvaluationPage() {
//   return (
//     <div>StudentEvaluationPage</div>
//   )
// }

// "use client";

// import React, { useEffect, useState } from "react";

// type SousActeRealise = {
//   ID_SActes: number;
//   Desc_SActes: string;
//   Date_Realise: string;
//   etudiant: {
//     FullName_Et: string;
//     Email_Et: string;
//   } | null;
//   acte?: any;
// };

// export default function StudentEvaluationPage() {
//   const [sousActes, setSousActes] = useState<SousActeRealise[]>([]);

//   useEffect(() => {
//     async function fetchData() {
//       const res = await fetch("/api/teacher/evaluation");
//       const data = await res.json();
//       setSousActes(data);
//     }

//     fetchData();
//   }, []);

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-semibold mb-4">
//         Étudiants qui ont réalisé un sous-acte
//       </h1>

//       <div className="space-y-4">
//         {sousActes.length === 0 && (
//           <p>Aucun sous-acte réalisé pour le moment.</p>
//         )}

//         {sousActes.map((item) => (
//           <div
//             key={item.ID_SActes}
//             className="p-4 border rounded-lg bg-white shadow"
//           >
//             <p>
//               <strong>Étudiant :</strong> {item.etudiant?.FullName_Et}
//             </p>

//             <p>
//               <strong>Email :</strong> {item.etudiant?.Email_Et}
//             </p>

//             <p>
//               <strong>Sous-acte :</strong> {item.Desc_SActes}
//             </p>

//             <p>
//               <strong>Date de réalisation :</strong>{" "}
//               {new Date(item.Date_Realise).toLocaleString()}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

"use client";

import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

type SousActeRealise = {
  ID_SActes: number;
  Desc_SActes: string;
  Date_Realise: string;
  Note?: number;
  etudiant: {
    FullName_Et: string;
    Email_Et: string;
  } | null;
  acte?: {
    Desc_Actes: string;
  };
};

export default function StudentEvaluationPage() {
  const [sousActes, setSousActes] = useState<SousActeRealise[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSActe, setSelectedSActe] = useState<SousActeRealise | null>(null);
  const [noteInput, setNoteInput] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false); // 🔹 état de chargement

  // 🔹 Charger les sous-actes réalisés
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/teacher/evaluation");
        const data = await res.json();
        setSousActes(data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);

  function openModal(sActe: SousActeRealise) {
    setSelectedSActe(sActe);
    setNoteInput(sActe.Note || 0);
    setIsModalOpen(true);
  }

  // 🔹 Envoyer l’évaluation
 async function submitEvaluation() {
  if (!selectedSActe) return;

  setIsLoading(true);

  try {
    const res = await fetch("/api/teacher/evaluation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ 
        sActeId: selectedSActe.ID_SActes, 
        note: noteInput
      }),
    });

    const data = await res.json();
    setIsLoading(false);

    if (res.ok) {
      setSousActes((prev) =>
        prev.map((s) =>
          s.ID_SActes === selectedSActe.ID_SActes ? { ...s, Note: noteInput } : s
        )
      );
      setIsModalOpen(false);

      Swal.fire({
        icon: "success",
        title: "Évaluation réussie",
        text: "L'évaluation du sous-acte a été enregistrée et une notification a été envoyée à l'étudiant.",
      });
    } else {
      Swal.fire({ icon: "error", title: "Erreur", text: data.error || "Une erreur est survenue." });
    }
  } catch (err) {
    setIsLoading(false);
    console.error(err);
    Swal.fire({ icon: "error", title: "Erreur", text: "Une erreur est survenue lors de l'évaluation." });
  }
}
  


  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">
        Étudiants qui ont réalisé un sous-acte
      </h1>

      <div className="space-y-4">
        {sousActes.length === 0 && <p>Aucun sous-acte réalisé pour le moment.</p>}

        {sousActes.map((item) => (
          <div key={item.ID_SActes} className="p-4 border rounded-lg bg-white shadow">
            <p><strong>Étudiant :</strong> {item.etudiant?.FullName_Et}</p>
            <p><strong>Email :</strong> {item.etudiant?.Email_Et}</p>
            <p><strong>Sous-acte :</strong> {item.Desc_SActes}</p>
            {item.acte && <p><strong>Acte :</strong> {item.acte.Desc_Actes}</p>}
            <p><strong>Date de réalisation :</strong> {new Date(item.Date_Realise).toLocaleString()}</p>
            <p><strong>Note :</strong> {item.Note ?? "Non évalué"}</p>
            <button
              className="mt-2 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
              onClick={() => openModal(item)}
            >
              Évaluer
            </button>
          </div>
        ))}
      </div>

      {/* 🔹 Modal pour évaluer */}
      {isModalOpen && selectedSActe && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-80 shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Évaluer le sous-acte</h2>
            <p className="mb-2"><strong>Étudiant :</strong> {selectedSActe.etudiant?.FullName_Et}</p>
            <p className="mb-2"><strong>Sous-acte :</strong> {selectedSActe.Desc_SActes}</p>
            {selectedSActe.acte && <p className="mb-2"><strong>Acte :</strong> {selectedSActe.acte.Desc_Actes}</p>}
            <input
              type="number"
              min={0}
              max={20}
              value={noteInput}
              onChange={(e) => setNoteInput(Number(e.target.value))}
              className="w-full border rounded px-2 py-1 mb-4"
              placeholder="Entrez la note (0-20)"
            />
            <div className="flex justify-end gap-2">
              <button
                className="px-4 py-1 bg-gray-300 rounded hover:bg-gray-400"
                onClick={() => setIsModalOpen(false)}
              >
                Annuler
              </button>
              <button
                className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                onClick={submitEvaluation}
              >
                {isLoading ? "Évaluation en cours..." : "Valider"} {/* 🔹 bouton dynamique */}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
