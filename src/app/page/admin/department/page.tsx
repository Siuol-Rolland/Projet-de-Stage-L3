"use client";

import { useState } from "react";
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

  // 🔹 Fonction d'insertion avec SweetAlert2
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

    try {
      const res = await fetch("/api/department", {
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
    }
  };

  return (
    <div className="space-x-2 p-4">
      <h1 className="text-lg font-bold mb-4">Départements</h1>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="text-white flex items-center gap-2">
            Ajouter
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
              <Button type="submit" className="text-white">
                Enregistrer
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
