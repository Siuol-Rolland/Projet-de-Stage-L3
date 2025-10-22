import Image from "next/image";
import SignInPage from "./(auth)/sign-in/page";
import AuthLayout from "./(auth)/layout";


export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* authentifiaction  */}
      <AuthLayout>  
        <SignInPage/>
      </AuthLayout>
    </div>
  );
}
