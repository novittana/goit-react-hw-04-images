import { Component } from 'react';
import css from '../Modal/Modal.module.css'

export class Modal extends Component {
  render() {
    return (
      <div className={css.overlay} onClick={this.props.onCloseClick}>
        <div className={css.modal}>
          <img src={this.props.src} alt="" />
        </div>
      </div>
    );
  }
}
