'use client'

import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/navigation';

export function LoginButton() {
  const { user, error, isLoading } = useUser();
  const router = useRouter();

  if (isLoading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error.message}</div>;

  if (user) {
    return (
      <button 
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          fetch('/api/auth/logout', { method: 'POST' })
            .then(() => router.push('/'))
            .catch(console.error);
        }}
      >
        Cerrar sesión
      </button>
    );
  }

  return (
    <button 
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={() => router.push('/api/auth/login')}
    >
      Iniciar sesión
    </button>
  );
}

