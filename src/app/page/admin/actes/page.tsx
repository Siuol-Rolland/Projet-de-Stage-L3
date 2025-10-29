"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CirclePlus, Plus, Trash2 } from "lucide-react";
import { toast } from "react-toastify";
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
  const [sousActes, setSousActes] = useState([""]); // un seul champ au départ

  // ➕ ajouter un nouveau champ de sous-acte
  const addSousActe = () => {
    setSousActes([...sousActes, ""]);
  };

  // 🗑️ supprimer un champ spécifique
  const removeSousActe = (index: number) => {
    const newSousActes = sousActes.filter((_, i) => i !== index);
    setSousActes(newSousActes);
  };

  // 🖊️ modifier la valeur d’un sous-acte
  const handleSousActeChange = (index: number, value: string) => {
    const newSousActes = [...sousActes];
    newSousActes[index] = value;
    setSousActes(newSousActes);
  };

  return (
    <div className="space-x-2 p-4">
      <h1 className="text-lg font-bold mb-4">ActesPage</h1>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="text-white flex items-center gap-2">
            Ajouter
            <CirclePlus />
          </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Ajouter un actes</DialogTitle>
          </DialogHeader>

          <form className="space-y-4 mt-4">
            {/* Département */}
            <div className="grid gap-3">
              <Label>Département</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Sélectionnez le département" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Chirurgie dentaire">Chirurgie dentaire</SelectItem>
                  <SelectItem value="Orthopédie dento-faciale">Orthopédie dento-faciale</SelectItem>
                  <SelectItem value="Endodontie">Endodontie</SelectItem>
                  <SelectItem value="Pédodontie">Pédodontie</SelectItem>
                  <SelectItem value="Prothèse adjointe">Prothèse adjointe</SelectItem>
                  <SelectItem value="Prothèse conjointe">Prothèse conjointe</SelectItem>
                  <SelectItem value="Parodontologie">Parodontologie</SelectItem>
                  <SelectItem value="Dentisterie conservatrice">Dentisterie conservatrice</SelectItem>
                  <SelectItem value="Radiologie">Radiologie</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Désignation de l'acte */}
            <div className="grid gap-3">
              <Label className="text-sm font-medium">Désignation de l'acte</Label>
              <Input type="text" placeholder="Ex: ..." />
            </div>

            {/* Sous-actes dynamiques */}
            <div className="grid gap-3">
              <Label className="text-sm font-medium">Sous-Actes</Label>

              {sousActes.map((val, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Input
                    type="text"
                    value={val}
                    placeholder={`Sous-acte ${index + 1}`}
                    onChange={(e) => handleSousActeChange(index, e.target.value)}
                  />
                  <Button
                    type="button"
                    variant="destructive"
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

// "use client";

// import React, { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { CirclePlus, Plus, Trash2 } from "lucide-react";
// import { toast } from "react-toastify";
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
//   const [sousActes, setSousActes] = useState([""]);
//   const [departements, setDepartements] = useState<any[]>([]);
//   const [selectedDep, setSelectedDep] = useState("");

//   // 🔄 Récupérer les départements depuis l'API au montage du composant
//   useEffect(() => {
//     fetch("/api/department")
//       .then((res) => res.json())
//       .then((data) => setDepartements(data))
//       .catch((err) => toast.error("Erreur lors du chargement des départements"));
//   }, []);

//   const addSousActe = () => setSousActes([...sousActes, ""]);
//   const removeSousActe = (index: number) =>
//     setSousActes(sousActes.filter((_, i) => i !== index));
//   const handleSousActeChange = (index: number, value: string) => {
//     const newSousActes = [...sousActes];
//     newSousActes[index] = value;
//     setSousActes(newSousActes);
//   };

//   return (
//     <div className="space-x-2 p-4">
//       <h1 className="text-lg font-bold mb-4">ActesPage</h1>

//       <Dialog open={open} onOpenChange={setOpen}>
//         <DialogTrigger asChild>
//           <Button className="text-white flex items-center gap-2">
//             Ajouter
//             <CirclePlus />
//           </Button>
//         </DialogTrigger>

//         <DialogContent className="sm:max-w-md">
//           <DialogHeader>
//             <DialogTitle>Ajouter un acte</DialogTitle>
//           </DialogHeader>

//           <form className="space-y-4 mt-4">
//             {/* Département dynamique */}
//             <div className="grid gap-3">
              // <Label>Département</Label>
              // <Select onValueChange={setSelectedDep}>
              //   <SelectTrigger className="w-full">
              //     <SelectValue placeholder="Sélectionnez le département" />
              //   </SelectTrigger>
              //   <SelectContent>
              //     {departements.map((dep) => (
              //       <SelectItem key={dep.ID_Dep} value={dep.Nom_Dep}>
              //         {dep.Nom_Dep}
              //       </SelectItem>
              //     ))}
              //   </SelectContent>
              // </Select>
//             </div>

//             {/* Désignation de l'acte */}
//             <div className="grid gap-3">
//               <Label className="text-sm font-medium">Désignation de l'acte</Label>
//               <Input type="text" placeholder="Ex: ..." />
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
