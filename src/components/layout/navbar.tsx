import { NavLink, Link } from "react-router-dom";
import "./navbar.scss";

function Navbar() {
  return (
    <header className="container">
      <nav>
        <Link to="/" className={"path path__title"}>
          Books! Books! Books!
        </Link>
        <section className="pathSection">
          <NavLink to="/" className={"path"}>
            Current Books
          </NavLink>
          <NavLink to="/list" className={"path"}>
            Future Books
          </NavLink>
          <NavLink to="/list" className={"path"}>
            Past Books
          </NavLink>
          <NavLink to="/add" className={"path"}>
            Add Book
          </NavLink>
        </section>
      </nav>
    </header>
  );
}

export default Navbar;
