import { Component } from 'react';
import css from '../Searchbar/Searchbar.module.css'
import { ImSearch } from 'react-icons/im';
import PropTypes from 'prop-types'; 


export class Searchbar extends Component {
  state = {
    query: '',
  };

  reset() {
    this.setState({
      query: '',
    });
  }

  handleInputChange = ({target}) => {
    this.setState({ [target.name]:target.value});
  };

  handleSubmit = event => {
      event.preventDefault();
      if (this.state.query.trim() === "") {
          alert('Please enter a keyword for the query');
          return;
      }
    this.props.onSubmit(this.state.query);
    this.reset();
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.form} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.button}>
            <ImSearch/>
            <span className={css.button_label}>Search</span>
          </button>

          <input
            className={css.input}
            type="text"
            name="query"
            value={this.state.query}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleInputChange}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

