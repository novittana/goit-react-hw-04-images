import { useState } from 'react';
import css from '../Searchbar/Searchbar.module.css'
import { ImSearch } from 'react-icons/im';
import PropTypes from 'prop-types'; 


export function Searchbar ({onSubmit}) {

  const [query, setQuery] = useState('');
  
  function reset() {
    setQuery('');
  }

  const handleInputChange = ({target}) => {
   setQuery(target.value);
  };

  const handleSubmit = event => {
      event.preventDefault();
      if (query.trim() === "") {
          alert('Please enter a keyword for the query');
          return;
      }
    onSubmit(query);
    reset();
  };

    return (
      <header className={css.searchbar}>
        <form className={css.form} onSubmit={handleSubmit}>
          <button type="submit" className={css.button}>
            <ImSearch/>
            <span className={css.button_label}>Search</span>
          </button>

          <input
            className={css.input}
            type="text"
            name="query"
            value={query}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={handleInputChange}
          />
        </form>
      </header>
    );
  }


Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

