// "use client";

// import React, { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { CirclePlus, Plus, Trash2 } from "lucide-react";
// import Swal from "sweetalert2";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogFooter,
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

// export default function ActesPage() {
//   const [open, setOpen] = useState(false);
//   const [departements, setDepartements] = useState<any[]>([]);
//   const [selectedDep, setSelectedDep] = useState("");
//   const [descActe, setDescActe] = useState("");
//   const [sousActes, setSousActes] = useState([""]);

//   // 🔹 Charger les départements depuis la base
//   useEffect(() => {
//     const fetchDepartments = async () => {
//       const res = await fetch("/api/department", { method: "GET" });
//       const data = await res.json();
//       setDepartements(data);
//     };
//     fetchDepartments();
//   }, []);

//   // ➕ Ajouter un sous-acte
//   const addSousActe = () => {
//     setSousActes([...sousActes, ""]);
//   };

//   // 🗑️ Supprimer un sous-acte
//   const removeSousActe = (index: number) => {
//     const newSousActes = sousActes.filter((_, i) => i !== index);
//     setSousActes(newSousActes);
//   };

//   // 🖊️ Modifier un sous-acte
//   const handleSousActeChange = (index: number, value: string) => {
//     const newSousActes = [...sousActes];
//     newSousActes[index] = value;
//     setSousActes(newSousActes);
//   };

//   // ✅ Envoi vers Supabase via API
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!selectedDep || !descActe.trim()) {
//       Swal.fire({
//         icon: "warning",
//         title: "Champs requis",
//         text: "Veuillez remplir tous les champs avant de continuer.",
//       });
//       return;
//     }

//     try {
//       const res = await fetch("/api/actes", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           id_Dep: Number(selectedDep),
//           Desc_Actes: descActe,
//           sous_actes: sousActes.filter((sa) => sa.trim() !== ""),
//         }),
//       });

//       if (res.ok) {
//         Swal.fire({
//           icon: "success",
//           title: "Succès !",
//           text: "L’acte et ses sous-actes ont été ajoutés avec succès.",
//           confirmButtonColor: "#3085d6",
//         });
//         setOpen(false);
//         setDescActe("");
//         setSousActes([""]);
//       } else {
//         Swal.fire({
//           icon: "error",
//           title: "Erreur !",
//           text: "Une erreur est survenue lors de l’ajout de l’acte.",
//         });
//       }
//     } catch (error) {
//       console.error(error);
//       Swal.fire({
//         icon: "error",
//         title: "Erreur serveur",
//         text: "Impossible de se connecter au serveur. Veuillez réessayer.",
//       });
//     }
//   };

//   return (
//     <div className="space-x-2 p-4">
//       <h1 className="text-lg font-bold mb-4">Gestion des Actes</h1>

//       <Dialog open={open} onOpenChange={setOpen}>
//         <DialogTrigger asChild>
//           <Button variant="outline" className="flex items-center gap-2">
//             Ajouter un actes 
//             <CirclePlus />
//           </Button>
//         </DialogTrigger>

//         <DialogContent className="sm:max-w-md">
//           <DialogHeader>
//             <DialogTitle>Ajouter un acte</DialogTitle>
//           </DialogHeader>

//           <form className="space-y-4 mt-4" onSubmit={handleSubmit}>
//             {/* Département */}
//             <div className="grid gap-3">
//               <Label>Département</Label>
//               <Select onValueChange={(val) => setSelectedDep(val)}>
//                 <SelectTrigger className="w-full">
//                   <SelectValue placeholder="Sélectionnez le département" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   {departements.map((dep) => (
//                     <SelectItem key={dep.ID_Dep} value={dep.ID_Dep.toString()}>
//                       {dep.Nom_Dep}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//             </div>

//             {/* Désignation de l'acte */}
//             <div className="grid gap-3">
//               <Label className="text-sm font-medium">Désignation de l'acte</Label>
//               <Input
//                 type="text"
//                 value={descActe}
//                 onChange={(e) => setDescActe(e.target.value)}
//                 placeholder="Ex: Détartrage complet"
//               />
//             </div>

//             {/* Sous-actes dynamiques */}
//             <div className="grid gap-3">
//               <Label className="text-sm font-medium">Sous-Actes</Label>
//               {sousActes.map((val, index) => (
//                 <div key={index} className="flex items-center gap-2">
//                   <Input
//                     type="text"
//                     value={val}
//                     placeholder={`Sous-acte ${index + 1}`}
//                     onChange={(e) => handleSousActeChange(index, e.target.value)}
//                   />
//                   <Button
//                     type="button"
//                     variant="destructive"
//                     size="icon"
//                     onClick={() => removeSousActe(index)}
//                   >
//                     <Trash2 className="h-4 w-4" />
//                   </Button>
//                 </div>
//               ))}

//               <Button
//                 type="button"
//                 variant="outline"
//                 className="flex items-center gap-2"
//                 onClick={addSousActe}
//               >
//                 <Plus className="h-4 w-4" /> Ajouter un sous-acte
//               </Button>
//             </div>

//             <DialogFooter>
//               <Button type="submit" className="text-white">
//                 Enregistrer
//               </Button>
//             </DialogFooter>
//           </form>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }


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

export default function ActesPage() {
  const [open, setOpen] = useState(false);
  const [departements, setDepartements] = useState<any[]>([]);
  const [selectedDep, setSelectedDep] = useState("");
  const [descActe, setDescActe] = useState("");
  const [sousActes, setSousActes] = useState([{ nom:"", prix: ""}]);

  // 🔹 Charger les départements depuis la base
  useEffect(() => {
    const fetchDepartments = async () => {
      const res = await fetch("/api/department", { method: "GET" });
      const data = await res.json();
      setDepartements(data);
    };
    fetchDepartments();
  }, []);

  // ➕ Ajouter un sous-acte
  const addSousActe = () => {
    setSousActes([...sousActes, { nom:"", prix: "" }]);
  };

  // 🗑️ Supprimer un sous-acte
  const removeSousActe = (index: number) => {
  setSousActes(sousActes.filter((_, i) => i !== index));
};

  // 🖊️ Modifier un sous-acte
  const handleSousActeChange = (index: number, field: "nom" | "prix", value: string) => {
  const updatedSousActes = [...sousActes];
  updatedSousActes[index][field] = value;
  setSousActes(updatedSousActes);
};


  // ✅ Envoi vers Supabase via API
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

  try {
    const sousActesFiltres = sousActes.filter(sa => sa.nom.trim() !== "");

    const res = await fetch("/api/actes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id_Dep: Number(selectedDep),
        Desc_Actes: descActe,
        sous_actes: sousActesFiltres.map(sa => ({
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
      text: "Impossible de se connecter au serveur. Veuillez réessayer.",
    });
  }
};


  return (
    <div className="space-x-2 p-4">
      <h1 className="text-lg font-bold mb-4">Gestion des Actes</h1>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" className="flex items-center gap-2">
            Ajouter un actes 
            <CirclePlus />
          </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Ajouter un acte</DialogTitle>
          </DialogHeader>

          <form className="space-y-4 mt-4" onSubmit={handleSubmit}>
            {/* Département */}
            <div className="grid gap-3">
              <Label>Département</Label>
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

            {/* Désignation de l'acte */}
            <div className="grid gap-3">
              <Label className="text-sm font-medium">Désignation de l'acte</Label>
              <Input
                type="text"
                value={descActe}
                onChange={(e) => setDescActe(e.target.value)}
                placeholder="nom de l'acte"
              />
            </div>

            {/* Sous-actes dynamiques */}
            <div className="grid gap-3">
              <Label className="text-sm font-medium">Sous-Actes</Label>
              {sousActes.map((sa, index) => (
                <div key={index} className="flex items-center gap-2">
                  {/* Nom du sous-acte */}
                  <Input
                    type="text"
                    placeholder={`Sous-acte ${index + 1}`}
                    value={sa.nom}
                    onChange={(e) => handleSousActeChange(index, "nom", e.target.value)}
                    className="flex-1"
                  />

                  {/* Prix */}
                  <Input
                    type="number"
                    placeholder="Prix en Ariary"
                    value={sa.prix}
                    onChange={(e) => handleSousActeChange(index, "prix", e.target.value)}
                    className="w-32"
                  />

                  {/* Supprimer */}
                  <Button
                    type="button"
                    variant="outline"
                    className="hover:bg-red-500 hover:text-white"
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


