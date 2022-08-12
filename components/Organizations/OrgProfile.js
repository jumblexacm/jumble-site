import Timeline from '../Timeline/Timeline';
import OrgInfo from './OrgInfo';

function OrgProfile({ posts, orgInfo }) {
  return (
    <div>
      <OrgInfo {...orgInfo} />
      <Timeline posts={posts} />
    </div>
  );
}

export default OrgProfile;
