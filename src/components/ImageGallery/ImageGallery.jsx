import './ImageGallery.css';

import {ImageGalleryItem} from '../ImageGalleryItem/ImageGalleryItem';

// Componenta ImageGallery

export const ImageGallery = ({ images, onOpenModal }) => {
  return (
    <ul className="gallery">
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          image={image}
          onOpenModal={onOpenModal}
        />
      ))}
    </ul>
  );
};
