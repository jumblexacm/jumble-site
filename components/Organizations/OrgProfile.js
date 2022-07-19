import Timeline from '../Timeline';
import OrgInfo from './OrgInfo';

function OrgProfile({ posts }) {
  const orgData = {
    author_avatar_url: posts[0].author_avatar_url,
    message_author: posts[0].message_author,
  };

  //console.log(orgData);

  return (
    <main className="divide-y">
      <OrgInfo orgData={orgData} />
      <Timeline posts={posts} />
    </main>
  );
}

export default OrgProfile;
