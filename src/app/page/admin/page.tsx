"use client"

import { Button } from '@/components/ui/button'
import React from 'react'

export default function AdminPage() {
  return (
    <div className=' space-x-2 p-4'>
      <h1 className="text-lg font-bold mb-4">Adminpage</h1>
      <Button className="text-white flex items-center gap-2">
        Inviter
      </Button>
    </div>
  )
}
