import { Link } from 'react-router-dom';
import './Header.scss';

type Props = {

}

export const Header = ({}: Props) => {
  return (
    <header>
      <div className="header-content">
        <div className="header-content-left">
          <Link to={"/"}>
            <h2>DE<span>FINE</span></h2>
          </Link>
        </div>
        <div className="header-content-right">
          <Link to="/">Consultancy</Link>
          <Link to="/">Workshops</Link>
          <Link to="/">Projects</Link>
          <Link to="/" className="main-btn contact-btn">Contact Us</Link>
        </div>
      </div>
    </header>
);
}
