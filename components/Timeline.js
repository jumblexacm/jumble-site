import Post from './Post';

function Timeline({ posts }) {
  return (
    <ul className="w-full h-full p-4 lg:px-8 lg:py-6 bg-gray-200 text-gray-800 space-y-3">
      {posts?.map((post, index) => (
        <li key={index}>
          <Post post={post} />
        </li>
      ))}
    </ul>
  );
}

export default Timeline;
