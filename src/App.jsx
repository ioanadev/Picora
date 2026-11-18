import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import { Searchbar } from './components/Searchbar/Searchbar';
import { ImageGallery } from './components/ImageGallery/ImageGallery';
import { Button } from './components/ButtonLoadMore/ButtonLoadMore';
import { Loader } from './components/Loader/Loader';
import { Modal } from './components/Modal/Modal';
import './App.css';
import { BASE_URL, API_KEY } from './components/Api/Api';
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
const [totalHits, setTotalHits] = useState(0);
const loaderRef = useRef(null)


  // ##UseEfect pt cereri API######
useEffect(() => {
  const fetchImages = () => {
    const params = {
      page,
      key:API_KEY,
      image_type: searchQuery ? 'all' : imageType,
      per_page: '12',
    }
      if (searchQuery) {
        params.q =searchQuery;
      }
      setLoading(true);
      axios
        .get(BASE_URL, { params })
        .then(response => { 
          setTotalHits(response.data.totalHits);
          if (page===1) {
           setImages(response.data.hits);
           setLoading(false);
          }else {
           setImages(prevImages => [...prevImages, ...response.data.hits]); 
           setLoading(false);
          }
        })
        .catch(error => {
          setError(error.message);
          setLoading(false);
        });
 };
    fetchImages();
}, [searchQuery, page, imageType]);


 // ##UseEfect pt determinarea elementului vizibil cu IntersectionObserver######
  useEffect(() => {
  const element = loaderRef.current;
  if (!element || loading || images.length >= totalHits) {
    return;
  }
  const observer = new IntersectionObserver(
    entries => {
      if (entries[0].isIntersecting) {
        observer.unobserve(element);
        setPage(prevPage => prevPage + 1);
      }
    },
    {
      threshold: 0,
    }
  );
  observer.observe(element);
  return () => {
    observer.disconnect();
  };
 }, [loading, images.length, totalHits]);

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
  const handleTypeClick=(type)=>{
  setImageType(type);
  setPage(1);
 }
  return (
    <>
    <Header/>
    <Main>
      <Searchbar onSubmit={handleSearchSubmit} />
      <Menu 
        imageTypes={["all", "photo", "illustration", "vector"]} 
        onClick ={handleTypeClick}
        activeType={imageType}
      />
      <div className="app">
        {loading && <Loader />}
        {error && <div>Error: {error}</div>}
        <ImageGallery images={images} onOpenModal={handleOpenModal}  />
        {showModal && selectedImage && (<Modal image={selectedImage} onClose={handleCloseModal}  />)}
      </div>
    <div ref={loaderRef}></div>
    </Main>
    </>
  );
};
export default App