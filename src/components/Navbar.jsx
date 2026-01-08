import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
         MisContactos
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

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active fw-semibold" : "")
                }
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/demo"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active fw-semibold" : "")
                }
              >
                Demo
              </NavLink>
            </li>

            <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
              <NavLink
                to="/add"
                className="btn btn-outline-light"
              >
                Añadir Contacto
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};