"use client"

import { useState } from "react"
import { createClient } from "@/utils/supabase/client"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion"

export default function MagicLikAdminPage() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isError, setIsError] = useState(false)

    const handleSendMagicLink = async () => {
        const supabase = createClient();
        const { error} = await supabase.auth.signInWithOtp({
            email,
            options: {
                emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/magic-link/admin`,
            },
        });

       if (error) {
            setIsError(true)
            setMessage("❌ L'invitation n'a été  envoyé à : " + error.message)
        } else {
            setIsError(false)
            setMessage("✅ L'invitation a été bien  envoyé à " + email)
        }
    
    }
  return (
    <div className="flex flex-col gap-4 p-4 max-w-md mx-auto">
        <h2 className="text-xl font-semibold">Inviter un Administrateur à s'inscrire </h2>
        <Input
            type="email"
            placeholder="Entrez votre email"
            className="border p-2 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
        />
        <Button
            onClick={handleSendMagicLink}
            className=" px-4 py-2 rounded"
        >
            <Send className="w-4 h-4"/>
            Envoyer
        </Button>
        <AnimatePresence>
        {message && (
          <motion.p
            key={message} // re-déclenche l’animation à chaque nouveau message
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.4 }}
            className={`text-sm font-medium ${
              isError ? "text-red-600" : "text-green-600"
            }`}
          >
            {message}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}
