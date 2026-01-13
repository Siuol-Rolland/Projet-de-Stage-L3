'use client';

import { useEffect, useState } from "react";
import Image from 'next/image';
import { Users, Hospital} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

type Admin = {
  Nom_Admin: string;
};

type Stats = {
  departements: number;
  professeurs: number;
  etudiants: number;
};

type HistoriquePaiement = {
  ID_Hist: number;
  Montant: number | null;
  Date_Action: string;
  paiement: {
    etudiant: {
      FullName_Et: string;
    };
    realisations: {
      sousActe: {
        Desc_SActes: string;
      };
    }[];
  };
};

type FinanceStats = {
  soldeActuel: number;
  soldeArrieres: number;
};

type HistogramItem = {
  name: string;
  realisationCount: number;
  paiementCount: number;
  quotaCount: number;
};



export default function AdminPage() {
  const [admin, setAdmin] = useState<Admin | null>(null);
  const [loading, setLoading] = useState(true);

  const [statsData, setStatsData] = useState<Stats | null>(null);

  const [valides, setValides] = useState<HistoriquePaiement[]>([]);
  const [annules, setAnnules] = useState<HistoriquePaiement[]>([]);

  const [finance, setFinance] = useState<FinanceStats | null>(null);

  const [histogramData, setHistogramData] = useState<HistogramItem[]>([]);
  const [histogramLoading, setHistogramLoading] = useState(true);


  useEffect(() => {
    const fetchAdmin = async () => {
      try {
        const res = await fetch("/api/admin/me");
        if (!res.ok) return;
        const data = await res.json();
        setAdmin(data);
      } catch (error) {
        console.error("Erreur récupération admin:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAdmin();
  }, []);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch("/api/admin/stats");
        if (!res.ok) return;
        const data = await res.json();
        setStatsData(data);
      } catch (error) {
        console.error("Erreur stats:", error);
      }
    };

    fetchStats();
  }, []);

  useEffect(() => {
    const fetchHistorique = async () => {
      try {
        const res = await fetch("/api/admin/payement/historique/recent");
        if (!res.ok) return;
        const data = await res.json();
        setValides(data.valides);
        setAnnules(data.annules);
      } catch (err) {
        console.error("Erreur historique paiement:", err);
      }
    };

    fetchHistorique();
  }, []);

  useEffect(() => {
    const fetchFinance = async () => {
      try {
        const res = await fetch("/api/admin/finance");
        if (!res.ok) return;
        const data = await res.json();
        setFinance(data);
      } catch (err) {
        console.error("Erreur finance:", err);
      }
    };

    fetchFinance();
  }, []);

  useEffect(() => {
    const fetchHistogram = async () => {
      try {
        const year = new Date().getFullYear();
        const res = await fetch(`/api/admin/histogramme?mode=all`);
        if (!res.ok) return;

        const json = await res.json();

        // ⚠️ On adapte les clés pour le graphique
        const formatted = json.data.map((item: any) => ({
          name: item.name,
          realisation: item.realisationCount,
          paiement: item.paiementCount,
          quota: item.quotaCount,
        }));

        setHistogramData(formatted);
      } catch (error) {
        console.error("Erreur histogramme:", error);
      } finally {
        setHistogramLoading(false);
      }
    };

    fetchHistogram();
  }, []);


  const formatMoney = (value?: number) =>
  value ? `${value.toLocaleString()} Ar` : "0 Ar";



  const formatDate = (date: string) => {
  const d = new Date(date);
    return {
      day: d.getDate().toString().padStart(2, "0"),
      month: d.toLocaleDateString("fr-FR", { month: "short" }),
      time: d.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" }),
    };
  };

  const formatAmount = (value?: number | null) =>
    value ? `${value.toLocaleString()} Ar` : "-";

  const getSousActes = (item: HistoriquePaiement) =>
    item.paiement.realisations
      .map(r => r.sousActe.Desc_SActes)
      .join(", ");


  const stats = [
    {
      label: "Departement",
      value: statsData?.departements ?? "...",
      icon: Hospital,
    },
    {
      label: "Professeur",
      value: statsData?.professeurs ?? "...",
      icon: Users,
    },
    {
      label: "Etudiant",
      value: statsData?.etudiants ?? "...",
      icon: Users,
    },
  ];

  return (
    <div className="p-6">

      {/* ===== BANNER + HISTORIQUE ===== */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">

        {/* ================= BANNER (2/3) ================= */}
        <div className="relative lg:col-span-2">

          <div className="relative overflow-hidden bg-[#44adc9] rounded-2xl p-8 min-h-[180px] shadow-xl">

            {/* 🎨 Pattern */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.035]
                            bg-[url('/patterns/dental-outline.svg')]
                            bg-repeat bg-[size:140px]" />

            {/* ✨ Glow */}
            <div className="pointer-events-none absolute -right-32 -top-32
                            w-96 h-96 bg-white/25 blur-3xl rounded-full" />

            {/* Content */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="max-w-lg text-white">
                <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
                  Bonjour,{" "}
                  <span className="font-bold">
                    {loading ? "..." : admin?.Nom_Admin ?? "Admin"}
                  </span>
                </h1>
                <p className="mt-2 text-lg font-light text-white/90">
                  Bienvenue dans votre tableau de bord administrateur !
                </p>
                
              </div>
            </div>
          </div>

          {/* ================= AVATAR ================= */}
          <div className="pointer-events-none absolute right-6 top-2/19 z-20 -translate-y-1/2">
            <div className="relative h-56 w-52">
              <div className="absolute inset-0 -z-10 bg-white/30 blur-2xl rounded-full" />
              <Image
                src="/Avatar.png"
                alt="Dr. Shabrina"
                fill
                priority
                className="object-contain object-bottom drop-shadow-[0_24px_28px_rgba(0,0,0,0.35)]"
              />
            </div>
          </div>

          {/* ================= STATS CARDS ================= */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100
                           flex items-center gap-4 transition hover:shadow-md"
              >
                <div className="w-12 h-12 rounded-xl bg-[#44adc9]/10
                                flex items-center justify-center shrink-0">
                  <stat.icon className="w-6 h-6 text-[#44adc9]" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-800 leading-none">
                    {stat.value}
                  </p>
                  <p className="text-sm text-slate-400 mt-1 font-medium">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ================= HISTOGRAMME ================= */}
          <div
            className="bg-white p-6 rounded-2xl shadow-sm
                      border border-slate-100 mt-6 h-[322px]"
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
              {/* Titre */}
              <h2 className="text-xl font-bold text-slate-800 tracking-tight">
                Activités
              </h2>

              {/* Légende */}
              <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-600">
                <div className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-[#44adc9] mr-2" />
                  Réalisation
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-[#81cddf] mr-2" />
                  Paiement effectué
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-[#a5e3f1] mr-2" />
                  Quota validé
                </div>
              </div>
            </div>

            {/* Graphique */}
            <div className="h-[232px] w-full">
              {histogramLoading ? (
                /* 🔄 LOADING */
                <div className="h-full flex flex-col items-center justify-center text-slate-400">
                  <div className="w-8 h-8 border-4 border-[#44adc9]/30 border-t-[#44adc9] rounded-full animate-spin mb-3" />
                  <span className="text-sm font-medium">
                    Chargement des statistiques...
                  </span>
                </div>
              ) : histogramData.length === 0 ? (
                /* 📭 AUCUNE DONNÉE */
                <div className="h-full flex items-center justify-center text-slate-400 text-sm">
                  Aucune activité disponible pour cette période
                </div>
              ) : (
                /* 📊 GRAPHIQUE */
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={histogramData} barGap={6}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} />
                    <Tooltip />

                    <Bar
                      dataKey="realisation"
                      fill="#44adc9"
                      barSize={10}
                      radius={[4, 4, 0, 0]}
                    />
                    <Bar
                      dataKey="paiement"
                      fill="#81cddf"
                      barSize={10}
                      radius={[4, 4, 0, 0]}
                    />
                    <Bar
                      dataKey="quota"
                      fill="#a5e3f1"
                      barSize={10}
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              )}
            </div>

          </div>

        </div>

        {/* ================= HISTORIQUE + FINANCE ================= */}
        <div className="flex flex-col">
          {/* ================= HISTORIQUE DE PAIEMENT (VERSION COMPACTE) ================= */}
          <div className="bg-[#f8fafc] rounded-2xl shadow-sm p-4 flex flex-col border border-slate-100 max-w-md">
            
            {/* Titre Principal - Taille réduite */}
            <h2 className="text-lg font-bold text-slate-800 tracking-tight mb-4">
              Historique de paiement
            </h2>

            <div className="space-y-5 flex-1">
              
              {/* --- SECTION 1 : PAIEMENT VALIDÉ --- */}
              <div>
                <div className="flex justify-between items-center mb-2 px-1">
                  <h3 className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Paiement validé
                  </h3>
                </div>

                <div className="space-y-2">
                  {valides.map((item) => {
                    const d = formatDate(item.Date_Action);
                    return (
                      <div
                        key={item.ID_Hist}
                        className="bg-white p-2.5 rounded-xl flex items-center gap-3 border border-slate-50"
                      >
                        <div className="flex flex-col items-center justify-center bg-[#44adc9]/10 rounded-lg py-1 min-w-[45px]">
                          <span className="text-base font-bold text-[#44adc9]">{d.day}</span>
                          <span className="text-[9px] font-bold text-[#44adc9]/70 uppercase">{d.month}</span>
                        </div>

                        <div className="flex-1">
                          <p className="font-bold text-slate-700 text-[13px]">
                            {item.paiement.etudiant.FullName_Et}
                          </p>
                          <p className="text-[10.5px] text-slate-400 font-medium">
                            {getSousActes(item)}
                          </p>
                          <p className="text-[10px] text-slate-400">
                            {d.time} - Transaction validée
                          </p>
                        </div>

                        <div className="text-right">
                          <span className="font-bold text-emerald-500 text-[13px]">
                            + {formatAmount(item.Montant)}
                          </span>
                        </div>
                      </div>
                    );
                  })}

                </div>
              </div>

              {/* --- SECTION 2 : PAIEMENT ANNULÉ --- */}
              <div>
                <div className="flex justify-between items-center mb-2 px-1">
                  <h3 className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Paiement annulé
                  </h3>
                </div>

                <div className="space-y-2">
                  {annules.map((item) => {
                    const d = formatDate(item.Date_Action);
                    return (
                      <div
                        key={item.ID_Hist}
                        className="bg-white/60 p-2.5 rounded-xl flex items-center gap-3 border border-slate-50 opacity-80"
                      >
                        <div className="flex flex-col items-center justify-center bg-slate-100 rounded-lg py-1 min-w-[45px]">
                          <span className="text-base font-bold text-slate-400">{d.day}</span>
                          <span className="text-[9px] font-bold text-slate-400 uppercase">{d.month}</span>
                        </div>

                        <div className="flex-1">
                          <p className="font-bold text-slate-700 text-[13px]">
                            {item.paiement.etudiant.FullName_Et}
                          </p>
                          <p className="text-[10.5px] text-slate-400 font-medium">
                            {getSousActes(item)}
                          </p>
                          <p className="text-[10px] text-rose-400">
                            {d.time} - Annulée
                          </p>
                        </div>

                        <div className="text-right">
                          <span className="font-bold text-slate-400 line-through text-[13px]">
                            {formatAmount(item.Montant)}
                          </span>
                        </div>
                      </div>
                    );
                  })}

                </div>
              </div>

            </div>
          </div>

          {/* ================= FINANCE CARD ================= */}
          <div className="relative overflow-hidden bg-[#81cddf] rounded-3xl p-6 mt-6 shadow-xl">

            {/* Background pattern et effet flou */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.04]
                            bg-[url('/patterns/dental-outline.svg')] bg-repeat bg-[size:120px]" />
            <div className="pointer-events-none absolute -right-20 -top-20
                            w-60 h-60 bg-white/30 blur-3xl rounded-full" />

            {/* Contenu principal */}
            <div className="relative z-10 text-white flex flex-col space-y-4">

              {/* Titre avec icône */}
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold tracking-tight">Finance</h3>
                <div className="bg-white/20 p-1.5 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                  </svg>
                </div>
              </div>

              {/* Infos financières */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-white/20 p-3 rounded-xl flex flex-col">
                  <span className="text-xs font-medium text-white/80">Solde actuel</span>
                  <span className="mt-1 text-lg font-bold">
                    {finance ? formatMoney(finance.soldeActuel) : "..."}
                  </span>
                </div>
                <div className="bg-white/20 p-3 rounded-xl flex flex-col">
                  <span className="text-xs font-medium text-white/80">Solde arriérés</span>
                  <span className="mt-1 text-lg font-bold">
                    {finance ? formatMoney(finance.soldeArrieres) : "..."}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

