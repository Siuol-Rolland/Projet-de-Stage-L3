"use client";

import React, { useEffect, useState } from "react";
import { Ellipsis } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Swal from "sweetalert2";

interface Paiement {
  ID_Realisation: number;
  Montant_Restant: number;
  Note?: number | null;
  sousActe?: {
    Desc_SActes: string;
    Prix: number;
  };
  paiement?: {
    Montant: number;
    Statut_Paie: string;
    Date_Paie: string;
  };
}

export default function EtPayementPage() {
  const [paiements, setPaiements] = useState<Paiement[]>([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedPaiement, setSelectedPaiement] = useState<Paiement | null>(null);
  const [montant, setMontant] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch("/api/students/payement")
      .then((res) => res.json())
      // .then((data: Paiement[]) => {
      //   const evalues = data.filter((p) => p.Note !== null);
      //   setPaiements(evalues);
      // });
      .then((data) => {
      if (!Array.isArray(data)) {
        console.error("Réponse invalide :", data);
        return;
      }

      const evalues = data.filter((p) => p.Note !== null);
      setPaiements(evalues);
    })

  }, []);

  const openPayerDialog = (p: Paiement) => {
  if (p.paiement?.Statut_Paie === "TOTAL") {
    Swal.fire({
      icon: "info",
      title: "Paiement déjà effectué",
      text: "Vous ne pouvez pas effectuer de paiement, le sous-acte est déjà payé en totalité.",
      confirmButtonText: "OK",
    });
    return; // on bloque l'ouverture du modal
  }

  setSelectedPaiement(p);
  setOpenDialog(true);
};


  const handleSubmitPaiement = async () => {
    if (!selectedPaiement) return;

    setIsLoading(true);
    try {
      const res = await fetch("/api/students/payement", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ID_Realisation: selectedPaiement.ID_Realisation,
          Montant: montant,   // <-- correction ici
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setPaiements(prev =>
          prev.map(p =>
            p.ID_Realisation === selectedPaiement.ID_Realisation
              ? {
                  ...p,
                  paiement: {
                    ...data.paiement, // <-- statut et montant exacts du serveur
                  },
                  Montant_Restant: data.montantRestant, // <-- serveur calcule déjà
                }
              : p
          )
        );
        setOpenDialog(false);
        Swal.fire({
          icon: "success",
          title: "Paiement effectué !",
          text: data.message,
          confirmButtonText: "OK",
        });
      } else {
        Swal.fire({ icon: "error", title: "Erreur", text: data.message });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({ icon: "error", title: "Erreur", text: "Une erreur est survenue lors du paiement" });
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-4">Payement des sous-actes réalisés & Évaluation</h1>

      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full text-left">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="px-4 py-3 font-medium text-gray-700">Sous-actes</th>
              <th className="px-4 py-3 font-medium text-gray-700">Note</th>
              <th className="px-4 py-3 font-medium text-gray-700">Prix unitaire</th>
              <th className="px-4 py-3 font-medium text-gray-700">Montant payé</th>
              <th className="px-4 py-3 font-medium text-gray-700">Montant restant</th>
              <th className="px-4 py-3 font-medium text-gray-700">Date paiement</th>
              <th className="px-4 py-3 font-medium text-gray-700">Statut</th>
              <th className="px-4 py-3 font-medium text-gray-700 text-center"></th>
            </tr>
          </thead>

          <tbody>
            {paiements.map((p) => (
              <tr key={p.ID_Realisation} className="border-b hover:bg-gray-50 transition">
                <td className="px-4 py-3">{p.sousActe?.Desc_SActes}</td>
                <td className="px-4 py-3">{p.Note ?? "—"}/20</td>
                <td className="px-4 py-3">{p.sousActe?.Prix} Ar</td>
                <td className="px-4 py-3">{p.paiement ? `${p.paiement.Montant} Ar` : "—"}</td>
                <td className="px-4 py-3">{p.Montant_Restant} Ar</td>
                <td className="px-4 py-3">
                  {p.paiement ? new Date(p.paiement.Date_Paie).toLocaleDateString() : "—"}
                </td>
                <td className="px-4 py-3">{p.paiement?.Statut_Paie || "—"}</td>
                <td className="px-4 py-3 text-center">
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <Ellipsis className="cursor-pointer" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem onClick={() => openPayerDialog(p)}>Payer</DropdownMenuItem>
                      {/* <DropdownMenuItem className="text-red-500">Supprimer</DropdownMenuItem> */}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Dialog de paiement */}
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Paiement du sous-acte</DialogTitle>
          </DialogHeader>

          <div className="space-y-4 mt-2">
            <div>
              <label className="block text-sm font-medium">Sous-acte</label>
              <input
                type="text"
                value={selectedPaiement?.sousActe?.Desc_SActes || ""}
                disabled
                className="mt-1 block w-full rounded-md border border-gray-300 p-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Prix unitaire</label>
              <input
                type="number"
                value={selectedPaiement?.sousActe?.Prix || 0}
                disabled
                className="mt-1 block w-full rounded-md border border-gray-300 p-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Montant déjà payé</label>
              <input
                type="number"
                value={selectedPaiement?.paiement?.Montant || 0}
                disabled
                className="mt-1 block w-full rounded-md border border-gray-300 p-2 bg-gray-100"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Montant</label>
              <input
                type="number"
                value={montant}
                onChange={(e) => setMontant(Number(e.target.value))}
                className="mt-1 block w-full rounded-md border border-gray-300 p-2"
              />
            </div>
          </div>

          <DialogFooter className="mt-4">
            <Button onClick={handleSubmitPaiement} disabled={isLoading}>
              {isLoading ? "Paiement en cours..." : "Soumettre"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
