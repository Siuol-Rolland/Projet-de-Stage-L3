// "use client"

// import { Bell } from "lucide-react"
// import { useState } from "react"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"

// interface Notification {
//   ID_Notif: number
//   message: string
//   read: boolean
//   date: string
// }

// export default function HeaderFormStudents() {
//   // 🔹 Notifications statiques
//   const [notifications, setNotifications] = useState<Notification[]>([
//     {
//       ID_Notif: 1,
//       message:
//         "Un Professeur vient de réaliser une évaluation. Veuillez consulter vos résultats.",
//       read: false,
//       date: new Date().toISOString(),
//     },
//     {
//       ID_Notif: 2,
//       message: "Votre mot de passe a été mis à jour avec succès.",
//       read: true,
//       date: new Date(Date.now() - 1000 * 60 * 60).toISOString(),
//     },
//   ])

//   // 🔹 Marquer une notification comme lue
//   const markAsRead = (id: number) => {
//     setNotifications((prev) =>
//       prev.map((n) => (n.ID_Notif === id ? { ...n, read: true } : n))
//     )
//   }

//   const unreadCount = notifications.filter((n) => !n.read).length

//   return (
//     <header className="flex items-center justify-between px-6 py-4 border-b bg-background shadow-sm">
//       <h1 className="text-lg font-semibold text-foreground">
//         Students Header
//       </h1>

//       <div className="relative flex items-center gap-4">
//         <DropdownMenu>
//           <DropdownMenuTrigger>
//             <div className="relative cursor-pointer">
//               {/* 🔔 Icône plus grande */}
//               <Bell className="text-gray-600 hover:text-primary transition w-6 h-6" />
//               {/* 🔴 Badge plus petit, sans bordure */}
//               {unreadCount > 0 && (
//                 <span className="absolute -top-1 -right-1 text-[10px] font-bold text-white bg-red-600 rounded-full w-4 h-4 flex items-center justify-center">
//                   {unreadCount}
//                 </span>
//               )}
//             </div>
//           </DropdownMenuTrigger>

//           <DropdownMenuContent className="w-80">
//             {notifications.length === 0 && (
//               <DropdownMenuItem>Aucune notification</DropdownMenuItem>
//             )}
//             {notifications
//               .sort(
//                 (a, b) =>
//                   new Date(b.date).getTime() - new Date(a.date).getTime()
//               )
//               .map((notif) => (
//                 <DropdownMenuItem
//                   key={notif.ID_Notif}
//                   className={
//                     notif.read ? "text-gray-500" : "font-semibold"
//                   }
//                   onClick={() => markAsRead(notif.ID_Notif)}
//                 >
//                   {notif.message}
//                   <span className="text-xs text-gray-400 ml-2">
//                     {new Date(notif.date).toLocaleTimeString()}
//                   </span>
//                 </DropdownMenuItem>
//               ))}
//           </DropdownMenuContent>
//         </DropdownMenu>
//       </div>
//     </header>
//   )
// }

// "use client"

// import { Bell } from "lucide-react"
// import { useState, useEffect } from "react"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"

// interface Notification {
//   ID_Notification: number
//   Message: string
//   Lu: boolean
//   createdAt: string
// }

// export default function HeaderFormStudents() {
//   const [notifications, setNotifications] = useState<Notification[]>([])

//   // 🔹 Charger les notifications réelles
//   useEffect(() => {
//     async function fetchNotifications() {
//       try {
//         const res = await fetch("/api/students/notification");
//         const data = await res.json();
//         setNotifications(data);
//       } catch (err) {
//         console.error("Erreur de récupération des notifications", err);
//       }
//     }
//     fetchNotifications();
//   }, []);

//   // 🔹 Marquer une notification comme lue
//   const markAsRead = async (id: number) => {
//     try {
//       await fetch(`/api/students/notification/${id}`, { method: "PATCH" });
//       setNotifications((prev) =>
//         prev.map((n) => (n.ID_Notification === id ? { ...n, Lu: true } : n))
//       );
//     } catch (err) {
//       console.error(err);
//     }
//   }

//   const unreadCount = notifications.filter((n) => !n.Lu).length

//   return (
//     <header className="flex items-center justify-between px-6 py-4 border-b bg-background shadow-sm">
//       <h1 className="text-lg font-semibold text-foreground">
//         Students Header
//       </h1>

//       <div className="relative flex items-center gap-4">
//         <DropdownMenu>
//           <DropdownMenuTrigger>
//             <div className="relative cursor-pointer">
//               <Bell className="text-gray-600 hover:text-primary transition w-6 h-6" />
//               {unreadCount > 0 && (
//                 <span className="absolute -top-1 -right-1 text-[10px] font-bold text-white bg-red-600 rounded-full w-4 h-4 flex items-center justify-center">
//                   {unreadCount}
//                 </span>
//               )}
//             </div>
//           </DropdownMenuTrigger>

//           <DropdownMenuContent className="w-80">
//             {notifications.length === 0 && (
//               <DropdownMenuItem>Aucune notification</DropdownMenuItem>
//             )}
//             {notifications
//               .sort(
//                 (a, b) =>
//                   new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
//               )
//               .map((notif) => (
//                 <DropdownMenuItem
//                   key={notif.ID_Notification}
//                   className={notif.Lu ? "text-gray-500" : "font-semibold"}
//                   onClick={() => markAsRead(notif.ID_Notification)}
//                 >
//                   {notif.Message}
//                   <span className="text-xs text-gray-400 ml-2">
//                     {new Date(notif.createdAt).toLocaleTimeString()}
//                   </span>
//                 </DropdownMenuItem>
//               ))}
//           </DropdownMenuContent>
//         </DropdownMenu>
//       </div>
//     </header>
//   )
// }


"use client";

import { Bell } from "lucide-react";
import { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Notification {
  ID_Notification: number;
  Message: string;
  Lu: boolean;
  Date_Envoi: string;
}

export default function HeaderFormStudents() {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  // 🔹 Charger les notifications depuis le serveur
  useEffect(() => {
    async function fetchNotifications() {
      try {
        const res = await fetch("/api/students/notification");
        const data = await res.json();
        // setNotifications(data || []);
        if (Array.isArray(data)) {
          setNotifications(data);
        } else {
          console.warn("Réponse inattendue API:", data);
          setNotifications([]);
        }
      } catch (err) {
        console.error("Erreur de récupération des notifications", err);
        setNotifications([]);
      }
    }
    fetchNotifications();
  }, []);

  // 🔹 Marquer une notification comme lue
  const markAsRead = async (id: number) => {
  try {
    await fetch("/api/students/notification", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    setNotifications((prev) =>
      prev.map((n) => (n.ID_Notification === id ? { ...n, Lu: true } : n))
    );
  } catch (err) {
    console.error(err);
  }
};


  const unreadCount = notifications.filter((n) => !n.Lu).length;

  return (
    <header className="flex items-center justify-between px-6 py-4 border-b bg-background shadow-sm">
      <h1 className="text-lg font-semibold text-foreground">
        Students Header
      </h1>

      <div className="relative flex items-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="relative cursor-pointer">
              <Bell className="text-gray-600 hover:text-primary transition w-6 h-6" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 text-[10px] font-bold text-white bg-red-600 rounded-full w-4 h-4 flex items-center justify-center">
                  {unreadCount}
                </span>
              )}
            </div>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="w-80">
            {notifications.length === 0 && (
              <DropdownMenuItem>Aucune notification</DropdownMenuItem>
            )}
            {notifications
              .sort(
                (a, b) =>
                  new Date(b.Date_Envoi).getTime() -
                  new Date(a.Date_Envoi).getTime()
              )
              .map((notif) => (
                <DropdownMenuItem
                  key={notif.ID_Notification}
                  className={notif.Lu ? "text-gray-500" : "font-semibold"}
                  onClick={() => markAsRead(notif.ID_Notification)}
                >
                  {notif.Message}
                  <span className="text-xs text-gray-400 ml-2">
                    {new Date(notif.Date_Envoi).toLocaleTimeString()}
                  </span>
                </DropdownMenuItem>
              ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
