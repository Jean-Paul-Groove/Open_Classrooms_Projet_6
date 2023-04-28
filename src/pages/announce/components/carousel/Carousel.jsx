import './Carousel.css';
import { useState } from 'react';
import arrow from '../../../../assets/arrowCarousel.svg';

function Carousel(props) {
  const [imageActive, setImageActive] = useState(0);
  const images = props.images;

  function handleClickNavCarousel(imageActive, button) {
    if (imageActive === 0 && button < 0) {
      setImageActive(images.length - 1);
    } else if (imageActive === images.length - 1 && button > 0) {
      setImageActive(0);
    } else {
      setImageActive(imageActive + button);
    }
  }

  return (
    <div className="carousel">
      <img
        className={`carousel__arrow__left ${
          images && images.length < 2 && 'carousel__navigation__hidden'
        }`}
        src={arrow}
        alt="précédente"
        onClick={() => handleClickNavCarousel(imageActive, -1)}
      />

      <img
        className="carousel__picture"
        src={images && images[imageActive]}
        alt="logement"
      />
      <p
        className={`carousel__picture__count ${
          images && images.length < 2 && 'carousel__navigation__hidden'
        }`}
      >{`${imageActive + 1}/${images.length}`}</p>
      <img
        className={`carousel__arrow__right ${
          images && images.length < 2 && 'carousel__navigation__hidden'
        }`}
        src={arrow}
        alt="suivante"
        onClick={() => handleClickNavCarousel(imageActive, +1)}
      />
    </div>
  );
}
export default Carousel;
