import css from '../ImageGalleryItem/ImageGalleryItem.module.css'
import PropTypes from 'prop-types'; 

export function ImageGalleryItem(data) {
  return (
    <li key={data.id} className={css.imageGalleryItem}>
      <img className={css.image}
        src={data.imageUrl}
        alt={data.altText}
        onClick={() => data.onSmallImageClick(data.largeUrl)}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  data: PropTypes.object.isRequired,
};