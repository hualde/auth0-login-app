import { getSession, getAccessToken, withApiAuthRequired, withPageAuthRequired } from '@auth0/nextjs-auth0';

export const auth0Config = {
  authorizationParams: {
    scope: 'openid profile email',
  },
};

export { getSession, getAccessToken, withApiAuthRequired, withPageAuthRequired };

