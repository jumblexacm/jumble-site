import { useState } from 'react';
import ImageModal from './ImageModal';
import Link from 'next/link';
import styles from './Gallery.module.css';

// Source: https://bobbyhadz.com/blog/javascript-check-if-url-is-image#:~:text=To%20check%20if%20a%20url,return%20true%20if%20it%20does.
function isImage(url) {
  return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
}

function Gallery({ attachments }) {
  const [attachmentsToShow, setAttachmentsToShow] = useState(5);
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    if (attachmentsToShow === 5) {
      setAttachmentsToShow(Object.keys(attachments).length);
      setExpanded(true);
    } else {
      setAttachmentsToShow(5);
      setExpanded(false);
    }
  };
  
  let nonImages = [];
  let images = [];
  for (const url of attachments) {
    if (!isImage(url)) {
      nonImages.push(url);
    } else {
      images.push(url);
    }
  }

  return (
    <div className={styles.galleryContainer}>
      <div className={styles.imageContainer}>
        <div className={styles.nonImageWrapper}>
          {nonImages.slice(
            0, Math.min(attachmentsToShow, nonImages.length)
          ).map((nonImage, index) => (
              <a className={"hover:text-blue-600"} href={nonImage} key={index}>
                {nonImage.substring(nonImage.lastIndexOf('/') + 1)}
              </a>
          ))}
        </div>
        <div className={styles.imageWrapper}>
          {images.slice(
            0, Math.max(0, attachmentsToShow - nonImages.length)
          ).map((image, index) => (
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
      {attachments.length > attachmentsToShow || expanded ? (
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
