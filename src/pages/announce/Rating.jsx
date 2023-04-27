import './Rating.css';
import star from '../../assets/rating.svg';
import starGray from '../../assets/ratingGray.svg';

function Ratings(props) {
  const rating = props.rating;
  console.log(rating);
  const scale = [1, 2, 3, 4, 5];

  return (
    <div className="ratings__container">
      {scale.map((number) => {
        return rating < number || !rating ? (
          <img key={number} src={starGray} alt="" className="ratings__star" />
        ) : (
          <img key={number} src={star} alt="" className="ratings__star" />
        );
      })}
    </div>
  );
}

export default Ratings;
