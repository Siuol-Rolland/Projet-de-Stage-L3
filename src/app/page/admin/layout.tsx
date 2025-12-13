import { ReactNode } from "react";
import "../../globals.css";
import SidebarForm from "@/components/admin/SidebarForm";
import HeaderForm from "@/components/admin/HeaderForm";

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="h-screen grid grid-cols-[250px_1fr] bg-muted overflow-hidden">
      {/* === Sidebar === */}
      <SidebarForm />

      {/* === Content / Right Side === */}
      <div className="flex flex-col bg-background h-full overflow-hidden ">
        <HeaderForm />

        <div className="flex-1 p-6 overflow-y-auto ">
          {children}
        </div>
      </div>
    </div>
  );
}
