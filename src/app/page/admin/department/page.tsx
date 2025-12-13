"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CirclePlus, Ellipsis, Eye, Loader2, Pencil, Trash } from "lucide-react";
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

export default function DepartmentPage() {
  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [nomDep, setNomDep] = useState("");
  const [editNomDep, setEditNomDep] = useState("");
  const [selectedDep, setSelectedDep] = useState<any>(null);
  const [departements, setDepartements] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const [ellipsisIndex, setEllipsisIndex] = useState<number | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
 


  const [viewOpen, setViewOpen] = useState(false);
  const [viewData, setViewData] = useState<any>(null);


  useEffect(() => {
    fetchDepartments();
  }, []);

  const fetchDepartments = async () => {
    try {
      const res = await fetch("/api/admin/department");
      const data = await res.json();
      setDepartements(data);
    } catch (error) {
      console.error("Erreur de chargement :", error);
    }
  };

  // Ferme le menu Ellipsis si on clique ailleurs
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setEllipsisIndex(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Ajouter
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nomDep.trim()) {
      Swal.fire({ icon: "warning", title: "Attention", text: "Veuillez entrer le nom du département." });
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/admin/department", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ Nom_Dep: nomDep }),
      });

      if (res.ok) {
        Swal.fire({ icon: "success", title: "Ajouté", timer: 1500, showConfirmButton: false });
        setNomDep("");
        setOpen(false);
        fetchDepartments();
      }
    } finally {
      setLoading(false);
    }
  };

  //Voir
  const handleView = async (dep: any) => {
    setViewData(null);          // reset
    setViewOpen(true);          // 👉 ouvrir tout de suite

    try {
      const res = await fetch(`/api/admin/department/${dep.ID_Dep}/details`);
      const data = await res.json();
      setViewData(data);        // 👉 remplissage après
    } catch (error) {
      Swal.fire("Erreur", "Impossible de charger les détails", "error");
    }
  };



  // Modifier
  const handleEdit = async () => {
    if (!editNomDep.trim()) {
      Swal.fire({
        icon: "warning",
        title: "Attention",
        text: "Le nom ne peut pas être vide.",
      });
      return;
    }

    try {
      const res = await fetch(`/api/admin/department/${selectedDep.ID_Dep}/edite`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ Nom_Dep: editNomDep }),
      });

      const data = await res.json();

      if (!res.ok) {
        Swal.fire("Erreur", data.error || "Échec de modification", "error");
        return;
      }

      Swal.fire({
        icon: "success",
        title: "Modifié",
        timer: 1200,
        showConfirmButton: false,
      });

      setEditOpen(false);
      fetchDepartments();
    } catch (error) {
      Swal.fire("Erreur", "Problème réseau", "error");
    }
  };


  // Supprimer
  const handleDelete = (dep: any) => {
    Swal.fire({
      title: "Supprimer ?",
      text: `Voulez-vous supprimer "${dep.Nom_Dep}" ?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#e63946",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Oui, supprimer",
      cancelButtonText: "Annuler",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await fetch(`/api/admin/department/${dep.ID_Dep}`, { method: "DELETE" });
        Swal.fire("Supprimé!", "", "success");
        fetchDepartments();
      }
    });
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-xl font-bold">Départements</h1>

      {/* Modal Ajout */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="flex items-center gap-2" variant="outline">
            <CirclePlus size={18} /> Ajouter un département
          </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Ajouter un département</DialogTitle>
          </DialogHeader>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <Label>Nom du département</Label>
              <Input
                placeholder="Ex: Chirurgie Dentaire"
                value={nomDep}
                onChange={(e) => setNomDep(e.target.value)}
              />
            </div>

            <DialogFooter>
              <Button type="submit" disabled={loading}>
                {loading ? "Enregistrement..." : "Enregistrer"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Tableau */}
      <div className="mt-4">
        {departements.length === 0 ? (
          <p className="text-gray-500 italic">Aucun département ajouté pour le moment.</p>
        ) : (
          <div className="overflow-hidden rounded-xl border shadow-sm">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-100 border-b">
                <tr>
                  <th className="px-6 py-3 text-left font-semibold text-gray-700">
                    Nom du département
                  </th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                {departements.map((dep, index) => (
                  <tr
                    key={dep.ID_Dep}
                    className="border-b hover:bg-gray-50 transition relative"
                  >
                    <td className="px-6 py-3">{dep.Nom_Dep}</td>

                    {/* Bouton Ellipsis */}
                    <td className="px-3 py-3 text-right">
                      <button
                        onClick={() =>
                          setEllipsisIndex(ellipsisIndex === index ? null : index)
                        }
                        className="p-2 rounded hover:bg-gray-200 transition"
                      >
                        <Ellipsis />
                      </button>

                      {/* Menu Ellipsis */}
                      {ellipsisIndex === index && (
                        <div
                          ref={menuRef}
                          className={`absolute right-6 w-40 bg-white shadow-xl border rounded-lg z-50
                            ${index >= departements.length - 2
                              ? "bottom-full mb-2 animate-in fade-in slide-in-from-bottom-2"
                              : "mt-2 animate-in fade-in slide-in-from-top-2"
                            }`}
                        >
                          <button
                            className="w-full px-4 py-2 flex items-center gap-2 hover:bg-gray-100"
                            onClick={() => {
                              handleView(dep);
                              setEllipsisIndex(null);
                            }}
                          >
                            <Eye size={16} /> Voir
                          </button>

                          <button
                            className="w-full px-4 py-2 flex items-center gap-2 hover:bg-gray-100"
                            onClick={() => {
                              setSelectedDep(dep);
                              setEditNomDep(dep.Nom_Dep);
                              setEditOpen(true);
                              setEllipsisIndex(null);
                            }}
                          >
                            <Pencil size={16} /> Modifier
                          </button>

                          <button
                            className="w-full px-4 py-2 flex items-center gap-2 text-red-600 hover:bg-red-50"
                            onClick={() => handleDelete(dep)}
                          >
                            <Trash size={16} /> Supprimer
                          </button>
                        </div>
                      )}


                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      {/* Modal Voir Département */}
      <Dialog open={viewOpen} onOpenChange={setViewOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Détails du département</DialogTitle>
          </DialogHeader>

          {!viewData ? (
            <div className="flex items-center justify-center py-6">
              <Loader2 className="animate-spin" size={24} />
              <span className="ml-2">Chargement...</span>
            </div>
          ) : (
            <div className="space-y-4">
              <h2 className="font-bold text-lg">{viewData.Nom_Dep}</h2>

              <div className="space-y-3">
                {viewData.actes.length === 0 ? (
                  <p className="text-gray-500 italic">Aucun acte dans ce département.</p>
                ) : (
                  viewData.actes.map((acte: any) => (
                    <div key={acte.ID_Actes} className="border p-3 rounded-lg">
                      <p className="font-semibold">• {acte.Desc_Actes}</p>

                      <ul className="list-disc ml-6 text-sm mt-1">
                        {acte.sous_actes.map((sa: any) => (
                          <li key={sa.ID_SActes}>{sa.Desc_SActes}</li>
                        ))}
                      </ul>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Modal Modification */}
      <Dialog open={editOpen} onOpenChange={setEditOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Modifier le département</DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            <Label>Nom du département</Label>
            <Input
              value={editNomDep}
              onChange={(e) => setEditNomDep(e.target.value)}
            />
          </div>

          <DialogFooter>
            <Button onClick={handleEdit}>Enregistrer</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
