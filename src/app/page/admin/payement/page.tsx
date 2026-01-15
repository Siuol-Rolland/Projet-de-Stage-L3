"use client";

import React, { useEffect,useState, useRef } from "react";
import { CircleCheck, CircleX, ClipboardClock, Ellipsis, Filter } from "lucide-react";
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
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Swal from "sweetalert2";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface HistoriquePaiement {
  ID_Hist: number;
  Action: string;
  AncienStatut: string;
  NouveauStatut: string;
  Montant: number;
  Montant_Restant: number;
  Date_Action: string;
}


interface Paiement {
  ID_Realisation: number;
  Nom_Etudiant: string;
  annee?: string;
  departement?: string;
  Montant_Restant: number;
  Note?: number | null;
  sousActe?: { Desc_SActes: string; Prix: number };
  paiement?: { ID_Paie: number; Montant: number; Statut_Paie: string; Date_Paie: string };
}

interface Departement {
  ID_Dep: number;
  Nom_Dep: string;
}

function PaiementTableSkeleton() {
  return (
    <>
      {Array.from({ length: 6 }).map((_, i) => (
        <tr key={i} className="border-b border-slate-100">
          {Array.from({ length: 9 }).map((_, j) => (
            <td key={j} className="px-4 py-3">
              <div className="h-4 bg-slate-200 rounded w-full"></div>
            </td>
          ))}
        </tr>
      ))}
    </>
  );
}



export default function AdminPayementPage() {
  const [paiements, setPaiements] = useState<Paiement[]>([]);
  const [departements, setDepartements] = useState<Departement[]>([]);

  // --- Filtres ---
  const [filterOpen, setFilterOpen] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);
  const [filters, setFilters] = useState({
    annee: "",
    departement: "",
    nom: "",
  });


  const [openDialog, setOpenDialog] = useState(false);
  const [openCancelDialog, setOpenCancelDialog] = useState(false);
  const [selectedPaiement, setSelectedPaiement] = useState<Paiement | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const [history, setHistory] = useState<HistoriquePaiement[]>([]);

  const [openHistoryDialog, setOpenHistoryDialog] = useState(false);

  const [loadingPaiements, setLoadingPaiements] = useState(true);


  // 🔹 Récupérer les paiements depuis le serveur
  useEffect(() => {
    const fetchPaiements = async () => {
      try {
        setLoadingPaiements(true); // 🔥 début skeleton
        const res = await fetch("/api/admin/payement");
        const data = await res.json();
        setPaiements(data.paiements ?? []);
      } catch (err) {
        console.error("Erreur récupération paiements:", err);
      } finally {
        setLoadingPaiements(false); // 🔥 fin skeleton
      }
    };

    fetchPaiements();
  }, []);


  // --- Charger les départements ---
  useEffect(() => {
    const fetchDepartements = async () => {
      try {
        const res = await fetch("/api/admin/department");
        const data = await res.json();
        setDepartements(data ?? []);
      } catch (err) {
        console.error("Erreur chargement départements:", err);
      }
    };
    fetchDepartements();
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(e.target as Node)) {
        setFilterOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredPaiements = paiements.filter((p) => {
    return (
      (!filters.annee || p.annee === filters.annee) &&
      (!filters.departement || p.departement === filters.departement) &&
      (!filters.nom || p.Nom_Etudiant === filters.nom)
    );
  });

  const titreFiltre = [
    filters.nom || "Tous les étudiants",
    filters.annee || "Toutes les années",
    filters.departement || "Tous les départements",
  ].join(" - ");

  // listes uniques pour les filtres
  const annees = Array.from(new Set(paiements.map(p => p.annee).filter(Boolean)));
  const departementsUniques = Array.from(
    new Set(paiements.map((p) => p.departement).filter(Boolean))
  );

  const etudiants = Array.from(new Set(paiements.map(p => p.Nom_Etudiant)));

  
  // Ouvre la modal de validation
  const openValidationDialog = (p: Paiement) => {
    setSelectedPaiement(p);
    setOpenDialog(true);
  };

  // Ouvre la modal d'annulation
  const openCancelConfirmation = (p: Paiement) => {
    setSelectedPaiement(p);
    setOpenCancelDialog(true);
  };

  

  const openHistory = async (p: Paiement) => {
    const res = await fetch(`/api/admin/payement/historique/${p.paiement?.ID_Paie}`);
    const data = await res.json();
    setHistory(data.historique);
    setOpenHistoryDialog(true);
  };


  // Validation du paiement
  const handleValidation = async () => {
  if (!selectedPaiement) return;

  setIsLoading(true);

  try {
    const res = await fetch("/api/admin/payement", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ID_Paie: selectedPaiement.paiement?.ID_Paie }),
    });

    const data = await res.json();

    if (!res.ok) {
      Swal.fire({
        icon: "error",
        title: "Erreur",
        text: data.message || "Impossible de valider le paiement",
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Paiement validé !",
        text: `Le paiement de ${selectedPaiement.Nom_Etudiant} a été validé.`,
      });

      // 🔹 Mettre à jour la liste côté front
      setPaiements((prev) =>
        prev.map((p) =>
          p.ID_Realisation === selectedPaiement.ID_Realisation
            ? {
                ...p,
                paiement: {
                  ID_Paie: p.paiement!.ID_Paie,
                  Montant: p.paiement!.Montant ?? 0,
                  Statut_Paie: data.updated.Statut_Paie,
                  Date_Paie: p.paiement!.Date_Paie ?? new Date().toISOString(),
                },
              }
            : p
        )
      );


      setOpenDialog(false);
    }
  } catch (err) {
    console.error(err);
    Swal.fire({
      icon: "error",
      title: "Erreur serveur",
      text: "Une erreur est survenue",
    });
  } finally {
    setIsLoading(false);
  }
};


  // Annulation du paiement
  const handleCancelValidation = async () => {
    if (!selectedPaiement) return;

    setIsLoading(true);

    try {
      const res = await fetch("/api/admin/payement", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ID_Paie: selectedPaiement.paiement?.ID_Paie }),
      });

      const data = await res.json();

      if (!res.ok) {
        Swal.fire({
          icon: "error",
          title: "Erreur",
          text: data.message || "Impossible d'annuler le paiement",
        });
      } else {
        Swal.fire({
          icon: "info",
          title: "Paiement annulé",
          text: `Le paiement de ${selectedPaiement.Nom_Etudiant} a été annulé.`,
        });

        // Mise à jour front
        setPaiements((prev) =>
          prev.map((p) =>
            p.ID_Realisation === selectedPaiement.ID_Realisation
              ? {
                  ...p,
                  paiement: {
                    ...p.paiement!,
                    Statut_Paie: "ANNULE",
                  },
                }
              : p
          )
        );

        setOpenCancelDialog(false);
      }
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "Erreur serveur",
        text: "Une erreur est survenue",
      });
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div className="p-6">
      {/* ======= TITRE ET DESCRIPTION ======= */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight text-slate-800">Validation des paiements</h1>
        <p className="mt-1 text-sm text-slate-400 font-medium">{titreFiltre}</p>
      </div>
      
      {/* --- Bouton filtre --- */}
      <div className="relative inline-block mb-4">
        <Button variant={"outline"} 
          className="rounded-xl border-slate-200 text-slate-600
             hover:bg-[#44adc9]/5 hover:text-[#44adc9]"
          onClick={() => setFilterOpen(!filterOpen)}
        >
          <Filter className="mr-2" />
          Filtrer
        </Button>

        {filterOpen && (
          <div
            ref={filterRef}
            className="absolute mt-2 w-72 p-4 bg-white rounded-2xl
           border border-slate-100 shadow-xl z-20"

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
                </SelectTrigger>
                <SelectContent onMouseDown={(e) => e.stopPropagation()}>
                  <SelectItem value="all">Tous</SelectItem>
                  {Array.from(new Set(paiements.map((p) => p.Nom_Etudiant))).map((nom) => (
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

              <Button
                variant="outline"
                className="mt-2"
                onClick={() =>
                  setFilters({ annee: "", departement: "", nom: "" })
                }
              >
                Réinitialiser
              </Button>
            </div>
          </div>
        )}
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <table className="min-w-full text-left">
          <thead className="bg-slate-50 border-b border-slate-100">
            <tr className="text-sm text-slate-500 font-semibold">
              <th className="px-4 py-3">Étudiant</th>
              <th className="px-4 py-3">Sous-actes</th>
              <th className="px-4 py-3">Note</th>
              <th className="px-4 py-3">Prix unitaire</th>
              <th className="px-4 py-3">Montant payé</th>
              <th className="px-4 py-3">Montant restant</th>
              <th className="px-4 py-3">Date paiement</th>
              <th className="px-4 py-3">Statut</th>
              <th className="px-4 py-3 text-center"></th>
            </tr>
          </thead>

          <tbody>
            {loadingPaiements ? (
    <PaiementTableSkeleton />
  ) : filteredPaiements.length === 0 ? (
    <tr>
      <td colSpan={9} className="text-center py-6 text-slate-500 text-sm">
        Aucun paiement trouvé.
      </td>
    </tr>
  ) : ( 
            filteredPaiements.map((p) => (
              <tr key={p.ID_Realisation} className="border-b border-slate-100 hover:bg-slate-50 transition">
                <td className="px-4 py-3 text-sm text-slate-700">{p.Nom_Etudiant}</td>
                <td className="px-4 py-3 text-sm text-slate-700">{p.sousActe?.Desc_SActes}</td>
                <td className="px-4 py-3 text-sm text-slate-700">{p.Note ?? "—"}/20</td>
                <td className="px-4 py-3 text-sm text-slate-700">{p.sousActe?.Prix} Ar</td>
                <td className="px-4 py-3 text-sm text-slate-700">{p.paiement?.Montant ?? "—"} Ar</td>
                <td className="px-4 py-3 text-sm text-slate-700">{p.Montant_Restant} Ar</td>
                <td className="px-4 py-3 text-sm text-slate-700">
                  {p.paiement ? new Date(p.paiement.Date_Paie).toLocaleDateString() : "—"}
                </td>
                <td className="px-4 py-3 text-sm text-slate-700">
                  <span
                    className={`
                      px-3 py-1 rounded-full text-xs font-bold
                      ${p.paiement?.Statut_Paie === "TOTAL" ? "bg-emerald-50 text-emerald-600" : ""}
                      ${p.paiement?.Statut_Paie === "PARTIEL" ? "bg-orange-50 text-orange-600" : ""}
                      ${p.paiement?.Statut_Paie === "EN_ATTENTE" ? "bg-slate-100 text-slate-500" : ""}
                      ${p.paiement?.Statut_Paie === "ANNULE" ? "bg-rose-50 text-rose-600" : ""}
                    `}
                  >
                    {p.paiement?.Statut_Paie}
                  </span>
                </td>
                <td className="px-4 py-3 text-center">
                  <DropdownMenu>
                    <DropdownMenuTrigger className="p-2 rounded-lg hover:bg-slate-100 transition">
                      <Ellipsis className="w-5 h-5 text-slate-500 cursor-pointer" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="rounded-xl border border-slate-100 shadow-lg">
                      <DropdownMenuItem className="flex gap-2 items-center text-sm" onClick={() => openValidationDialog(p)}>
                         <CircleCheck className="text-green-500"/>
                         Valider
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => openCancelConfirmation(p)} className="text-red-500" >
                        <CircleX className="text-red-500" />
                        Annuler le paiement
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => openHistory(p)}>
                         <ClipboardClock/>
                         historique
                      </DropdownMenuItem>

                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
              </tr>
            )))}
          </tbody>
        </table>
      </div>

      {/* Modal de validation */}
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="rounded-2xl border border-slate-100 shadow-xl">
          <DialogHeader>
            <DialogTitle className="text-lg font-bold tracking-tight text-slate-800" >Validation du paiement d'un sous-acte</DialogTitle>
          </DialogHeader>

          {selectedPaiement && (
            <div className="mt-4 grid grid-cols-2 gap-y-2 gap-x-4 text-gray-700">
              <div className="font-semibold">Étudiant:</div>
              <div>{selectedPaiement.Nom_Etudiant}</div>

              <div className="font-semibold">Sous-acte:</div>
              <div>{selectedPaiement.sousActe?.Desc_SActes}</div>

              <div className="font-semibold">Prix unitaire:</div>
              <div>{selectedPaiement.sousActe?.Prix} Ar</div>

              <div className="font-semibold">Montant payé:</div>
              <div>{selectedPaiement.paiement?.Montant ?? 0} Ar</div>

              <div className="font-semibold">Montant restant:</div>
              <div>{selectedPaiement.Montant_Restant} Ar</div>

              <div className="font-semibold">Date du paiement:</div>
              <div>
                {selectedPaiement.paiement
                  ? new Date(selectedPaiement.paiement.Date_Paie).toLocaleDateString()
                  : "-"}
              </div>

              <div className="font-semibold">Statut:</div>
              <div>{selectedPaiement.paiement?.Statut_Paie ?? "-"}</div>
            </div>
          )}

          <DialogFooter className="mt-4">
            <Button className="rounded-xl bg-[#44adc9] hover:bg-[#3aa0bb]"onClick={handleValidation} disabled={isLoading}>
              {isLoading ? "Validation..." : "Soumettre"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      {/* Modal d'annulation */}
      <Dialog open={openCancelDialog} onOpenChange={setOpenCancelDialog}>
        <DialogContent className="rounded-2xl border border-slate-100 shadow-xl">
          <DialogHeader>
            <DialogTitle >Confirmer l'annulation</DialogTitle>
          </DialogHeader>
          <p className="mt-2 text-gray-700">
            Voulez-vous vraiment <strong>ne pas valider</strong> le paiement du sous-acte{" "}
            <strong>{selectedPaiement?.sousActe?.Desc_SActes}</strong> de{" "}
            <strong>{selectedPaiement?.Nom_Etudiant}</strong> ?
          </p>
          <DialogFooter className="mt-4">
            <Button
              variant="outline"
              className="rounded-xl bg-[#44adc9] hover:bg-[#3aa0bb]"
              onClick={() => setOpenCancelDialog(false)}
            >
              Fermer
            </Button>
            <Button 
              className="rounded-xl bg-[#44adc9] hover:bg-[#3aa0bb]"
              onClick={handleCancelValidation} disabled={isLoading}>
              {isLoading ? "Annulation..." : "Confirmer"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Modal historique */}
      <Dialog open={openHistoryDialog} onOpenChange={setOpenHistoryDialog}>
        <DialogContent className="rounded-2xl border border-slate-100 shadow-xl">
          <DialogHeader>
            <DialogTitle className="text-lg font-bold tracking-tight text-slate-800">Historique des paiements</DialogTitle>
          </DialogHeader>

          <ul className="mt-4 space-y-3">
            {history.map((h) => (
              <li key={h.ID_Hist} className="p-3 bg-white rounded-xl border border-slate-100 shadow-sm">
                <strong className="text-slate-700">{h.Action}</strong> — {h.NouveauStatut}<br/>
                <span className="block text-xs text-slate-400 mt-1">
                  Montant: {h.Montant} Ar — Restant: {h.Montant_Restant} Ar<br/>
                  Le : {new Date(h.Date_Action).toLocaleString()}
                </span>
              </li>
            ))}
          </ul>

        </DialogContent>
      </Dialog>


    </div>
  );
}
