'use client'

import { useUser } from '@auth0/nextjs-auth0/client';

export function LoginButton() {
  const { user, isLoading } = useUser();

  if (isLoading) return <div>Cargando...</div>;

  if (user) {
    return (
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => window.location.href = '/api/auth/logout'}>
        Cerrar sesión
      </button>
    );
  }

  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => window.location.href = '/api/auth/login'}>
      Iniciar sesión
    </button>
  );
}

