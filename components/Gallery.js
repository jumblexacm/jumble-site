import Image from "next/image";
import { useState } from "react";

function Gallery(props) {
	const [images, setImages] = useState(props.images);
	const [imagesToShow, setImagesToShow] = useState(5);
	const [expanded, setExpanded] = useState(false);

	const showMore = () => {
		if (imagesToShow === 5) {
			setImagesToShow(20);
			setExpanded(true);
		} else {
			setImagesToShow(5);
			setExpanded(false);
		}
	};

	return (
		<section className='bg-gray-100 grid'>
			<div className='container flex flex-col justify-center p-4 mx-auto'>
				<div className='grid grid-cols-1 gap-4 lg:grid-cols-5 sm:grid-cols-2'>
					{images.slice(0, imagesToShow).map((image, index) => (
						<a
							key={index}
							href={image}
							target='_blank'
							rel='noopener noreferrer'
						>
							<Image
								src={image}
								alt=''
								width={64}
								height={64}
								layout='responsive'
								className='object-cover w-full bg-gray-500 aspect-square'
							/>
						</a>
					))}
				</div>
			</div>
			{images.length > imagesToShow || expanded ? (
				<button
					type='button'
					title='Toggle dropdown'
					className='pb-1 flex justify-center bg-gray-200 hover:bg-gray-300'
					onClick={showMore}
				>
					{expanded ? <span>Show less</span> : <span>Show more</span>}
				</button>
			) : null}
		</section>
	);
}

export default Gallery;
