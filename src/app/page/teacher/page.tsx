"use client";

import Image from "next/image"
import React from "react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

export default function TeacherPage() {
    // Données de l’histogramme (analyse hebdomadaire)
    const data = [
      { name: 'Lundi', realisation: 12, paiement: 8, quota: 5 },
      { name: 'Mardi', realisation: 18, paiement: 14, quota: 9 },
      { name: 'Mercredi', realisation: 25, paiement: 20, quota: 15 },
      { name: 'Jeudi', realisation: 22, paiement: 17, quota: 13 },
      { name: 'Vendredi', realisation: 30, paiement: 26, quota: 21 },
      { name: 'Samedi', realisation: 15, paiement: 10, quota: 7 },
      { name: 'Dimanche', realisation: 8, paiement: 5, quota: 3 },
    ];
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        {/* Card principale */}
        <div className="relative lg:col-span-2">
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
                Bonjour, <span className="font-bold">TeacherPage</span>
              </h1>
              <p className="mt-1 text-base md:text-lg text-white/90">
                Bienvenue dans votre tableau de bord professeur !
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="pointer-events-none absolute
                          right-4 top-4/38 -translate-y-1/2
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

              {/* Département 1 */}
              <div className="relative bg-white rounded-2xl border border-slate-100 shadow-sm p-4 max-w-sm">
                <img
                  src="/departement Cards.png"
                  alt="Endodontie"
                  className="absolute left-[-42px] top-3/5 -translate-y-1/2 w-36 h-36 object-cover"
                />
                <div className="ml-20">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-base font-bold text-slate-800">
                      Endodontie
                    </h3>
                  </div>
                  <p className="text-sm text-slate-500 leading-snug">
                    Accédez aux actes et sous-actes de ce département.
                  </p>
                </div>
              </div>

              {/* Département 2 */}
              <div className="relative bg-white rounded-2xl border border-slate-100 shadow-sm p-4 max-w-sm">
                <img
                  src="/departement Cards.png"
                  alt="Orthopédie dento-faciale"
                  className="absolute left-[-42px] top-3/5 -translate-y-1/2 w-36 h-36 object-cover"
                />
                <div className="ml-20">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-base font-bold text-slate-800">
                      Orthopédie dento-faciale
                    </h3>
                  </div>
                  <p className="text-sm text-slate-500 leading-snug">
                    Accédez aux actes et sous-actes de ce département.
                  </p>
                </div>
              </div>

              {/* Département 3 */}
              <div className="relative bg-white rounded-2xl border border-slate-100 shadow-sm p-4 max-w-sm">
                <img
                  src="/departement Cards.png"
                  alt="Chirurgie dentaire "
                  className="absolute left-[-42px] top-3/5 -translate-y-1/2 w-36 h-36 object-cover"
                />
                <div className="ml-20">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-base font-bold text-slate-800">
                      Chirurgie dentaire 
                    </h3>
                  </div>
                  <p className="text-sm text-slate-500 leading-snug">
                    Accédez aux actes et sous-actes de ce département.
                  </p>
                </div>
              </div>

            </div>
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
                Activités de [Département]
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
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} barGap={4}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 10 }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 10 }}
                  />
                  <Tooltip />

                  <Bar
                    dataKey="realisation"
                    fill="#44adc9"
                    barSize={8}
                    radius={[3, 3, 0, 0]}
                  />
                  <Bar
                    dataKey="paiement"
                    fill="#81cddf"
                    barSize={8}
                    radius={[3, 3, 0, 0]}
                  />
                  <Bar
                    dataKey="quota"
                    fill="#a5e3f1"
                    barSize={8}
                    radius={[3, 3, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
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
                  {[
                    { day: '12', month: 'Sept', time: '9:30', amount: '15/20' },
                    { day: '10', month: 'Sept', time: '16:30', amount: '12/20' },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="bg-white p-2.5 rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex items-center gap-3 border border-slate-50 transition-transform hover:scale-[1.01]"
                    >
                      {/* Badge Date réduit */}
                      <div className="flex flex-col items-center justify-center bg-[#44adc9]/10 rounded-lg py-1 min-w-[45px]">
                        <span className="text-base font-bold text-[#44adc9] leading-tight">{item.day}</span>
                        <span className="text-[9px] font-bold text-[#44adc9]/70 uppercase">{item.month}</span>
                      </div>

                      <div className="flex-1">
                        <p className="font-bold text-slate-700 text-[13px] leading-tight">Étudiant</p>
                        <p className="text-slate-400 text-[10px] font-medium">{item.time} - Transaction réussie </p>
                      </div>

                      <div className="text-right pr-1">
                        <span className="font-bold text-emerald-500 text-[13px]">{item.amount}</span>
                      </div>
                    </div>
                  ))}
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
                  {[
                    { day: '08', month: 'Sept', time: '14:30', amount: '--' },
                    { day: '05', month: 'Sept', time: '10:15', amount: '--' },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="bg-white/60 p-2.5 rounded-xl flex items-center gap-3 border border-slate-50 opacity-80"
                    >
                      <div className="flex flex-col items-center justify-center bg-slate-100 rounded-lg py-1 min-w-[45px]">
                        <span className="text-base font-bold text-slate-400 leading-tight">{item.day}</span>
                        <span className="text-[9px] font-bold text-slate-400 uppercase">{item.month}</span>
                      </div>

                      <div className="flex-1">
                        <p className="font-bold text-slate-700 text-[13px] leading-tight">Étudiant</p>
                        <p className="text-rose-400 text-[10px] font-medium">{item.time} - Échec </p>
                      </div>

                      <div className="text-right pr-1">
                        <span className="font-bold text-slate-400 text-[13px] line-through">{item.amount}</span>
                      </div>
                    </div>
                  ))}
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
                <h3 className="text-xl font-bold tracking-tight">Finance du [departement]</h3>
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
                  <span className="mt-1 text-lg font-bold">50000Ar</span>
                </div>
                <div className="bg-white/20 p-3 rounded-xl flex flex-col">
                  <span className="text-xs font-medium text-white/80">Solde arriérés</span>
                  <span className="mt-1 text-lg font-bold">10000Ar</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
