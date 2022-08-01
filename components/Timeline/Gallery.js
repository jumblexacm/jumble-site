import { useState } from 'react';
import ImageModal from './ImageModal';
import styles from './Gallery.module.css';

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
    <div className={styles.galleryContainer}>
      <div className={styles.imageContainer}>
        <div className={styles.imageWrapper}>
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
          className={styles.showMoreBtn}
          onClick={toggleExpand}
        >
          {expanded ? <span>Show less</span> : <span>Show more</span>}
        </button>
      ) : null}
    </div>
  );
}

export default Gallery;
