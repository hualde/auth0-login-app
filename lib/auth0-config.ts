import { InitAuth0 } from '@auth0/nextjs-auth0';

export const auth0Config = {
  authorizationParams: {
    scope: 'openid profile email',
  },
};

export const initAuth0 = InitAuth0(auth0Config);

