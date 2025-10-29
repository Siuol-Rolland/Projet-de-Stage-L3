import { Bell } from 'lucide-react'
import React from 'react'

export default function HeaderForm() {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b bg-background shadow-sm">
        <h1 className="text-lg font-semibold text-foreground">Students Header</h1>
        <div className="flex items-center gap-4">
            <Bell className=" text-gray-500 hover:text-primary transition  w-5 h-5" />
        </div>
    </header>
  )
}
