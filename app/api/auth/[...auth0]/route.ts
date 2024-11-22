import { handleAuth, handleLogin } from '@auth0/nextjs-auth0';
import { auth0Config } from '@/lib/auth0-config';

export const GET = handleAuth({
  login: handleLogin((req) => {
    return {
      authorizationParams: {
        audience: process.env.AUTH0_AUDIENCE,
        // Add any additional parameters here
      },
    };
  }),
});

