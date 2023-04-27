import './Carousel.css';
import { useState } from 'react';
import arrow from '../../assets/arrowCarousel.svg';

function Carousel(props) {
  const [imageActive, setImageActive] = useState(0);
  const images = props.images;

  return (
    <div className="carousel">
      <img
        onClick={() => handleClickCarouselNav(imageActive)}
        className="carousel__arrow__left"
        src={arrow}
        alt="précédente"
      />

      <img
        className="carousel__picture"
        src={images && images[imageActive]}
        alt="logement"
      />
      <img className="carousel__arrow__right" src={arrow} alt="suivante" />
    </div>
  );
}
export default Carousel;
