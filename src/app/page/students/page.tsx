"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

type StudentType = {
  FullName_Et: string
  departement: {
    Nom_Dep: string
  }
}

type RealisationType = {
  ID_Realisation: number
  Date_Realise: string
  Note: number | null
  Statut_Valide?: boolean
  paiement?: {
    Statut_Paie: "EN_ATTENTE" | "PARTIEL" | "TOTAL" | "ANNULE"
  } | null
  sousActe: {
    Desc_SActes: string
  }
}


type HistoriqueType = {
  notees: RealisationType[]
  nonNotees: RealisationType[]
}

type StatisticsType = {
  statistics: Array<{
    name: string;
    realisation: number;
    paiement: number;
    quota: number;
    rawDate: string;
  }>;
  totalStats: {
    totalRealisations: number;
    totalPaiements: number;
    totalQuotasValides: number;
  }
}

function StudentBannerSkeleton() {
  return (
    <div className="relative overflow-hidden bg-[#44adc9] rounded-2xl p-6 min-h-[150px] shadow-xl flex items-center">
      <div className="space-y-3">
        <div className="h-7 w-64 bg-white/40 animate-pulse rounded" />
        <div className="h-5 w-80 bg-white/30 animate-pulse rounded" />
      </div>
    </div>
  )
}

function DepartmentSkeleton() {
  return (
    <div className="mt-6 bg-white rounded-2xl border border-slate-100 shadow-sm p-5 flex gap-5">
      <div className="w-20 h-20 rounded-xl bg-slate-200 animate-pulse" />
      <div className="flex-1 space-y-2">
        <div className="h-4 w-32 bg-slate-200 animate-pulse rounded" />
        <div className="h-6 w-48 bg-slate-300 animate-pulse rounded" />
        <div className="h-4 w-56 bg-slate-100 animate-pulse rounded" />
      </div>
    </div>
  )
}

function HistogramSkeleton() {
  return (
    <div className="relative h-[210px] w-full">
      {/* Grille */}
      <div className="absolute inset-0 flex flex-col justify-between px-6 py-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-px bg-slate-100" />
        ))}
      </div>

      {/* Barres */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-between px-8 pb-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="flex items-end gap-[6px]">
            <div className="w-[10px] h-[60px] bg-slate-200 animate-pulse rounded-t" />
            <div className="w-[10px] h-[90px] bg-slate-200/80 animate-pulse rounded-t" />
            <div className="w-[10px] h-[45px] bg-slate-200/60 animate-pulse rounded-t" />
          </div>
        ))}
      </div>

      {/* Labels X */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-between px-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="w-8 h-2 bg-slate-200 animate-pulse rounded mt-2" />
        ))}
      </div>
    </div>
  )
}

function HistoriqueSkeleton() {
  return (
    <div className="space-y-3">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="bg-white p-3 rounded-xl flex gap-3 border border-slate-50">
          <div className="w-10 h-10 bg-slate-200 animate-pulse rounded-lg" />
          <div className="flex-1 space-y-2">
            <div className="h-4 w-40 bg-slate-200 animate-pulse rounded" />
            <div className="h-3 w-28 bg-slate-100 animate-pulse rounded" />
          </div>
          <div className="h-4 w-12 bg-slate-200 animate-pulse rounded" />
        </div>
      ))}
    </div>
  )
}

function FinanceSkeleton() {
  return (
    <div className="relative overflow-hidden bg-[#81cddf] rounded-3xl p-6 mt-6 shadow-xl">
      <div className="space-y-4">
        <div className="h-6 w-24 bg-white/40 animate-pulse rounded" />
        <div className="h-16 bg-white/30 animate-pulse rounded-xl" />
      </div>
    </div>
  )
}


export default function StudentPage() {
  const [student, setStudent] = useState<StudentType | null>(null)

  const [historique, setHistorique] = useState<HistoriqueType | null>(null)

  const [dette, setDette] = useState<number | null>(null)
  
  const [statistics, setStatistics] = useState<StatisticsType | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchAllData = async () => {
      setLoading(true)
      try {
        // Fetch all data in parallel
        const [studentRes, historiqueRes, detteRes, statsRes] = await Promise.all([
          fetch("/api/students/me"),
          fetch("/api/students/realisations/recent"),
          fetch("/api/students/dette"),
          fetch("/api/students/statistics") // Nouvel endpoint
        ]);

        if (studentRes.ok) setStudent(await studentRes.json());
        if (historiqueRes.ok) setHistorique(await historiqueRes.json());
        if (detteRes.ok) {
          const detteData = await detteRes.json();
          setDette(detteData.dette);
        }
        if (statsRes.ok) setStatistics(await statsRes.json());
      } catch (error) {
        console.error("Erreur lors du chargement des données:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, [])

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Card principale */}
        <div className="relative lg:col-span-2 mt-4 lg:mt-8">
          {loading ? <StudentBannerSkeleton /> : (
            <div className="relative overflow-hidden bg-[#44adc9] rounded-2xl
                          p-6 min-h-[150px] shadow-xl
                          flex items-center">
            
              {/* 🎨 Pattern */}
              <div className="pointer-events-none absolute inset-0 opacity-[0.035]
                              bg-[url('/patterns/dental-outline.svg')]
                              bg-repeat bg-[size:140px]" />

              {/* Glow */}
              <div className="pointer-events-none absolute -right-24 -top-24
                              w-80 h-80 bg-white/25 blur-3xl rounded-full" />

              {/* Texte */}
              <div className="relative z-10 max-w-md text-white">
                <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
                  Bonjour,{" "}
                  <span className="font-bold">
                    {student ? student.FullName_Et : "Étudiant"}
                  </span>
                </h1>
                <p className="mt-1 text-base md:text-lg text-white/90">
                  Bienvenue dans votre tableau de bord étudiant !
                </p>
              </div>
            </div>
          )}
          

          {/* Image */}
          <div className="pointer-events-none absolute
                          right-4 top-2/28 -translate-y-1/2
                          z-20">
            <div className="relative h-72 w-64">
              <div className="absolute inset-0 -z-10
                              bg-white/30 blur-2xl rounded-full" />
              <Image
                src="/dash1.png"
                alt="Dashboard illustration"
                fill
                priority
                className="object-contain drop-shadow-[0_24px_28px_rgba(0,0,0,0.35)]"
              />
            </div>
          </div>

          {/* ================= DEPARTEMENT ================= */}
          {loading ? <DepartmentSkeleton /> : (
            <div
              className="
                mt-6
                bg-white
                rounded-2xl
                border border-slate-100
                shadow-sm
                p-5
                flex items-center gap-5
                hover:shadow-md
                transition
              "
            >
              {/* Icône / Image */}
              <div
                className="
                  relative
                  w-20 h-20
                  rounded-xl
                  bg-[#44adc9]/10
                  flex items-center justify-center
                  shrink-0
                "
              >
                <Image
                  src="/departement Cards.png"
                  alt="Département"
                  fill
                  className="object-contain p-3"
                />
              </div>

              {/* Texte */}
              <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Département
                </span>

                <h2 className="text-xl font-bold text-slate-800 tracking-tight">
                  {student?.departement?.Nom_Dep ?? "Département inconnu"}
                </h2>

                <p className="text-sm text-slate-500 font-medium">
                  Département académique principal
                </p>
              </div>
            </div>
          )}
          
          
          {/* ================= HISTOGRAMME ================= */}
          <div className="bg-white p-6 rounded-2xl shadow-sm
                border border-slate-100 mt-6 h-[300px]">

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


            <div className="h-[210px] w-full">
              {loading ? (
                  <HistogramSkeleton />
                ) : (
                  <ResponsiveContainer width="100%" height="100%">
                <BarChart data={statistics?.statistics ?? []} barGap={6}>
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
        <div className="flex flex-col mt-4 lg:mt-8">
          {/* ================= HISTORIQUE DE REALISATION (VERSION COMPACTE) ================= */}
          <div className="bg-[#f8fafc] rounded-2xl shadow-sm p-4 flex flex-col border border-slate-100 max-w-md">
            
            {/* Titre Principal - Taille réduite */}
            <h2 className="text-lg font-bold text-slate-800 tracking-tight mb-4">
              Historique de réalisation
            </h2>

            <div className="space-y-5 flex-1">
              {loading ? <HistoriqueSkeleton /> : (
                <> 
                  {/* --- SECTION 1 : REALISATION NOTEE --- */}
                  <div>
                    <div className="flex justify-between items-center mb-2 px-1">
                      <h3 className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                        Réalisation noté
                      </h3>
                    </div>

                    <div className="space-y-2">
                      {historique?.notees.map((item) => {
                        const date = new Date(item.Date_Realise)

                        return (
                          <div key={item.ID_Realisation} className="bg-white p-2.5 rounded-xl flex items-center gap-3">
                            <div className="flex flex-col items-center bg-[#44adc9]/10 rounded-lg py-1 min-w-[45px]">
                              <span className="text-base font-bold text-[#44adc9]">
                                {date.getDate()}
                              </span>
                              <span className="text-[9px] font-bold uppercase text-[#44adc9]/70">
                                {date.toLocaleString("fr-FR", { month: "short" })}
                              </span>
                            </div>

                            <div className="flex-1">
                              <p className="font-bold text-slate-700 text-[13px]">
                                {item.sousActe.Desc_SActes}
                              </p>
                              <p className="text-slate-400 text-[10px]">
                                {date.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })}
                              </p>
                            </div>

                            <span className="font-bold text-emerald-500 text-[13px]">
                              {item.Note}/20
                            </span>
                          </div>
                        )
                      })}

                    </div>
                  </div>

                  {/* --- SECTION 2 : REALISATION NON NOTEE --- */}
                  <div>
                    <div className="flex justify-between items-center mb-2 px-1">
                      <h3 className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                        Réalisation non noté
                      </h3>
                    </div>

                    <div className="space-y-2">
                      {(historique?.nonNotees ?? []).length === 0 ? (
                        <div
                          className="bg-white/60 p-6 rounded-xl flex items-center gap-3 border border-slate-50 opacity-80 min-h-[140px]"
                        >
                          <div className="font-bold text-center text-slate-500 text-sm py-4">
                            Aucune réalisation en attente de notation
                          </div>
                        </div>
                      ) : (
                        (historique?.nonNotees ?? []).map((item) => {
                          const date = new Date(item.Date_Realise)

                          return (
                            <div
                              key={item.ID_Realisation}
                              className="bg-white/60 p-2.5 rounded-xl flex items-center gap-3 opacity-80"
                            >
                              <div className="flex flex-col items-center bg-slate-100 rounded-lg py-1 min-w-[45px]">
                                <span className="text-base font-bold text-slate-400">
                                  {date.getDate()}
                                </span>
                                <span className="text-[9px] font-bold uppercase text-slate-400">
                                  {date.toLocaleString("fr-FR", { month: "short" })}
                                </span>
                              </div>

                              <div className="flex-1">
                                <p className="font-bold text-slate-700 text-[13px]">
                                  {item.sousActe.Desc_SActes}
                                </p>
                                <p className="text-slate-400 text-[10px]">
                                  {date.toLocaleTimeString("fr-FR", {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                  })}
                                </p>
                              </div>

                              <span className="font-bold text-slate-400 text-[13px]">--</span>
                            </div>
                          )
                        })
                      )}

                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* ================= FINANCE CARD ================= */}
          {loading ? <FinanceSkeleton /> : (
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
                <div className="grid grid-cols-1  gap-3">
                  <div className="bg-white/20 p-3 rounded-xl flex flex-col">
                    <span className="text-xs font-medium text-white/80">Solde arriérés</span>
                    <span className="mt-1 text-lg font-bold">{dette !== null ? `${dette.toLocaleString("fr-FR")} Ar` : "—"}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
