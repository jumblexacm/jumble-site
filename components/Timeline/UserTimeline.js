import Timeline from './Timeline';

export default function UserTimeline({ posts, following }) {
  return (
    <div className="flex grow">
      {posts.length ? (
        <Timeline posts={posts} />
      ) : (
        <div className="flex flex-col grow justify-center items-center">
          <p className="text-center text-lg">
            Follow orgs to see their posts here!
          </p>
        </div>
      )}
    </div>
  );
}
