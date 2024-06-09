import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar justify-content-center gap-2 fs-3">
      <Link to="/desafio-natural-pic/"> Home </Link> | <Link to="/desafio-natural-pic/favoritos"> Favoritos </Link>
    </nav>
  );
};
export default Navbar;
