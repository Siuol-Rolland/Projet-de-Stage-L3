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
  Lu: boolean
  Date_Envoi: string
}

export default function HeaderFormTeacher() {
  const supabase = createClient()
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [loading, setLoading] = useState(true)

  // 🧩 Charger les notifications du prof connecté
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const res = await fetch("/api/teacher/notification")
        if (!res.ok) throw new Error("Erreur de récupération des notifications")
        const data = await res.json()
        setNotifications(Array.isArray(data.notifications) ? data.notifications : [])
      } catch (err) {
        console.error("Erreur fetch notifications:", err)
        setNotifications([])
      } finally {
        setLoading(false)
      }
    }
    fetchNotifications()
  }, [])

  // 🔔 Écouter les nouvelles notifications via Supabase Realtime
  useEffect(() => {
    const channel = supabase
      .channel("notifications")
      .on("broadcast", { event: "new_notification" }, (payload) => {
        console.log("📩 Nouvelle notification reçue :", payload)
        const newNotifs = payload.payload.notifications
        if (Array.isArray(newNotifs)) {
          setNotifications((prev) => [...newNotifs, ...prev])
        }
      })
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [])

  // ✅ Marquer une notification comme lue
  const markAsRead = async (id: number) => {
    try {
      await fetch(`/api/teacher/notification?id=${id}`, { method: "PATCH" })
      setNotifications((prev) =>
        prev.map((n) =>
          n.ID_Notification === id ? { ...n, Lu: true } : n
        )
      )
    } catch (err) {
      console.error("Erreur PATCH notification:", err)
    }
  }

  const unreadCount = notifications.filter((n) => !n.Lu).length

  return (
    <header className="flex items-center justify-between px-6 py-4 border-b bg-background shadow-sm">
      <h1 className="text-lg font-semibold text-foreground">Espace Enseignant</h1>

      <div className="relative flex items-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="relative cursor-pointer">
              {/* 🔔 Icône */}
              <Bell className="text-gray-600 hover:text-primary transition w-6 h-6" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 text-[10px] font-bold text-white bg-red-600 rounded-full w-4 h-4 flex items-center justify-center">
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
                    onClick={() => markAsRead(notif.ID_Notification)}
                    className={
                      notif.Lu
                        ? "text-gray-500 text-sm"
                        : "font-semibold text-sm"
                    }
                  >
                    {notif.Message}
                    <span className="text-xs text-gray-400 ml-2">
                      {new Date(notif.Date_Envoi).toLocaleTimeString("fr-FR", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
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
