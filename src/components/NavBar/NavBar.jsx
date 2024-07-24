import logo from "../../assets/images/logo.svg";
import "./navBar.scss";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {

  return (
    <nav className="nav">
      <Link to="/"><img src={logo} alt="logo Kasa" /></Link>
      <ul>
        <NavLink className={({ isActive }) => (isActive  ? "liNavActive" : "liNav")} to="/">
          Accueil
        </NavLink>
        <NavLink className={({ isActive }) => (isActive  ? "liNavActive" : "liNav")} to="/about">
          À propos
        </NavLink>
      </ul>
    </nav>
  );
};

export default NavBar;
