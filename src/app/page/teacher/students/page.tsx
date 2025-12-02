// "use client";

// import { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import Swal from "sweetalert2";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogFooter
// } from "@/components/ui/dialog";

// interface RealisationItem {
//   ID_Realisation: number;
//   Note?: number | null;
//   sousActe: {
//     Desc_SActes: string;
//   };
// }

// interface Student {
//   ID_Etudiant: number;
//   FullName_Et: string;
//   Annee_Et: string;
//   Photo_Et?: string;
//   departement: {
//     Nom_Dep: string;
//   };
//   realisations: RealisationItem[];
// }

// export default function StudentEvaluationPage() {
//   const [students, setStudents] = useState<Student[]>([]);
//   const [modalOpen, setModalOpen] = useState(false);
//   const [currentStudent, setCurrentStudent] = useState<Student | null>(null);
//   const [currentRealisation, setCurrentRealisation] = useState<RealisationItem | null>(null);
//   const [note, setNote] = useState<number | "">("");
//   const [isLoading, setIsLoading] = useState(false);  // ⬅️ NEW

//   // Charger données
//   useEffect(() => {
//     fetch("/api/teacher/evaluation")
//       .then(res => res.json())
//       .then(data => setStudents(data));
//   }, []);

//   // Envoyer évaluation
//   const handleSubmit = async () => {
//     if (!currentRealisation || note === "") return;

//     setIsLoading(true);  // ⬅️ NEW

//     const res = await fetch("/api/teacher/evaluation", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         realisationId: currentRealisation.ID_Realisation,
//         note: Number(note),
//       }),
//     });

//     setIsLoading(false); // ⬅️ NEW

//     if (res.ok) {
//       setModalOpen(false);

//       Swal.fire({
//         icon: "success",
//         title: "Évaluation réussie !",
//         text: "L’étudiant a été notifié de l’évaluation de son sous-acte.",
//         timer: 2500,
//         showConfirmButton: false,
//       });

//       // Recharger liste pour mettre note à jour
//       fetch("/api/teacher/evaluation")
//         .then(r => r.json())
//         .then(d => setStudents(d));

//     } else {
//       Swal.fire({
//         icon: "error",
//         title: "Erreur",
//         text: "Impossible d’envoyer l’évaluation.",
//       });
//     }
//   };

//   return (
//     <div className="flex flex-wrap justify-center gap-6 p-6">
//       {students.map(student => {
//         const isCurrentSelected = currentStudent?.ID_Etudiant === student.ID_Etudiant;

//         return (
//           <div key={student.ID_Etudiant} className="w-64 bg-white text-gray-800 rounded-lg shadow-md flex flex-col items-center p-4">
//             <img
//               src={student.Photo_Et || "https://via.placeholder.com/100"}
//               alt={student.FullName_Et}
//               className="w-24 h-24 rounded-full object-cover mb-4"
//             />
//             <h2 className="text-lg font-bold">{student.FullName_Et}</h2>
//             <p className="text-sm mb-2 text-gray-500">
//               {student.departement.Nom_Dep} • {student.Annee_Et}
//             </p>

//             <div className="w-full border border-gray-300 rounded-md p-3 flex-1">
//               <h3 className="text-sm font-semibold mb-2 text-center">Quotas réalisés</h3>

//               {student.realisations.map(realisation => {
//                 const isEvaluated = realisation.Note !== null && realisation.Note !== undefined;

//                 return (
//                   <div
//                     key={realisation.ID_Realisation}
//                     className={`flex justify-between items-center w-full border-b py-2 
//                       ${!isEvaluated ? "cursor-pointer hover:bg-gray-100" : ""}`}
//                     onClick={() => {
//                       if (!isEvaluated) {
//                         setCurrentStudent(student);
//                         setCurrentRealisation(realisation);
//                       }
//                     }}
//                   >
//                     <span>{realisation.sousActe.Desc_SActes}</span>
//                     <span className="font-semibold text-blue-600 w-12 text-right">
//                       {isEvaluated ? realisation.Note : "-"}
//                     </span>
//                   </div>
//                 );
//               })}
//             </div>

//             {/* Bouton Évaluer */}
            // <div className="w-full flex justify-end mt-3">
            //   <Button
            //     onClick={() => setModalOpen(true)}
            //     disabled={!currentRealisation || !isCurrentSelected}
            //   >
            //     Évaluer
            //   </Button>
            // </div>
//           </div>
//         );
//       })}

//       {/* MODAL */}
//       <Dialog open={modalOpen} onOpenChange={setModalOpen}>
//         <DialogContent className="sm:max-w-[425px]">
//           <DialogHeader>
//             <DialogTitle>
//               Évaluer {currentStudent?.FullName_Et}
//             </DialogTitle>
//           </DialogHeader>

//           <div className="mb-4">
//             <p className="mb-2 text-sm text-gray-600">
//               Sous-acte : <strong>{currentRealisation?.sousActe.Desc_SActes}</strong>
//             </p>

//             <input
//               type="number"
//               min={0}
//               max={20}
//               value={note}
//               onChange={(e) => setNote(Number(e.target.value))}
//               className="border border-gray-300 rounded-md p-2 w-full"
//               placeholder="Entrer la note (0-20)"
//             />
//           </div>

//           <DialogFooter className="flex justify-end gap-2">
//             <Button variant="outline" onClick={() => setModalOpen(false)}>
//               Annuler
//             </Button>

//             <Button
//               onClick={handleSubmit}
//               disabled={isLoading || note === "" || note < 0 || note > 20}
//             >
//               {isLoading ? "Évaluation en cours..." : "Valider"}
//             </Button>
//           </DialogFooter>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }



"use client";

import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Funnel } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import Swal from "sweetalert2";


interface Evaluation {
  ID_Realisation: number;
  Nom: string;
  annee: string;
  departement: string;
  Note?: number | null;
  sousActe?: {
    Desc_SActes: string;
    Prix: number;
  };
  photoUrl?: string;
  Date_Realise?: string;
}

export default function StudentEvaluationPage() {
  const [evaluations, setEvaluations] = useState<Evaluation[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [showDialog, setShowDialog] = useState(false);
  const [note, setNote] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [loadingData, setLoadingData] = useState(true);

  // Filtre
  const [filterOpen, setFilterOpen] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);
  const [filters, setFilters] = useState({
    annee: "",
    departement: "",
    nom: "",
  });

  // --- Récupérer les données dynamiquement depuis l'API ---
  useEffect(() => {
    const fetchStudents = async () => {
      setLoadingData(true);
      try {
        const res = await fetch("/api/teacher/evaluation");
        if (!res.ok) throw new Error("Erreur lors de la récupération des données");
        const data: Evaluation[] = await res.json();
        setEvaluations(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoadingData(false);
      }
    };

    fetchStudents();
  }, []);

  // Fermer filtre si clic extérieur
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(e.target as Node)) {
        setFilterOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filtre
  const filteredEvaluations = evaluations.filter(
    (e) =>
      (!filters.annee || e.annee === filters.annee) &&
      (!filters.departement || e.departement === filters.departement) &&
      (!filters.nom || e.Nom === filters.nom)
  );

  const selectedStudent = evaluations.find((e) => e.ID_Realisation === selected);

  // Soumission de la note (local pour l'instant)
  const handleSubmit = async () => {
    if (!selectedStudent) return;

    setLoading(true);

    try {
      const res = await fetch("/api/teacher/evaluation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          realisationId: selectedStudent.ID_Realisation,
          note: note,
        }),
      });

      if (!res.ok) {
        const txt = await res.text();
        throw new Error(txt || "Erreur lors de l'évaluation");
      }

      // ✔️ Mise à jour locale
      setEvaluations((prev) =>
        prev.map((e) =>
          e.ID_Realisation === selectedStudent.ID_Realisation
            ? { ...e, Note: note }
            : e
        )
      );

      // ✔️ Notification de succès
      Swal.fire({
        icon: "success",
        title: "Évaluation enregistrée",
        text: "Le sous-acte a été évalué avec succès.",
        timer: 2000,
        showConfirmButton: false,
      });

      setShowDialog(false);

    } catch (err) {
      console.error("Erreur:", err);

      Swal.fire({
        icon: "error",
        title: "Erreur",
        text: (err as Error).message,
      });

    } finally {
      setLoading(false);
    }
  };



  return (
    <div className="p-6">
      {loadingData ? (
        <p>Chargement des étudiants...</p>
      ) : (
        <>
          {/* --- Boutons --- */}
          <div className="flex justify-between mb-4">
            {/* Filtre */}
            <div className="relative">
              <Button
                variant="outline"
                onClick={() => setFilterOpen(!filterOpen)}
                className="flex items-center gap-2"
              >
                <Funnel /> Filtrer
              </Button>

              {filterOpen && (
                <div
                  ref={filterRef}
                  className="absolute left-0 mt-2 w-64 p-4 bg-white border rounded-lg shadow-lg z-10"
                >
                  <div className="grid gap-3">
                    {/* Année */}
                    <label className="text-sm font-medium">Année</label>
                    <Select
                      value={filters.annee || "all"}
                      onValueChange={(v) =>
                        setFilters((prev) => ({ ...prev, annee: v === "all" ? "" : v }))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Toutes" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Toutes</SelectItem>
                        <SelectItem value="4ᵉ année">4ᵉ année</SelectItem>
                        <SelectItem value="5ᵉ année">5ᵉ année</SelectItem>
                        <SelectItem value="6ᵉ année">6ᵉ année</SelectItem>
                      </SelectContent>
                    </Select>

                    {/* Étudiant */}
                    <label className="text-sm font-medium">Étudiant</label>
                    <Select
                      value={filters.nom || "all"}
                      onValueChange={(v) =>
                        setFilters((prev) => ({ ...prev, nom: v === "all" ? "" : v }))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Tous" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Tous</SelectItem>
                        {evaluations.map((e) => (
                          <SelectItem key={e.ID_Realisation} value={e.Nom}>
                            {e.Nom}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    {/* Département */}
                    <label className="text-sm font-medium">Département</label>
                    <Select
                      value={filters.departement || "all"}
                      onValueChange={(v) =>
                        setFilters((prev) => ({ ...prev, departement: v === "all" ? "" : v }))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Tous" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Tous</SelectItem>
                        <SelectItem value="Prothèse">Prothèse</SelectItem>
                        <SelectItem value="Parodontologie">Parodontologie</SelectItem>
                        <SelectItem value="Endodontie">Endodontie</SelectItem>
                      </SelectContent>
                    </Select>

                    {/* Reset */}
                    <Button
                      variant="outline"
                      onClick={() => setFilters({ annee: "", departement: "", nom: "" })}
                      className="mt-2"
                    >
                      Réinitialiser
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {/* Évaluer */}
            <Button
              disabled={!selected || (selectedStudent && selectedStudent.Note !== null)}
              onClick={() => setShowDialog(true)}
              className="bg-blue-600 text-white disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Évaluer
            </Button>
          </div>

          {/* --- Tableau --- */}
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
                {filteredEvaluations.map((p) => (
                  <tr
                    key={p.ID_Realisation}
                    className={`border-b cursor-pointer hover:bg-gray-100 transition ${
                      selected === p.ID_Realisation ? "bg-blue-100" : ""
                    }`}
                    onClick={() => setSelected(p.ID_Realisation)}
                  >
                    <td className="px-4 py-3">{p.Nom}</td>
                    <td className="px-4 py-3">{p.sousActe?.Desc_SActes}</td>
                    <td className="px-4 py-3">
                      {p.Note !== null && p.Note !== undefined ? (
                        `${p.Note}/20`
                      ) : (
                        <span className="text-gray-400 italic">Non évalué</span>
                      )}
                    </td>
                    <td className="px-4 py-3">{p.Date_Realise?.split("T")[0]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* --- Modal --- */}
          {/* --- Modal --- */}
          <Dialog open={showDialog} onOpenChange={setShowDialog}>
            <DialogContent className="sm:max-w-2xl">
              <DialogHeader>
                <DialogTitle>Évaluer l'étudiant</DialogTitle>
              </DialogHeader>

              {selectedStudent && (
                <div className="flex flex-col gap-6">

                  {/* --- Photo + Informations --- */}
                  <div className="flex items-start gap-6">
                    <img
                      src={selectedStudent.photoUrl}
                      className="w-32 h-32 rounded-full object-cover"
                    />

                    <div className="flex flex-col gap-3">

                      {/* Ligne unique */}
                      <p className="text-xl font-semibold">
                        {selectedStudent.Nom} - {selectedStudent.annee} - {selectedStudent.departement}
                      </p>

                      {/* Sous-acte */}
                      <p className="text-md">
                        <strong>Sous-acte:</strong> {selectedStudent.sousActe?.Desc_SActes}
                      </p>

                      {/* Date */}
                      <p className="text-md">
                        <strong>Date de réalisation:</strong>{" "}
                        {selectedStudent.Date_Realise?.split("T")[0]}
                      </p>

                      {/* --- Note alignée ici --- */}
                      <div className="flex flex-col gap-1 mt-2">
                        <label className="font-medium">Note</label>
                        <Input
                          type="number"
                          min={0}
                          max={20}
                          value={note ?? selectedStudent.Note ?? ""}
                          onChange={(e) => setNote(Number(e.target.value))}
                          className="w-60"
                          disabled={selectedStudent.Note !== null}
                        />
                      </div>

                    </div>
                  </div>

                  {/* Boutons */}
                  <div className="flex justify-between">
                    <Button variant="outline" onClick={() => setShowDialog(false)}>
                      Annuler
                    </Button>
                    <Button onClick={handleSubmit}>
                      {loading ? "Chargement..." : "Soumettre"}
                    </Button>
                  </div>
                </div>
              )}
            </DialogContent>
          </Dialog>
        </>
      )}
    </div>
  );
}




//STATIQUE 
// "use client";

// import React, { useState, useRef, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { Funnel } from "lucide-react";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";

// interface Evaluation {
//   ID_Realisation: number;
//   Nom: string;
//   annee: string;
//   departement: string;
//   Note?: number | null;
//   sousActe?: {
//     Desc_SActes: string;
//     Prix: number;
//   };
//   photoUrl?: string;
// }

// export default function StudentEvaluationPage() {
//   const evaluations: Evaluation[] = [
//     {
//       ID_Realisation: 1,
//       Nom: "Alice",
//       annee: "5ᵉ année",
//       departement: "Prothèse",
//       Note: 15,
//       sousActe: { Desc_SActes: "Détartrage", Prix: 15000 },
//       photoUrl: "https://i.pravatar.cc/150?img=1",
//     },
//     {
//       ID_Realisation: 2,
//       Nom: "Bob",
//       annee: "4ᵉ année",
//       departement: "Parodontologie",
//       Note: 18,
//       sousActe: { Desc_SActes: "Extraction molaire", Prix: 20000 },
//       photoUrl: "https://i.pravatar.cc/150?img=2",
//     },
//   ];

//   const [selected, setSelected] = useState<number | null>(null);
//   const [showDialog, setShowDialog] = useState(false);
//   const [note, setNote] = useState<number | null>(null);
//   const [loading, setLoading] = useState(false);

//   // Filtre
//   const [filterOpen, setFilterOpen] = useState(false);
//   const filterRef = useRef<HTMLDivElement>(null);

//   const [filters, setFilters] = useState({
//     annee: "",
//     departement: "",
//     nom: "",
//   });

//   // Fermer filtre si clic extérieur
//   useEffect(() => {
//     const handleClickOutside = (e: MouseEvent) => {
//       if (filterRef.current && !filterRef.current.contains(e.target as Node)) {
//         setFilterOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   // Filtre
//   const filteredEvaluations = evaluations.filter(
//     (e) =>
//       (!filters.annee || e.annee === filters.annee) &&
//       (!filters.departement || e.departement === filters.departement) &&
//       (!filters.nom || e.Nom === filters.nom)
//   );

//   const selectedStudent = evaluations.find((e) => e.ID_Realisation === selected);

//   // Soumission
//   const handleSubmit = async () => {
//     setLoading(true);
//     await new Promise((r) => setTimeout(r, 800));

//     if (selectedStudent) {
//       selectedStudent.Note = note ?? selectedStudent.Note;
//     }

//     setLoading(false);
//     setShowDialog(false);
//   };

//   return (
//     <div className="p-6">
//       {/* --- Boutons --- */}
//       <div className="flex justify-between mb-4">
//         {/* Filtre */}
//         <div className="relative">
//           <Button variant="outline" onClick={() => setFilterOpen(!filterOpen)} className="flex items-center gap-2">
//             <Funnel /> Filtrer
//           </Button>

//           {filterOpen && (
//             <div
//               ref={filterRef}
//               className="absolute left-0 mt-2 w-64 p-4 bg-white border rounded-lg shadow-lg z-10"
//             >
//               <div className="grid gap-3">

//                 {/* Année */}
//                 <label className="text-sm font-medium">Année</label>
//                 <Select
//                   value={filters.annee || "all"}
//                   onValueChange={(v) =>
//                     setFilters((prev) => ({ ...prev, annee: v === "all" ? "" : v }))
//                   }
//                 >
//                   <SelectTrigger><SelectValue placeholder="Toutes" /></SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="all">Toutes</SelectItem>
//                     <SelectItem value="4ᵉ année">4ᵉ année</SelectItem>
//                     <SelectItem value="5ᵉ année">5ᵉ année</SelectItem>
//                     <SelectItem value="6ᵉ année">6ᵉ année</SelectItem>
//                   </SelectContent>
//                 </Select>

//                 {/* Étudiant */}
//                 <label className="text-sm font-medium">Étudiant</label>
//                 <Select
//                   value={filters.nom || "all"}
//                   onValueChange={(v) =>
//                     setFilters((prev) => ({ ...prev, nom: v === "all" ? "" : v }))
//                   }
//                 >
//                   <SelectTrigger><SelectValue placeholder="Tous" /></SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="all">Tous</SelectItem>
//                     {evaluations.map((e) => (
//                       <SelectItem key={e.ID_Realisation} value={e.Nom}>
//                         {e.Nom}
//                       </SelectItem>
//                     ))}
//                   </SelectContent>
//                 </Select>

//                 {/* Département */}
//                 <label className="text-sm font-medium">Département</label>
//                 <Select
//                   value={filters.departement || "all"}
//                   onValueChange={(v) =>
//                     setFilters((prev) => ({ ...prev, departement: v === "all" ? "" : v }))
//                   }
//                 >
//                   <SelectTrigger><SelectValue placeholder="Tous" /></SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="all">Tous</SelectItem>
//                     <SelectItem value="Prothèse">Prothèse</SelectItem>
//                     <SelectItem value="Parodontologie">Parodontologie</SelectItem>
//                     <SelectItem value="Endodontie">Endodontie</SelectItem>
//                   </SelectContent>
//                 </Select>

//                 {/* Reset */}
//                 <Button
//                   variant="outline"
//                   onClick={() => setFilters({ annee: "", departement: "", nom: "" })}
//                   className="mt-2"
//                 >
//                   Réinitialiser
//                 </Button>
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Évaluer */}
//         <Button
//           disabled={!selected}
//           onClick={() => setShowDialog(true)}
//           className="bg-blue-600 text-white"
//         >
//           Évaluer
//         </Button>
//       </div>

//       {/* --- Tableau --- */}
//       <div className="overflow-x-auto bg-white shadow-md rounded-lg">
//         <table className="min-w-full text-left">
//           <thead className="bg-gray-100 border-b">
//             <tr>
//               <th className="px-4 py-3">Nom</th>
//               <th className="px-4 py-3">Sous-actes</th>
//               <th className="px-4 py-3">Note</th>
//               <th className="px-4 py-3">Date</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredEvaluations.map((p) => (
//               <tr
//                 key={p.ID_Realisation}
//                 className={`border-b cursor-pointer hover:bg-gray-100 transition ${
//                   selected === p.ID_Realisation ? "bg-blue-100" : ""
//                 }`}
//                 onClick={() => setSelected(p.ID_Realisation)}
//               >
//                 <td className="px-4 py-3">{p.Nom}</td>
//                 <td className="px-4 py-3">{p.sousActe?.Desc_SActes}</td>
//                 <td className="px-4 py-3">{p.Note}/20</td>
//                 <td className="px-4 py-3">
                  
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* --- Modal --- */}
//       <Dialog open={showDialog} onOpenChange={setShowDialog}>
//         <DialogContent className="sm:max-w-md">
//           <DialogHeader>
//             <DialogTitle>Évaluer l'étudiant</DialogTitle>
//           </DialogHeader>

//           {selectedStudent && (
//             <div className="flex flex-col gap-6">
//               <div className="flex items-center gap-6">
//                 <img
//                   src={selectedStudent.photoUrl}
//                   className="w-24 h-24 rounded-full object-cover"
//                 />

//                 <div>
//                   <p className="text-lg font-semibold">
//                     {selectedStudent.Nom} - {selectedStudent.annee} - Chirurgie dentaire
//                   </p>
//                   <p>
//                     <strong>Sous-acte:</strong> {selectedStudent.sousActe?.Desc_SActes}
//                   </p>
//                   <p>
//                     <strong>Date:</strong>{" "}
                    
//                   </p>
//                 </div>
//               </div>

//               {/* Note */}
//               <div>
//                 <label className="font-medium">Note /20</label>
//                 <Input
//                   type="number"
//                   min={0}
//                   max={20}
//                   value={note ?? selectedStudent.Note ?? ""}
//                   onChange={(e) => setNote(Number(e.target.value))}
//                 />
//               </div>

//               <div className="flex justify-between">
//                 <Button variant="outline" onClick={() => setShowDialog(false)}>
//                   Annuler
//                 </Button>
//                 <Button onClick={handleSubmit}>
//                   {loading ? "Chargement..." : "Soumettre"}
//                 </Button>
//               </div>
//             </div>
//           )}
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }
