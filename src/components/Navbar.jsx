import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar justify-content-center gap-2 fs-3">
      <Link to="/"> Home </Link> | <Link to="/favoritos"> Favoritos </Link>
    </nav>
  );
};
export default Navbar;
