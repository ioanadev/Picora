
import './ImageGalleryItem.css';

// Componenta ImageGalleryItem
export const ImageGalleryItem = ({ image, onOpenModal }) => {
  return (
  
    // <li className="gallery-item">
    <div>
     <img
        src={image.webformatURL}
        alt=""
        className="gallery-item-image group"
        onClick={() => onOpenModal(image)}
     />
         {/* <div className='textbox group'>
           <div className='text'> 
             <p>Photo by {image.user}</p>
             <p>Likes: {image.likes}</p>
           </div>
          </div> */}
    </div>
    // </li>

  );
};
