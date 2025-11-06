// // "use client"

// // import { useState } from "react"
// // import { createClient } from "@/utils/supabase/client"
// // import { Input } from "@/components/ui/input";
// // import { Button } from "@/components/ui/button";
// // import { Send } from "lucide-react";
// // import { motion, AnimatePresence } from "framer-motion"

// // export default function MagicLikTeacherPage() {
// //     const [email, setEmail] = useState("");
// //     const [message, setMessage] = useState("");
// //     const [isError, setIsError] = useState(false)

// //     const handleSendMagicLink = async () => {
// //         const supabase = createClient();
// //         const { error} = await supabase.auth.signInWithOtp({
// //             email,
// //             options: {
// //                 emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/magic-link/teacher`,
// //             },
// //         });

// //        if (error) {
// //             setIsError(true)
// //             setMessage("❌ L'invitation n'a été  envoyé à : " + error.message)
// //         } else {
// //             setIsError(false)
// //             setMessage("✅ L'invitation a été bien  envoyé à " + email)
// //         }
    
// //     }
// //   return (
// //     <div className="flex flex-col gap-4 p-4 max-w-md mx-auto">
// //         <h2 className="text-xl font-semibold">Inviter un Professeur à s'inscrire </h2>
// //         <Input
// //             type="email"
// //             placeholder="Entrez votre email"
// //             className="border p-2 rounded"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)} 
// //         />
// //         <Button
// //             onClick={handleSendMagicLink}
// //             className="flex items-center gap-2 px-4 py-2 rounded"
// //         >
// //             <Send className="w-4 h-4"/>
// //             Envoyer
// //         </Button>
// //         <AnimatePresence>
// //         {message && (
// //           <motion.p
// //             key={message} // re-déclenche l’animation à chaque nouveau message
// //             initial={{ opacity: 0, y: -5 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             exit={{ opacity: 0, y: -5 }}
// //             transition={{ duration: 0.4 }}
// //             className={`text-sm font-medium ${
// //               isError ? "text-red-600" : "text-green-600"
// //             }`}
// //           >
// //             {message}
// //           </motion.p>
// //         )}
// //       </AnimatePresence>
// //     </div>
// //   )
// // }

// "use client"

// import { useState } from "react"
// import { createClient } from "@/utils/supabase/client"
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Send } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion"

// export default function MagicLinkTeacherPage() {
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [isError, setIsError] = useState(false);

//   const handleSendMagicLink = async () => {
//     const supabase = createClient();
//     const { error } = await supabase.auth.signInWithOtp({
//       email,
//       options: {
//         // 🟢 Quand l'utilisateur cliquera sur le lien reçu,
//         // il sera redirigé ici pour s'inscrire manuellement
//         emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/magic-link/teacher`,
//       },
//     });

//     if (error) {
//       setIsError(true);
//       setMessage("❌ L'invitation n'a pas pu être envoyée : " + error.message);
//     } else {
//       setIsError(false);
//       setMessage("✅ L'invitation a bien été envoyée à " + email);
//     }
//   };

//   return (
//     <div className="flex flex-col gap-4 p-4 max-w-md mx-auto">
//       <h2 className="text-xl font-semibold">Inviter un professeur à s'inscrire</h2>
//       <Input
//         type="email"
//         placeholder="Entrez l'email du professeur"
//         className="border p-2 rounded"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <Button onClick={handleSendMagicLink} className="flex items-center gap-2 px-4 py-2 rounded">
//         <Send className="w-4 h-4" />
//         Envoyer
//       </Button>

//       <AnimatePresence>
//         {message && (
//           <motion.p
//             key={message}
//             initial={{ opacity: 0, y: -5 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -5 }}
//             transition={{ duration: 0.4 }}
//             className={`text-sm font-medium ${
//               isError ? "text-red-600" : "text-green-600"
//             }`}
//           >
//             {message}
//           </motion.p>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Send } from 'lucide-react'
import React from 'react'
import Swal from "sweetalert2";

export default function MagicLinkTeacherPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendInvite = async () => {
    if (!email) {
      Swal.fire({
        icon: "warning",
        title: "Email requis",
        text: "Veuillez entrer un email !",
        confirmButtonColor: "#3085d6",
      });
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/auth/invite/teacher", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        Swal.fire({
          icon: "success",
          title: "Succès",
          text: "Invitation envoyée avec succès !",
          confirmButtonColor: "#3085d6",
        });
        setEmail(""); // réinitialise le champ
      }else {
        Swal.fire({
          icon: "error",
          title: "Erreur",
          text: data.error || "Une erreur est survenue lors de l’envoi.",
          confirmButtonColor: "#d33",
        });
      }
    } catch (err) {
        console.error(err);
        Swal.fire({
        icon: "error",
        title: "Erreur",
        text: "Erreur lors de l'envoi de l'invitation.",
        confirmButtonColor: "#d33",
      });
    } finally {
      setLoading(false);
    } 
  };

  return (
    <div className="flex flex-col gap-4 p-4 max-w-md mx-auto">
        <h2 className="text-xl font-semibold">
          Inviter un professeur à s'inscrire
        </h2>
        <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Entrez l'email du professeur"
            className="border p-2 rounded"
        />
        <Button 
          disabled={loading}
          onClick={handleSendInvite}
          className="flex items-center gap-2 px-4 py-2 rounded"
        >
            <Send className="w-4 h-4" />
            {loading ? "Envoi en cours ..." : "Envoyer"}
        </Button>
    </div>
  );
}