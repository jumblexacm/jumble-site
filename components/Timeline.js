import Post from "./Post";

function Timeline({ posts }) {
	return (
		<ul className='p-4 lg:p-8 bg-gray-200 text-gray-800 space-y-3'>
			{posts?.map((post, index) => (
				<li key={index}>
					<Post post={post} />
				</li>
			))}
		</ul>
	);
}

export default Timeline;
