import Post from "./Post";

function Timeline({ posts }) {
  return (
    <ul className="p-4 lg:p-8 bg-gray-100 text-gray-800">
      {posts?.map((post, index) => (
        <li key={index}>
          <Post post={post}/>
        </li>
      ))}
    </ul>
  );
}

export default Timeline;
