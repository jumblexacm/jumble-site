// import clientPromise from '../../lib/mongodb';

// export default function handler(req, res) {
export async function handler(req, res) {
  console.log("I'm here");
  
  const db = (await clientPromise).db(process.env.MONGODB_DB);
  
  // var mongoClient = require('mongodb').MongoClient;
  // var db = mongoClient.connect(process.env.MONGODB_DB)
  //   .then(function (db) {
  //     console.log(db)
  //   })
  //   .catch(function (err) {});
  
  var followedOrgs = [];
  var managedOrgs = [];
  
  console.log("req.query: ", req.query);
  const orgIDs = JSON.parse(req.query.user);
  console.log("orgIDs: ", orgIDs);
  
  const followedOrgIDs = orgIDs['followed'];
  const managedOrgIDs = orgIDs['managed'];
  
  console.log("1, ", followedOrgIDs);
  console.log("2, ", managedOrgIDs);
  
  // // for (var orgID: followedOrgIDs) {
  followedOrgIDs.forEach(function (orgID, index) {
    followedOrgs.push(
      await db
        .collection('Orgs')
        .find({ org_id: orgID })
        .next()
        // .sort({ recency: -1 })
    );
  });
  // // }
  // 
  // // for (var orgID: managedOrgIDs) {
  // managedOrgIDs.forEach(function (orgID, index) {
  //   managedOrgs.push(
  //     db.collection('Orgs')
  //       .find({ org_id: orgID })
  //       .next()
  //       // .sort({ recency: -1 })
  //   );
  // });
  // // }
  
  console.log("followedOrgs: ", followedOrgs);
  
  res.status(200).json({
    followedOrgs: JSON.parse(JSON.stringify(followedOrgs)),
    managedOrgs: JSON.parse(JSON.stringify(managedOrgs))
  });
  
  // // TODO Remove hardcoded channel IDs
  // // var org_ids = process.env.TMP_ORG_IDS.split(",");
  // // var org_ids = params.user.org_ids;
}
