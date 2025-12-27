"use client"

import { ReactNode, useState } from "react"
import "../../globals.css"
import SidebarForm from "@/components/teacher/SiderbarForm"
import HeaderForm from "@/components/teacher/HeaderForm"

interface TeacherLayoutProps {
  children: ReactNode
}

export default function TeacherLayout({ children }: TeacherLayoutProps) {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div
      className={`h-screen grid bg-muted overflow-hidden transition-all duration-300
        ${isCollapsed ? "grid-cols-[80px_1fr]" : "grid-cols-[250px_1fr]"}`}
    >
      {/* === Sidebar === */}
      <SidebarForm
        isCollapsed={isCollapsed}
        onToggle={() => setIsCollapsed((prev) => !prev)}
      />

      {/* === Contenu principal === */}
      <div className="flex flex-col bg-background h-full overflow-hidden">
        <HeaderForm />

        <div className="flex-1 p-6 overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  )
}
