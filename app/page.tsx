import { LoginButton } from '@/components/login-button';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold mb-6">
          Bienvenido a <span className="text-blue-600">Auth0 Login App</span>
        </h1>
        <LoginButton />
      </main>
    </div>
  );
}

