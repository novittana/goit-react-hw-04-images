import { Component } from 'react';
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
          alert('Введіть ключове слово');
          return;
      }
    this.props.onSubmit(this.state.query);
    this.reset();
  };

  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
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
