import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';
import { ManagementClient } from 'auth0';

export default withApiAuthRequired(async function userHandler(req, res) {
  const { email, orgId, property } = req.body;

  const session = getSession(req, res);
  if (!session.user['https://ucrclubs.com/adminFor'].includes(orgId)) {
    res.status(401).json('Not Authorized');
  }

  try {
    const params = { [property]: orgId };

    const userManagementClient = new ManagementClient({
      domain: process.env.AUTH0_ISSUER_BASE_URL.replace('https://', ''),
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
    });

    userManagementClient.getUsersByEmail(email).then((users) => {
      users.forEach((user) => {
        const idParam = { id: user.user_id };
        userManagementClient.updateAppMetadata(idParam, params);
      });
    });

    res.status(200).json('Users Updated');
  } catch (err) {
    console.log(err);
    res.status(500).json({ statusCode: 500, message: err.message });
  }
});
