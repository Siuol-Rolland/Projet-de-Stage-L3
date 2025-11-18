"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Swal from "sweetalert2";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter
} from "@/components/ui/dialog";

interface RealisationItem {
  ID_Realisation: number;
  Note?: number | null;
  sousActe: {
    Desc_SActes: string;
  };
}

interface Student {
  ID_Etudiant: number;
  FullName_Et: string;
  Annee_Et: string;
  Photo_Et?: string;
  departement: {
    Nom_Dep: string;
  };
  realisations: RealisationItem[];
}

export default function StudentEvaluationPage() {
  const [students, setStudents] = useState<Student[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentStudent, setCurrentStudent] = useState<Student | null>(null);
  const [currentRealisation, setCurrentRealisation] = useState<RealisationItem | null>(null);
  const [note, setNote] = useState<number | "">("");
  const [isLoading, setIsLoading] = useState(false);  // ⬅️ NEW

  // Charger données
  useEffect(() => {
    fetch("/api/teacher/evaluation")
      .then(res => res.json())
      .then(data => setStudents(data));
  }, []);

  // Envoyer évaluation
  const handleSubmit = async () => {
    if (!currentRealisation || note === "") return;

    setIsLoading(true);  // ⬅️ NEW

    const res = await fetch("/api/teacher/evaluation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        realisationId: currentRealisation.ID_Realisation,
        note: Number(note),
      }),
    });

    setIsLoading(false); // ⬅️ NEW

    if (res.ok) {
      setModalOpen(false);

      Swal.fire({
        icon: "success",
        title: "Évaluation réussie !",
        text: "L’étudiant a été notifié de l’évaluation de son sous-acte.",
        timer: 2500,
        showConfirmButton: false,
      });

      // Recharger liste pour mettre note à jour
      fetch("/api/teacher/evaluation")
        .then(r => r.json())
        .then(d => setStudents(d));

    } else {
      Swal.fire({
        icon: "error",
        title: "Erreur",
        text: "Impossible d’envoyer l’évaluation.",
      });
    }
  };

  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {students.map(student => {
        const isCurrentSelected = currentStudent?.ID_Etudiant === student.ID_Etudiant;

        return (
          <div key={student.ID_Etudiant} className="w-64 bg-white text-gray-800 rounded-lg shadow-md flex flex-col items-center p-4">
            <img
              src={student.Photo_Et || "https://via.placeholder.com/100"}
              alt={student.FullName_Et}
              className="w-24 h-24 rounded-full object-cover mb-4"
            />
            <h2 className="text-lg font-bold">{student.FullName_Et}</h2>
            <p className="text-sm mb-2 text-gray-500">
              {student.departement.Nom_Dep} • {student.Annee_Et}
            </p>

            <div className="w-full border border-gray-300 rounded-md p-3 flex-1">
              <h3 className="text-sm font-semibold mb-2 text-center">Quotas réalisés</h3>

              {student.realisations.map(realisation => {
                const isEvaluated = realisation.Note !== null && realisation.Note !== undefined;

                return (
                  <div
                    key={realisation.ID_Realisation}
                    className={`flex justify-between items-center w-full border-b py-2 
                      ${!isEvaluated ? "cursor-pointer hover:bg-gray-100" : ""}`}
                    onClick={() => {
                      if (!isEvaluated) {
                        setCurrentStudent(student);
                        setCurrentRealisation(realisation);
                      }
                    }}
                  >
                    <span>{realisation.sousActe.Desc_SActes}</span>
                    <span className="font-semibold text-blue-600 w-12 text-right">
                      {isEvaluated ? realisation.Note : "-"}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Bouton Évaluer */}
            <div className="w-full flex justify-end mt-3">
              <Button
                onClick={() => setModalOpen(true)}
                disabled={!currentRealisation || !isCurrentSelected}
              >
                Évaluer
              </Button>
            </div>
          </div>
        );
      })}

      {/* MODAL */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>
              Évaluer {currentStudent?.FullName_Et}
            </DialogTitle>
          </DialogHeader>

          <div className="mb-4">
            <p className="mb-2 text-sm text-gray-600">
              Sous-acte : <strong>{currentRealisation?.sousActe.Desc_SActes}</strong>
            </p>

            <input
              type="number"
              min={0}
              max={20}
              value={note}
              onChange={(e) => setNote(Number(e.target.value))}
              className="border border-gray-300 rounded-md p-2 w-full"
              placeholder="Entrer la note (0-20)"
            />
          </div>

          <DialogFooter className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setModalOpen(false)}>
              Annuler
            </Button>

            <Button
              onClick={handleSubmit}
              disabled={isLoading || note === "" || note < 0 || note > 20}
            >
              {isLoading ? "Évaluation en cours..." : "Valider"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
