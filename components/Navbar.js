import Link from "next/link";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <Link href="/">
        <a className="navbar-brand">Home</a>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse " id="navbarNav">
        <ul className="navbar-nav ms-auto ">
          <li className="nav-item">
            <Link href="/github">
              <a className="nav-link text-light">GitHub</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="https://www.linkedin.com/in/erik-mosich/">
              <a className="nav-link text-light" target="blank">Linkedin</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
