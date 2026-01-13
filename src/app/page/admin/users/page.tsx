"use client";

import { Button } from '@/components/ui/button';
import { UserPlus } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";

/* ================================
   TYPES (identiques à l’API)
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

export default function UserPage() {
  const router = useRouter();

  const [users, setUsers] = useState<AppUser[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const handleInviteTeacher = () => {
    router.push("/page/admin/send-auth/teacher");
  };

  const handleInviteAdmin = () => {
    router.push("/page/admin/send-auth/admin");
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("/api/admin/getAllUsers");

        if (!res.ok) {
          throw new Error("Erreur lors du chargement des utilisateurs");
        }

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
    <div className="p-4 space-y-6">
      <h1 className="text-lg font-bold">Gestion des utilisateurs</h1>

      {/* Boutons d’invitation */}
      <div className="flex gap-3">
        <Button
          variant="outline"
          className="flex items-center gap-2"
          onClick={handleInviteTeacher}
        >
          <UserPlus size={18} />
          Inviter un professeur
        </Button>

        <Button
          variant="outline"
          className="flex items-center gap-2"
          onClick={handleInviteAdmin}
        >
          <UserPlus size={18} />
          Inviter un administrateur
        </Button>
      </div>

      {/* États */}
      {loading && <p>Chargement des utilisateurs...</p>}
      {error && <p className="text-red-600">{error}</p>}

      {/* Tableau */}
      {!loading && !error && (
        <div className="overflow-x-auto border rounded-lg">
          <table className="w-full text-sm">
            <thead className="bg-muted">
              <tr>
                <th className="px-4 py-2 text-left">Nom</th>
                <th className="px-4 py-2 text-left">Email</th>
                <th className="px-4 py-2 text-left">Rôle</th>
              </tr>
            </thead>
            <tbody>
              {users.length === 0 && (
                <tr>
                  <td colSpan={5} className="text-center py-4">
                    Aucun utilisateur trouvé
                  </td>
                </tr>
              )}

              {users.map((user) => (
                <tr key={user.id} className="border-t">
                  <td className="px-4 py-2">{user.name}</td>
                  <td className="px-4 py-2">{user.email}</td>
                  <td className="px-4 py-2">{user.role}</td>
                 
                
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
