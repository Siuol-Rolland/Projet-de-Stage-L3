// "use client";

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import { useSearchParams } from "next/navigation";
// import Swal from "sweetalert2";

// const passwordRegex = /^.{8,}$/;


// interface SignupData {
// fullName: string;
// email: string;
// password: string;
// confirmPassword: string;
// }

// export default function SinUpTeacherPage() {
//     const [isLoading, setIsLoading] = useState(false);
//     const [emailFromToken, setEmailFromToken] = useState<string | null>(null);
//     const [tokenError, setTokenError] = useState<string | null>(null);
//     const searchParams = useSearchParams();

//     const token = searchParams.get("token");


//     const {
//     register,
//     handleSubmit,
//     setValue, 
//     getValues,
//     formState: { errors },
//   } = useForm<SignupData>();

//   // ✅ Vérifier le token dès que la page charge
//   useEffect(() => {
//     if (!token) {
//       setTokenError("Lien invalide ou manquant.");
//       return;
//     }

//     const verifyToken = async () => {
//       try {
//         const res = await fetch(`/api/auth/invite/verify-token?token=${token}`);
//         const data = await res.json();

//         if (res.ok) {
//           setEmailFromToken(data.email);
//           setValue("email", data.email); // préremplit le champ email
//         } else {
//           setTokenError(data.error || "Lien invalide ou expiré.");
//         }
//       } catch (error) {
//         console.error(error);
//         setTokenError("Erreur de vérification du lien.");
//       }
//     };

//     verifyToken();
//   }, [token, setValue]);

//   const onSubmit = async (values: SignupData) => {
//     setIsLoading(true);
    
//     const res = await fetch ("/api/auth/sign-up/teacher", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ ...values, token }),
//     });

//     const data = await res.json();

//     setIsLoading(false);
    
//     if (!res.ok) {
//       Swal.fire({ icon: "error", title: "Erreur", text: data.error });
//       return;
//     }

//     await Swal.fire({
//           icon: "success",
//           title: "Compte créé avec succès 🎉",
//           text: "Votre compte administrateur a été créé. Veuillez confirmer votre email dans votre boîte mail avant de vous connecter.",
//           confirmButtonText: "OK",
//         });
    
//         // ✅ Redirection après clic sur "OK"
//     window.location.href = "/sign-in";

//   };

//   if (tokenError) {
//     return (
//       <div className="text-center p-8">
//         <p className="text-red-500 font-semibold">{tokenError}</p>
//       </div>
//     );
//   }

//   return (
//     <form
//       className="flex flex-col gap-6"
//       onSubmit={handleSubmit(onSubmit)}
//     >
//         <div className="flex flex-col items-center gap-2 text-center">
//             <h1 className="text-2xl font-bold">Créer un compte</h1>
//             <p className="text-muted-foreground text-sm text-balance">
//                 Renseignez vos informations pour créer un compte Professeur
//             </p>
//         </div>

//         <div className="grid gap-6">
//             <div className="grid gap-3" >
//                 <Label htmlFor="fullName">Nom complet</Label>
//                 <Input
//                     id="fullName"
//                     type="text"
//                     placeholder="Jean Dupont"
//                     disabled={isLoading}
//                     {...register("fullName", {
//                         required: "Nom complet requis",
//                         minLength: { value: 2, message: "Minimum 2 caractères" },
//                     })}
//                 />
//                 {errors.fullName && (
//                     <p className="text-destructive text-sm">
//                     {errors.fullName.message}
//                     </p>
//                 )}
//             </div>

//             <div className="grid gap-3">
//                 <Label htmlFor="email">Adresse email</Label>
//                 <Input
//                     id="email"
//                     type="email"
//                     disabled={isLoading}
//                     readOnly
//                     value={emailFromToken ?? ""}
//                     {...register("email")}
//                     className="bg-gray-100 text-gray-700 cursor-not-allowed"
//                 />
//                 {errors.email && (
//                     <p className="text-destructive text-sm">{errors.email.message}</p>
//                 )}  
//             </div>

//             <div className="grid gap-3">
//                 <Label htmlFor="password">Mot de passe</Label>
//                 <Input
//                     id="password"
//                     type="password"
//                     disabled={isLoading}
//                     {...register("password", {
//                         required: "Mot de passe requis",
//                         validate: (v) =>
//                             passwordRegex.test(v) ||
//                             "Mot de passe doit contenir plus de 8 caractères",
//                     })}
//                 />
//                 {errors.password && (
//                     <p className="text-destructive text-sm">
//                     {errors.password.message}
//                     </p>
//                 )}
//             </div>

//             <div className="grid gap-3">
//                 <div className="flex items-center">
//                     <Label htmlFor="confirmPassword">Confirmer le mot de passe</Label>
//                 </div>
//                 <Input
//                     id="confirmPassword"
//                     type="password"
//                     disabled={isLoading}
//                     {...register("confirmPassword", {
//                        required: "Confirmation requise",
//                         validate: (v) =>
//                             v === getValues("password") || "Les mots de passe ne correspondent pas", 
//                     })}
//                 />
//                 {errors.confirmPassword && (
//                     <p className="text-destructive text-sm">
//                     {errors.confirmPassword.message}
//                     </p>
//                 )}
//             </div>

//             <Button type="submit" className="w-full" disabled={isLoading}>
//                 {isLoading ? "Création en cours..." : "Créer le compte"}
//             </Button>


//         </div>
//     </form>

    
//   );
// }

// code corrected

"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const passwordRegex = /^.{8,}$/;

interface SignupData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function SignUpTeacherPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [emailFromToken, setEmailFromToken] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [tokenError, setTokenError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<SignupData>();

  // ✅ Récupérer le token côté client uniquement
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tokenFromURL = params.get("token");
    if (!tokenFromURL) {
      setTokenError("Lien invalide ou manquant.");
      return;
    }
    setToken(tokenFromURL);

    // Vérifier le token
    const verifyToken = async () => {
      try {
        const res = await fetch(`/api/auth/invite/verify-token?token=${tokenFromURL}`);
        const data = await res.json();

        if (res.ok) {
          setEmailFromToken(data.email);
          setValue("email", data.email); // préremplit le champ email
        } else {
          setTokenError(data.error || "Lien invalide ou expiré.");
        }
      } catch (error) {
        console.error(error);
        setTokenError("Erreur de vérification du lien.");
      }
    };

    verifyToken();
  }, [setValue]);

  const onSubmit = async (values: SignupData) => {
    if (!token) return; // sécurité
    setIsLoading(true);

    try {
      const res = await fetch("/api/auth/sign-up/teacher", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, token }),
      });
      const data = await res.json();
      setIsLoading(false);

      if (!res.ok) {
        Swal.fire({ icon: "error", title: "Erreur", text: data.error });
        return;
      }

      await Swal.fire({
        icon: "success",
        title: "Compte créé avec succès 🎉",
        text: "Votre compte administrateur a été créé. Veuillez confirmer votre email dans votre boîte mail avant de vous connecter.",
        confirmButtonText: "OK",
      });

      window.location.href = "/sign-in";
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      Swal.fire({ icon: "error", title: "Erreur", text: "Erreur serveur. Veuillez réessayer." });
    }
  };

  if (tokenError) {
    return (
      <div className="text-center p-8">
        <p className="text-red-500 font-semibold">{tokenError}</p>
      </div>
    );
  }

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Créer un compte</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Renseignez vos informations pour créer un compte Professeur
        </p>
      </div>

      <div className="grid gap-6">
        {/* Nom complet */}
        <div className="grid gap-3">
          <Label htmlFor="fullName">Nom complet</Label>
          <Input
            id="fullName"
            type="text"
            placeholder="Jean Dupont"
            disabled={isLoading}
            {...register("fullName", {
              required: "Nom complet requis",
              minLength: { value: 2, message: "Minimum 2 caractères" },
            })}
          />
          {errors.fullName && <p className="text-destructive text-sm">{errors.fullName.message}</p>}
        </div>

        {/* Email (prérempli et readonly) */}
        <div className="grid gap-3">
          <Label htmlFor="email">Adresse email</Label>
          <Input
            id="email"
            type="email"
            disabled={isLoading}
            readOnly
            value={emailFromToken ?? ""}
            {...register("email")}
            className="bg-gray-100 text-gray-700 cursor-not-allowed"
          />
          {errors.email && <p className="text-destructive text-sm">{errors.email.message}</p>}
        </div>

        {/* Password */}
        <div className="grid gap-3">
          <Label htmlFor="password">Mot de passe</Label>
          <Input
            id="password"
            type="password"
            disabled={isLoading}
            {...register("password", {
              required: "Mot de passe requis",
              validate: (v) => passwordRegex.test(v) || "Mot de passe doit contenir plus de 8 caractères",
            })}
          />
          {errors.password && <p className="text-destructive text-sm">{errors.password.message}</p>}
        </div>

        {/* Confirm Password */}
        <div className="grid gap-3">
          <Label htmlFor="confirmPassword">Confirmer le mot de passe</Label>
          <Input
            id="confirmPassword"
            type="password"
            disabled={isLoading}
            {...register("confirmPassword", {
              required: "Confirmation requise",
              validate: (v) => v === getValues("password") || "Les mots de passe ne correspondent pas",
            })}
          />
          {errors.confirmPassword && <p className="text-destructive text-sm">{errors.confirmPassword.message}</p>}
        </div>

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Création en cours..." : "Créer le compte"}
        </Button>
      </div>
    </form>
  );
}
