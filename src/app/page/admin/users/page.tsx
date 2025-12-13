"use client"

import { Button } from '@/components/ui/button'
import { UserPlus } from 'lucide-react'
import React from 'react'
import { useRouter } from "next/navigation";

export default function UserPage() {
  const router = useRouter();
  
   const handleInviteTeacher = () => {
    router.push("/page/admin/send-auth/teacher");
  };
  
   const handleInviteAdmin = () => {
    router.push("/page/admin/send-auth/admin");
  };
  return (
    <div className="space-x-2 p-4">
      <h1 className="text-lg font-bold mb-4">UserPage</h1>
      <div className="flex grid-cols-2 gap-3">
        <Button
          variant="outline"
          className="flex items-center gap-2"
          onClick={handleInviteTeacher}
        >
          Inviter un professeur à s'inscrire
          <UserPlus />
        </Button>

        <Button
          variant="outline"
          className="flex items-center gap-2"
          onClick={handleInviteAdmin}
        >
          Inviter un administrateur à s'inscrire
          <UserPlus />
        </Button>
      </div>
    </div>
  )
}
