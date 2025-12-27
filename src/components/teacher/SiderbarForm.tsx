"use client"
import React, { useState } from "react"
import {
  Hospital,
  LayoutDashboard,
  LogOut,
  Stethoscope,
  Menu,
  Users,
} from "lucide-react"
import Link from "next/link"
import { createClient } from "@/utils/supabase/client"
import { useRouter } from "next/navigation"
import Swal from "sweetalert2"

interface SidebarFormProps {
  isCollapsed: boolean
  onToggle: () => void
}

export default function SidebarForm({ isCollapsed, onToggle }: SidebarFormProps) {
  const router = useRouter()
  const supabase = createClient()
  const [isHoverLogo, setIsHoverLogo] = useState(false)



  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut()
      if (error) throw error

      await Swal.fire({
        title: "Déconnexion réussie 👋",
        text: "Vous avez été déconnecté avec succès.",
        icon: "success",
        confirmButtonText: "OK",
        customClass: {
          confirmButton:
            "bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md",
        },
        buttonsStyling: false,
      })

      router.push("/sign-in")
    } catch (err: any) {
      Swal.fire("Erreur", err.message, "error")
    }
  }

  return (
    <aside className="hidden lg:flex flex-col h-screen bg-sidebar border-r shadow-md transition-all duration-300">
      
      {/* Logo + Toggle */}
      <div
        className={`flex items-center gap-2 mt-4 px-4
          ${isCollapsed ? "justify-center" : "justify-between"}`}
      >
        {/* Logo / Menu dynamique */}
        <button
          onMouseEnter={() => setIsHoverLogo(true)}
          onMouseLeave={() => setIsHoverLogo(false)}
          onClick={() => {
            if (isCollapsed) onToggle()
          }}
          className="flex items-center gap-2 p-2 rounded hover:bg-primary/20 transition"
          aria-label="Toggle sidebar"
        >
          {/* Icône dynamique */}
          {isCollapsed && isHoverLogo ? (
            <Menu className="w-6 h-6 text-primary transition" />
          ) : (
            <Stethoscope className="w-10 h-10 text-primary transition" />
          )}

          {/* Texte visible uniquement quand ouvert */}
          {!isCollapsed && (
            <span className="text-lg font-medium text-primary tracking-wide">
              DentalCare
            </span>
          )}
        </button>

        {/* Bouton Menu visible uniquement quand sidebar ouverte */}
        {!isCollapsed && (
          <button
            onClick={onToggle}
            className="p-2 rounded hover:bg-primary/20 transition hover:text-primary"
            aria-label="Collapse sidebar"
          >
            <Menu className="w-5 h-5" />
          </button>
        )}
      </div>


      {/* Menu */}
      <nav className="flex-1 p-4 space-y-4 mt-8">
        <SidebarLink
          href="/page/teacher"
          icon={<LayoutDashboard className="w-5 h-5" />}
          label="Tableau de bord"
          isCollapsed={isCollapsed}
        />
        <SidebarLink
          href="/page/teacher/department"
          icon={<Hospital className="w-5 h-5" />}
          label="Département"
          isCollapsed={isCollapsed}
        />
        <SidebarLink
          href="/page/teacher/students"
          icon={<Users className="w-5 h-5" />}
          label="Étudiants"
          isCollapsed={isCollapsed}
        />
      </nav>

      {/* Footer */}
      <div className="p-4 border-t flex justify-center">
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 text-foreground hover:text-primary transition"
        >
          <LogOut className="w-5 h-5" />
          {!isCollapsed && <span>Déconnexion</span>}
        </button>
      </div>
    </aside>
  )
}

/* 🔹 Composant lien réutilisable */
function SidebarLink({
  href,
  icon,
  label,
  isCollapsed,
}: {
  href: string
  icon: React.ReactNode
  label: string
  isCollapsed: boolean
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 px-3 py-2 rounded-md text-foreground
                 hover:text-white hover:bg-primary/90 transition"
    >
      {icon}
      {!isCollapsed && <span>{label}</span>}
    </Link>
  )
}
