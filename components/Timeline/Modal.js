import styles from './Modal.module.css';
import Image from 'next/image';

function Modal({ image, toggleModal }) {
  return (
    <div className={styles.overlay} onClick={toggleModal}>
      <div className={styles.modalContainer}>
        <button className="absolute top-1 right-1" onClick={toggleModal}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="flex-shrink-0 w-6 h-6 fill-white hover:fill-gray-500"
          >
            <polygon points="427.314 107.313 404.686 84.687 256 233.373 107.314 84.687 84.686 107.313 233.373 256 84.686 404.687 107.314 427.313 256 278.627 404.686 427.313 427.314 404.687 278.627 256 427.314 107.313"></polygon>
          </svg>
        </button>
        <div className={styles.imageWrapper}>
          <Image src={image} alt="" layout="fill" objectFit="contain"></Image>
        </div>
      </div>
    </div>
  );
}

export default Modal;
