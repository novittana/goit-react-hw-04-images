import { Component } from 'react';
import css from '../Modal/Modal.module.css'

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
    console.log("Вмонтовано");
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
    console.log("Видалено");
  }

  handleKeyDown = event => {
    if (event.key === 'Escape') {
      this.props.onCloseClick({ showModal: false });
    }
  };

  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onCloseClick();
    }
  };

  render() {
    return (
      <div className={css.overlay} onClick={this.handleBackdropClick}>
        <div className={css.modal}>
          <img src={this.props.src} alt="" />
        </div>
      </div>
    );
  }
}


