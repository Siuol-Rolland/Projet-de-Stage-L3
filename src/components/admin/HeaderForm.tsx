
"use client"

import { Bell } from "lucide-react"
import { useEffect, useState } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { createClient } from "@/utils/supabase/client"

interface Notification {
  ID_Notification: number
  Message: string
  Read: boolean
  Date_Envoi: string
}

export default function HeaderFormAdmin() {
  const supabase = createClient()
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const res = await fetch("/api/admin/notification")
        const data = await res.json()

        setNotifications(
          Array.isArray(data.notifications) ? data.notifications : []
        )
      } catch (err) {
        console.error("Erreur récupération notifs admin:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchNotifications()
  }, [])

  // 🔔 Realtime : recevoir une notif de paiement validé
  useEffect(() => {
    const channel = supabase
      .channel("admin_notifications")
      .on("broadcast", { event: "paiement_valide" }, (payload) => {
        console.log("🔔 Nouvelle notif admin :", payload)

        const notif = payload.payload.notification

        if (notif) {
          setNotifications((prev) => [notif, ...prev])
        }
      })
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [])

  // 🟦 Marquer comme lu
  const markAsRead = async (id: number) => {
    await fetch(`/api/admin/notification?id=${id}`, { method: "PATCH" })

    setNotifications((prev) =>
      prev.map((n) =>
        n.ID_Notification === id ? { ...n, Read: true } : n
      )
    )
  }

  const unreadCount = notifications.filter((n) => !n.Read).length

  return (
    <header className="flex items-center justify-between px-6 py-4 border-b bg-background shadow-sm">
      <h1 className="text-lg font-semibold text-foreground">Admin Dashboard</h1>

      <div className="relative flex items-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="relative cursor-pointer">
              <Bell className="w-6 h-6 text-gray-600 hover:text-primary" />

              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {unreadCount}
                </span>
              )}
            </div>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="w-80">
            {loading ? (
              <DropdownMenuItem>Chargement...</DropdownMenuItem>
            ) : notifications.length === 0 ? (
              <DropdownMenuItem>Aucune notification</DropdownMenuItem>
            ) : (
              notifications
                .sort(
                  (a, b) =>
                    new Date(b.Date_Envoi).getTime() -
                    new Date(a.Date_Envoi).getTime()
                )
                .map((notif) => (
                  <DropdownMenuItem
                    key={notif.ID_Notification}
                    className={
                      notif.Read ? "text-gray-500" : "font-semibold"
                    }
                    onClick={() => markAsRead(notif.ID_Notification)}
                  >
                    {notif.Message}
                    <span className="text-xs text-gray-400 ml-2">
                      {new Date(notif.Date_Envoi).toLocaleTimeString()}
                    </span>
                  </DropdownMenuItem>
                ))
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
