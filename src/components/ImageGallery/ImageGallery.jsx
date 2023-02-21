import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import css from "../ImageGallery/ImageGallery.module.css"
import PropTypes from 'prop-types'; 

export function ImageGallery(data) {
 
    return (
      <div>
        <ul className={css.imageGallery}>
          {data.hits.map(item => (
            <ImageGalleryItem
              key={item.id}
              imageUrl={item.previewURL}
              largeUrl={item.largeImageURL}
              onSmallImageClick={data.onSmallImageClick}
              altText={item.tags}
            />
          ))}
        </ul>
      </div>
    );
  }


ImageGallery.propTypes = {
  data: PropTypes.object.isRequired
};