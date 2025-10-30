// "use client";

// import React, { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { CirclePlus } from "lucide-react";
// import Swal from "sweetalert2"; // ✅ Import SweetAlert2
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { Label } from "@/components/ui/label";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { set } from "zod";

// type FormDataType = {
//   annee: string;
//   departement: string;
//   acte: string;
//   sousActe: string;
//   nombre: number | "";
//   dateDebut: string;
//   dateFin: string;
// };

// const initialFormData: FormDataType = {
//   annee: "",
//   departement: "",
//   acte: "",
//   sousActe: "",
//   nombre: "",
//   dateDebut: "",
//   dateFin: "",
// };

// export default function QuotasPage() {
//   const [open, setOpen] = useState(false);
//   const [currentStep, setCurrentStep] = useState(1);
//   const [formData, setFormData] = useState<FormDataType>(initialFormData);
//   const [error, setError] = useState<string | null>(null);

//   // 🔹 Liste dynamique des départements
//     const [departements, setDepartements] = useState<{ ID_Dep: number; Nom_Dep: string }[]>([]);
    
//     useEffect(() => {
//       const fetchDepartements = async () => {
//         try {
//           const res = await fetch("/api/department");
//           if (!res.ok) throw new Error("Erreur lors du chargement des départements");
//           const data = await res.json();
//           setDepartements(data);
//         } catch (error) {
//           console.error("Erreur fetch departements:", error);
//         }
//       };
  
//       fetchDepartements();
//     }, []);

//   // 🔹 Mettre à jour un champ
//   const handleInputChange = (field: keyof FormDataType, value: any) => {
//     setFormData((prev) => ({ ...prev, [field]: value }));
//   };

//   // 🔹 Validation par étape
//   const validateStep = (step: number) => {
//     switch (step) {
//       case 1:
//         return formData.annee !== "";
//       case 2:
//         return formData.departement !== "";
//       case 3:
//         return formData.acte !== "";
//       case 4:
//         return formData.sousActe !== "" && formData.nombre !== "";
//       case 5:
//         if (!formData.dateDebut || !formData.dateFin) return false;
//         const debut = new Date(formData.dateDebut);
//         const fin = new Date(formData.dateFin);
//         return fin >= debut;
//       default:
//         return false;
//     }
//   };

//   // 🔹 Étape suivante
//   const handleNextStep = () => {
//     setError(null);
//     if (validateStep(currentStep)) {
//       setCurrentStep((s) => Math.min(s + 1, 5));
//     } else {
//       setError("Veuillez remplir correctement tous les champs requis.");
//     }
//   };

//   // 🔹 Étape précédente
//   const handlePrevStep = () => {
//     setError(null);
//     setCurrentStep((s) => Math.max(s - 1, 1));
//   };

//   // 🔹 Soumission finale avec SweetAlert2
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!formData.dateDebut || !formData.dateFin) {
//       setError("Veuillez remplir les deux dates.");
//       return;
//     }

//     const debut = new Date(formData.dateDebut);
//     const fin = new Date(formData.dateFin);

//     if (fin.getTime() === debut.getTime()) {
//       setError("La date de fin ne peut pas être identique à la date de début.");
//       return;
//     }

//     if (fin < debut) {
//       setError("La date de fin ne peut pas être inférieure à la date de début.");
//       return;
//     }

//     // ✅ Simulation de la soumission réussie
//     console.log("Formulaire soumis :", formData);

//     Swal.fire({
//       title: "Succès 🎉",
//       text: "Le quota a été enregistré avec succès !",
//       icon: "success",
//       confirmButtonText: "OK",
//       confirmButtonColor: "#2563eb",
//     });

//     // Réinitialiser le formulaire
//     setOpen(false);
//     setFormData(initialFormData);
//     setCurrentStep(1);
//     setError(null);
//   };

//   // 🔹 Contenu des étapes
//   const renderStepContent = () => {
//     switch (currentStep) {
//       case 1:
//         return (
//           <div className="grid gap-3">
//             <Label>Année d'étude</Label>
//             <Select
//               value={formData.annee}
//               onValueChange={(v) => handleInputChange("annee", v)}
//             >
//               <SelectTrigger className="w-full">
//                 <SelectValue placeholder="Sélectionnez votre année d'étude" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="4ᵉ année">4ᵉ année</SelectItem>
//                 <SelectItem value="5ᵉ année">5ᵉ année</SelectItem>
//                 <SelectItem value="6ᵉ année">6ᵉ année</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>
//         );
//       case 2:
//         return (
//           <div className="grid gap-3">
//             <Label>Département</Label>
//             <Select
//               value={formData.departement}
//               onValueChange={(v) => handleInputChange("departement", v)}
//             >
//               <SelectTrigger className="w-full">
//                 <SelectValue placeholder="Sélectionnez le département" />
//               </SelectTrigger>
//               <SelectContent>
//                 {departements.length > 0 ? (
//                     departements.map((dep) => (
//                       <SelectItem key={dep.ID_Dep} value={dep.Nom_Dep}>
//                         {dep.Nom_Dep}
//                       </SelectItem>
//                     ))
//                   ) : (
//                     <SelectItem value="" disabled>
//                       Aucun département disponible
//                     </SelectItem>
//                   )}
//               </SelectContent>
//             </Select>
//           </div>
//         );
//       case 3:
//         return (
//           <div className="grid gap-3">
//             <Label>Acte</Label>
//             <Select
//               value={formData.acte}
//               onValueChange={(v) => handleInputChange("acte", v)}
//             >
//               <SelectTrigger className="w-full">
//                 <SelectValue placeholder="Sélectionnez une acte" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="exemple acte 1">exemple acte 1</SelectItem>
//                 <SelectItem value="exemple acte 2">exemple acte 2</SelectItem>
//                 <SelectItem value="exemple acte 3">exemple acte 3</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>
//         );
//       case 4:
//         return (
//           <>
//             <div className="grid gap-3">
//               <Label>Sous-acte cible</Label>
//               <Select
//               value={formData.sousActe}
//               onValueChange={(v) => handleInputChange("sousActe", v)}
//             >
//               <SelectTrigger className="w-full">
//                   <SelectValue placeholder="Sélectionnez une sous-acte" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="exemple sous-acte 1">exemple sous-acte 1</SelectItem>
//                   <SelectItem value="exemple sous-acte 2">exemple sous-acte 2</SelectItem>
//                   <SelectItem value="exemple sous-acte 3">exemple sous-acte 3</SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>
//             <div className="grid gap-3">
//               <Label>Nombre</Label>
//               <Input
//                 type="number"
//                 placeholder="Nombre du quota"
//                 value={formData.nombre}
//                 onChange={(e) =>
//                   handleInputChange("nombre", Number(e.target.value))
//                 }
//               />
//             </div>
//           </>
//         );
//       case 5:
//         return (
//           <>
//             <div className="grid gap-3">
//               <Label>Date début</Label>
//               <Input
//                 type="date"
//                 value={formData.dateDebut}
//                 onChange={(e) =>
//                   handleInputChange("dateDebut", e.target.value)
//                 }
//               />
//             </div>
//             <div className="grid gap-3">
//               <Label>Date fin</Label>
//               <Input
//                 type="date"
//                 value={formData.dateFin}
//                 onChange={(e) =>
//                   handleInputChange("dateFin", e.target.value)
//                 }
//               />
//             </div>
//           </>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="space-x-2 p-4">
//       <h1 className="text-lg font-bold mb-4">QuotasPage</h1>

//       <Dialog open={open} onOpenChange={setOpen}>
//         <DialogTrigger asChild>
//           <Button className="text-white flex items-center gap-2">
//             Ajouter
//             <CirclePlus />
//           </Button>
//         </DialogTrigger>

//         <DialogContent className="sm:max-w-md">
//           <DialogHeader>
//             <DialogTitle className="justify-center">
//               Ajouter un quota
//             </DialogTitle>
//           </DialogHeader>

//           <form className="space-y-4 mt-4" onSubmit={handleSubmit}>
//             {renderStepContent()}

//             {error && <div className="text-red-600 text-sm">{error}</div>}

//             <div className="flex justify-between mt-4">
//               <Button
//                 type="button"
//                 variant="outline"
//                 onClick={handlePrevStep}
//                 disabled={currentStep === 1}
//               >
//                 Précédent
//               </Button>
//               {currentStep < 5 ? (
//                 <Button type="button" onClick={handleNextStep}>
//                   Suivant
//                 </Button>
//               ) : (
//                 <Button type="submit">Enregistrer</Button>
//               )}
//             </div>
//           </form>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }


"use client";

import React, { useEffect, useState } from "react";
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
import { CirclePlus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type FormDataType = {
  annee: string;
  departement: string;
  acte: string;
  sousActe: string;
  nombre: number | "";
  dateDebut: string;
  dateFin: string;
};

const initialFormData: FormDataType = {
  annee: "",
  departement: "",
  acte: "",
  sousActe: "",
  nombre: "",
  dateDebut: "",
  dateFin: "",
};

export default function QuotasPage() {
  const [open, setOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormDataType>(initialFormData);
  const [error, setError] = useState<string | null>(null);

  const [departements, setDepartements] = useState<{ ID_Dep: number; Nom_Dep: string }[]>([]);
  const [actes, setActes] = useState<{ ID_Actes: number; Desc_Actes: string }[]>([]);
  const [sousActes, setSousActes] = useState<{ ID_SActes: number; Desc_SActes: string }[]>([]);

  // 🔹 Charger les départements
  useEffect(() => {
    fetch("/api/department")
      .then((res) => res.json())
      .then((data) => setDepartements(data))
      .catch((err) => console.error("Erreur départements:", err));
  }, []);

  // 🔹 Charger les actes lorsque le département change
  useEffect(() => {
    if (formData.departement) {
      const selectedDep = departements.find((d) => d.Nom_Dep === formData.departement);
      if (selectedDep) {
        fetch(`/api/actes?id_Dep=${selectedDep.ID_Dep}`)
          .then((res) => res.json())
          .then((data) => setActes(data))
          .catch((err) => console.error("Erreur actes:", err));
      }
    } else {
      setActes([]);
      setSousActes([]);
      setFormData((prev) => ({ ...prev, acte: "", sousActe: "" }));
    }
  }, [formData.departement, departements]);

  // 🔹 Charger les sous-actes lorsque l’acte change
  useEffect(() => {
    if (formData.acte) {
      const selectedActe = actes.find((a) => a.Desc_Actes === formData.acte);
      if (selectedActe) {
        fetch(`/api/sousactes?id_Actes=${selectedActe.ID_Actes}`)
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
        return formData.sousActe !== "" && formData.nombre !== "";
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
  const handleSubmit = (e: React.FormEvent) => {
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

    console.log("Formulaire soumis :", formData);

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
          <>
            <div className="grid gap-3">
              <Label>Sous-acte cible</Label>
              <Select
                value={formData.sousActe}
                onValueChange={(v) => handleInputChange("sousActe", v)}
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
                    <SelectItem value="none" disabled>
                      Aucun sous-acte disponible
                    </SelectItem>
                  )}
                </SelectContent>

              </Select>
            </div>
            <div className="grid gap-3">
              <Label>Nombre</Label>
              <Input
                type="number"
                placeholder="Nombre du quota"
                value={formData.nombre}
                onChange={(e) => handleInputChange("nombre", Number(e.target.value))}
              />
            </div>
          </>
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
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" className="flex items-center gap-2">
            <CirclePlus /> Ajouter un quota
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Ajouter un quota</DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="grid gap-4 mt-4">
            {renderStepContent()}

            {error && (
              <p className="text-red-600 text-sm mt-1">{error}</p>
            )}

            <div className="flex justify-between mt-4">
              {currentStep > 1 && (
                <Button type="button" onClick={handlePrevStep}>
                  Précédent
                </Button>
              )}
              {currentStep < 5 ? (
                <Button type="button" onClick={handleNextStep}>
                  Suivant
                </Button>
              ) : (
                <Button type="submit">Soumettre</Button>
              )}
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
