"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"; // 🧩 shadcn/ui Dialog
import Swal from "sweetalert2";

export default function EtQuotasPage() {
  const [etudiant, setEtudiant] = useState<any>(null);
  const [quotas, setQuotas] = useState<any[]>([]);
  const [selectedActe, setSelectedActe] = useState<number | null>(null);

  // 📅 Dates
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  // ➕ Période de quota sélectionné
  const [dateDebut, setDateDebut] = useState<Date | null>(null);
  const [dateFin, setDateFin] = useState<Date | null>(null);

  // 🔹 Modal
  const [openModal, setOpenModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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

  // 🔹 Charger étudiant
  useEffect(() => {
    const load = async () => {
      const etRes = await fetch("/api/students/me");
      const et = await etRes.json();
      setEtudiant(et);
    };
    load();
  }, []);

  // 🔹 Écoute en temps réel des quotas
  useEffect(() => {
    const evt = new EventSource("/api/students/quotas/live");
    evt.onmessage = (e) => {
      const payload = JSON.parse(e.data);
      if (payload.quotas) setQuotas(payload.quotas);
    };
    return () => evt.close();
  }, []);

  // 🔹 Sélection d’un quota
  const handleSelectQuota = (i: number) => {
    if (selectedActe === i) {
      setSelectedActe(null);
      setDateDebut(null);
      setDateFin(null);
    } else {
      setSelectedActe(i);
      const q = quotas[Math.floor(i / quotas[0].sous_actes.length)];
      setDateDebut(new Date(q.Date_Debut));
      setDateFin(new Date(q.Date_Fin));
    }
  };

  const actes = quotas.flatMap((q) =>
    q.sous_actes.map((s: any) => ({
      acte: s.Desc_SActes,
      nombre: q.Nombre,
      Date_Debut: q.Date_Debut,
      Date_Fin: q.Date_Fin,
    }))
  );

  const totalActes = quotas.reduce((sum, q) => sum + q.Nombre, 0);

  if (!etudiant) return <p>Chargement...</p>;

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
        Swal.fire({
          icon: "success",
          title: "Réalisation réussie !",
          text: `Le sous-acte "${data.sousActe.Desc_SActes}" a été bien réalisé. 
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
            <h3 className="text-foreground font-semibold text-lg">Quotas</h3>
            <p className="text-muted-foreground text-sm">
              {etudiant.departement.Nom_Dep} - Niveau {etudiant.Annee_Et}
            </p>
          </div>

          <div className="text-right">
            <span className="text-primary text-base font-semibold">{totalActes}</span>
          </div>
        </header>

        <div className="mt-4 space-y-2 text-sm p-4 rounded-xl border border-dashed border-blue-300">
          {actes.map((item, i) => (
            <div
              key={i}
              onClick={() => handleSelectQuota(i)}
              className={`flex flex-col px-3 py-2 rounded-lg cursor-pointer ${
                selectedActe === i ? "bg-blue-100 border border-blue-400" : "hover:bg-blue-50"
              }`}
            >
              <div className="flex items-center gap-2">
                <span className={`font-bold ${selectedActe === i ? "text-blue-700" : "text-blue-600"}`}>•</span>
                <span>
                  {item.nombre} {item.acte}
                </span>
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
          <Button onClick={() => setOpenModal(true)} disabled={selectedActe === null}>
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

        {/* QUOTAS TERMINÉS */}
        <div className="bg-white dark:bg-primary-foreground rounded-2xl p-6 shadow-sm border">
          <h3 className="font-semibold mb-4">Quotas terminés</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>✅ 2 traitements de carie</li>
            <li>✅ 1 extraction</li>
            <li>⏳ 3 détartrages restants</li>
          </ul>
        </div>
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
            <span className="font-semibold text-blue-700">{selectedSousActe}</span> ?
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
    </main>
  );
}
