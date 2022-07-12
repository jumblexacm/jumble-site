import Image from "next/image";
import Gallery from "./Gallery";

function Post({ post }) {
	const text = post.msg
		.split("\n")
		.map((str, index) => (str ? <p key={index}>{str}</p> : <br />));

	const oldText = (
		<article>
			<a
				rel='noopener noreferrer'
				href='#'
				className='grid p-4 overflow-hidden md:grid-cols-5 rounded-xl lg:p-6 xl:grid-cols-12 hover:bg-gray-50'
			>
				<h3 className='mb-1 ml-8 font-semibold md:col-start-2 md:col-span-4 md:ml-0 xl:col-start-3 xl:col-span-9'>
					{post.orgName}
				</h3>
				<time
					dateTime=''
					className='row-start-1 mb-1 md:col-start-1 xl:col-span-2 text-gray-600'
				>
					{post.date}
				</time>
				<div className='ml-8 md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 md:ml-0 text-gray-700'>
					{text}
				</div>
			</a>
		</article>
	);

	const newText = (
		<div className='container flex flex-col w-full  p-6 mx-auto divide-y rounded-md divide-gray-300 bg-gray-50 text-gray-800'>
			<div className='flex justify-between p-4'>
				<div className='flex space-x-4'>
					<div>
						<Image
							src={post.orgPic}
							alt={post.orgName}
							width={64}
							height={64}
							className='object-cover w-12 h-12 rounded-full bg-gray-500'
						/>
					</div>
					<div>
						<h4 className='text-xl font-bold'>{post.orgName}</h4>
						<div className='mt-2 text-lg text-gray-600'>
							{post.date}
						</div>
					</div>
				</div>
			</div>
			<div className='p-4 space-y-2 text-sm text-gray-600'>{text}</div>
			{post.msgAtch ? <Gallery images={post.msgAtch} /> : null}
		</div>
	);

	return newText;
}

export default Post;
