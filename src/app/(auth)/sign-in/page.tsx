  "use client";

  import React from 'react'
  import Link from 'next/link';
  import Swal from 'sweetalert2';
  import { useRouter } from 'next/navigation';


  import { cn } from '@/lib/utils';
  import { Button } from '@/components/ui/button';
  import { Input } from '@/components/ui/input';
  import { Label } from '@/components/ui/label';
  import { useState } from 'react';

  type FormDataType = {
    email: string;
    password: string;
  };

  const initialFormData: FormDataType = {
    email: "",
    password: "",
  };

  export default function SignInPage({
    className,
  }: React.ComponentProps<"form">) {
    const [ isLoading, setIsLoading ] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsLoading(true);

      const formData = new FormData(e.currentTarget);
    };

    const handleGoogleSignIn =  async () => {
      setIsLoading(true);
    }; 

    return (
      <form 
        className={cn("flex flex-col gap-6", className)}
        onSubmit={handleSubmit}
      >
        <div className='flex flex-col items-center gap-2 text-center'>
          <h1 className='text-2xl font-bold'>Se connecter à votre compte</h1>
          <p className=' text-muted-foreground text-sm text-balance'>
            Entrez votre email ci-dessous pour vous connecter à votre compte
          </p>
        </div>

        <div className='grid gap-6'>
          <div className='grid gap-3'>
            <Label htmlFor='email'>Email</Label>
            <Input
              id='email'
              name='email'
              type='email'
              placeholder='m@example.com'
              required
              disabled={isLoading}
            />
          </div>
          <div className='grid gap-3'>
            <div className='flex items-center'>
              <Label htmlFor='password'>Mot de passe</Label>
              <Link 
                href='/forgot-password'
                className='ml-auto text-sm underline-offset-4 hover:underline'>
                Mot de passe oublié ?
              </Link>
            </div>
            <Input
              id='password'
              name='password'
              type='password'
              required
              disabled={isLoading}
            />
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Connexion en cours..." : "Se connecter"}
          </Button>
          <div className='after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t'>
            <span className='bg-background text-muted-foreground relative z-10 px-2'>
              Ou continuer avec
            </span>
          </div>
          <Button
            type='button'
            variant="outline"
            className='w-full'
            onClick={handleGoogleSignIn}
            disabled={isLoading}
          >
            <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Continuer avec Google
          </Button>
          <div className='text-center text-sm'>
            Vous n'avez pas de compte ?  {"  "}

            <Link href="/sign-up" className='underline underline-offset-4'>
               S'inscrire
            </Link>
          </div>
        </div>
      </form>
    ) 
  }
