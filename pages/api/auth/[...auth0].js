import { handleAuth, handleLogin } from '@auth0/nextjs-auth0';

const getLoginState = (req, loginOptions) => {
  return { returnTo: req.headers.referer };
};

export default handleAuth({
  async login(req, res) {
    try {
      await handleLogin(req, res, {
        authorizationParams: {
          audience: `${process.env.AUTH0_ISSUER_BASE_URL}/api/v2/`,
          scope: 'openid profile email',
        },
        getLoginState,
      });
    } catch (error) {
      res.redirect('/');
      res.status(error.status || 400).end(error.message);
    }
  },
});
