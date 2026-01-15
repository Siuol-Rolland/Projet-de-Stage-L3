"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Send, GraduationCap } from "lucide-react";
import Swal from "sweetalert2";

export default function MagicLinkTeacherPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSendInvite = async () => {
    if (!email) {
      Swal.fire({
        icon: "warning",
        title: "Email requis",
        text: "Veuillez entrer un email !",
        confirmButtonColor: "#44adc9",
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
          confirmButtonColor: "#44adc9",
        });
        setEmail("");
      } else {
        Swal.fire({
          icon: "error",
          title: "Erreur",
          text: data.error || "Une erreur est survenue lors de l’envoi.",
          confirmButtonColor: "#ef4444",
        });
      }
    } catch {
      Swal.fire({
        icon: "error",
        title: "Erreur",
        text: "Erreur lors de l'envoi de l'invitation.",
        confirmButtonColor: "#ef4444",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 flex justify-center">
      <div className="w-full max-w-md space-y-6">

        {/* 🔙 Retour */}
        <Button
          variant="outline"
          onClick={() => router.push("/page/admin/users")}
          className="flex items-center gap-2 border-slate-200 text-slate-600"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour
        </Button>

        {/* ================= CARD ================= */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 space-y-6">

          {/* Header */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#44adc9]/10 flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-[#44adc9]" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-800 tracking-tight">
                Invitation professeur
              </h2>
              <p className="text-sm text-slate-500">
                Envoyez un lien d’inscription sécurisé
              </p>
            </div>
          </div>

          {/* Input */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-600">
              Adresse email
            </label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="professeur@email.com"
              className="focus-visible:ring-[#44adc9]"
            />
          </div>

          {/* Action */}
          <Button
            disabled={loading}
            onClick={handleSendInvite}
            className="w-full flex items-center justify-center gap-2 bg-[#44adc9] hover:bg-[#3aa0bb]"
          >
            <Send className="w-4 h-4" />
            {loading ? "Envoi en cours..." : "Envoyer l’invitation"}
          </Button>
        </div>
      </div>
    </div>
  );
}
