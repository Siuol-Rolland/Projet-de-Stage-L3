"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema, SignUpValues } from "@/lib/schemas/schema.auth";

export default function SinUpTeacherPage({
  className,
}: React.ComponentProps<"form">) {
    const [isLoading, setIsLoading] = useState(false);

    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpValues>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (values: SignUpValues) => {
    setIsLoading(true);
    try {
      // TODO: integrate API
      console.log("SignUp submitted", values);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      className={cn("flex flex-col gap-6", className)}
      onSubmit={handleSubmit(onSubmit)}
    >
        <div className="flex flex-col items-center gap-2 text-center">
            <h1 className="text-2xl font-bold">Créer un compte</h1>
            <p className="text-muted-foreground text-sm text-balance">
                Renseignez vos informations pour créer un compte Professeur
            </p>
        </div>

        <div className="grid gap-6">
            <div className="grid gap-3" >
                <Label htmlFor="fullName">Nom complet</Label>
                <Input
                    id="fullName"
                    type="text"
                    placeholder="Jean Dupont"
                    disabled={isLoading}
                    {...register("fullName")}
                />
                {errors.fullName && (
                    <p className="text-destructive text-sm">
                    {errors.fullName.message}
                    </p>
                )}
            </div>

            <div className="grid gap-3">
                <Label htmlFor="email">Adresse email</Label>
                <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    disabled={isLoading}
                    {...register("email")}
                />
                {errors.email && (
                    <p className="text-destructive text-sm">{errors.email.message}</p>
                )}  
            </div>

            <div className="grid gap-3">
                <Label htmlFor="password">Mot de passe</Label>
                <Input
                    id="password"
                    type="password"
                    disabled={isLoading}
                    {...register("password")}
                />
                {errors.password && (
                    <p className="text-destructive text-sm">
                    {errors.password.message}
                    </p>
                )}
            </div>

            <div className="grid gap-3">
                <div className="flex items-center">
                    <Label htmlFor="confirmPassword">Confirmer le mot de passe</Label>
                </div>
                <Input
                    id="confirmPassword"
                    type="password"
                    disabled={isLoading}
                    {...register("confirmPassword")}
                />
                {errors.confirmPassword && (
                    <p className="text-destructive text-sm">
                    {errors.confirmPassword.message}
                    </p>
                )}
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Création en cours..." : "Créer le compte"}
            </Button>


        </div>
    </form>

    
  );
}
