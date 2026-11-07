import axios from 'axios';
import { useEffect, useState } from 'react';
import { Searchbar } from './components/Searchbar/Searchbar';
import { ImageGallery } from './components/ImageGallery/ImageGallery';
import { Button } from './components/ButtonLoadMore/ButtonLoadMore';
import { Loader } from './components/Loader/Loader';
import { Modal } from './components/Modal/Modal';
import './App.css';
// import { API_KEY, BASE_URL } from '../gitignore';
import { API_KEY, BASE_URL } from './components/Api/Api';
import { Header } from './components/Header/Header';
import { Menu } from './components/Menu/Menu';
import { Main } from './components/Main/Main';

export const App = () => {
  const [images, setImages] = useState([]);
  const [imageType, setImageType] = useState('all')
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchImages = () => {
      const params = {
        page,
        key:API_KEY,
        image_type:imageType,
        // orientation: 'horizontal',
        per_page: '12',
      }
      if (searchQuery) {
        params.q =searchQuery;
      }
      // const url =(BASE_URL, { params })
      // `${BASE_URL}?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
//  console.log("URL: ", url)
      setLoading(true);
      axios
        // .get(url)
        .get(BASE_URL, { params })
        .then(response => {
          if (page===1) {
          setImages(response.data.hits)
          setLoading(false);
          }else {
          setImages(prevImages => [...prevImages, ...response.data.hits]); 
          setLoading(false);
          }
          
          // setImages(prevImages => [...prevImages, ...response.data.hits]);  // data.hits
          // setLoading(false);
          console.log("Response:", response.data.hits)
        })
        .catch(error => {
          setError(error.message);
          setLoading(false);
        });
      
    };

    fetchImages();
  }, [searchQuery, page, imageType]);

  const handleSearchSubmit = searchQuery => {
    setSearchQuery(searchQuery);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleOpenModal = image => {
    setShowModal(true);
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

//  console.log(images);
  return (
    <>
    <Header/>
    <Main>
      <Searchbar onSubmit={handleSearchSubmit} />
      <Menu types={["all", "photo", "illustration", "vector"]} />
      <div className="app">
       {loading && <Loader />}
       {error && <div>Error: {error}</div>}
       <ImageGallery images={images} onOpenModal={handleOpenModal}  />
       {images.length > 0 && <Button onClick={handleLoadMore} />}
       {showModal && selectedImage && (<Modal image={selectedImage} onClose={handleCloseModal}  />)}
      </div>
    </Main>
    
    </>
  );
};
export default App