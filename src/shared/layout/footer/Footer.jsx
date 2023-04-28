import logod from '../../../assets/LOGO-dark.svg';
import './Footer.css';
function Footer() {
  return (
    <footer className="footer">
      <img src={logod} alt="Logo de Kasa" className="footer__logo" />
      <p className="footer__text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
