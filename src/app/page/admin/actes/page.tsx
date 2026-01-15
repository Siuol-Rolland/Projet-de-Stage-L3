"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CirclePlus, Plus, Trash2 } from "lucide-react";
import Swal from "sweetalert2";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Ellipsis, Pencil, Trash } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function ActesTableSkeleton({ rows = 5 }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
      <table className="w-full text-sm animate-pulse">
        <thead className="bg-[#f8fafc] border-b border-slate-100">
          <tr>
            <th className="px-6 py-3 border-t border-slate-100">Département</th>
            <th className="px-6 py-3 border-t border-slate-100">Acte</th>
            <th className="px-6 py-3 border-t border-slate-100">Sous-Actes</th>
            <th className="px-6 py-3 border-t border-slate-100">Actions</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: rows }).map((_, i) => (
            <tr key={i}>
              <td className="px-4 py-3 border-t">
                <div className="h-4 w-24 bg-slate-200 rounded"></div>
              </td>
              <td className="px-4 py-3 border-t">
                <div className="h-4 w-32 bg-slate-200 rounded"></div>
              </td>
              <td className="px-4 py-3 border-t">
                <div className="h-4 w-40 bg-slate-200 rounded"></div>
              </td>
              <td className="px-4 py-3 border-t text-center">
                <div className="h-4 w-6 bg-slate-200 rounded mx-auto"></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


export default function ActesPage() {
  const [open, setOpen] = useState(false);
  const [departements, setDepartements] = useState<any[]>([]);
  const [selectedDep, setSelectedDep] = useState("");
  const [descActe, setDescActe] = useState("");
  const [sousActes, setSousActes] = useState([{ nom: "", prix: "" }]);
  const [loading, setLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);


  // 🔹 TABLEAU STATIQUE POUR L’AFFICHAGE
  const [actes, setActes] = useState<any[]>([]);

  const actesParDepartement = actes.reduce((acc: any, acte: any) => {
    const dep = acte.departement?.Nom_Dep || "Non défini";

    if (!acc[dep]) {
      acc[dep] = [];
    }

    acc[dep].push(acte);
    return acc;
  }, {});

  // 🔹 MODAL MODIFICATION
  const [editOpen, setEditOpen] = useState(false);
  const [editStep, setEditStep] = useState<
    "choix" | "acte" | "sous-acte" | "sous-actes-form"
  >("choix"); 
  const [editTarget, setEditTarget] = useState<any>(null); // acte ou sous-acte à modifier
  const [editDesc, setEditDesc] = useState(""); // pour l’acte
  const [selectedSousActes, setSelectedSousActes] = useState<number[]>([]); // IDs des sous-actes
  const [selectedSousActesData, setSelectedSousActesData] = useState<
    { ID: number; nom: string; prix: number }[]
  >([]);

  // 🔴 SUPPRESSION
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [deleteStep, setDeleteStep] = useState<
    "choix" | "acte" | "sous-acte"
  >("choix");

  const [deleteTarget, setDeleteTarget] = useState<any>(null);
  const [selectedSousActesToDelete, setSelectedSousActesToDelete] = useState<number[]>([]);


  useEffect(() => {
    const fetchActes = async () => {
      setLoading(true); // <--- on active le loading avant le fetch
      try {
        const res = await fetch("/api/admin/actes");
        const data = await res.json();
        setActes(data);
      } catch (error) {
        console.error("Erreur chargement actes", error);
      } finally {
        setLoading(false); // <--- on désactive le loading après
      }
    };

    fetchActes();
  }, []);



  // 🔹 Charger les départements
  useEffect(() => {
    const fetchDepartments = async () => {
      const res = await fetch("/api/admin/department", { method: "GET" });
      const data = await res.json();
      setDepartements(data);
    };
    fetchDepartments();
  }, []);

  const addSousActe = () => {
    setSousActes([...sousActes, { nom: "", prix: "" }]);
  };

  const removeSousActe = (index: number) => {
    setSousActes(sousActes.filter((_, i) => i !== index));
  };

  const handleSousActeChange = (
    index: number,
    field: "nom" | "prix",
    value: string
  ) => {
    const updatedSousActes = [...sousActes];
    updatedSousActes[index][field] = value;
    setSousActes(updatedSousActes);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedDep || !descActe.trim()) {
      Swal.fire({
        icon: "warning",
        title: "Champs requis",
        text: "Veuillez remplir tous les champs avant de continuer.",
      });
      return;
    }

    setLoading(true);

    try {
      const sousActesFiltres = sousActes.filter((sa) => sa.nom.trim() !== "");

      const res = await fetch("/api/admin/actes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id_Dep: Number(selectedDep),
          Desc_Actes: descActe,
          sous_actes: sousActesFiltres.map((sa) => ({
            Desc_SActes: sa.nom,
            Prix: parseFloat(sa.prix) || 0,
          })),
        }),
      });

      if (res.ok) {
        Swal.fire({
          icon: "success",
          title: "Succès !",
          text: "L’acte et ses sous-actes ont été ajoutés avec succès.",
        });
        setOpen(false);
        setDescActe("");
        setSousActes([{ nom: "", prix: "" }]);

        await fetch("/api/admin/actes").then(res => res.json()).then(setActes);

      } else {
        Swal.fire({
          icon: "error",
          title: "Erreur !",
          text: "Une erreur est survenue lors de l’ajout de l’acte.",
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Erreur serveur",
        text: "Impossible de se connecter au serveur.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleEditActe = (acte: any) => {
    setEditTarget(acte);
    setEditStep("choix");
    setEditOpen(true);
  };


  const handleDeleteClick = (acte: any) => {
    setDeleteTarget(acte);
    setDeleteStep("choix");
    setSelectedSousActesToDelete([]);
    setDeleteOpen(true);
  };



  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-800">
            Actes médicaux
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            Gestion des actes et sous-actes par département
          </p>
        </div>
        {/* BOUTON AJOUTER */}
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button
              className="bg-[#44adc9] text-white hover:bg-[#3b9ab3]
                        rounded-xl shadow-sm flex items-center gap-2"
            >
              <CirclePlus size={18} />
              Ajouter un acte
            </Button>
          </DialogTrigger>

          <DialogContent className="sm:max-w-md rounded-2xl border border-slate-100 shadow-xl">
            <DialogHeader>
              <DialogTitle className="text-lg font-bold tracking-tight text-slate-800">Ajouter un acte</DialogTitle>
            </DialogHeader>

            <form className="space-y-4 mt-4" onSubmit={handleSubmit}>
              {/* Département */}
              <div className="space-y-2">
                <Label className="text-sm text-slate-600">Département</Label>
                <Select onValueChange={(val) => setSelectedDep(val)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Sélectionnez le département" />
                  </SelectTrigger>
                  <SelectContent>
                    {departements.map((dep) => (
                      <SelectItem key={dep.ID_Dep} value={dep.ID_Dep.toString()}>
                        {dep.Nom_Dep}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Désignation Acte */}
              <div className="space-y-2">
                <Label className="text-sm text-slate-600">Désignation de l'acte</Label>
                <Input
                  type="text"
                  value={descActe}
                  onChange={(e) => setDescActe(e.target.value)}
                />
              </div>

              {/* Sous-actes */}
              <div className="space-y-2">
                <Label className="text-sm text-slate-600">Sous-Actes</Label>
                {sousActes.map((sa, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Input
                      type="text"
                      placeholder={`Sous-acte ${index + 1}`}
                      value={sa.nom}
                      onChange={(e) =>
                        handleSousActeChange(index, "nom", e.target.value)
                      }
                      className="flex-1"
                    />

                    <Input
                      type="number"
                      placeholder="Prix"
                      value={sa.prix}
                      onChange={(e) =>
                        handleSousActeChange(index, "prix", e.target.value)
                      }
                      className="w-32"
                    />

                    <Button
                      type="button"
                      variant="ghost"
                      className="hover:bg-rose-50 text-rose-500"
                      size="icon"
                      onClick={() => removeSousActe(index)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}

                <Button
                  type="button"
                  variant="outline"
                  className="flex items-center gap-2"
                  onClick={addSousActe}
                >
                  <Plus className="h-4 w-4" /> Ajouter un sous-acte
                </Button>
              </div>

              <DialogFooter>
                <Button type="submit" disabled={loading}>
                  {loading ? "Enregistrement..." : "Enregistrer"}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>


      

      {/* BOUTON MODIFIER */}
      <Dialog open={editOpen} onOpenChange={setEditOpen}>
        <DialogContent className="sm:max-w-md rounded-2xl border border-slate-100 shadow-xl">
          <DialogHeader>
            <DialogTitle className="text-lg font-bold tracking-tight text-slate-800">Modifier</DialogTitle>
          </DialogHeader>

          {editStep === "choix" && (
            <div className="space-y-4">
              <p>Que voulez-vous modifier ?</p>
              <div className="flex flex-col gap-2">
                <Button onClick={() => { setEditStep("acte"); setEditDesc(editTarget.Desc_Actes); }}>
                  Acte
                </Button>
                <Button onClick={() => setEditStep("sous-acte")}>
                  Sous-acte
                </Button>
              </div>
            </div>
          )}

          {editStep === "acte" && (
            <form
              className="space-y-4 mt-4"
              onSubmit={async (e) => {
                e.preventDefault();
                setLoading(true);
                try {
                  const res = await fetch(`/api/admin/actes/${editTarget.ID_Actes}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ Desc_Actes: editDesc }),
                  });
                  if (res.ok) {
                    Swal.fire("Succès", "Acte modifié avec succès", "success");
                    setEditOpen(false);
                    const updated = await fetch("/api/admin/actes").then(r => r.json());
                    setActes(updated);
                  }
                } catch (err) {
                  console.error(err);
                  Swal.fire("Erreur", "Impossible de modifier l’acte", "error");
                } finally {
                  setLoading(false);
                }
              }}
            >
              <Label className="text-sm text-slate-600">Nom de l'acte</Label>
              <Input value={editDesc} onChange={(e) => setEditDesc(e.target.value)} />
              <DialogFooter>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setEditStep("choix")}
                >
                  Retour
                </Button>
                <Button type="submit" disabled={loading}>
                  {loading ? "Modifications..." : "Modifier"}
                </Button>
              </DialogFooter>
            </form>
          )}

          {editStep === "sous-acte" && (
            <form
              className="space-y-4 mt-4"
              onSubmit={async (e) => {
                e.preventDefault();
                setLoading(true);
                try {
                  const res = await fetch(`/api/admin/actes/sous-actes`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ ids: selectedSousActes }),
                  });
                  if (res.ok) {
                    Swal.fire("Succès", "Sous-acte(s) modifié(s) avec succès", "success");
                    setEditOpen(false);
                    const updated = await fetch("/api/admin/actes").then(r => r.json());
                    setActes(updated);
                  }
                } catch (err) {
                  console.error(err);
                  Swal.fire("Erreur", "Impossible de modifier les sous-actes", "error");
                } finally {
                  setLoading(false);
                }
              }}
            >
              <Label className="text-sm text-slate-600">Choisir les sous-actes à modifier</Label>
              <div className="flex flex-col gap-2 max-h-40 overflow-y-auto border p-2 rounded">
                {editTarget.sous_actes.map((s: any) => (
                  <label key={s.ID_SActes} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      value={s.ID_SActes}
                      checked={selectedSousActes.includes(s.ID_SActes)}
                      onChange={(e) => {
                        const id = s.ID_SActes;
                        setSelectedSousActes((prev) =>
                          e.target.checked ? [...prev, id] : prev.filter((i) => i !== id)
                        );
                      }}
                    />
                    {s.Desc_SActes} — {s.Prix} Ar
                  </label>
                ))}
              </div>

              <DialogFooter>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setEditStep("choix")}
                >
                  Retour
                </Button>
                <Button
                  type="button"
                  disabled={selectedSousActes.length === 0}
                  onClick={() => {
                    // Récupérer les sous-actes choisis
                    const data = editTarget.sous_actes
                      .filter((s: any) => selectedSousActes.includes(s.ID_SActes))
                      .map((s: any) => ({ ID: s.ID_SActes, nom: s.Desc_SActes, prix: s.Prix }));
                    setSelectedSousActesData(data);
                    setEditStep("sous-actes-form");
                  }}
                >
                  Suivant
                </Button>

                {/* <Button type="submit" disabled={loading || selectedSousActes.length === 0}>
                  {loading ? "Modifications..." : "Modifier"}
                </Button> */}
              </DialogFooter>
            </form>
          )}

          {editStep === "sous-actes-form" && (
            <form
              className="space-y-4 mt-4"
              onSubmit={async (e) => {
                e.preventDefault();
                setLoading(true);
                try {
                  const res = await fetch(`/api/admin/actes/sous-actes`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      sous_actes: selectedSousActesData.map((s) => ({
                        ID_SActes: s.ID,
                        Desc_SActes: s.nom,
                        Prix: s.prix,
                      })),
                    }),
                  });
                  if (res.ok) {
                    Swal.fire("Succès", "Sous-acte(s) modifié(s) avec succès", "success");
                    setEditOpen(false);
                    const updated = await fetch("/api/admin/actes").then(r => r.json());
                    setActes(updated);
                  }
                } catch (err) {
                  console.error(err);
                  Swal.fire("Erreur", "Impossible de modifier les sous-actes", "error");
                } finally {
                  setLoading(false);
                }
              }}
            >
              <Label className="text-sm text-slate-600">Modification de sous-acte</Label>
              {selectedSousActesData.map((s, index) => (
                <div key={s.ID} className="flex items-center gap-2">
                  <Input
                    className="flex-1"
                    value={s.nom}
                    onChange={(e) => {
                      const newData = [...selectedSousActesData];
                      newData[index].nom = e.target.value;
                      setSelectedSousActesData(newData);
                    }}
                  />
                  <Input
                    type="number"
                    className="w-32"
                    value={s.prix}
                    onChange={(e) => {
                      const newData = [...selectedSousActesData];
                      newData[index].prix = parseFloat(e.target.value) || 0;
                      setSelectedSousActesData(newData);
                    }}
                  />
                </div>
              ))}

              <DialogFooter className="flex justify-between">
                <Button type="button" variant="outline" onClick={() => setEditStep("sous-acte")}>
                  Retour
                </Button>
                <Button type="submit" disabled={loading}>
                  {loading ? "Modifications..." : "Modifier"}
                </Button>
              </DialogFooter>
            </form>
          )}

        </DialogContent>
      </Dialog>

      {/* BOUTON SUPPRIMER */}
      <Dialog open={deleteOpen} onOpenChange={setDeleteOpen}>
        <DialogContent className="sm:max-w-md rounded-2xl border border-slate-100 shadow-xl">
          <DialogHeader>
            <DialogTitle className="text-lg font-bold tracking-tight text-slate-800">Supprimer</DialogTitle>
          </DialogHeader>

          {/* ÉTAPE 1 : CHOIX */}
          {deleteStep === "choix" && (
            <div className="space-y-4">
              <p>Que voulez-vous supprimer ?</p>
              <div className="flex flex-col gap-2">
                <Button
                  variant="destructive"
                  onClick={() => setDeleteStep("acte")}
                >
                  Acte
                </Button>

                <Button
                  variant="outline"
                  onClick={() => setDeleteStep("sous-acte")}
                >
                  Sous-acte
                </Button>
              </div>
            </div>
          )}

          {/* ÉTAPE 2 : SUPPRESSION ACTE */}
          {deleteStep === "acte" && (
            <div className="space-y-4">
              <p>
                Voulez-vous vraiment supprimer l’acte :
                <strong className="block mt-1 text-red-600">
                  {deleteTarget.Desc_Actes}
                </strong>
              </p>

              <DialogFooter>
                <Button
                  variant="outline"
                  onClick={() => setDeleteStep("choix")}
                >
                  Retour
                </Button>

                <Button
                  variant="destructive"
                  disabled={deleteLoading}
                  onClick={async () => {
                    setDeleteLoading(true);
                    try {
                      const res = await fetch(
                        `/api/admin/actes/${deleteTarget.ID_Actes}`,
                        { method: "DELETE" }
                      );

                      if (res.ok) {
                        Swal.fire("Supprimé", "Acte supprimé avec succès", "success");
                        setDeleteOpen(false);
                        setActes(await fetch("/api/admin/actes").then(r => r.json()));
                      }
                    } catch (e) {
                      Swal.fire("Erreur", "Suppression impossible", "error");
                    } finally {
                      setDeleteLoading(false);
                    }
                  }}
                >
                  {deleteLoading ? "Suppression..." : "Supprimer"}
                </Button>

              </DialogFooter>
            </div>
          )}

          {/* ÉTAPE 3 : SUPPRESSION SOUS-ACTES */}
          {deleteStep === "sous-acte" && (
            <div className="space-y-4">
              <Label className="text-sm text-slate-600">Choisir les sous-actes à supprimer</Label>

              <div className="max-h-40 overflow-y-auto border rounded p-2 space-y-2">
                {deleteTarget.sous_actes.map((s: any) => (
                  <label key={s.ID_SActes} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={selectedSousActesToDelete.includes(s.ID_SActes)}
                      onChange={(e) => {
                        const id = s.ID_SActes;
                        setSelectedSousActesToDelete((prev) =>
                          e.target.checked
                            ? [...prev, id]
                            : prev.filter((i) => i !== id)
                        );
                      }}
                    />
                    {s.Desc_SActes} — {s.Prix} Ar
                  </label>
                ))}
              </div>

              <DialogFooter>
                <Button
                  variant="outline"
                  onClick={() => setDeleteStep("choix")}
                >
                  Retour
                </Button>

                <Button
                  variant="destructive"
                  disabled={selectedSousActesToDelete.length === 0 || deleteLoading}
                  onClick={async () => {
                    setDeleteLoading(true);
                    try {
                      const res = await fetch(
                        `/api/admin/actes/sous-actes`,
                        {
                          method: "DELETE",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify({ ids: selectedSousActesToDelete }),
                        }
                      );

                      if (res.ok) {
                        Swal.fire(
                          "Supprimé",
                          "Sous-acte(s) supprimé(s)",
                          "success"
                        );
                        setDeleteOpen(false);
                        setActes(await fetch("/api/admin/actes").then(r => r.json()));
                      }
                    } catch (e) {
                      Swal.fire("Erreur", "Suppression impossible", "error");
                    } finally {
                      setDeleteLoading(false);
                    }
                  }}
                >
                  {deleteLoading ? "Suppression..." : "Supprimer"}
                </Button>

              </DialogFooter>
            </div>
          )}
        </DialogContent>
      </Dialog>



      {/* 📌 TABLEAU STATIQUE STYLISÉ */}
      <div className="mt-8">
        {/* <h2 className="text-lg font-semibold mb-3">Liste des actes</h2> */}
        {actes.length === 0 && loading ? (
          <ActesTableSkeleton rows={5} />
        ) : actes.length === 0 ? (
          <p className="text-center py-6 text-gray-500">Aucun acte disponible</p>
        ) : ( 
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-[#f8fafc] border-b border-slate-100">
                <tr className="hover:bg-[#44adc9]/5 transition">
                  <th className="px-6 py-3 border-t border-slate-100">Département</th>
                  <th className="px-6 py-3 border-t border-slate-100">Acte</th>
                  <th className="px-6 py-3 border-t border-slate-100">Sous-Actes</th>
                  <th className="px-6 py-3 border-t border-slate-100">Actions</th>
                </tr>
              </thead>

              <tbody>
                {Object.keys(actesParDepartement).length === 0 ? (
                  <tr>
                    <td colSpan={3} className="text-center py-6 text-gray-500">
                      Aucun acte disponible
                    </td>
                  </tr>
                ) : (
                  Object.entries(actesParDepartement).map(
                    ([nomDep, actesDep]: any, depIndex) =>
                      actesDep.map((acte: any, acteIndex: number) => (
                        <tr
                          key={`${depIndex}-${acteIndex}`}
                          className="hover:bg-gray-50"
                        >
                          {/* Département (affiché une seule fois) */}
                          {acteIndex === 0 && (
                            <td
                              rowSpan={actesDep.length}
                              className="px-4 py-3 border-t font-semibold align-top bg-gray-50"
                            >
                              {nomDep}
                            </td>
                          )}

                          {/* Acte */}
                          <td className="px-4 py-3 border-t font-medium">
                            {acte.Desc_Actes}
                          </td>

                          {/* Sous-actes regroupés */}
                          <td className="px-4 py-3 border-t">
                            {acte.sous_actes.length === 0 ? (
                              <span className="text-xs text-gray-400">
                                Aucun sous-acte
                              </span>
                            ) : (
                              <ul className="space-y-1">
                                {acte.sous_actes.map((s: any) => (
                                  <li
                                    key={s.ID_SActes}
                                    className="text-sm text-gray-700"
                                  >
                                    • {s.Desc_SActes} —{" "}
                                    <span className="font-medium">{s.Prix} Ar</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </td>
                          {/* Actions */}
                          <td className="px-2 py-3 border-t text-center align-top">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="p-2 rounded-lg hover:bg-[#44adc9]/10 transition"
                                >
                                  <Ellipsis className="h-5 w-5 text-gray-600" />
                                </Button>
                              </DropdownMenuTrigger>

                              <DropdownMenuContent align="end" className="w-40 rounded-xl border border-slate-100 shadow-xl">
                                <DropdownMenuItem
                                  onClick={() => handleEditActe(acte)}
                                  className="cursor-pointer"
                                >
                                  <Pencil className="mr-2 h-4 w-4" />
                                  Modifier
                                </DropdownMenuItem>

                                <DropdownMenuItem
                                  onClick={() => handleDeleteClick(acte)}
                                  className="cursor-pointer text-red-600 focus:text-red-600"
                                >
                                  <Trash className="mr-2 h-4 w-4" />
                                  Supprimer
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </td>
                        </tr>
                      ))
                  )
                )}
              </tbody>


            </table>
          </div>
        )}
      </div>

    </div>
  );
}
