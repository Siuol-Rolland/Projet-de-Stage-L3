"use client";

import React from 'react'
import Link from 'next/link';
import { Stethoscope, Users, Settings, LogOut, Hospital, LayoutDashboard, SquareActivity, Wallet2, NotepadText } from 'lucide-react';
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default function SidebarForm() {
    const router = useRouter();
    const supabase = createClient();

    const handleLogout = async () => {
        try{
            const { error } = await supabase.auth.signOut();
            if (error) throw error;

            await Swal.fire({
                title: "Déconnexion réussie 👋",
                text: "Vous avez été déconnecté avec succès.",
                icon: "success",
                confirmButtonText: "OK",
                customClass: {
                    confirmButton: "bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md",
                },
                buttonsStyling: false,                                                          
            });

            router.push("/sign-in");
        } catch (err: any) {
            console.error("Erreur déconnexion:", err);
            Swal.fire("Erreur", err.message, "error");
        }
    };

  return (
    <aside className='hidden lg:flex flex-col h-screen bg-sidebar border-r shadow-md '>
        {/* Logo */}
        <div className="flex justify-center items-center gap-2 md:justify-start ml-4 mt-4">
            <Stethoscope className=" size-12 text-primary  "/>
            <span className=" text-lg font-medium text-primary tracking-wide">
                DentalCare
            </span>
        </div>

        {/* Menu */}
        <nav className='flex-1 p-4 space-y-6 mt-10'>
            <Link
                href="/page/admin"
                className='flex items-center gap-2 px-3 py-2 rounded-md text-foreground hover:text-white hover:bg-primary/90 transition'
            >
                <LayoutDashboard className="w-5 h-5" />
                <span>Tableau de bord</span>
            </Link>
            <Link
                href="/page/admin/department"
                className="flex items-center gap-2 px-3 py-2 rounded-md text-foreground hover:bg-primary/90 hover:text-white transition"
            >
                <Hospital className="w-5 h-5" />
                <span>Département</span>
            </Link>

            <Link
                href="#"
                className="flex items-center gap-2 px-3 py-2 rounded-md text-foreground hover:bg-primary/90 hover:text-white transition"
            >
                <Users className="w-5 h-5" />
                <span>Etudiants</span>
            </Link>

            <Link
                href="/page/admin/actes"
                className="flex items-center gap-2 px-3 py-2 rounded-md text-foreground hover:bg-primary/90  hover:text-white transition"
            >
                <SquareActivity className="w-5 h-5" />
                <span>Actes</span>
            </Link>

            <Link
                href="/page/admin/quotas"
                className="flex items-center gap-2 px-3 py-2 rounded-md text-foreground hover:bg-primary/90 hover:text-white transition"
            >
                <NotepadText className="w-5 h-5" />
                <span>Quotas</span>
            </Link>

            <Link
                href="/page/admin/payement"
                className="flex items-center gap-2 px-3 py-2 rounded-md text-foreground hover:bg-primary/90 hover:text-white transition"
            >
                <Wallet2 className="w-5 h-5" />
                <span>Payement</span>
            </Link>

            <Link
                href="#"
                className="flex items-center gap-2 px-3 py-2 rounded-md text-foreground hover:bg-primary/90 hover:text-white transition"
            >
                <Settings className="w-5 h-5" />
                <span>Paramètres</span>
            </Link>
        </nav>

        {/* Footer Sidebar */}
        <div className="p-4 border-t">
            <button 
                onClick={handleLogout}
                className="flex items-center gap-2 text-foreground hover:text-primary transition"
            >
                <LogOut className="w-5 h-5" />
                Déconnexion
            </button>
        </div>            
    </aside>
  )
}
