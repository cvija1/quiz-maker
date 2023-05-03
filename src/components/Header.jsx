import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed navbar-dark bg-dark">
      <div className="container ">
        <Link className="navbar-brand" to={"/"}>
          Quiz maker
        </Link>{" "}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
            <li className="nav-item me-4">
              <Link className="nav-link" aria-current="page" to={"/review"}>
                Pregled kvizova
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to={"/create"}>
                Dodaj kviz
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
