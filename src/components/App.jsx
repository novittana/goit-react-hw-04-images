import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { fetchPhotoByQuery } from '../services/api';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { NotificationMessage } from './NotificationMessage/NotificationMessage';
import css from './App.module.css';

export class App extends Component {
  state = {
    query: '',
    hits: [],
    page: 1,
    isLoading: false,
    error: '',
    showLoadMore: false,
    showModal: false,
    largeImageURL: null,
  };

  handleFormSubmit = query => {
    this.setState({
      hits: [],
      query,
      page: 1,
    });
  };

  getLargeImage = largeImageURL => {
    this.setState({ largeImageURL });
  };

  async componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.setState({ isLoading: true });
      try {
        const { hits, totalHits } = await fetchPhotoByQuery(query, page);
        this.setState(prevState => ({
          hits: [...prevState.hits, ...hits],
          showLoadMore: page < Math.ceil(totalHits / 12),
        }));
      } catch (error) {
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  handleSmallImageClick = imgUrl => {
    this.setState({ largeImageURL: imgUrl, showModal: true });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { hits, showLoadMore, isLoading, showModal, largeImageURL } =
      this.state;

    return (
      <div tabIndex={0} className={css.app}>
        <Searchbar onSubmit={this.handleFormSubmit} />

        {hits.length === 0 && (
          <NotificationMessage>No data to display</NotificationMessage>
        )}
        {hits && (
          <ImageGallery
            hits={hits}
            onSmallImageClick={this.handleSmallImageClick.bind(this)}
          />
        )}
        {showLoadMore && <Button handleLoadMore={this.handleLoadMore} />}
        {isLoading && <Loader />}
        {showModal && (
          <Modal
            src={largeImageURL}
            onCloseClick={this.toggleModal.bind(this)}
          />
        )}
      </div>
    );
  }
}
