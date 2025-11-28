// "use client";

// import { useRef, useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { ChevronLeft, ChevronRight, Funnel } from "lucide-react";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogFooter,
// } from "@/components/ui/dialog"; // 🧩 shadcn/ui Dialog
// import Swal from "sweetalert2";
// import { MoreHorizontal } from "lucide-react";

// export default function EtQuotasPage() {
//   const [etudiant, setEtudiant] = useState<any>(null);
//   const [quotas, setQuotas] = useState<any[]>([]);
//   const [selectedActe, setSelectedActe] = useState<number | null>(null);
//   const [realisations, setRealisations] = useState<any[]>([]);
//   const [dateDebut, setDateDebut] = useState<Date | null>(null);
//   const [dateFin, setDateFin] = useState<Date | null>(null);
//   const [currentDate, setCurrentDate] = useState<Date>(new Date());
//   const [selectedDate, setSelectedDate] = useState<Date>(new Date());
//   const [openModal, setOpenModal] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   const [filterOpen, setFilterOpen] = useState(false);
//   const [filterType, setFilterType] = useState<"all" | "realized" | "validated">("all");
//   const filterRef = useRef<HTMLDivElement>(null);

//   const title =
//   filterType === "realized"
//     ? "Quotas réalisés"
//     : filterType === "validated"
//     ? "Quotas validés"
//     : "Quotas";
    
  
//   const [ellipsisOpenIndex, setEllipsisOpenIndex] = useState<number | null>(null); // quel item ouvre le menu
//   const [detailsDialogOpen, setDetailsDialogOpen] = useState(false);

    

//   const year = currentDate.getFullYear();
//   const month = currentDate.getMonth();
//   const monthName = currentDate.toLocaleString("fr-FR", { month: "long", year: "numeric" });

//   const firstDayOfMonth = new Date(year, month, 1).getDay();
//   const startDay = (firstDayOfMonth + 6) % 7;
//   const daysInMonth = new Date(year, month + 1, 0).getDate();
//   const totalCells = Math.ceil((startDay + daysInMonth) / 7) * 7;

//   const daysArray = Array.from({ length: totalCells }, (_, i) => {
//     const num = i - startDay + 1;
//     return num > 0 && num <= daysInMonth ? num : null;
//   });

//   const today = new Date();

//   // 🔹 Charger l'étudiant et ses quotas
//   useEffect(() => {
//     const load = async () => {
//       try {
//         const etRes = await fetch("/api/students/me");
//         if (!etRes.ok) return console.error("Erreur API:", etRes.status);
//         const et = await etRes.json();
//         setEtudiant(et);

//         const qRes = await fetch("/api/students/quotas");
//         if (!qRes.ok) return console.error("Erreur API quotas:", qRes.status);
//         const qData = await qRes.json();

//         // 🔹 Ne garder que les quotas avec Nombre > 0
//         setQuotas(qData);
//       } catch (error) {
//         console.error("Erreur réseau:", error);
//       }
//     };
//     load();
//   }, []);

//   // 🔹 Sélection d’un quota
//   // const handleSelectQuota = (i: number) => {
//   //   if (selectedActe === i) {
//   //     setSelectedActe(null);
//   //     setDateDebut(null);
//   //     setDateFin(null);
//   //   } else {
//   //     setSelectedActe(i);
//   //     const q = quotas[Math.floor(i / quotas[0].sous_actes.length)];
//   //     setDateDebut(new Date(q.Date_Debut));
//   //     setDateFin(new Date(q.Date_Fin));
//   //   }
//   // };

//   const handleSelectQuota = (i: number) => {
//     const item = actes[i];
//     if (!item) return;
//     setSelectedActe(i);
//     setDateDebut(new Date(item.Date_Debut));
//     setDateFin(new Date(item.Date_Fin));
//   };


//   // 🔹 Récupérer réalisations
//   // useEffect(() => {
//   //   async function fetchRealisations() {
//   //     const res = await fetch("/api/students/quotas/realiser/me");
//   //     const data = await res.json();
//   //     setRealisations(data);
//   //   }
//   //   fetchRealisations();
//   // }, []);
//   useEffect(() => {
//   const loadRealized = async () => {
//     const res = await fetch("/api/students/quotas/realiser/me");
//     const data = await res.json();
//     setRealisations(data);
//   };
//   loadRealized();
// }, []);

// useEffect(() => {
//   function handleClickOutside(event: MouseEvent) {
//     if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
//       setFilterOpen(false); // 🔥 ferme le filtre
//     }
//   }

//   document.addEventListener("mousedown", handleClickOutside);
//   return () => {
//     document.removeEventListener("mousedown", handleClickOutside);
//   };
// }, [filterRef]);






//   // 🔹 Transformer les quotas pour affichage
//   // const actes = quotas.flatMap((q) =>
//   //   q.sous_actes.map((s: any) => ({
//   //     acte: s.Desc_SActes,
//   //     prix: s.Prix,
//   //     nombre: q.Nombre,
//   //     Date_Debut: q.Date_Debut,
//   //     Date_Fin: q.Date_Fin,
//   //     ID_Quotas: q.ID_Quotas,
//   //     ID_SActes: s.ID_SActes,
//   //   }))
//   // );

//   const actes = quotas.flatMap((q, qIndex) =>
//     q.sous_actes.map((s: any) => ({
//       qIndex,
//       acte: s.Desc_SActes,
//       prix: s.Prix,
//       nombre: q.Nombre,
//       Date_Debut: q.Date_Debut,
//       Date_Fin: q.Date_Fin,
//       ID_Quotas: q.ID_Quotas,
//       ID_SActes: s.ID_SActes,
//     }))
//   );

//   // Regrouper les réalisations par sous-acte
//   const groupReal = realisations.reduce((acc, r) => {
//     if (!acc[r.id_SActes])
//       acc[r.id_SActes] = { done: 0, validated: 0 };

//     acc[r.id_SActes].done += 1;
//     if (r.Statut_Valide) acc[r.id_SActes].validated += 1;

//     return acc;
//   }, {});

//   // Construire la liste qui sera affichée selon le filtre
// const displayedList =
//   filterType === "all"
//     ? actes
//     : filterType === "realized"
//     ? actes
//         .map((a) => ({
//           ...a,
//           done: groupReal[a.ID_SActes]?.done || 0,
//         }))
//         .filter((a) => a.done > 0)
//     : actes
//         .map((a) => ({
//           ...a,
//           validated: groupReal[a.ID_SActes]?.validated || 0,
//         }))
//         .filter((a) => a.validated > 0);

//     // Totaux
//     const totalDone = actes.reduce(
//       (sum, a) => sum + (groupReal[a.ID_SActes]?.done || 0),
//       0
//     );

//     const totalValidated = actes.reduce(
//       (sum, a) => sum + (groupReal[a.ID_SActes]?.validated || 0),
//       0
//     );


//   const totalActes = actes.reduce((sum, a) => sum + a.nombre, 0);

//   if (!etudiant) return <p>Chargement...</p>;
  
//   // 🔹 Simulation de soumission
//   const handleSoumettre = async () => {
//     if (selectedActe === null) return;

//     setIsLoading(true);
//     const selected = actes[selectedActe];
//     const quota = quotas.find(
//       (q) =>
//         q.sous_actes.some(
//           (s: any) => s.Desc_SActes === selected.acte
//         )
//     );

//     try {
//       const res = await fetch("/api/students/quotas/realiser", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           etudiantId: etudiant.ID_Etudiant,
//           sousActeId: quota.sous_actes[0].ID_SActes,
//           quotaId: quota.ID_Quotas,
//         }),
//       });

//       const data = await res.json();

//       if (data.success) {
//         setOpenModal(false);

//         // ✅ Notification de succès à l'étudiant
//         const { realisation } = data;
//         Swal.fire({
//           icon: "success",
//           title: "Réalisation réussie !",
//           text: `Le sous-acte "${realisation.sousActe.Desc_SActes}" a été bien réalisé. 
//             Une notification a été envoyée aux professeurs pour évaluation.`,
//           confirmButtonText: "OK",
//           confirmButtonColor: "#3085d6",
//         });


//         // 🧩 Mettre à jour la liste de quotas localement
//         setQuotas((prev) =>
//           prev.map((q) =>
//             q.ID_Quotas === quota.ID_Quotas
//               ? { ...q, Nombre: q.Nombre - 1 }
//               : q
//           )
//         );

//         // 🔔 Simulation d’envoi de notification profs (à intégrer via WebSocket ou Supabase Realtime)
//         console.log("🔔 Notification envoyée à tous les professeurs !");
//       } else {
//         Swal.fire({
//           icon: "error",
//           title: "Erreur",
//           text: "Impossible d’enregistrer la réalisation.",
//         });
//       }
//     } catch (error) {
//       console.error(error);
//       Swal.fire({
//         icon: "error",
//         title: "Erreur",
//         text: "Une erreur est survenue lors de la soumission.",
//       });
//     } finally {
//       setIsLoading(false);
//     }
//   };


//   const selectedSousActe = selectedActe !== null ? actes[selectedActe]?.acte : "";

//   return (
//     <main className="flex flex-col lg:flex-row gap-6 p-6">
//       {/* LISTE DES QUOTAS */}
//       <section className="bg-white dark:bg-primary-foreground rounded-2xl p-6 shadow-sm border flex-1 lg:w-[60%]">
//         <header className="flex items-center justify-between mb-6">
//           <div>
//             <h3 className="text-foreground font-semibold text-lg">{title}</h3>
//             <p className="text-muted-foreground text-sm">
//               {etudiant.departement.Nom_Dep} - Niveau {etudiant.Annee_Et}
//             </p>
//           </div>

//           <div className="text-right">
//             <span className="text-primary text-base font-semibold">
//               {filterType === "all" && totalActes}
//               {filterType === "realized" && `${totalDone}/${totalActes}`}
//               {filterType === "validated" && `${totalValidated}/${totalActes}`}
//             </span>

//           </div>
//         </header>

//         <div className="relative mb-4">
//           <Button
//             variant="outline"
//             className="flex items-center gap-2"
//             onClick={() => setFilterOpen(!filterOpen)}
//           >
//             <Funnel />Filtrer
//           </Button>

//           {filterOpen && (
//             <div ref={filterRef} className="absolute left-0 mt-2 w-48 p-2 bg-white border rounded-lg shadow-lg z-10">
//               <button
//                 className={`block w-full text-left p-2 ${filterType === "all" ? "bg-blue-100" : ""}`}
//                 onClick={() => {
//                   setFilterType("all");
//                   setFilterOpen(false); // 🔥 ferme le menu
//                 }}
//               >
//                 Quotas
//               </button>
//               <button
//                 className={`block w-full text-left p-2 ${filterType === "realized" ? "bg-blue-100" : ""}`}
//                 onClick={() => {
//                   setFilterType("realized");
//                   setFilterOpen(false); // 🔥
//                 }}
//               >
//                 Quotas réalisés
//               </button>
//               <button
//                 className={`block w-full text-left p-2 ${filterType === "validated" ? "bg-blue-100" : ""}`}
//                 onClick={() => {
//                   setFilterType("validated");
//                   setFilterOpen(false); // 🔥
//                 }}
//               >
//                 Quotas validés
//               </button>
//             </div>
//           )}
//         </div>

//         <div className="mt-4 space-y-2 text-sm p-4 rounded-xl border border-dashed border-blue-300">
//           {displayedList.map((item, i) => (
//   <div
//     key={i}
//     onClick={() => handleSelectQuota(i)}
//     className={`flex justify-between items-center px-3 py-2 rounded-lg cursor-pointer ${
//       selectedActe === i ? "bg-blue-100 border border-blue-400" : "hover:bg-blue-50"
//     }`}
//   >
//     <div className="flex items-center gap-2">
//       <span className={`font-bold ${selectedActe === i ? "text-blue-700" : "text-blue-600"}`}>•</span>
//       <span>
//         {filterType === "all" &&
//           `${item.nombre} ${item.acte}`}

//         {filterType === "realized" &&
//           `${item.done}/${item.nombre} ${item.acte}`}

//         {filterType === "validated" &&
//           `${item.validated}/${item.nombre} ${item.acte}`}
//       </span>
//     </div>

//     <div className="flex items-center gap-2 relative">
//       <span className="font-semibold">{item.prix} Ariary</span>

//       {/* 🔹 Ellipsis seulement pour realized/validated */}
//       {(filterType === "realized" || filterType === "validated") && (
//         <div className="relative">
//           <button
//             onClick={(e) => {
//               e.stopPropagation(); // éviter sélection
//               setEllipsisOpenIndex(ellipsisOpenIndex === i ? null : i);
//             }}
//             className="p-1 rounded hover:bg-muted"
//           >
//             <MoreHorizontal size={16} />
//           </button>

//           {/* 🔹 Menu Ellipsis */}
//           {ellipsisOpenIndex === i && (
//             <div className="absolute right-0 mt-1 w-32 bg-white border rounded-lg shadow-lg z-20">
//               <button
//                 className="w-full text-left p-2 hover:bg-blue-100"
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   setDetailsDialogOpen(true);
//                   setEllipsisOpenIndex(null);
//                 }}
//               >
//                 Détails
//               </button>
//             </div>
//           )}
//         </div>
//       )}
//     </div>

//     {selectedActe === i && (
//       <p className="text-xs text-muted-foreground mt-1">
//         Du {new Date(item.Date_Debut).toLocaleDateString("fr-FR")} au{" "}
//         {new Date(item.Date_Fin).toLocaleDateString("fr-FR")}
//       </p>
//     )}
//   </div>
// ))}

//         </div>

//         <div className="flex justify-end mt-4">
//           <Button onClick={() => setOpenModal(true)} disabled={selectedActe === null || filterType !== "all"}>
//             Réaliser
//           </Button>
//         </div>
//       </section>

//       {/* 🗓️ CALENDRIER */}
//       <aside className="flex flex-col gap-6 lg:w-[25%]">
//         <div className="bg-white dark:bg-primary-foreground rounded-2xl p-6 shadow-sm border">
//           <header className="flex items-center justify-between mb-4">
//             <h3 className="font-semibold capitalize">{monthName}</h3>
//             <div className="flex gap-2">
//               <button onClick={() => setCurrentDate(new Date(year, month - 1, 1))} className="w-6 h-6 rounded hover:bg-muted">
//                 <ChevronLeft className="w-4 h-4" />
//               </button>
//               <button onClick={() => setCurrentDate(new Date(year, month + 1, 1))} className="w-6 h-6 rounded hover:bg-muted">
//                 <ChevronRight className="w-4 h-4" />
//               </button>
//             </div>
//           </header>

//           <div className="grid grid-cols-7 gap-1 text-center text-xs mb-2 text-muted-foreground">
//             {["Lu", "Ma", "Me", "Je", "Ve", "Sa", "Di"].map((d) => <div key={d}>{d}</div>)}
//           </div>

//           <div className="grid grid-cols-7 gap-1">
//             {daysArray.map((day, i) => {
//               if (!day) return <div key={i} />;
//               const date = new Date(year, month, day);

//               const isToday = date.toDateString() === today.toDateString();
//               const isSelected = date.toDateString() === selectedDate.toDateString();
//               const inQuotaRange =
//                 dateDebut && dateFin && date >= dateDebut && date <= dateFin;

//               return (
//                 <button
//                   key={i}
//                   onClick={() => setSelectedDate(date)}
//                   className={`aspect-square rounded-lg text-sm transition-all ${
//                     isSelected
//                       ? "bg-primary text-primary-foreground"
//                       : inQuotaRange
//                       ? "bg-blue-200 text-blue-800 font-medium"
//                       : isToday
//                       ? "border border-blue-400 text-blue-700 font-semibold"
//                       : "hover:bg-muted"
//                   }`}
//                 >
//                   {day}
//                 </button>
//               );
//             })}
//           </div>
//         </div>

//         {/* QUOTAS RÉALISÉS */}
//         {/* <div className="bg-white dark:bg-primary-foreground rounded-2xl p-6 shadow-sm border">
//           <h3 className="font-semibold mb-4">Quotas réalisés</h3>

//           <ul className="space-y-2 text-sm text-muted-foreground">
//             {realisations.length === 0 && (
//               <li>Aucun quota réalisé pour le moment.</li>
//             )}

//             {realisations.map((r) => (
//               <li key={r.ID_Realisation}>
//                 {r.Statut_Valide === false && r.Note === null ? (
//                   <>
//                     ⏳ <strong>{r.sousActe.Desc_SActes}</strong> — 
//                     <span className="text-yellow-600">en cours d'évaluation</span>
//                   </>
//                 ) : (
//                   <>
//                     ✅ <strong>{r.sousActe.Desc_SActes}</strong> — 
//                     <span className="text-green-600">noté : {r.Note}/20</span>
//                   </>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </div> */}

//       </aside>

//       {/* 🧩 MODAL DE CONFIRMATION */}
//       <Dialog open={openModal} onOpenChange={setOpenModal}>
//         <DialogContent className="sm:max-w-md">
//           <DialogHeader>
//             <DialogTitle className="text-lg">
//               Confirmer la réalisation
//             </DialogTitle>
//           </DialogHeader>

//           <p className="text-sm text-muted-foreground mt-2">
//             Voulez-vous réaliser le{" "}
//             <span className="font-semibold text-blue-700">{selectedSousActe}</span>
//               {" "}pour <span className="font-semibold">{selectedActe !== null ? actes[selectedActe].prix : 0} Ariary</span> ?
//           </p>

//           <DialogFooter className="flex justify-end gap-3 mt-6">
//             <Button variant="outline" onClick={() => setOpenModal(false)}>
//               Annuler
//             </Button>
//             <Button onClick={handleSoumettre} disabled={isLoading}>
//               {isLoading ? "Réalisation en cours..." : "Soumettre"}
//             </Button>
//           </DialogFooter>
//         </DialogContent>
//       </Dialog>

//       {/* MODAL DETAIL  */}
//       <Dialog open={detailsDialogOpen} onOpenChange={setDetailsDialogOpen}>
//         <DialogContent className="sm:max-w-md">
//           <DialogHeader>
//             <DialogTitle>Détails du quota realiser/valider</DialogTitle>
//           </DialogHeader>
//           <p className="text-sm text-muted-foreground mt-2">
//             {/* Ici tu peux afficher les infos détaillées */}
//             {selectedActe !== null && (
//               <>
//                 Quota : <strong>{actes[selectedActe].acte}</strong> <br/>
//                 Nombre : {actes[selectedActe].nombre} <br/>
//                 Prix : {actes[selectedActe].prix} Ariary <br/>
//                 Du {new Date(actes[selectedActe].Date_Debut).toLocaleDateString("fr-FR")} au{" "}
//                 {new Date(actes[selectedActe].Date_Fin).toLocaleDateString("fr-FR")}
//               </>
//             )}
//           </p>
//           <DialogFooter className="flex justify-end mt-4">
//             <Button onClick={() => setDetailsDialogOpen(false)}>Fermer</Button>
//           </DialogFooter>
//         </DialogContent>
//       </Dialog>

//     </main>
//   );
// }


"use client";

import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Funnel } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"; // 🧩 shadcn/ui Dialog
import Swal from "sweetalert2";
import { MoreHorizontal } from "lucide-react";

export default function EtQuotasPage() {
  const [etudiant, setEtudiant] = useState<any>(null);
  const [quotas, setQuotas] = useState<any[]>([]);
  const [selectedActe, setSelectedActe] = useState<number | null>(null);
  const [realisations, setRealisations] = useState<any[]>([]);
  const [dateDebut, setDateDebut] = useState<Date | null>(null);
  const [dateFin, setDateFin] = useState<Date | null>(null);
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [openModal, setOpenModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [filterOpen, setFilterOpen] = useState(false);
  const [filterType, setFilterType] = useState<"all" | "realized" | "validated">("all");
  const filterRef = useRef<HTMLDivElement>(null);

  const actes = quotas.flatMap((q, qIndex) =>
    q.sous_actes.map((s: any) => ({
      qIndex,
      acte: s.Desc_SActes,
      prix: s.Prix,
      nombre: q.Nombre,
      Date_Debut: q.Date_Debut,
      Date_Fin: q.Date_Fin,
      ID_Quotas: q.ID_Quotas,
      ID_SActes: s.ID_SActes,
    }))
  );

  const title =
  filterType === "realized"
    ? "Quotas réalisés"
    : filterType === "validated"
    ? "Quotas validés"
    : "Quotas";
    
  
  const [ellipsisOpenIndex, setEllipsisOpenIndex] = useState<number | null>(null); // quel item ouvre le menu
  const [detailsDialogOpen, setDetailsDialogOpen] = useState(false);

  

    

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const monthName = currentDate.toLocaleString("fr-FR", { month: "long", year: "numeric" });

  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const startDay = (firstDayOfMonth + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const totalCells = Math.ceil((startDay + daysInMonth) / 7) * 7;

  const daysArray = Array.from({ length: totalCells }, (_, i) => {
    const num = i - startDay + 1;
    return num > 0 && num <= daysInMonth ? num : null;
  });

  const today = new Date();

  // 🔹 Charger l'étudiant et ses quotas
  useEffect(() => {
    const load = async () => {
      try {
        const etRes = await fetch("/api/students/me");
        if (!etRes.ok) return console.error("Erreur API:", etRes.status);
        const et = await etRes.json();
        setEtudiant(et);

        const qRes = await fetch("/api/students/quotas");
        if (!qRes.ok) return console.error("Erreur API quotas:", qRes.status);
        const qData = await qRes.json();

        // 🔹 Ne garder que les quotas avec Nombre > 0
        setQuotas(qData);
      } catch (error) {
        console.error("Erreur réseau:", error);
      }
    };
    load();
  }, []);

  // 🔹 Sélection d’un quota
  // const handleSelectQuota = (i: number) => {
  //   if (selectedActe === i) {
  //     setSelectedActe(null);
  //     setDateDebut(null);
  //     setDateFin(null);
  //   } else {
  //     setSelectedActe(i);
  //     const q = quotas[Math.floor(i / quotas[0].sous_actes.length)];
  //     setDateDebut(new Date(q.Date_Debut));
  //     setDateFin(new Date(q.Date_Fin));
  //   }
  // };

  const handleSelectQuota = (i: number) => {
    const item = actes[i];
    if (!item) return;
    setSelectedActe(i);
    setDateDebut(new Date(item.Date_Debut));
    setDateFin(new Date(item.Date_Fin));
  };


  // 🔹 Récupérer réalisations
  // useEffect(() => {
  //   async function fetchRealisations() {
  //     const res = await fetch("/api/students/quotas/realiser/me");
  //     const data = await res.json();
  //     setRealisations(data);
  //   }
  //   fetchRealisations();
  // }, []);
  useEffect(() => {
  const loadRealized = async () => {
    const res = await fetch("/api/students/quotas/realiser/me");
    const data = await res.json();

    if (Array.isArray(data)) {
      setRealisations(data);
    } else {
      console.error("❌ API n'a pas renvoyé un tableau :", data);
      setRealisations([]); // évite crash
    }
  };

  loadRealized();
}, []);


useEffect(() => {
  function handleClickOutside(event: MouseEvent) {
    if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
      setFilterOpen(false); // 🔥 ferme le filtre
    }
  }

  document.addEventListener("mousedown", handleClickOutside);
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, [filterRef]);






  // 🔹 Transformer les quotas pour affichage
  // const actes = quotas.flatMap((q) =>
  //   q.sous_actes.map((s: any) => ({
  //     acte: s.Desc_SActes,
  //     prix: s.Prix,
  //     nombre: q.Nombre,
  //     Date_Debut: q.Date_Debut,
  //     Date_Fin: q.Date_Fin,
  //     ID_Quotas: q.ID_Quotas,
  //     ID_SActes: s.ID_SActes,
  //   }))
  // );

  

  // Regrouper les réalisations par sous-acte
  const groupReal = Array.isArray(realisations)
  ? realisations.reduce((acc, r) => {
      if (!acc[r.id_SActes])
        acc[r.id_SActes] = { done: 0, validated: 0 };

      acc[r.id_SActes].done += 1;
      if (r.Statut_Valide) acc[r.id_SActes].validated += 1;

      return acc;
    }, {})
  : {};


  // Construire la liste qui sera affichée selon le filtre
const displayedList =
  filterType === "all"
    ? actes
    : filterType === "realized"
    ? actes
        .map((a) => ({
          ...a,
          done: groupReal[a.ID_SActes]?.done || 0,
        }))
        .filter((a) => a.done > 0)
    : actes
        .map((a) => ({
          ...a,
          validated: groupReal[a.ID_SActes]?.validated || 0,
        }))
        .filter((a) => a.validated > 0);

    // Totaux
    const totalDone = actes.reduce(
      (sum, a) => sum + (groupReal[a.ID_SActes]?.done || 0),
      0
    );

    const totalValidated = actes.reduce(
      (sum, a) => sum + (groupReal[a.ID_SActes]?.validated || 0),
      0
    );


  const totalActes = actes.reduce((sum, a) => sum + a.nombre, 0);

  if (!etudiant) return <p>Chargement...</p>;
  
  const selectedRealisations =
  selectedActe !== null
    ? realisations.filter(
        (r) => r.id_SActes === displayedList[selectedActe].ID_SActes
      )
    : [];


  // 🔹 Simulation de soumission
  const handleSoumettre = async () => {
    if (selectedActe === null) return;

    setIsLoading(true);
    const selected = actes[selectedActe];
    const quota = quotas.find(
      (q) =>
        q.sous_actes.some(
          (s: any) => s.Desc_SActes === selected.acte
        )
    );

    try {
      const res = await fetch("/api/students/quotas/realiser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          etudiantId: etudiant.ID_Etudiant,
          sousActeId: quota.sous_actes[0].ID_SActes,
          quotaId: quota.ID_Quotas,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setOpenModal(false);

        // ✅ Notification de succès à l'étudiant
        const { realisation } = data;
        Swal.fire({
          icon: "success",
          title: "Réalisation réussie !",
          text: `Le sous-acte "${realisation.sousActe.Desc_SActes}" a été bien réalisé. 
            Une notification a été envoyée aux professeurs pour évaluation.`,
          confirmButtonText: "OK",
          confirmButtonColor: "#3085d6",
        });


        // 🧩 Mettre à jour la liste de quotas localement
        setQuotas((prev) =>
          prev.map((q) =>
            q.ID_Quotas === quota.ID_Quotas
              ? { ...q, Nombre: q.Nombre - 1 }
              : q
          )
        );

        // 🔔 Simulation d’envoi de notification profs (à intégrer via WebSocket ou Supabase Realtime)
        console.log("🔔 Notification envoyée à tous les professeurs !");
      } else {
        Swal.fire({
          icon: "error",
          title: "Erreur",
          text: "Impossible d’enregistrer la réalisation.",
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Erreur",
        text: "Une erreur est survenue lors de la soumission.",
      });
    } finally {
      setIsLoading(false);
    }
  };


  const selectedSousActe = selectedActe !== null ? actes[selectedActe]?.acte : "";

  return (
    <main className="flex flex-col lg:flex-row gap-6 p-6">
      {/* LISTE DES QUOTAS */}
      <section className="bg-white dark:bg-primary-foreground rounded-2xl p-6 shadow-sm border flex-1 lg:w-[60%]">
        <header className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-foreground font-semibold text-lg">{title}</h3>
            <p className="text-muted-foreground text-sm">
              {etudiant.departement.Nom_Dep} - Niveau {etudiant.Annee_Et}
            </p>
          </div>

          <div className="text-right">
            <span className="text-primary text-base font-semibold">
              {filterType === "all" && totalActes}
              {filterType === "realized" && `${totalDone}/${totalActes}`}
              {filterType === "validated" && `${totalValidated}/${totalActes}`}
            </span>

          </div>
        </header>

        <div className="relative mb-4">
          <Button
            variant="outline"
            className="flex items-center gap-2"
            onClick={() => setFilterOpen(!filterOpen)}
          >
            <Funnel />Filtrer
          </Button>

          {filterOpen && (
            <div ref={filterRef} className="absolute left-0 mt-2 w-48 p-2 bg-white border rounded-lg shadow-lg z-10">
              <button
                className={`block w-full text-left p-2 ${filterType === "all" ? "bg-blue-100" : ""}`}
                onClick={() => {
                  setFilterType("all");
                  setFilterOpen(false); // 🔥 ferme le menu
                }}
              >
                Quotas
              </button>
              <button
                className={`block w-full text-left p-2 ${filterType === "realized" ? "bg-blue-100" : ""}`}
                onClick={() => {
                  setFilterType("realized");
                  setFilterOpen(false); // 🔥
                }}
              >
                Quotas réalisés
              </button>
              <button
                className={`block w-full text-left p-2 ${filterType === "validated" ? "bg-blue-100" : ""}`}
                onClick={() => {
                  setFilterType("validated");
                  setFilterOpen(false); // 🔥
                }}
              >
                Quotas validés
              </button>
            </div>
          )}
        </div>

        <div className="mt-4 space-y-2 text-sm p-4 rounded-xl border border-dashed border-blue-300">
          {displayedList.map((item, i) => (
        <div
          key={i}
          onClick={() => handleSelectQuota(i)}
          className={`flex justify-between items-center px-3 py-2 rounded-lg cursor-pointer ${
            selectedActe === i ? "bg-blue-100 border border-blue-400" : "hover:bg-blue-50"
          }`}
        >
          <div className="flex items-center gap-2">
            <span className={`font-bold ${selectedActe === i ? "text-blue-700" : "text-blue-600"}`}>•</span>
            <span>
              {filterType === "all" &&
                `${item.nombre} ${item.acte}`}

              {filterType === "realized" &&
                `${item.done}/${item.nombre} ${item.acte}`}

              {filterType === "validated" &&
                `${item.validated}/${item.nombre} ${item.acte}`}
            </span>
          </div>

          <div className="flex items-center gap-2 relative">
            <span className="font-semibold">{item.prix} Ariary</span>

            {/* 🔹 Ellipsis seulement pour realized/validated */}
            {(filterType === "realized" || filterType === "validated") && (
              <div className="relative">
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // éviter sélection
                    setEllipsisOpenIndex(ellipsisOpenIndex === i ? null : i);
                  }}
                  className="p-1 rounded hover:bg-muted"
                >
                  <MoreHorizontal size={16} />
                </button>

                {/* 🔹 Menu Ellipsis */}
                {ellipsisOpenIndex === i && (
                  <div className="absolute right-0 mt-1 w-32 bg-white border rounded-lg shadow-lg z-20">
                    <button
                      className="w-full text-left p-2 hover:bg-blue-100"
                      onClick={(e) => {
                        e.stopPropagation();
                        setDetailsDialogOpen(true);
                        setEllipsisOpenIndex(null);
                      }}
                    >
                      Détails
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

            {selectedActe === i && (
              <p className="text-xs text-muted-foreground mt-1">
                Du {new Date(item.Date_Debut).toLocaleDateString("fr-FR")} au{" "}
                {new Date(item.Date_Fin).toLocaleDateString("fr-FR")}
              </p>
            )}
          </div>
        ))}

        </div>

        <div className="flex justify-end mt-4">
          <Button onClick={() => setOpenModal(true)} disabled={selectedActe === null || filterType !== "all"}>
            Réaliser
          </Button>
        </div>
      </section>

      {/* 🗓️ CALENDRIER */}
      <aside className="flex flex-col gap-6 lg:w-[25%]">
        <div className="bg-white dark:bg-primary-foreground rounded-2xl p-6 shadow-sm border">
          <header className="flex items-center justify-between mb-4">
            <h3 className="font-semibold capitalize">{monthName}</h3>
            <div className="flex gap-2">
              <button onClick={() => setCurrentDate(new Date(year, month - 1, 1))} className="w-6 h-6 rounded hover:bg-muted">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button onClick={() => setCurrentDate(new Date(year, month + 1, 1))} className="w-6 h-6 rounded hover:bg-muted">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </header>

          <div className="grid grid-cols-7 gap-1 text-center text-xs mb-2 text-muted-foreground">
            {["Lu", "Ma", "Me", "Je", "Ve", "Sa", "Di"].map((d) => <div key={d}>{d}</div>)}
          </div>

          <div className="grid grid-cols-7 gap-1">
            {daysArray.map((day, i) => {
              if (!day) return <div key={i} />;
              const date = new Date(year, month, day);

              const isToday = date.toDateString() === today.toDateString();
              const isSelected = date.toDateString() === selectedDate.toDateString();
              const inQuotaRange =
                dateDebut && dateFin && date >= dateDebut && date <= dateFin;

              return (
                <button
                  key={i}
                  onClick={() => setSelectedDate(date)}
                  className={`aspect-square rounded-lg text-sm transition-all ${
                    isSelected
                      ? "bg-primary text-primary-foreground"
                      : inQuotaRange
                      ? "bg-blue-200 text-blue-800 font-medium"
                      : isToday
                      ? "border border-blue-400 text-blue-700 font-semibold"
                      : "hover:bg-muted"
                  }`}
                >
                  {day}
                </button>
              );
            })}
          </div>
        </div>

        {/* QUOTAS RÉALISÉS */}
        {/* <div className="bg-white dark:bg-primary-foreground rounded-2xl p-6 shadow-sm border">
          <h3 className="font-semibold mb-4">Quotas réalisés</h3>

          <ul className="space-y-2 text-sm text-muted-foreground">
            {realisations.length === 0 && (
              <li>Aucun quota réalisé pour le moment.</li>
            )}

            {realisations.map((r) => (
              <li key={r.ID_Realisation}>
                {r.Statut_Valide === false && r.Note === null ? (
                  <>
                    ⏳ <strong>{r.sousActe.Desc_SActes}</strong> — 
                    <span className="text-yellow-600">en cours d'évaluation</span>
                  </>
                ) : (
                  <>
                    ✅ <strong>{r.sousActe.Desc_SActes}</strong> — 
                    <span className="text-green-600">noté : {r.Note}/20</span>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div> */}

      </aside>

      {/* 🧩 MODAL DE CONFIRMATION */}
      <Dialog open={openModal} onOpenChange={setOpenModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-lg">
              Confirmer la réalisation
            </DialogTitle>
          </DialogHeader>

          <p className="text-sm text-muted-foreground mt-2">
            Voulez-vous réaliser le{" "}
            <span className="font-semibold text-blue-700">{selectedSousActe}</span>
              {" "}pour <span className="font-semibold">{selectedActe !== null ? actes[selectedActe].prix : 0} Ariary</span> ?
          </p>

          <DialogFooter className="flex justify-end gap-3 mt-6">
            <Button variant="outline" onClick={() => setOpenModal(false)}>
              Annuler
            </Button>
            <Button onClick={handleSoumettre} disabled={isLoading}>
              {isLoading ? "Réalisation en cours..." : "Soumettre"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* MODAL DETAIL  */}
      <Dialog open={detailsDialogOpen} onOpenChange={setDetailsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Détails du quota réalisé</DialogTitle>
          </DialogHeader>

          {selectedActe !== null && selectedRealisations.length > 0 ? (
            <div className="space-y-4 mt-2 text-sm text-muted-foreground">
              <p className="font-semibold">
                    {filterType === "realized" &&
                      `Quota : ${displayedList[selectedActe].done}/${displayedList[selectedActe].nombre} ${displayedList[selectedActe].acte}`
                    }

                    {filterType === "validated" &&
                      `Quota : ${displayedList[selectedActe].validated}/${displayedList[selectedActe].nombre} ${displayedList[selectedActe].acte}`
                    }
                  </p> 
              {selectedRealisations.map((r, index) => (
                <div key={r.ID_Realisation} className="border p-3 rounded-lg">

                  {/* 🔹 Nom du sous-acte */}
                  <p className="font-semibold">
                    {index + 1}. {r.sousActe.Desc_SActes}
                  </p>

                  {/* 🔹 CAS QUOTAS VALIDÉS */}
                  {filterType === "validated" && (
                    <div className="mt-2 space-y-1">
                      <p>Note: {r.Note !== null ? `${r.Note}/20` : "—"}</p>

                      <p>
                        Prix unitaire :{" "}
                        {r.sousActe?.Prix} Ar
                      </p>

                      <p>
                        Paiement effectué :{" "}
                        {r.paiement ? `${r.paiement.Montant} Ar` : "Aucun paiement"}
                      </p>

                      <p>
                        Date de paiement:{" "}
                        {r.paiement
                          ? new Date(r.paiement.Date_Paie).toLocaleDateString("fr-FR")
                          : "—"}
                      </p>
                    </div>
                  )}

                  {/* 🔹 CAS QUOTAS RÉALISÉS (pas validés) */}
                  {filterType === "realized" && (
                    <div className="mt-2 space-y-1">
                      <p>
                        Note:{" "}
                        {r.Note !== null
                          ? `${r.Note}/20`
                          : r.Statut_Valide
                          ? "En cours d'évaluation"
                          : "Non évalué"}
                      </p>

                      <p>Date de réalisation : {new Date(r.Date_Realise).toLocaleDateString("fr-FR")}</p>

                      <p>Évalué par : {r.professeur ? r.professeur.Nom_Prof : "—"}</p>
                    </div>
                  )}

                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-muted-foreground mt-2">Aucune réalisation trouvée pour ce quota.</p>
          )}

          <DialogFooter className="flex justify-end mt-4">
            <Button onClick={() => setDetailsDialogOpen(false)}>Fermer</Button>
          </DialogFooter>
        </DialogContent>

      </Dialog>

    </main>
  );
}








// "use client";

// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { ChevronLeft, ChevronRight, Funnel, MoreHorizontal } from "lucide-react";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogFooter,
// } from "@/components/ui/dialog";
// import Swal from "sweetalert2";

// /* --------------------------------------------------------
//    🔒 TYPES
// ---------------------------------------------------------*/
// type Etudiant = {
//   ID_Etudiant: number;
//   Nom: string;
//   Prenom: string;
//   Annee_Et: number;
//   departement: { Nom_Dep: string };
// };

// type SousActe = {
//   ID_SActes: number;
//   Desc_SActes: string;
//   Prix: number;
// };

// type Quota = {
//   ID_Quotas: number;
//   Nombre: number;
//   Date_Debut: string;
//   Date_Fin: string;
//   sous_actes: SousActe[];
// };

// type Realisation = {
//   ID_Realisation: number;
//   sousActe: { Desc_SActes: string };
//   Statut_Valide: boolean;
//   Note: number | null;
// };

// // Acte enrichi pour affichage
// type ActeTransforme = {
//   acte: string;
//   prix: number;
//   nombre: number;
//   Date_Debut: string;
//   Date_Fin: string;
//   ID_Quotas: number;
//   ID_SActes: number;
// };

// /* --------------------------------------------------------
//    🔒 DONNÉES STATIQUES
// ---------------------------------------------------------*/
// const STATIC_ETUDIANT: Etudiant = {
//   ID_Etudiant: 1,
//   Nom: "Rakoto",
//   Prenom: "Louis",
//   Annee_Et: 3,
//   departement: { Nom_Dep: "Odontologie" },
// };

// const STATIC_QUOTAS: Quota[] = [
//   {
//     ID_Quotas: 10,
//     Nombre: 5,
//     Date_Debut: "2025-01-10",
//     Date_Fin: "2025-03-10",
//     sous_actes: [
//       { ID_SActes: 101, Desc_SActes: "Extraction", Prix: 15000 },
//       { ID_SActes: 102, Desc_SActes: "Détartrage", Prix: 20000 },
//     ],
//   },
//   {
//     ID_Quotas: 11,
//     Nombre: 3,
//     Date_Debut: "2025-02-01",
//     Date_Fin: "2025-04-01",
//     sous_actes: [{ ID_SActes: 103, Desc_SActes: "Soins carie", Prix: 12000 }],
//   },
// ];

// const STATIC_REALISATIONS: Realisation[] = [
//   {
//     ID_Realisation: 80,
//     sousActe: { Desc_SActes: "Extraction" },
//     Statut_Valide: false,
//     Note: null,
//   },
//   {
//     ID_Realisation: 81,
//     sousActe: { Desc_SActes: "Détartrage" },
//     Statut_Valide: true,
//     Note: 16,
//   },
// ];

// /* --------------------------------------------------------
//    🔒 COMPOSANT
// ---------------------------------------------------------*/
// export default function EtQuotasPage() {
//   const [etudiant] = useState(STATIC_ETUDIANT);
//   const [quotas, setQuotas] = useState(STATIC_QUOTAS);
//   const [realisations] = useState(STATIC_REALISATIONS);

//   const [selectedActe, setSelectedActe] = useState<number | null>(null);
//   const [currentDate, setCurrentDate] = useState(new Date());
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [openModal, setOpenModal] = useState(false);

//   const [detailOpenId, setDetailOpenId] = useState<number | null>(null);
//   const [detailQuota, setDetailQuota] = useState<ActeTransforme | null>(null);
//   const [openDetailModal, setOpenDetailModal] = useState(false);

//   const getTitre = () => {
//   if (filterType === "realized") return "Quotas réalisés";
//   if (filterType === "validated") return "Quotas validés";
//   return "Quotas";
// };


//   const [filterOpen, setFilterOpen] = useState(false);
//   const [filterType, setFilterType] = useState<"all" | "realized" | "validated">("all");

//   // Gestion calendrier
//   const year = currentDate.getFullYear();
//   const month = currentDate.getMonth();
//   const monthName = currentDate.toLocaleString("fr-FR", { month: "long", year: "numeric" });

//   const firstDayOfMonth = new Date(year, month, 1).getDay();
//   const startDay = (firstDayOfMonth + 6) % 7;
//   const daysInMonth = new Date(year, month + 1, 0).getDate();
//   const totalCells = Math.ceil((startDay + daysInMonth) / 7) * 7;

//   const daysArray = Array.from({ length: totalCells }, (_, i) => {
//     const num = i - startDay + 1;
//     return num > 0 && num <= daysInMonth ? num : null;
//   });

//   // Transformer quotas pour affichage
//   const actes: ActeTransforme[] = quotas.flatMap((q) =>
//     q.sous_actes.map((s) => ({
//       acte: s.Desc_SActes,
//       prix: s.Prix,
//       nombre: q.Nombre,
//       Date_Debut: q.Date_Debut,
//       Date_Fin: q.Date_Fin,
//       ID_Quotas: q.ID_Quotas,
//       ID_SActes: s.ID_SActes,
//     }))
//   );

//   // Filtrer selon type
  // const filteredActes = actes.filter((a) => {
  //   if (filterType === "all") return true;
  //   const real = realisations.find((r) => r.sousActe.Desc_SActes === a.acte);
  //   if (filterType === "realized") return !!real;
  //   if (filterType === "validated") return real?.Statut_Valide;
  //   return true;
  // });

//   const totalActes = filteredActes.reduce((sum, a) => sum + a.nombre, 0);
//   const selectedSousActe = selectedActe !== null ? filteredActes[selectedActe]?.acte : "";

//   const handleSoumettre = () => {
//     if (selectedActe === null) return;
//     const selected = filteredActes[selectedActe];
//     Swal.fire({
//       icon: "success",
//       title: "Succès (version statique)",
//       text: `Simulation réussie pour : ${selected.acte}`,
//       confirmButtonText: "OK",
//     });
//     setQuotas((prev) =>
//       prev.map((q) =>
//         q.ID_Quotas === selected.ID_Quotas ? { ...q, Nombre: q.Nombre - 1 } : q
//       )
//     );
//     setOpenModal(false);
//   };

//   return (
//     <main className="flex flex-col lg:flex-row gap-6 p-6">
//       {/* LISTE DES QUOTAS */}
//       <section className="bg-white dark:bg-primary-foreground rounded-2xl p-6 shadow-sm border flex-1 lg:w-[60%]">
//         <header className="flex items-center justify-between mb-4">
//           <div>
//             <h3 className="text-foreground font-semibold text-lg">{getTitre()}</h3>
//             <p className="text-muted-foreground text-sm">
//               {etudiant.departement.Nom_Dep} - Niveau {etudiant.Annee_Et}
//             </p>
//           </div>
//           <span className="text-primary text-base font-semibold">{totalActes}</span>
//         </header>

        // {/* Filtre Funnel */}
        // <div className="relative mb-4">
        //   <Button
        //     variant="outline"
        //     className="flex items-center gap-2"
        //     onClick={() => setFilterOpen(!filterOpen)}
        //   >
        //     <Funnel /> Filtrer
        //   </Button>

          // {filterOpen && (
          //   <div className="absolute left-0 mt-2 w-48 p-2 bg-white border rounded-lg shadow-lg z-10">
          //     <button
          //       className={`block w-full text-left p-2 ${filterType === "all" ? "bg-blue-100" : ""}`}
          //       onClick={() => setFilterType("all")}
          //     >
          //       Tous
          //     </button>
          //     <button
          //       className={`block w-full text-left p-2 ${filterType === "realized" ? "bg-blue-100" : ""}`}
          //       onClick={() => setFilterType("realized")}
          //     >
          //       Quotas réalisés
          //     </button>
          //     <button
          //       className={`block w-full text-left p-2 ${filterType === "validated" ? "bg-blue-100" : ""}`}
          //       onClick={() => setFilterType("validated")}
          //     >
          //       Quotas validés
          //     </button>
          //   </div>
          // )}
//         </div>

//         {/* LISTE DES ACTES */}
//         <div className="space-y-2 text-sm p-4 rounded-xl border border-dashed border-blue-300">
//           {filteredActes.map((item, i) => {
//             const showEllipsis = filterType === "realized" || filterType === "validated";

//             return (
//               <div
//                 key={i}
//                 className="flex justify-between items-center px-3 py-2 rounded-lg hover:bg-blue-50 relative"
//               >
//                 <div className="flex-1 cursor-pointer" onClick={() => setSelectedActe(i)}>
//                   {item.nombre} {item.acte} — {item.prix} Ar
//                 </div>

//                 {showEllipsis && (
//                   <>
//                     <button
//                       className="p-1"
//                       onClick={() => setDetailOpenId(detailOpenId === i ? null : i)}
//                     >
//                       <MoreHorizontal className="w-5 h-5" />
//                     </button>

//                     {detailOpenId === i && (
//                       <div className="absolute right-0 top-full mt-1 w-24 p-2 bg-white border rounded-lg shadow-lg z-20">
//                         <button
//                           className="w-full text-left text-sm p-1 hover:bg-blue-100 rounded"
//                           onClick={() => {
//                             setDetailQuota(item);
//                             setOpenDetailModal(true);
//                             setDetailOpenId(null);
//                           }}
//                         >
//                           Détail
//                         </button>
//                       </div>
//                     )}
//                   </>
//                 )}
//               </div>
//             );
//           })}

//           {filteredActes.length === 0 && <p className="text-xs text-muted-foreground">Aucun quota</p>}
//         </div>

//         <div className="flex justify-end mt-4">
//           <Button onClick={() => setOpenModal(true)} disabled={selectedActe === null}>
//             Réaliser
//           </Button>
//         </div>
//       </section>

//       {/* CALENDRIER */}
//       <aside className="flex flex-col gap-6 lg:w-[25%]">
//         <div className="bg-white dark:bg-primary-foreground rounded-2xl p-6 shadow-sm border">
//           <header className="flex items-center justify-between mb-4">
//             <h3 className="font-semibold capitalize">{monthName}</h3>
//             <div className="flex gap-2">
//               <button onClick={() => setCurrentDate(new Date(year, month - 1, 1))}>
//                 <ChevronLeft className="w-4 h-4" />
//               </button>
//               <button onClick={() => setCurrentDate(new Date(year, month + 1, 1))}>
//                 <ChevronRight className="w-4 h-4" />
//               </button>
//             </div>
//           </header>

//           <div className="grid grid-cols-7 gap-1 text-center text-xs mb-2">
//             {["Lu", "Ma", "Me", "Je", "Ve", "Sa", "Di"].map((d) => (
//               <div key={d}>{d}</div>
//             ))}
//           </div>

//           <div className="grid grid-cols-7 gap-1">
//             {daysArray.map((day, i) => {
//               if (!day) return <div key={i} />;
//               const date = new Date(year, month, day);
//               const isSelected = date.toDateString() === selectedDate.toDateString();
//               return (
//                 <button
//                   key={i}
//                   onClick={() => setSelectedDate(date)}
//                   className={`aspect-square rounded-lg text-sm ${
//                     isSelected ? "bg-primary text-white" : "hover:bg-muted"
//                   }`}
//                 >
//                   {day}
//                 </button>
//               );
//             })}
//           </div>
//         </div>
//       </aside>

//       {/* MODAL REALISER */}
//       <Dialog open={openModal} onOpenChange={setOpenModal}>
//         <DialogContent>
//           <DialogHeader>
//             <DialogTitle>Confirmer la réalisation</DialogTitle>
//           </DialogHeader>

//           <p>
//             Voulez-vous réaliser : <b>{selectedSousActe}</b> ?
//           </p>

//           <DialogFooter>
//             <Button variant="outline" onClick={() => setOpenModal(false)}>
//               Annuler
//             </Button>
//             <Button onClick={handleSoumettre}>Soumettre</Button>
//           </DialogFooter>
//         </DialogContent>
//       </Dialog>

//       {/* MODAL DETAIL QUOTA */}
//       <Dialog open={openDetailModal} onOpenChange={setOpenDetailModal}>
//         <DialogContent>
//           <DialogHeader>
//             <DialogTitle>Détail du quota</DialogTitle>
//           </DialogHeader>

//           {detailQuota && (
//             <div className="text-sm space-y-1">
//               <p><b>Acte :</b> {detailQuota.acte}</p>
//               <p><b>Nombre :</b> {detailQuota.nombre}</p>
//               <p><b>Prix :</b> {detailQuota.prix} Ar</p>
//               <p><b>Période :</b> du {detailQuota.Date_Debut} au {detailQuota.Date_Fin}</p>
//             </div>
//           )}

//           <DialogFooter>
//             <Button variant="outline" onClick={() => setOpenDetailModal(false)}>
//               Fermer
//             </Button>
//           </DialogFooter>
//         </DialogContent>
//       </Dialog>
//     </main>
//   );
// }
