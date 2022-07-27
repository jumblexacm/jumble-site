import styles from './Lightbox.module.css';
import Image from 'next/image';
import LightboxHeader from './LightboxHeader';

function Lightbox({ src, alt, width, height, layout, onClose }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.imageContainer}>
        <div className={styles.imageWrapper}>
          <Image src={src} alt={alt} layout="fill" objectFit="contain"></Image>
        </div>
      </div>
      <LightboxHeader onClose={onClose} src={src}/>
    </div>
  );
}

export default Lightbox;
