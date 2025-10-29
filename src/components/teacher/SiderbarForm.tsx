"use client"

import { LayoutDashboard, LogOut, Quote, Stethoscope, Wallet, Wallet2 } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function SidebarForm() {
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
            href="/page/teacher"
            className='flex items-center gap-2 px-3 py-2 rounded-md text-foreground hover:text-white hover:bg-primary/90 transition'
          >
            <LayoutDashboard className='w-5 h-5'/>
            <span>Tableau de bord</span>
          </Link>
          <Link
            href="#"
            className='flex items-center gap-2 px-3 py-2 rounded-md text-foreground hover:text-white hover:bg-primary/90 transition'
          >
            <Quote className='w-5 h-5'/>
            <span></span>
          </Link>
          <Link
            href="#"
            className='flex items-center gap-2 px-3 py-2 rounded-md text-foreground hover:text-white hover:bg-primary/90 transition'
          >
            <Wallet2 className='w-5 h-5'/>
            <span></span>
          </Link>
          <Link
            href="#"
            className='flex items-center gap-2 px-3 py-2 rounded-md text-foreground hover:text-white hover:bg-primary/90 transition'
          >
            <LayoutDashboard className='w-5 h-5'/>
            <span></span>
          </Link>
        </nav>

        {/* Footer Sidebar */}
        <div className='p-4 border-t'>
          <button className='flex items-center gap-2 text-foreground hover:text-primary transition'>
            <LogOut className='w-5 h-5'/>
            Déconnexion
          </button>
        </div>
    </aside>
  )
}
