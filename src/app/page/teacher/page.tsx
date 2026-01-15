"use client";

import Image from "next/image"
import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

type Departement = {
  ID_Dep: number;
  Nom_Dep: string;
};

type Professeur = {
  Nom_Prof: string;
  departements: Departement[];
};


type EvaluationItem = {
  ID_Realisation: number;
  Date_Realise: string;
  Note: number | null;
  sousActe: { Desc_SActes: string };
};

type HistogramStat = {
  name: string;
  realisation: number;
  paiement: number;
  quota: number;
};

type HistogramResponse = {
  statistics: HistogramStat[];
  totalStats: {
    totalRealisations: number;
    totalPaiements: number;
    totalQuotasValides: number;
  };
  department: {
    id: number;
    name: string;
  };
};

/* ======================= SKELETONS ======================= */

function BannerSkeleton() {
  return (
    <div className="relative overflow-hidden bg-[#44adc9] rounded-2xl p-8 min-h-[180px] shadow-xl">
      <div className="space-y-3">
        <div className="h-7 w-56 bg-white/40 animate-pulse rounded" />
        <div className="h-4 w-72 bg-white/30 animate-pulse rounded" />
      </div>
    </div>
  );
}

function DepartmentSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4 flex gap-4"
        >
          <div className="w-16 h-16 bg-slate-200 animate-pulse rounded-xl" />
          <div className="flex-1 space-y-2">
            <div className="h-4 w-32 bg-slate-200 animate-pulse rounded" />
            <div className="h-3 w-44 bg-slate-100 animate-pulse rounded" />
          </div>
        </div>
      ))}
    </div>
  );
}

function HistogramSkeletonTeacher() {
  return (
    <div className="relative h-full w-full">
      {/* lignes */}
      <div className="absolute inset-0 flex flex-col justify-between px-4 py-3">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-px bg-slate-100" />
        ))}
      </div>

      {/* barres */}
      <div className="absolute bottom-2 left-0 right-0 flex justify-between px-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="flex items-end gap-1">
            <div className="w-2 bg-slate-200 animate-pulse rounded-t"
              style={{ height: `${30 + i * 6}px` }} />
            <div className="w-2 bg-slate-200/80 animate-pulse rounded-t"
              style={{ height: `${40 + i * 8}px` }} />
            <div className="w-2 bg-slate-200/60 animate-pulse rounded-t"
              style={{ height: `${25 + i * 5}px` }} />
          </div>
        ))}
      </div>
    </div>
  );
}

function EvaluationSkeleton() {
  return (
    <div className="space-y-3">
      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={i}
          className="bg-white p-3 rounded-xl flex gap-3 border border-slate-50"
        >
          <div className="w-10 h-10 bg-slate-200 animate-pulse rounded-lg" />
          <div className="flex-1 space-y-2">
            <div className="h-4 w-40 bg-slate-200 animate-pulse rounded" />
            <div className="h-3 w-24 bg-slate-100 animate-pulse rounded" />
          </div>
          <div className="h-4 w-10 bg-slate-200 animate-pulse rounded" />
        </div>
      ))}
    </div>
  );
}

function FinanceSkeletonTeacher() {
  return (

    <div className="space-y-4">
      <div className="h-6 w-40 bg-white/40 animate-pulse rounded" />
      <div className="grid grid-cols-2 gap-3">
        <div className="h-16 bg-white/30 animate-pulse rounded-xl" />
        <div className="h-16 bg-white/30 animate-pulse rounded-xl" />
      </div>
    </div>
  );
}


export default function TeacherPage() {
    const [prof, setProf] = useState<Professeur | null>(null);
    const [loading, setLoading] = useState(true);

    const [evaluated, setEvaluated] = useState<EvaluationItem[]>([]);
    const [notEvaluated, setNotEvaluated] = useState<EvaluationItem[]>([]);
    const [loadingEval, setLoadingEval] = useState(true);

    const [selectedDep, setSelectedDep] = useState<Departement | null>(null);
    const [finance, setFinance] = useState<{
      soldeActuel: number;
      soldeArrieres: number;
    } | null>(null);
    const [loadingFinance, setLoadingFinance] = useState(false);

    const [histogramData, setHistogramData] = useState<HistogramStat[]>([]);
    const [loadingHistogram, setLoadingHistogram] = useState(false);



    useEffect(() => {
      const fetchProf = async () => {
        try {
          const res = await fetch("/api/teacher/me");
          if (!res.ok) return;

          const data = await res.json();
          setProf(data);
        } catch (error) {
          console.error("Erreur chargement prof:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchProf();
    }, []);

    useEffect(() => {
      const fetchEvaluations = async () => {
        try {
          const res = await fetch("/api/teacher/evaluation/recent");
          if (!res.ok) return;

          const data = await res.json();
          setEvaluated(data.evaluated);
          setNotEvaluated(data.notEvaluated);
        } catch (e) {
          console.error(e);
        } finally {
          setLoadingEval(false);
        }
      };

      fetchEvaluations();
    }, []);

    const formatDate = (date: string) => {
      const d = new Date(date);
      return {
        day: d.getDate().toString().padStart(2, "0"),
        month: d.toLocaleString("fr-FR", { month: "short" }),
        time: d.toLocaleTimeString("fr-FR", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
    };

    const handleSelectDepartment = async (dep: Departement) => {
      setSelectedDep(dep);

      // Finance
      setLoadingFinance(true);

      // Histogramme
      setLoadingHistogram(true);

      try {
        /* ================= FINANCE ================= */
        const financeRes = await fetch(
          `/api/teacher/department/${dep.ID_Dep}/finance`
        );
        if (financeRes.ok) {
          const financeData = await financeRes.json();
          setFinance(financeData);
        }

        /* ================= HISTOGRAMME ================= */
        const statRes = await fetch(
          `/api/teacher/department/${dep.ID_Dep}/stats`
        );
        if (statRes.ok) {
          const statData: HistogramResponse = await statRes.json();
          setHistogramData(statData.statistics);
        }

      } catch (e) {
        console.error("Erreur chargement département:", e);
      } finally {
        setLoadingFinance(false);
        setLoadingHistogram(false);
      }
    };


    // Données de l’histogramme (analyse mensyelle fictive)
    const STATIC_HISTOGRAM_DATA = [
  {
    name: "Jan 2025",
    realisation: 12,
    paiement: 9,
    quota: 7,
  },
  {
    name: "Fév 2025",
    realisation: 15,
    paiement: 11,
    quota: 10,
  },
  {
    name: "Mar 2025",
    realisation: 9,
    paiement: 6,
    quota: 5,
  },
  {
    name: "Avr 2025",
    realisation: 18,
    paiement: 14,
    quota: 12,
  },
]

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        {/* Card principale */}
        <div className="relative lg:col-span-2">
          {loading ? <BannerSkeleton /> : (
            <div className="relative overflow-hidden bg-[#44adc9] rounded-2xl p-8 min-h-[180px] shadow-xl">
              {/* Pattern */}
              <div className="pointer-events-none absolute inset-0 opacity-[0.035]
                              bg-[url('/patterns/dental-outline.svg')]
                              bg-repeat bg-[size:140px]"/>
              
              {/* Glow */}
              <div className="pointer-events-none absolute -right-32 -top-32
                              w-96 h-96 bg-white/25 blur-3xl rounded-full"/>
              
              {/* Texte */}
              <div className="relative z-10 max-w-md text-white">
                <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
                  Bonjour,{" "}
                  <span className="font-bold">
                    {loading ? "..." : prof?.Nom_Prof ?? "Professeur"}
                  </span>
                </h1>
                <p className="mt-1 text-base md:text-lg text-white/90">
                  Bienvenue dans votre tableau de bord professeur !
                </p>
              </div>
            </div>
          )}

          {/* Image */}
          <div className="pointer-events-none absolute
                          right-4 top-4/49 -translate-y-1/2
                          z-20">
            <div className="relative h-72 w-64">
              <div className="absolute inset-0 -z-10
                              bg-white/30 blur-2xl rounded-full" />
              <Image 
                src="/dash-teach6.png"
                alt="Dashboard illustration"
                fill
                priority
                className="object-contain drop-shadow-[0_24px_28px_rgba(0,0,0,0.35)]"
              />
            </div>
          </div>
          
          {/* ================= DEPARTEMENT ================= */}
          <div className="mt-10">
            <h2 className="text-xl font-bold text-slate-800 mb-6">
              Spécialisation
            </h2>

            {loading ? (
              <DepartmentSkeleton />
            ) : prof?.departements.length === 0 ? (
              <p className="text-sm text-slate-400">
                Aucun département associé à ce professeur
              </p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {prof?.departements.map((dep) => (
                  <div
                    key={dep.ID_Dep}
                    onClick={() => handleSelectDepartment(dep)}
                    className={`relative bg-white rounded-2xl border shadow-sm p-4 max-w-sm cursor-pointer
                      transition hover:scale-[1.02]
                      ${selectedDep?.ID_Dep === dep.ID_Dep
                        ? "border-[#44adc9] ring-2 ring-[#44adc9]/30"
                        : "border-slate-100"
                    }`}
                  >
                    <img
                      src="/departement Cards.png"
                      alt={dep.Nom_Dep}
                      className="absolute left-[-42px] top-3/5 -translate-y-1/2 w-36 h-36 object-cover"
                    />

                    <div className="ml-20">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-base font-bold text-slate-800">
                          {dep.Nom_Dep}
                        </h3>
                      </div>
                      <p className="text-sm text-slate-500 leading-snug">
                        Accédez aux actes et sous-actes de ce département.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* ================= HISTOGRAMME ================= */}
          <div className="bg-white
                          p-4
                          rounded-2xl
                          shadow-sm
                          border border-slate-100
                          mt-6
                          h-[160px]
                          flex flex-col"
          >
           {/* Header */}           
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-3">
              {/* Titre */}
              <h2 className="text-base font-bold text-slate-600 tracking-tight">
                Activités de {selectedDep?.Nom_Dep ?? "département"}
              </h2>

              {/* Légende */}
              <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-slate-600">
                <div className="flex items-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#44adc9] mr-1.5" />
                  Réalisation
                </div>
                <div className="flex items-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#81cddf] mr-1.5" />
                  Paiement effectué
                </div>
                <div className="flex items-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#a5e3f1] mr-1.5" />
                  Quota validé
                </div>
              </div>
            </div>

            {/* Chart */}
            <div className="flex-1 w-full">
              {loadingHistogram ? (
                <HistogramSkeletonTeacher />
              ) : histogramData.length === 0 ? (
                <p className="text-xs text-slate-400">
                 Sélectionnez un département
                </p>
              ) : (
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={histogramData} barGap={4}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" tick={{ fontSize: 10 }} />
                    <YAxis tick={{ fontSize: 10 }} />
                    <Tooltip />

                    <Bar dataKey="realisation" fill="#44adc9" barSize={8} />
                    <Bar dataKey="paiement" fill="#81cddf" barSize={8} />
                    <Bar dataKey="quota" fill="#a5e3f1" barSize={8} />
                  </BarChart>
                </ResponsiveContainer>
              )}

            </div>
          </div>
        </div>

        {/* ================= HISTORIQUE + FINANCE ================= */}
        <div className="flex flex-col" >
          {/* ================= HISTORIQUE DE EVALUATION (VERSION COMPACTE) ================= */}
          <div className="bg-[#f8fafc] rounded-2xl shadow-sm p-4 flex flex-col border border-slate-100 max-w-md">
            
            {/* Titre Principal - Taille réduite */}
            <h2 className="text-lg font-bold text-slate-800 tracking-tight mb-4">
              Historique d'évaluation
            </h2>

            <div className="space-y-5 flex-1">
              
              {/* --- SECTION 1 : EVALUEE  --- */}
              <div>
                <div className="flex justify-between items-center mb-2 px-1">
                  <h3 className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Evaluée
                  </h3>
                </div>

                <div className="space-y-2">
                  {loadingEval ? (
                      <EvaluationSkeleton />
                    ) : evaluated.length === 0 ? (
                      <p className="text-xs text-slate-400">Aucune évaluation</p>
                    ) : (
                      evaluated.map((item) => {
                        const d = formatDate(item.Date_Realise);
                        return (
                          <div key={item.ID_Realisation} className="bg-white p-2.5 rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex items-center gap-3 border border-slate-50 transition-transform hover:scale-[1.01]">
                            <div className="flex flex-col items-center justify-center bg-[#44adc9]/10 rounded-lg py-1 min-w-[45px]">
                              <span className="text-base font-bold text-[#44adc9] leading-tight">{d.day}</span>
                              <span className="text-[9px] font-bold text-[#44adc9]/70 uppercase">{d.month}</span>
                            </div>

                            <div className="flex-1">
                              <p className="font-bold text-slate-700 text-[13px] leading-tight">{item.sousActe.Desc_SActes}</p>
                              <p className="text-slate-400 text-[10px] font-medium">{d.time}</p>
                            </div>
                            <div className="text-right pr-1"> 
                              <span className="font-bold text-emerald-500 text-[13px]">
                                {item.Note}/20
                              </span>
                            </div>
                          </div>
                        );
                      })
                    )}
                </div>
              </div>

              {/* --- SECTION 2 : REALISATION NON NOTEE --- */}
              <div>
                <div className="flex justify-between items-center mb-2 px-1">
                  <h3 className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Non évaluée
                  </h3>
                </div>

                <div className="space-y-2">
                  {loadingEval ? (
                    <p className="text-xs text-slate-400">Chargement...</p>
                  ) : notEvaluated.length === 0 ? (
                    <div
                      className="bg-white/60 p-6 rounded-xl flex items-center gap-3 border border-slate-50 opacity-80 min-h-[140px]"
                    >
                      <div className="font-bold text-center text-slate-500 text-sm py-4">
                        Aucune réalisation en attente de notation
                      </div>
                    </div>
                  ) : (
                    notEvaluated.slice(0, 2).map((item) => {
                      const d = formatDate(item.Date_Realise);
                      return (
                        <div key={item.ID_Realisation} className="bg-white/60 p-2.5 rounded-xl flex items-center gap-3 border border-slate-50 opacity-80">
                          <div className="flex flex-col items-center justify-center bg-slate-100 rounded-lg py-1 min-w-[45px]">
                            <span className="text-base font-bold text-slate-400 leading-tight">{d.day}</span>
                            <span className="text-[9px] font-bold text-slate-400 uppercase">{d.month}</span>
                          </div>

                          <div className="flex-1">
                            <p className="font-bold text-slate-700 text-[13px] leading-tight">{item.sousActe.Desc_SActes}</p>
                            <p className="text-slate-400 text-[10px] font-medium">{d.time}</p>
                          </div>
                          <div className="text-right pr-1"> 
                            <span className="font-bold text-slate-400 text-[13px]">--</span>
                          </div>
                        </div>
                      );
                    })
                  )}

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
                <h3 className="text-xl font-bold tracking-tight">Finance du {selectedDep?.Nom_Dep ?? "département"} </h3>
                <div className="bg-white/20 p-1.5 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                  </svg>
                </div>
              </div>

              {/* Infos financières */}
              {loadingFinance ? (
                <FinanceSkeletonTeacher />
              ) : finance ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="bg-white/20 p-3 rounded-xl flex flex-col">
                    <span className="text-xs font-medium text-white/80">
                      Solde actuel
                    </span>
                    <span className="mt-1 text-lg font-bold">
                      {finance.soldeActuel.toLocaleString()} Ar
                    </span>
                  </div>

                  <div className="bg-white/20 p-3 rounded-xl flex flex-col">
                    <span className="text-xs font-medium text-white/80">
                      Solde arriérés
                    </span>
                    <span className="mt-1 text-lg font-bold">
                      {finance.soldeArrieres.toLocaleString()} Ar
                    </span>
                  </div>
                </div>
              ) : (
                <p className="text-sm text-white/80">
                  Sélectionnez un département
                </p>
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
