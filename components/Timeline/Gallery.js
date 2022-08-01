import { useState } from 'react';
import ImageModal from './ImageModal';

function Gallery({ images }) {
  const [imagesToShow, setImagesToShow] = useState(5);
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    if (imagesToShow === 5) {
      setImagesToShow(Object.keys(images).length);
      setExpanded(true);
    } else {
      setImagesToShow(5);
      setExpanded(false);
    }
  };

  return (
    <section className="bg-gray-100 grid">
      <div className="container flex flex-col justify-center p-4 mx-auto">
        <div className="grid flex gap-4 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-5">
          {images.slice(0, imagesToShow).map((image, index) => (
            <ImageModal
              key={index}
              src={image}
              alt={''}
              width={'100%'}
              height={'100%'}
              layout={'responsive'}
              objectFit={'cover'}
            />
          ))}
        </div>
      </div>
      {images.length > imagesToShow || expanded ? (
        <button
          type="button"
          className="pb-1 flex justify-center bg-gray-200 hover:bg-gray-300"
          onClick={toggleExpand}
        >
          {expanded ? <span>Show less</span> : <span>Show more</span>}
        </button>
      ) : null}
    </section>
  );
}

export default Gallery;
