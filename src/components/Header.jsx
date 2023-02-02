import panier from "../assets/images/panier.png";
import logo from "../assets/images/logo.png";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="header-nav">
        <img src={logo} className="header-logo" alt="logo rat" />
        <ul>
          <li>
            <Link className="header-link" to="/">
              HOME
            </Link>
          </li>
          <li>
            <Link className="header-link" to="/catalogue">
              CATALOGUE
            </Link>
          </li>
        </ul>
        <div>
          <Link className="header-link" to="/panier">
            <img src={panier} className="header-panier" alt="panier achat" />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
