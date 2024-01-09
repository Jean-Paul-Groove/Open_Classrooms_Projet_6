import './Card.css';
import { Link } from 'react-router-dom';

function Card(props) {
  const { isLoading, id, title, cover } = props;

  return isLoading ? (
    <article className="card card__loader"></article>
  ) : (
    <Link className="card__link" to={'/announce/' + id}>
      <figure className="card">
        <img src={cover} alt={title} className="card__cover" />
        <figcaption className="card__title">{title}</figcaption>
      </figure>
    </Link>
  );
}

export default Card;
