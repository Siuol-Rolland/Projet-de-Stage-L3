import {ReactNode} from 'react'
import "../../globals.css"
import Link from 'next/link'
import SidebarForm from '@/components/teacher/SiderbarForm';
import HeaderForm from '@/components/teacher/HeaderForm';

interface TeacherLayoutProps{
    children: ReactNode;
}

export default function TeacherLayout({children} : TeacherLayoutProps) {
  return (
    <div className="h-screen grid grid-cols-[250px_1fr] bg-muted overflow-hidden">
            {/* === Sidebar === */}
            <SidebarForm />
    
            {/* Conent Dash */}
            <div className="flex flex-col bg-background h-full overflow-hidden">
                {/* === Header === */}
                <HeaderForm/>
                
                <div className='flex-1 p-6 overflow-y-auto'>
                    {children}
                </div>
            </div>
        </div>
  )
}
