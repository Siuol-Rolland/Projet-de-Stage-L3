import  { ReactNode } from 'react'
import "../../globals.css"
import Link from 'next/link';
import { Stethoscope, Users, Settings, LogOut, BarChart3, Hospital, LayoutDashboard, SquareActivity, Quote, Wallet, Wallet2, Bell } from 'lucide-react';

interface AdminLayoutProps{
    children: ReactNode;
}

export default function AdminLayout({children} : AdminLayoutProps) {
  return (
    <div className="min-h-screen grid grid-cols-[250px_1fr] bg-muted">
        {/* === Sidebar === */}
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
                    <span>Dashboard</span>
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
                    href="#"
                    className="flex items-center gap-2 px-3 py-2 rounded-md text-foreground hover:bg-primary/90  hover:text-white transition"
                >
                    <SquareActivity className="w-5 h-5" />
                    <span>Actes</span>
                </Link>

                <Link
                    href="#"
                    className="flex items-center gap-2 px-3 py-2 rounded-md text-foreground hover:bg-primary/90 hover:text-white transition"
                >
                    <Quote className="w-5 h-5" />
                    <span>Quotas</span>
                </Link>

                <Link
                    href="#"
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
            <button className="flex items-center gap-2 text-foreground hover:text-primary transition">
                <LogOut className="w-5 h-5" />
                Déconnexion
            </button>
            </div>            
        </aside>
        {/* Conent Dash */}
        <div className="flex flex-col flex-1 bg-background">
            {/* === Header === */}
            <header className="flex items-center justify-between px-6 py-4 border-b bg-background shadow-sm">
                <h1 className="text-lg font-semibold text-gray-700">Admin Header</h1>

                <div className="flex items-center gap-4">
                    <Bell className=" text-gray-500 hover:text-primary transition  w-5 h-5" />
                </div>
            </header>
            <div className='flex-1 p-6 overflow-y-auto'>
                {children}
            </div>
        </div>
        
    </div>
  )
}
