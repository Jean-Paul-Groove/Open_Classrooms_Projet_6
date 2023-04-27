import './NotFound.css';
import { Link } from 'react-router-dom';
function NotFound() {
  return (
    <div className="not-found">
      <p className="not-found__announcement">
        <span className="not-found__error-code">404</span>
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link className="not-found__home-link" to="/">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}

export default NotFound;
