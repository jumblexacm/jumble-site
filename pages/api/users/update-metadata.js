import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';
import { ManagementClient } from 'auth0';

/**
 * If updating `adminFor`, requires three req values: {email, orgId, property}
 * If updating `following, requires two req values: {orgId, property}
 */
export default withApiAuthRequired(async function userHandler(req, res) {
  const { orgId, property } = req.body;

  const session = getSession(req, res);

  const updateAdminFor = (userManagementClient) => {
    let userOrgs;
    if (!session.user['https://ucrclubs.com/adminFor'].includes(orgId)) {
      res.status(401).json('Not Authorized');
    } else {
      const email = req.body.email;
      userManagementClient.getUsersByEmail(email).then((users) => {
        users.forEach((user) => {
          const idParam = { id: user.user_id };
          userOrgs = user.app_metadata[property];
          userOrgs.push(orgId);
          const params = { [property]: userOrgs };
          userManagementClient.updateAppMetadata(idParam, params);
        });
      });
    }

    return userOrgs;
  };

  const updateFollowing = (userManagementClient) => {
    const user = session.user;
    const idParam = { id: user.sub };
    let userFollowing = user[`https://ucrclubs.com/${property}`];

    let idx = userFollowing.indexOf(orgId);
    if (idx > -1) {
      userFollowing.splice(idx, 1);
    } else {
      userFollowing.push(orgId);
    }

    const params = { [property]: userFollowing };
    userManagementClient.updateAppMetadata(idParam, params);
    session.user['https://ucrclubs.com/following'] = userFollowing;

    return userFollowing;
  };

  try {
    const userManagementClient = new ManagementClient({
      domain: process.env.AUTH0_ISSUER_BASE_URL.replace('https://', ''),
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
    });

    let newOrgArr;
    if (property == 'adminFor') {
      newOrgArr = updateAdminFor(userManagementClient);
    }

    if (property == 'following') {
      newOrgArr = updateFollowing(userManagementClient);
    }

    res.status(200).json(newOrgArr);
  } catch (err) {
    console.log(err);
    res.status(500).json({ statusCode: 500, message: err.message });
  }
});
