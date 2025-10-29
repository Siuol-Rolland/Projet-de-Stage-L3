"use client";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectItem, SelectContent } from "@/components/ui/select";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, ChangeEvent, useEffect } from "react";
import Swal from "sweetalert2";

import { User, FileText } from "lucide-react";
import { toast } from "react-toastify";

type FormDataType = {
  nomComplet: string;
  email: string;
  phone: string;
  departement: string;
  annee: string;
  photo: string;
  password: string;
  confPassword: string;
};

const initialFormData: FormDataType = {
  nomComplet: "",
  email: "",
  phone: "",
  departement: "",
  annee: "",
  photo: "",
  password: "",
  confPassword: "",
};

const steps = [
  { number: 1, title: "Informations personnelles", icon: User },
  { number: 2, title: "Informations académiques", icon: FileText },
  { number: 3, title: "Photo d'identité", icon: FileText},
  { number: 4, title: "Mot de passe", icon: FileText },
];

const fieldsPerStep: { [key: number]: (keyof FormDataType)[] } = {
  1: ["nomComplet", "email", "phone"],
  2: ["departement", "annee"],
  3: ["photo"],
  4: ["password", "confPassword"],
};

export default function SignUpPage({
  className,
}: React.ComponentProps<"form">) {
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormDataType>(initialFormData);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const [departements, setDepartements] = useState<any[]>([]);
  const [selectedDep, setSelectedDep] = useState("");

  // 🔄 Récupérer les départements depuis l'API au montage du composant
  useEffect(() => {
    fetch("/api/department")
      .then((res) => res.json())
      .then((data) => setDepartements(data))
      .catch((err) => toast.error("Erreur lors du chargement des départements"));
  }, []);

  // 🔹 Met à jour les champs
  const handleInputChange = (field: keyof FormDataType, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // 🔹 Validation d’une étape
  const validateStep = (step: number) => {
    const fields = fieldsPerStep[step];
    return fields.every((field) => {
      const value = formData[field];
      if (!value || value.trim() === "") return false;
      if (field === "phone" && !/^0\d{8,9}$/.test(String(value))) return false;
      if (field === "confPassword" && formData.password !== formData.confPassword)
        return false;
      return true;
    });
  };

  // 🔹 Validation de tout le formulaire
  const validateAllSteps = () => [1, 2, 3, 4].every((s) => validateStep(s));

  // 🔹 Étape suivante
  const handleNextStep = () => {
    setError(null);
    if (validateStep(currentStep)) {
      setCurrentStep((s) => Math.min(s + 1, steps.length));
    } else {
      setError("Veuillez remplir correctement les champs requis.");
    }
  };

  // 🔹 Soumission finale
  const handleSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateAllSteps()) {
      setError("Veuillez remplir correctement tous les champs.");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      await Swal.fire({
        title: "Compte créé avec succès",
        text: `${formData.nomComplet}, votre compte a été créé.`,
        icon: "success",
        confirmButtonText: "OK",
        customClass: {
          confirmButton:
            "bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md",
        },
        buttonsStyling: false,
      });

      // TODO : intégrer votre API ici
      console.log("Formulaire soumis :", formData);
      router.push("/");
    } finally {
      setIsLoading(false);
    }
  };

  // 🔹 Contenu dynamique des étapes
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <InputField
              label="Nom complet"
              value={formData.nomComplet}
              onChange={(v) => handleInputChange("nomComplet", v)}
            />
            <InputField
              label="Téléphone"
              value={formData.phone}
              onChange={(v) => handleInputChange("phone", v)}
              type="tel"
            />
            <InputField
              label="Adresse Email"
              value={formData.email}
              onChange={(v) => handleInputChange("email", v)}
              type="email"
            />
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Département</Label>
              <Select onValueChange={setSelectedDep}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Sélectionnez le département" />
                </SelectTrigger>
                <SelectContent>
                  {departements.map((dep) => (
                    <SelectItem key={dep.ID_Dep} value={dep.Nom_Dep}>
                      {dep.Nom_Dep}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Année d'étude</Label>
              <Select 
                value={formData.annee}
                onValueChange={(v: string) => 
                  handleInputChange("annee", v)
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder= "Sélectionnez votre année d'étude"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="4ᵉ année">
                    4ᵉ année
                  </SelectItem>
                  <SelectItem value="5ᵉ année">
                    5ᵉ année
                  </SelectItem>
                  <SelectItem value="6ᵉ année">
                    6ᵉ année
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <InputField
              label="Photo d'identité"
              type="file"
              value={formData.photo}
              onChange={(v) => handleInputChange ("photo", v)}
            />
          </div>
        );  
      case 4:
        return (
          <div className="space-y-4">
            <InputField
              label="Mot de passe"
              type="password"
              value={formData.password}
              onChange={(v) => handleInputChange("password", v)}
            />
            <InputField
              label="Confirmer le mot de passe"
              type="password"
              value={formData.confPassword}
              onChange={(v) => handleInputChange("confPassword", v)}
            />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <form
      className={cn("flex flex-col gap-6", className)}
      onSubmit={handleSubmitForm}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Créer un compte</h1>
        <p className="text-muted-foreground">
          Étape {currentStep} sur {steps.length} — {steps[currentStep - 1].title}
        </p>
      </div>

      <div className="grid gap-6">
        {renderStepContent()}

        {error && (
          <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-sm text-red-600">
            ⚠️ {error}
          </div>
        )}

        <div className="flex justify-between mt-8">
          <Button
            type="button"
            variant="outline"
            onClick={() => setCurrentStep((s) => Math.max(s - 1, 1))}
            disabled={currentStep === 1 || isLoading}
          >
            Précédent
          </Button>

          {currentStep < steps.length ? (
            <Button
              type="button"
              onClick={handleNextStep}
              disabled={!validateStep(currentStep) || isLoading}
            >
              {isLoading ? "Chargement..." : "Suivant"}
            </Button>
          ) : (
            <Button
              type="submit"
              disabled={isLoading || !validateAllSteps()}
            >
              {isLoading ? "Création en cours..." : "Créer le compte"}
            </Button>
          )}
        </div>
      </div>

      <div className="text-center text-sm mt-4">
        Vous avez déjà un compte ?{" "}
        <Link href="/sign-in" className="underline underline-offset-4">
          Se connecter
        </Link>
      </div>
    </form>
  );
}

// 🔹 Composant réutilisable pour les champs de saisie
type InputFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
};

const InputField = ({
  label,
  value,
  onChange,
  type = "text",
}: InputFieldProps) => (
  <div className="space-y-2">
    <Label>{label}</Label>
    <Input
      type={type}
      value={value}
      onChange={(e: ChangeEvent<HTMLInputElement>) =>
        onChange(e.target.value)
      }
      className="w-full h-11"
    />
  </div>
);
