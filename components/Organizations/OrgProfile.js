import Timeline from '../Timeline/Timeline';
import OrgInfo from './OrgInfo';

function OrgProfile({ posts }) {
  const orgData = {
    author_avatar_url: posts[0].author_avatar_url,
    message_author: posts[0].message_author,
  };

  return (
    // This bg-color is a temporary fix to hide the gap between the two components below
    <div className="bg-gray-50">
      <OrgInfo orgData={orgData} />
      <Timeline posts={posts} />
    </div>
  );
}

export default OrgProfile;
