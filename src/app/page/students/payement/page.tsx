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
import { PaiementTableSkeleton } from "@/components/students/skeletons/PaiementTableSkeleton";
import { DetteSkeleton } from "@/components/students/skeletons/DetteSkeleton";
import { TitleSkeleton } from "@/components/students/skeletons/TitleSkeleton";
import { LabelSkeleton } from "@/components/students/skeletons/LabelSkeleton";


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
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [detteTotale, setDetteTotale] = useState<number>(0);


  useEffect(() => {
    const loadData = async () => {
      try {
        setIsPageLoading(true);

        const [paiementRes, detteRes] = await Promise.all([
          fetch("/api/students/payement"),
          fetch("/api/students/dette"),
        ]);

        const paiementsData = await paiementRes.json();
        const detteData = await detteRes.json();

        if (Array.isArray(paiementsData)) {
          const evalues = paiementsData.filter((p) => p.Note !== null);
          setPaiements(evalues);
        }

        if (typeof detteData.dette === "number") {
          setDetteTotale(detteData.dette);
        }
      } catch (error) {
        console.error("Erreur chargement page :", error);
      } finally {
        setIsPageLoading(false); // ⭐ TOUT s’arrête ici
      }
    };

    loadData();
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

        if (typeof data.dette === "number") {
          setDetteTotale(data.dette);
        }

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

  const statusStyle: Record<string, string> = {
    TOTAL: "bg-emerald-50 text-emerald-600",
    PARTIEL: "bg-orange-50 text-orange-600",
    EN_ATTENTE: "bg-slate-100 text-slate-500",
  };


  return (
    <div className="p-6">
      {/* En-tête avec titre et dette totale */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
        {isPageLoading ? (
          <TitleSkeleton />
        ) : (
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-800">
              Payement des sous-actes réalisés & Évalués
            </h1>
            <p className="mt-1 text-sm text-slate-400 font-medium">
              Sous-actes évalués et prêts au paiement
            </p>
          </div>
        )}

        {/* Carte Dette */}
        <div className="bg-[#44adc9]/10 border border-[#44adc9]/20
                  rounded-2xl px-4 py-3 flex items-center gap-3">
          {isPageLoading ? (
            <>
              <LabelSkeleton />
              <DetteSkeleton />
            </>
          ) : (
            <>
              <span className="text-sm font-medium text-[#44adc9]">Dette totale </span>
              <span className="text-xl font-bold text-[#44adc9]">
                {detteTotale.toLocaleString()} Ar
              </span>
            </>
          )}
        </div>
      </div>

      

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        {isPageLoading ? (
            <PaiementTableSkeleton />
          ) : (
            <table className="min-w-full text-left">
              <thead className="bg-slate-50 border-b border-slate-100">
                <tr  className="text-sm font-semibold text-slate-500">
                  <th className="px-4 py-3">Sous-actes</th>
                  <th className="px-4 py-3">Note</th>
                  <th className="px-4 py-3">Prix unitaire</th>
                  <th className="px-4 py-3">Montant payé</th>
                  <th className="px-4 py-3">Montant restant</th>
                  <th className="px-4 py-3">Date paiement</th>
                  <th className="px-4 py-3">Statut</th>
                  <th className="px-4 py-3"></th>
                </tr>
              </thead>

              <tbody>
                {paiements.map((p) => (
                  <tr key={p.ID_Realisation} className="border-b border-slate-100 hover:bg-slate-50 transition">
                    <td className="px-4 py-3 text-sm text-slate-700">{p.sousActe?.Desc_SActes}</td>
                    <td className="px-4 py-3 text-sm text-slate-700">{p.Note ?? "—"}/20</td>
                    <td className="px-4 py-3 text-sm text-slate-700">{p.sousActe?.Prix} Ar</td>
                    <td className="px-4 py-3 text-sm text-slate-700">{p.paiement ? `${p.paiement.Montant} Ar` : "—"}</td>
                    <td className="px-4 py-3 text-sm text-slate-700">{p.Montant_Restant} Ar</td>
                    <td className="px-4 py-3 text-sm text-slate-700">
                      {p.paiement ? new Date(p.paiement.Date_Paie).toLocaleDateString() : "—"}
                    </td>
                    <td className="px-4 py-3">
                      {p.paiement?.Statut_Paie ? (
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-bold
                          ${statusStyle[p.paiement.Statut_Paie]}`}
                        >
                          {p.paiement.Statut_Paie}
                        </span>
                      ) : (
                        "—"
                      )}
                    </td>
                    <td className="px-4 py-3 text-center">
                      <DropdownMenu>
                        <DropdownMenuTrigger className="p-2 rounded-lg hover:bg-slate-100 transition">
                          <Ellipsis className="w-5 h-5 text-slate-500 cursor-pointer" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="rounded-xl border border-slate-100 shadow-lg">
                          <DropdownMenuItem onClick={() => openPayerDialog(p)}>Payer</DropdownMenuItem>
                          {/* <DropdownMenuItem className="text-red-500">Supprimer</DropdownMenuItem> */}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )
        }
      </div>

      {/* Dialog de paiement */}
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="rounded-2xl border border-slate-100 shadow-xl">
          <DialogHeader>
            <DialogTitle className="text-lg font-bold tracking-tight text-slate-800">Paiement du sous-acte</DialogTitle>
          </DialogHeader>

          <div className="space-y-4 mt-2">
            <div>
              <label className="block text-sm font-medium">Sous-acte</label>
              <input
                type="text"
                value={selectedPaiement?.sousActe?.Desc_SActes || ""}
                disabled
                className="mt-1 bg-slate-100 text-slate-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Prix unitaire</label>
              <input
                type="number"
                value={selectedPaiement?.sousActe?.Prix || 0}
                disabled
                className="mt-1 bg-slate-100 text-slate-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Montant déjà payé</label>
              <input
                type="number"
                value={selectedPaiement?.paiement?.Montant || 0}
                disabled
                className="mt-1 bg-slate-100 text-slate-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Montant</label>
              <input
                
                type="number"
                value={montant}
                onChange={(e) => setMontant(Number(e.target.value))}
                className="mt-1 w-full rounded-xl border border-slate-200
                  px-3 py-2 text-sm focus:outline-none
                  focus:ring-2 focus:ring-[#44adc9]/30"
              />
            </div>
          </div>

          <DialogFooter className="mt-4">
            <Button 
              className="rounded-xl bg-[#44adc9] hover:bg-[#3aa0bb]"
              onClick={handleSubmitPaiement} disabled={isLoading}>
              {isLoading ? "Paiement en cours..." : "Soumettre"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
