import { Link, NavLink } from "react-router-dom";

function Navbar(props) {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark"
      id="navbarToggleExternalContent"
    >
      <div className="container-fluid">
        <Link className="navbar-brand nAvbar" to="/">
          Chem Lab
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarToggleExternalContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/singup"
              >
                Novo Usuário
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                to={`/${props.user}/solucoes`}
              >
                Soluções
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                to={`/${props.user}/create`}
              >
                Nova Solução
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                to={`/${props.user}/calculadora`}
              >
                Calculadora
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
