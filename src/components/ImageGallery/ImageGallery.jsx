import './ImageGallery.css';
import Masonry from 'react-masonry-css'
import {ImageGalleryItem} from '../ImageGalleryItem/ImageGalleryItem';

// Componenta ImageGallery

export const ImageGallery = ({ images, onOpenModal }) => {
  const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  400: 1
};
  return (   
<> 
      <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column">
      {images.map(image => (  
        <ImageGalleryItem
          key={image.id}
          image={image}
          onOpenModal={onOpenModal}
        />
      ))}
      </Masonry>
</>
  );
};
