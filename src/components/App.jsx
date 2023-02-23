import { useState, useEffect } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { fetchPhotoByQuery } from '../services/api';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { NotificationMessage } from './NotificationMessage/NotificationMessage';
import css from './App.module.css';

export function App () {
  const [query, setQuery] = useState('');
  const [hits, setHits] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [showLoadMore, setShowLoadMore] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState(null);

  useEffect(() => {
    if (!query) return;
    const getHits = async () => {
      setIsLoading(true);
      try {
        const { hits, totalHits } = await fetchPhotoByQuery(query, page);
        if (hits.length === 0) {
          alert('No data found');
        }
        setHits(prevHits => [...prevHits, ...hits]);
        setShowLoadMore(page < Math.ceil(totalHits / 12));
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getHits();
  }, [page, query]);

  const onSubmit = query => {
    setHits([]);
    setQuery(query);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleSmallImageClick = imgUrl => {
    setLargeImageURL(imgUrl);
    setShowModal(true);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div tabIndex={0} className={css.app}>
      <Searchbar onSubmit={onSubmit} />

      {hits.length === 0 && (
        <NotificationMessage>No data to display</NotificationMessage>
      )}
      {hits && (
        <ImageGallery hits={hits} onSmallImageClick={handleSmallImageClick} />
      )}
      {showLoadMore && <Button handleLoadMore={handleLoadMore} />}
      {isLoading && <Loader />}
      {showModal && <Modal src={largeImageURL} onCloseClick={toggleModal} />}
      {error && <p>Error{error}</p>}
    </div>
  );
}
