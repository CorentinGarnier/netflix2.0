import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


function Header () {
  const favorites = useSelector((state) => state.favorites);
  return (
    <header className="text-center">
      <h1 className="">Netflix 2.0</h1>
      <nav className="">
        <Link className="me-2 fs-5" to="/">
          Home
        </Link>
        <Link className="fs-5" to="/favorites">
          {`Favorites (${favorites.length})`}
        </Link>
      </nav>
    </header>
  );
}

Header.defaultProps = {
  favorites: [],
};

export default Header;