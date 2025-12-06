"use client";

import React, { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import Swal from "sweetalert2";

import { CirclePlus, Funnel } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type SousActeType = {
  ID_SActes?: number;
  sousActe: string;
  nombre: number;
  prix?: number;
};

type QuotaType = {
  annee: string;
  departement: string;
  sousActes: SousActeType[];
  dateDebut: string;
  dateFin: string;
};


type FormDataType = {
  annee: string;
  departement: string;
  acte: string;
  sousActesList: { sousActe: string; nombre: number | "" }[];
  dateDebut: string;
  dateFin: string;
};

const initialFormData: FormDataType = {
  annee: "",
  departement: "",
  acte: "",
  sousActesList: [
    { sousActe: "", nombre: "" }
  ],
  dateDebut: "",
  dateFin: "",
};

export default function QuotasPage() {
  const [open, setOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormDataType>(initialFormData);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const [departements, setDepartements] = useState<{ ID_Dep: number; Nom_Dep: string }[]>([]);
  const [actes, setActes] = useState<{ ID_Actes: number; Desc_Actes: string }[]>([]);
  const [sousActes, setSousActes] = useState<{ ID_SActes: number; Desc_SActes: string }[]>([]);

  const filterRef = useRef<HTMLDivElement>(null);
  const ignoreRef = useRef<HTMLDivElement>(null);


  const getFilterLabel = () => {
    const dep = filters.departement || "Tous les départements";
    const an = filters.annee || "Tous les niveaux";

    return `${dep} - ${an}`;
  };


  const addSousActeRow = () => {
  setFormData(prev => ({
    ...prev,
    sousActesList: [...prev.sousActesList, { sousActe: "", nombre: "" }]
  }));
};

const updateSousActeRow = (index: number, field: "sousActe" | "nombre", value: any) => {
  setFormData(prev => {
    const updated = [...prev.sousActesList];
    updated[index][field] = value;
    return { ...prev, sousActesList: updated };
  });
};

const removeSousActeRow = (index: number) => {
  setFormData(prev => {
    const updated = prev.sousActesList.filter((_, i) => i !== index);
    return { ...prev, sousActesList: updated };
  });
};

const [selectedQuota, setSelectedQuota] = useState<number | null>(null);

const annees = ["4ᵉ année", "5ᵉ année", "6ᵉ année"];
const departement = departements.map(d => d.Nom_Dep);

// 🔥 Remplacer les données statiques par un tableau vide au début
const [quotas, setQuotas] = useState<QuotaType[]>([]);

const fetchQuotas = async () => {
  try {
    const res = await fetch("/api/admin/quotas");
    const data = await res.json();

    if (!Array.isArray(data)) throw new Error("Format invalide quotas");

    setQuotas(data);
  } catch (error) {
    console.error("Erreur quotas:", error);
    setQuotas([]); // évite crash
    Swal.fire({
      icon: "error",
      title: "Erreur",
      text: "Impossible de charger les quotas.",
    });
  }
};



// 🔥 Load quotas depuis l’API
useEffect(() => {
  fetchQuotas();
}, []);

useEffect(() => {
  function handleClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;

    // 1️⃣ NE PAS FERMER si clic dans le popup filtre
    if (filterRef.current?.contains(target)) return;

    // 2️⃣ NE PAS FERMER si clic dans un SelectContent (shadcn/ui)
    if (target.closest("[data-radix-popper-content-wrapper]")) return;

    // 3️⃣ Sinon, fermer
    setFilterOpen(false);
  }

  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
}, []);





const [filterOpen, setFilterOpen] = useState(false);

const [filters, setFilters] = useState({ annee: "", departement: "" });
  
  // 🔥 Filtrage basé sur données API
const filteredQuotas = quotas.filter((q: QuotaType) => {
  return (
    (!filters.annee || q.annee === filters.annee) &&
    (!filters.departement || q.departement === filters.departement)
  );
});



  const totalActes = quotas.reduce(
  (sum: number, saQuota: QuotaType) => sum + saQuota.sousActes.reduce((s: number, sa: SousActeType) => s + (sa.nombre ?? 0), 0),
  0
);



  // 🔹 Charger les départements
  useEffect(() => {
    fetch("/api/admin/department")
      .then((res) => res.json())
      .then((data) => {
        if (!Array.isArray(data)) throw new Error("Format invalide des départements");
        setDepartements(data);
      })
      .catch((err) => {
        console.error("Erreur départements:", err);
        setDepartements([]); // évite le crash
      });
  }, []);

  // 🔹 Charger les actes lorsque le département change
  useEffect(() => {
  if (!formData.departement) return;

  const selectedDep = departements.find((d) => d.Nom_Dep === formData.departement);
  if (!selectedDep) return;

  const fetchActes = async () => {
    try {
      const res = await fetch(`/api/admin/actes?id_Dep=${selectedDep.ID_Dep}`);
      if (!res.ok) throw new Error("Erreur de chargement des actes");
      const data = await res.json();
      setActes(data);
    } catch (error) {
      console.error("Erreur actes:", error);
      Swal.fire({
        icon: "error",
        title: "Erreur",
        text: "Impossible de charger les actes pour ce département.",
      });
    }
  };

  fetchActes();
}, [formData.departement, departements]);


  // 🔹 Charger les sous-actes lorsque l’acte change
  useEffect(() => {
    if (formData.acte) {
      const selectedActe = actes.find((a) => a.Desc_Actes === formData.acte);
      if (selectedActe) {
        fetch(`/api/admin/sousactes?id_Actes=${selectedActe.ID_Actes}`)
          .then((res) => res.json())
          .then((data) => setSousActes(data))
          .catch((err) => console.error("Erreur sous-actes:", err));
      }
    } else {
      setSousActes([]);
      setFormData((prev) => ({ ...prev, sousActe: "" }));
    }
  }, [formData.acte, actes]);

  // 🔹 Gestion des champs du formulaire
  const handleInputChange = (field: keyof FormDataType, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // 🔹 Validation par étape
  const validateStep = (step: number) => {
    switch (step) {
      case 1:
        return formData.annee !== "";
      case 2:
        return formData.departement !== "";
      case 3:
        return formData.acte !== "";
      case 4:
  return formData.sousActesList.every(item =>
    item.sousActe !== "" && item.nombre !== ""
  );

      case 5:
        if (!formData.dateDebut || !formData.dateFin) return false;
        const debut = new Date(formData.dateDebut);
        const fin = new Date(formData.dateFin);
        return fin >= debut;
      default:
        return false;
    }
  };

  // 🔹 Étape suivante
  const handleNextStep = () => {
    setError(null);
    if (validateStep(currentStep)) {
      setCurrentStep((s) => Math.min(s + 1, 5));
    } else {
      setError("Veuillez remplir correctement tous les champs requis.");
    }
  };

  // 🔹 Étape précédente
  const handlePrevStep = () => {
    setError(null);
    setCurrentStep((s) => Math.max(s - 1, 1));
  };

  // 🔹 Soumission finale
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.dateDebut || !formData.dateFin) {
      setError("Veuillez remplir les deux dates.");
      return;
    }

    const debut = new Date(formData.dateDebut);
    const fin = new Date(formData.dateFin);

    if (fin.getTime() === debut.getTime()) {
      setError("La date de fin ne peut pas être identique à la date de début.");
      return;
    }

    if (fin < debut) {
      setError("La date de fin ne peut pas être inférieure à la date de début.");
      return;
    }

    setLoading(true);

    try {
      const selectedDep = departements.find(d => d.Nom_Dep === formData.departement);
      const selectedActe = actes.find(a => a.Desc_Actes === formData.acte);
      const sousActesPrepared = formData.sousActesList.map(item => {
  const sActe = sousActes.find(sa => sa.Desc_SActes === item.sousActe);
  return {
    sousActeId: sActe?.ID_SActes,
    nombre: item.nombre
  };
});


      const response = await fetch("/api/admin/quotas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          annee: formData.annee,
          departementId: selectedDep?.ID_Dep,
          acteId: selectedActe?.ID_Actes,
          sousActesList: sousActesPrepared,
          dateDebut: formData.dateDebut,
          dateFin: formData.dateFin,
        }),
      });

      const result = await response.json();

      if (result.success) {
        await fetchQuotas();

        Swal.fire({
          title: "Succès 🎉",
          text: "Le quota a été enregistré avec succès !",
          icon: "success",
          confirmButtonText: "OK",
          confirmButtonColor: "#2563eb",
        });
        setOpen(false);
        setFormData(initialFormData);
        setCurrentStep(1);
        setError(null);
      } else {
        throw new Error(result.error || "Erreur lors de l'insertion");
      }
    } catch (err: any) {
      console.error(err);
      setError(err.message);
      Swal.fire({
        title: "Erreur ❌",
        text: err.message,
        icon: "error",
        confirmButtonText: "OK",
        confirmButtonColor: "#dc2626",
      });
    }finally {
      setLoading(false);
    }
  };


  // 🔹 Contenu des étapes
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="grid gap-3">
            <Label>Année d'étude</Label>
            <Select
              value={formData.annee}
              onValueChange={(v) => handleInputChange("annee", v)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Sélectionnez votre année d'étude" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="4ᵉ année">4ᵉ année</SelectItem>
                <SelectItem value="5ᵉ année">5ᵉ année</SelectItem>
                <SelectItem value="6ᵉ année">6ᵉ année</SelectItem>
              </SelectContent>
            </Select>
          </div>
        );
      case 2:
        return (
          <div className="grid gap-3">
            <Label>Département</Label>
            <Select
              value={formData.departement}
              onValueChange={(v) => handleInputChange("departement", v)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Sélectionnez le département" />
              </SelectTrigger>
              <SelectContent>
                {departements.map((dep) => (
                  <SelectItem key={dep.ID_Dep} value={dep.Nom_Dep}>
                    {dep.Nom_Dep}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        );
      case 3:
        return (
          <div className="grid gap-3">
            <Label>Acte</Label>
            <Select
              value={formData.acte}
              onValueChange={(v) => handleInputChange("acte", v)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Sélectionnez un acte" />
              </SelectTrigger>
              <SelectContent>
                {actes.length > 0 ? (
                  actes.map((a) => (
                    <SelectItem key={a.ID_Actes} value={a.Desc_Actes}>
                      {a.Desc_Actes}
                    </SelectItem>
                  ))
                ) : (
                  <SelectItem value="none" disabled>
                    Aucun acte disponible
                  </SelectItem>
                )}
              </SelectContent>
            </Select>
          </div>
        );
      case 4:
  return (
    <div className="grid gap-4">

      {/* bouton + */}
      <div className="flex justify-end">
        <Button type="button" variant="outline" onClick={addSousActeRow}>
          + Ajouter
        </Button>
      </div>

      {/* liste dynamique */}
      {formData.sousActesList.map((item, index) => (
        <div key={index} className="grid grid-cols-12 gap-3 items-end border p-3 rounded-lg">

          {/* Sous-acte */}
          <div className="col-span-7">
            <Label>Sous-acte cible</Label>
            <Select
              value={item.sousActe}
              onValueChange={(v) => updateSousActeRow(index, "sousActe", v)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Sélectionnez une sous-acte" />
              </SelectTrigger>
              <SelectContent>
                {sousActes.length > 0 ? (
                  sousActes.map((sa) => (
                    <SelectItem key={sa.ID_SActes} value={sa.Desc_SActes}>
                      {sa.Desc_SActes}
                    </SelectItem>
                  ))
                ) : (
                  <SelectItem value="none" disabled>Aucun sous-acte</SelectItem>
                )}
              </SelectContent>
            </Select>
          </div>

          {/* Nombre */}
          <div className="col-span-4">
            <Label>Nombre</Label>
            <Input
              type="number"
              value={item.nombre}
              onChange={(e) =>
                updateSousActeRow(index, "nombre", Number(e.target.value))
              }
            />
          </div>

          {/* bouton supprimer une ligne */}
          <div className="col-span-1 flex justify-center">
            {formData.sousActesList.length > 1 && (
              <Button
                type="button"
                variant="destructive"
                onClick={() => removeSousActeRow(index)}
              >
                -
              </Button>
            )}
          </div>
        </div>
      ))}
    </div>
  );

      case 5:
        return (
          <>
            <div className="grid gap-3">
              <Label>Date début</Label>
              <Input
                type="date"
                value={formData.dateDebut}
                onChange={(e) => handleInputChange("dateDebut", e.target.value)}
              />
            </div>
            <div className="grid gap-3">
              <Label>Date fin</Label>
              <Input
                type="date"
                value={formData.dateFin}
                onChange={(e) => handleInputChange("dateFin", e.target.value)}
              />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-6">
      {/* Header avec filtre et bouton ajouter */}
      <div className="flex justify-between items-center mb-4">
        {/* Bouton filtre */}
        <div className="relative">
          <Button
            variant="outline"
            className="flex items-center gap-2"
            onClick={() => setFilterOpen(!filterOpen)}
          >
            <Funnel /> Filtrer
          </Button>

          {filterOpen && (
            <div ref={ignoreRef}>
              <div
                ref={filterRef}
                className="absolute left-0 mt-2 w-64 p-4 bg-white border rounded-lg shadow-lg z-10 transition-transform transform scale-95 animate-scaleIn"
              >
                <div className="grid gap-4">
                  <div className="grid gap-1">
                    <Label>Année</Label>
                    <Select
                      value={filters.annee}
                      onValueChange={(v) => setFilters((prev) => ({ ...prev, annee: v }))}
                    >
                      <SelectTrigger onMouseDown={(e) => e.stopPropagation()}>
                        <SelectValue placeholder="Sélectionnez une année" />
                      </SelectTrigger>
                      <SelectContent onMouseDown={(e) => e.stopPropagation()}>
                        {annees.map((a) => (
                          <SelectItem key={a} value={a}>
                            {a}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid gap-1">
                    <Label>Département</Label>
                    <Select
                      value={filters.departement}
                      onValueChange={(v) =>
                        setFilters((prev) => ({ ...prev, departement: v }))
                      }
                    >
                      <SelectTrigger onMouseDown={(e) => e.stopPropagation()}>
                        <SelectValue placeholder="Sélectionnez un département" />
                      </SelectTrigger>
                      <SelectContent onMouseDown={(e) => e.stopPropagation()}>
                        {departement.map((d) => (
                          <SelectItem key={d} value={d}>
                            {d}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <Button
                    onClick={() => setFilters({ annee: "", departement: "" })}
                    className="mt-2"
                    variant="outline"
                  >
                    Réinitialiser
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>


        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              <CirclePlus /> Nouveaux quota
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Nouveaux quota</DialogTitle>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="grid gap-4 mt-4">
              {renderStepContent()}

              {error && (
                <p className="text-red-600 text-sm mt-1">{error}</p>
              )}

              <div className="flex justify-between mt-4">
                {currentStep > 1 && (
                  <Button type="button" onClick={handlePrevStep} disabled={loading}>
                    Précédent
                  </Button>
                )}
                {currentStep < 5 ? (
                  <Button type="button" onClick={handleNextStep} disabled={loading}>
                    Suivant
                  </Button>
                ) : (
                  <Button type="submit" disabled={loading}>
                      {loading ? "Soumission en cours..." : "Soumettre"}
                  </Button>
                )}
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Header du tableau */}
      <header className="flex items-center justify-between mb-6">
        <div className="flex flex-col items-center text-center w-full">
          <h3 className="text-foreground font-semibold text-lg">Quotas</h3>
          <p className="text-muted-foreground text-sm">
            {getFilterLabel()}
          </p>
        </div>

        <div className="text-right">
          <span className="text-primary text-base font-semibold">{totalActes}</span>
        </div>
      </header>

      {/* Liste des quotas */}
      {/* Liste des quotas */}
      <div className="scrollable mt-4 space-y-2 text-sm p-4 rounded-xl border border-dashed border-blue-300">
        {filteredQuotas.map((quota, i) => (
          <div
            key={i}
            onClick={() => setSelectedQuota(i)}
            className={`flex flex-col px-3 py-2 rounded-lg cursor-pointer border ${
              selectedQuota === i ? "bg-blue-100 border-blue-400" : "hover:bg-blue-50"
            }`}
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className={`font-bold ${selectedQuota === i ? "text-blue-700" : "text-blue-600"}`}>•</span>
                {/* 🔥 Afficher sous-actes + nombre correctement */}
                <span>
                  {quota.sousActes
                    .map((sa: SousActeType) => `${sa.nombre} ${sa.sousActe}`) // utiliser Desc_SActes existant
                    .join(", ")}
                  {"  "}
                </span>
              </div>
              <span className="font-semibold">
                {quota.sousActes.reduce((sum: number, sa: SousActeType) => sum + (sa.prix ?? 0), 0)} Ariary
              </span>
            </div>

            {selectedQuota === i && (
              <p className="text-xs text-muted-foreground mt-1">
                Du {new Date(quota.dateDebut).toLocaleDateString("fr-FR")} au {new Date(quota.dateFin).toLocaleDateString("fr-FR")}
              </p>
            )}
          </div>
        ))}
      </div>

      
    </div>
  );
}

