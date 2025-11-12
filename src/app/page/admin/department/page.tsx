"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CirclePlus } from "lucide-react";
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
  const [nomDep, setNomDep] = useState("");
  const [departements, setDepartements] = useState<any[]>([]);
  const [loading, setLoading] = useState(false); // ✅ état du bouton

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!nomDep.trim()) {
      Swal.fire({
        icon: "warning",
        title: "Attention",
        text: "Veuillez entrer le nom du département.",
        confirmButtonColor: "#3085d6",
      });
      return;
    }

    setLoading(true); // ⏳ Début du chargement

    try {
      const res = await fetch("/api/admin/department", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ Nom_Dep: nomDep }),
      });

      if (res.ok) {
        Swal.fire({
          icon: "success",
          title: "Succès",
          text: "Le département a été ajouté avec succès !",
          showConfirmButton: false,
          timer: 2000,
        });
        setNomDep("");
        setOpen(false);
        fetchDepartments();
      } else {
        const error = await res.json();
        Swal.fire({
          icon: "error",
          title: "Erreur",
          text: error.error || "Une erreur est survenue lors de l’ajout.",
        });
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Erreur serveur",
        text: "Impossible de se connecter au serveur.",
      });
    } finally {
      setLoading(false); // ✅ Fin du chargement
    }
  };

  return (
    <div className="space-x-2 p-4">
      <h1 className="text-lg font-bold mb-4">Départements</h1>

      {/* 🔘 Bouton + Modal d'ajout */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" className="flex items-center gap-2 mb-4">
            Ajouter un département
            <CirclePlus />
          </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Ajouter un département</DialogTitle>
          </DialogHeader>

          <form className="space-y-5 mt-4" onSubmit={handleSubmit}>
            <div className="space-y-5 mt-4">
              <Label className="text-sm font-medium">
                Nom du département
              </Label>
              <Input
                placeholder="Ex: Chirurgie dentaire"
                value={nomDep}
                onChange={(e) => setNomDep(e.target.value)}
              />
            </div>

            <DialogFooter>
              <Button type="submit" className="text-white" disabled={loading}>
                {loading ? "Enregistrement en cours..." : "Enregistrer"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* 🧾 Liste des départements */}
      <div className="mt-6">
        {departements.length === 0 ? (
          <p className="text-gray-500 italic">
            Aucun département ajouté pour le moment.
          </p>
        ) : (
          <table className="min-w-full border border-gray-300 rounded-lg text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border">#</th>
                <th className="px-4 py-2 border">Nom du département</th>
              </tr>
            </thead>
            <tbody>
              {departements.map((dep, index) => (
                <tr key={dep.ID_Dep} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border text-center">{index + 1}</td>
                  <td className="px-4 py-2 border">{dep.Nom_Dep}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
