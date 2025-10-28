// "use client"
// import { Button } from '@/components/ui/button'
// import { Input } from '@/components/ui/input'
// import { CirclePlus } from 'lucide-react'
// import React, { useState } from 'react'
// import { toast } from 'react-toastify'
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogFooter,
//   DialogTrigger,
// } from "@/components/ui/dialog"

// export default function DepartmentPage() {
//   const [open, setOpen] = useState(false)
//   return (
//     <div className='space-x-2 p-4'>
//       <h1 className="text-lg font-bold mb-4">Départements</h1>

//        <Dialog open={open} onOpenChange={setOpen}>
//         <DialogTrigger asChild>
//           <Button className="text-white flex items-center gap-2">
//             Ajouter
//             <CirclePlus />
//           </Button>
//         </DialogTrigger>

//         <DialogContent className="sm:max-w-md">
//           <DialogHeader>
//             <DialogTitle>Ajouter un département</DialogTitle>
//           </DialogHeader>

//           <form className="space-y-4 mt-4">
//             <div>
//               <label className="text-sm font-medium">Nom du département</label>
//               <Input
//                 placeholder="Ex: Chirurgie dentaire"
//               />
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
//   )
// }


"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CirclePlus } from "lucide-react";
import { toast } from "react-toastify";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function DepartmentPage() {
  const [open, setOpen] = useState(false);
  const [nomDep, setNomDep] = useState("");

  // 🔹 Fonction d'insertion
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!nomDep.trim()) {
      toast.error("Veuillez entrer le nom du département");
      return;
    }

    try {
      const res = await fetch("/api/department", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ Nom_Dep: nomDep }),
      });

      if (res.ok) {
        toast.success("Département ajouté avec succès !");
        setNomDep("");
        setOpen(false);
      } else {
        const error = await res.json();
        toast.error(error.error || "Erreur lors de l’ajout");
      }
    } catch (err) {
      toast.error("Erreur de connexion au serveur");
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

          <form className="space-y-4 mt-4" onSubmit={handleSubmit}>
            <div>
              <label className="text-sm font-medium">
                Nom du département
              </label>
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
