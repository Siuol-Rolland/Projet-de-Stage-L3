import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import "../globals.css"
import { Stethoscope, MapPin } from "lucide-react";

interface AuthLayoutProps {
    children: ReactNode;
}
export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className=" grid min-h-svh lg:grid-cols-2">
        <div className=" flex flex-col gap-4 p-6 md:p-10">
            <div className="flex justify-center gap-2 md:justify-start">
                {/* Logo */}
                <Stethoscope className=" size-12 text-primary"/>
                <span className=" text-lg font-medium text-primary tracking-wide">
                    DentalCare
                </span>
            </div>
            <div className="flex flex-1 items-center justify-center">
                <div className="w-full max-w-md space-y-6">
                    {children}
                </div>
            </div>
        </div>
        <div className="bg-muted relative hidden lg:block">
            <Image
                src="/auth-image17.1.1.jpg"
                alt="Image"
                fill
                className="absolute inset-0 h-full w-full object dark:brightness-[0.2] dark:grayscale"
                sizes="100vw"
                priority
            />
        </div>
    </div>
  );
}
