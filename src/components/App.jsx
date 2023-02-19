import { Component } from 'react';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';

export class App extends Component {
  state = {
    query: '',
    hits: null,
    isLoading: false,
    error:null,
  };


  
  render() {
    return (
      <>
        {/* <Searchbar onSubmit={this.handleFormSubmit} /> */}
        <ImageGallery/>
      </>
    );
  }
}
