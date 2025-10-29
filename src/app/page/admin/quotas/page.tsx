"use client"

import React from 'react'
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CirclePlus } from "lucide-react";
import { toast } from "react-toastify";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from '@/components/ui/label';

export default function QuotasPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-x-2 p-4">
          <h1 className="text-lg font-bold mb-4">QuotasPage</h1>
    
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button className="text-white flex items-center gap-2">
                Ajouter
                <CirclePlus/>
              </Button>
            </DialogTrigger>
    
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className='justify-center'>Ajouter un quotas</DialogTitle>
              </DialogHeader>
    
              <form className="space-y-4 mt-4">
                <div className="grid gap-3">
                  <Label className="text-sm font-medium">Année</Label>
                  <Input
                    type='text'
                    placeholder='niveux universsitaire'
                  />
                </div>
                <div className='grid gap-3'>
                  <Label className="text-sm font-medium">Sous-Actes</Label>
                  <Input
                    type='number'
                    placeholder='nombre du quotas'
                  />
                </div>
                <div className='grid gap-3'>
                  <Label className="text-sm font-medium">Date debut</Label>
                  <Input
                    type='date'
                  />
                </div>
                <div className='grid gap-3'>
                  <Label className="text-sm font-medium">Date fin</Label>
                  <Input
                    type='date'
                  />
                </div>
    
                <DialogFooter>
                  <Button type="submit" className="text-white">
                    Enregistrer
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
          
        </div>
  )
}
