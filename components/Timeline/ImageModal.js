import Image from 'next/image';
import { useState } from 'react';
import Lightbox from './Lightbox/Lightbox';

function ImageModal({ src, alt, width, height, layout }) {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen((curr) => !curr);
  };

  return (
    <div>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        style={{
          cursor: 'pointer',
          maxWidth: '100%',
          maxHeight: '100%',
        }}
        layout={layout}
        objectFit='cover'
        onClick={toggleModal}
      ></Image>
      {modalOpen && (
        <Lightbox
          src={src}
          alt={alt}
          width={width}
          height={height}
          layout={layout}
          onClose={toggleModal}
        ></Lightbox>
      )}
    </div>
  );
}

export default ImageModal;
