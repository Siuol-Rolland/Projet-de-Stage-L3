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
  const [departements, setDepartements] = useState<{ID_Dep: number, Nom_Dep: string}[]>([]);

  // Filtre
  const [filterOpen, setFilterOpen] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);
  const [filters, setFilters] = useState({
    annee: "",
    departement: "",
    nom: "",
  });

  const titreFiltre = [
    filters.nom || "Tous les étudiants",
    filters.annee || "Toutes les années",
    filters.departement || "Tous les départements"
  ].join(" - ");


  // --- Récupérer les départements ---
  useEffect(() => {
    const fetchDepartements = async () => {
      try {
        const res = await fetch('/api/admin/department');
        if (!res.ok) throw new Error('Erreur lors du chargement des départements');
        const data = await res.json();
        setDepartements(data);
      } catch (err) {
        console.error('Erreur:', err);
      }
    };

    fetchDepartements();
  }, []);

  // --- Récupérer les étudiants ---
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
                      <SelectTrigger onMouseDown={(e) => e.stopPropagation()}>
                        <SelectValue placeholder="Toutes" />
                      </SelectTrigger>
                      <SelectContent onMouseDown={(e) => e.stopPropagation()}>
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
                      <SelectTrigger onMouseDown={(e) => e.stopPropagation()}>
                        <SelectValue placeholder="Tous" />
                      </SelectTrigger >
                      <SelectContent onMouseDown={(e) => e.stopPropagation()}>
                        <SelectItem value="all">Tous</SelectItem>
                        {Array.from(new Set(evaluations.map((e) => e.Nom))).map((nom) => (
                          <SelectItem key={nom} value={nom}>
                            {nom}
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
                      <SelectTrigger onMouseDown={(e) => e.stopPropagation()}>
                        <SelectValue placeholder="Tous" />
                      </SelectTrigger>
                      <SelectContent onMouseDown={(e) => e.stopPropagation()}>
                        <SelectItem value="all">Tous</SelectItem>
                        {departements.map((dep) => (
                          <SelectItem key={dep.ID_Dep} value={dep.Nom_Dep}>
                            {dep.Nom_Dep}
                          </SelectItem>
                        ))}
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

          {/* --- Titre --- */}
          <div className="mb-4 text-center">
            <h3 className="text-foreground font-semibold text-lg"> Evaluation des quotas realisé</h3>
            <p className="text-muted-foreground text-sm"> {titreFiltre}</p>
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




