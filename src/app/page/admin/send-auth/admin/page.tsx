// import { Button } from '@/components/ui/button'
// import { Input } from '@/components/ui/input'
// import { Send } from 'lucide-react'
// import React from 'react'

// export default function MagicLikAdminPage() {
//   return (
//     <div className="flex flex-col gap-4 p-4 max-w-md mx-auto">
//         <h2 className="text-xl font-semibold">Inviter un administrateur à s'inscrire</h2>
//         <Input
//             type="email"
//             placeholder="Entrez l'email du professeur"
//             className="border p-2 rounded"
//         />
//         <Button className="flex items-center gap-2 px-4 py-2 rounded">
//             <Send className="w-4 h-4" />
//             Envoyer
//         </Button>
//     </div>
//   )
// }

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import Swal from "sweetalert2";

export default function MagicLikAdminPage() {
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
      const res = await fetch("/api/auth/invite/admin", {
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
        Inviter un administrateur à s'inscrire
      </h2>
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Entrez l'email de l'administrateur"
        className="border p-2 rounded"
      />
      <Button
        disabled={loading}
        onClick={handleSendInvite}
        className="flex items-center gap-2 px-4 py-2 rounded"
      >
        <Send className="w-4 h-4" />
        {loading ? "Envoi en cours..." : "Envoyer"}
      </Button>
    </div>
  );
}


