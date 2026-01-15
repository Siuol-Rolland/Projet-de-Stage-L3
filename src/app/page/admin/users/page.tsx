"use client";

import { Button } from "@/components/ui/button";
import { UserPlus, Users } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

/* ================================
   TYPES
================================ */
type UserRole = "Administrateur" | "Professeur" | "Étudiant";
type UserStatus = "Actif" | "Inactif" | "Bloqué";

type AppUser = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  status: UserStatus;
};

function UsersTableSkeleton({ rows = 5 }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm animate-pulse">
        <thead className="bg-slate-50 text-slate-500">
          <tr>
            <th className="px-6 py-3 text-left font-semibold">Nom</th>
            <th className="px-6 py-3 text-left font-semibold">Email</th>
            <th className="px-6 py-3 text-left font-semibold">Rôle</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: rows }).map((_, i) => (
            <tr key={i} className="border-t border-slate-100">
              <td className="px-6 py-4">
                <div className="h-4 w-32 bg-slate-200 rounded"></div>
              </td>
              <td className="px-6 py-4">
                <div className="h-4 w-48 bg-slate-200 rounded"></div>
              </td>
              <td className="px-6 py-4">
                <div className="h-5 w-24 bg-slate-200 rounded-full"></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


export default function UserPage() {
  const router = useRouter();

  const [users, setUsers] = useState<AppUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("/api/admin/getAllUsers");
        if (!res.ok) throw new Error("Erreur chargement");

        const data: AppUser[] = await res.json();
        setUsers(data);
      } catch (err) {
        console.error(err);
        setError("Impossible de charger les utilisateurs");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="p-6 space-y-6">

      {/* ================= HEADER ================= */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

          {/* Titre */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-[#44adc9]/10 flex items-center justify-center">
              <Users className="w-6 h-6 text-[#44adc9]" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-800 tracking-tight">
                Gestion des utilisateurs
              </h1>
              <p className="text-sm text-slate-500">
                Administrateurs, professeurs et étudiants
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3">
            <Button
              onClick={() => router.push("/page/admin/send-auth/teacher")}
              className="flex items-center gap-2 bg-[#44adc9] hover:bg-[#3aa0bb]"
            >
              <UserPlus size={18} />
              Inviter un professeur
            </Button>

            <Button
              variant="outline"
              onClick={() => router.push("/page/admin/send-auth/admin")}
              className="flex items-center gap-2 border-[#44adc9] text-[#44adc9]"
            >
              <UserPlus size={18} />
              Inviter un administrateur
            </Button>
          </div>
        </div>
      </div>

      {/* ================= TABLE CARD ================= */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">

        {/* États */}
        {loading && (
          <div className="p-6">
            <UsersTableSkeleton rows={5} />
          </div>

        )}

        {error && (
          <div className="p-6 text-center text-rose-500 font-medium">
            {error}
          </div>
        )}

        {!loading && !error && (
          <>
            {/* Header table */}
            <div className="px-6 py-4 border-b border-slate-100">
              <h2 className="text-lg font-bold text-slate-800 tracking-tight">
                Liste des utilisateurs
              </h2>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-slate-50 text-slate-500">
                  <tr>
                    <th className="px-6 py-3 text-left font-semibold">Nom</th>
                    <th className="px-6 py-3 text-left font-semibold">Email</th>
                    <th className="px-6 py-3 text-left font-semibold">Rôle</th>
                  </tr>
                </thead>

                <tbody>
                  {users.length === 0 && (
                    <tr>
                      <td colSpan={3} className="py-10 text-center text-slate-400">
                        Aucun utilisateur trouvé
                      </td>
                    </tr>
                  )}

                  {users.map((user) => (
                    <tr
                      key={user.id}
                      className="border-t border-slate-100 hover:bg-slate-50 transition"
                    >
                      <td className="px-6 py-4 font-medium text-slate-700">
                        {user.name}
                      </td>
                      <td className="px-6 py-4 text-slate-500">
                        {user.email}
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#44adc9]/10 text-[#44adc9]">
                          {user.role}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
