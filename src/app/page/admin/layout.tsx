import  { ReactNode } from 'react'
import "../../globals.css"
import SidebarForm from '@/components/admin/SidebarForm';
import HeaderForm from '@/components/admin/HeaderForm';

interface AdminLayoutProps{
    children: ReactNode;
}

export default function AdminLayout({children} : AdminLayoutProps) {
  return (
    <div className="min-h-screen grid grid-cols-[250px_1fr] bg-muted">
        {/* === Sidebar === */}
        <SidebarForm />

        {/* Conent Dash */}
        <div className="flex flex-col flex-1 bg-background">
            {/* === Header === */}
            <HeaderForm/>
            
            <div className='flex-1 p-6 overflow-y-auto'>
                {children}
            </div>
        </div>
    </div>
  )
}
