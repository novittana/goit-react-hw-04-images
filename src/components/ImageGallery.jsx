import { Component } from 'react';
import { fetchPhotoByQuery } from '../services/api';
import { Searchbar } from './Searchbar';

export class ImageGallery extends Component {
  state = {
    hits: [],
    isLoading: false,
    error: '',
    page: 1,
    showLoadMore: false,
    query: '',
  };

  handleFormSubmit = query => {
    this.setState({ query });
    };

  async componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query) {
      try {
        const { hits } = await fetchPhotoByQuery(query, page);
        this.setState({ hits });
      } catch (error) {}
    }
  }

  render() {
    const { hits } = this.state;
    return (
        <>
            <Searchbar onSubmit={this.handleFormSubmit} />
        <ul>
          {hits.map(({ id, webformatURL, tags, largeImageURL }) => (
            <li key={id}>
              <img src={webformatURL} alt={tags} />
            </li>
          ))}
        </ul>
      </>
    );
  }
}
