import { useState } from "react";

type Pages = "Home" | "Projects" | "About";

function NavBar() {
  const [activePage, setActivePage] = useState<Pages>("Home");

  return (
    <nav>
      <ul>
        <li>
          <a
            href="/"
            className={activePage === "Home" ? "active" : ""}
            onClick={() => setActivePage("Home")}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/projects"
            className={activePage === "Projects" ? "active" : ""}
            onClick={() => setActivePage("Projects")}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="/about"
            className={activePage === "About" ? "active" : ""}
            onClick={() => setActivePage("About")}
          >
            About
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
