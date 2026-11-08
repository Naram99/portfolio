import { Link } from "react-router";

type AllowedPage = "Home" | "Projects" | "About" | "Components";

function NavBar({ activePage }: { activePage: AllowedPage }) {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" className={activePage === "Home" ? "active" : ""}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className={activePage === "Projects" ? "active" : ""}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link to="/about" className={activePage === "About" ? "active" : ""}>
            About
          </Link>
        </li>
        <li>
          <Link
            to="/components"
            className={activePage === "Components" ? "active" : ""}
          >
            Components
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
