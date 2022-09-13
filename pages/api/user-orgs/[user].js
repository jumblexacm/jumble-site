import clientPromise from '../../../lib/mongodb';

// TODO Rename to users/[orgIDs].js or orgs/[orgIDs].js

export default async function handler(req, res) {
  const db = (await clientPromise).db(process.env.MONGODB_DB);
  
  const orgIDs = JSON.parse(req.query.user);
  
  const followedOrgIDs = orgIDs['followed'];
  const managedOrgIDs = orgIDs['managed'];
  
  const followedOrgs = await db
      .collection('Orgs')
      .find({ org_id: { $in: followedOrgIDs } })
      .toArray();
  
  const managedOrgs = await db
      .collection('Orgs')
      .find({ org_id: { $in: managedOrgIDs } })
      .toArray();
  
  res.status(200).json({
    followedOrgs: followedOrgs,
    managedOrgs: managedOrgs
  });
}
