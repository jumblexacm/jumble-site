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
      {/* <div>
        <h1 className="text-3xl text-center px-8 py-2  font-semibold">
          Recent Announcements
        </h1>
      </div> */}
      <Timeline posts={posts} />
    </main>
  );
}

export default OrgProfile;
