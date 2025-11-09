"use client"

import {  Hospital, LayoutDashboard, LogOut,  NotepadText,  Stethoscope,  Wallet2 } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
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
        <div className="flex justify-center items-center gap-2 md:justify-start ml-4 mt-4 ">
            <Stethoscope  className=" size-12 text-primary  "/>
            <span className=" text-lg font-medium text-primary tracking-wide">
                DentalCare
            </span>
        </div>

        {/* Menu */}
        <nav className='flex-1 p-4 space-y-6 mt-10'>
          <Link
            href="/page/students"
            className='flex items-center gap-2 px-3 py-2 rounded-md text-foreground hover:text-white hover:bg-primary/90 transition'
          >
            <LayoutDashboard className='w-5 h-5'/>
            <span>Tableau de bord</span>
          </Link>
          <Link
            href="/page/students/department"
            className='flex items-center gap-2 px-3 py-2 rounded-md text-foreground hover:text-white hover:bg-primary/90 transition'
          >
            <Hospital className='w-5 h-5'/>
            <span> Département </span>
          </Link>
          <Link
            href="/page/students/quotas"
            className='flex items-center gap-2 px-3 py-2 rounded-md text-foreground hover:text-white hover:bg-primary/90 transition'
          >
            <NotepadText className='w-5 h-5'/>
            <span>Quotas</span>
          </Link>
          <Link
            href="/page/students/payement"
            className='flex items-center gap-2 px-3 py-2 rounded-md text-foreground hover:text-white hover:bg-primary/90 transition'
          >
            <Wallet2 className='w-5 h-5'/>
            <span>Payement</span>
          </Link>
        </nav>

        {/* Footer Sidebar */}
        <div className='p-4 border-t'>
          <button 
            onClick={handleLogout}
            className='flex items-center gap-2 text-foreground hover:text-primary transition'>
            <LogOut className='w-5 h-5'/>
            Déconnexion
          </button>
        </div>
    </aside>
  )
}
