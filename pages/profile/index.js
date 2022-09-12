// import clientPromise from '../../lib/mongodb';
import { useEffect, useState } from 'react';
import { useUser } from '@auth0/nextjs-auth0';
import UserProfile from '../../components/Profile/UserProfile';

// Source: https://auth0.github.io/nextjs-auth0/modules/frontend_use_user.html
export default function UserProfilePage({ user_email, orgs }) {
  const { user, error, tmpLoading } = useUser();
  
  if (tmpLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  
  console.log(user);
  
  var orgIDs = {};
  if (!user) {
    // console.log("no: ", user);
    orgIDs = {
      followed: [],
      managed: []
    };
    console.log("no, orgIDs: ", orgIDs);
  } else {
    // console.log("yes: ", user);
    orgIDs = {
      followed: user['https://ucrclubs.com/following'],
      managed: user['https://ucrclubs.com/adminFor']
    };
    console.log("yes, orgIDs: ", orgIDs);
  }
  
  console.log(`/api/user-orgs/` + JSON.stringify(orgIDs));
  
  // var data;
  // var tmp;
  
  // https://nextjs.org/docs/basic-features/data-fetching/client-side#client-side-data-fetching-with-useeffect
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    // setLoading(true)
    // fetch(`/api/user-orgs/${user}`)
    fetch(`/api/user-orgs/` + JSON.stringify(orgIDs))
      // .then((res) => {data = res.json(); tmp = res; console.log(data);})
      // .then((res) => {
      //   console.log("res: ", res);
      //   var followedOrgs = res['followedOrgs'];
      //   var managedOrgs = res['managedOrgs'];
      // })
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])
  
  console.log("data: ", data);
  // console.log("tmp: ", tmp);
  // var followedOrgs = data['followedOrgs'];
  // var managedOrgs = data['managedOrgs'];
  
  // var orgs = res.followedOrgs;
  
  // if (!user_email) {
  //   return (
  //     <div>
  //       No user ID
  //     </div>
  //   )
  // }
  // 
  // if (user && user_email && user.email != user_email) {
  //   return (
  //     <div>
  //       Hello, world!
  //     </div>
  //   )
  // }
  
  return (
    <div className="flex flex-col grow">
      <UserProfile user={user} orgs={orgs} />
    </div>
  );
}

// export async function getServerSideProps({ params }) {
//   const db = (await clientPromise).db(process.env.MONGODB_DB);
// 
//   if (params.user_email) {
//     var user = await db
//       .collection('Users')
//       .find({ user_email: params.user_email })
//       .next();
// 
//     var orgs = [];
// 
//     // TODO Remove hardcoded channel IDs
//     // var org_ids = process.env.TMP_ORG_IDS.split(",");
//     // var org_ids = params.user.org_ids;
//     var org_ids = user.org_ids;
// 
//     for (const org_id of org_ids) {
//       orgs.push(
//         await db
//           .collection('Orgs')
//           .find({ org_id: org_id })
//           .next()
//           // .sort({ recency: -1 })
//       );
//     }
//   }
// 
//   return {
//     props: {
//       user_email: params.user_email,
//       orgs: JSON.parse(JSON.stringify(orgs)),
//     },
//   };
// }
