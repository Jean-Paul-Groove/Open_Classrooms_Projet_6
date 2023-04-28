import logo from '../../../assets/LOGO.svg';
import Navigation from './navigation/Navigation';
import './Header.css';
function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo de Kasa" className="header__logo" />
      <Navigation />
    </header>
  );
}
export default Header;
