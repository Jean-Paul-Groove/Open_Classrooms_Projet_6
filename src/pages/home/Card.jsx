import './Card.css';
import { Link } from 'react-router-dom';

function Card(props) {
  const { isLoading, id, title } = props;

  return isLoading ? (
    <article className="card card__loader"></article>
  ) : (
    <Link className="card__link" to={'/announce/' + id}>
      <article className="card">
        <p className="card__title">{title}</p>
      </article>
    </Link>
  );
}

export default Card;
