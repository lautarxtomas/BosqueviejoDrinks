import React from "react";
import CartWidget from "./CartWidget";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/"}>
            {" "}
            <img src={logo} alt="" />{" "}
          </Link>

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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to={"/"}>
                  INICIO
                </Link>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  CATÁLOGO
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="nav-link" to={"/category/whisky"}>
                      WHISKY
                    </Link>
                  </li>

                  <li>
                    <Link className="nav-link" to={"/category/vodka"}>
                      VODKA
                    </Link>
                  </li>

                  <li>
                    <Link className="nav-link" to={"/category/licores"}>
                      LICORES
                    </Link>
                  </li>

                  <li>
                    <Link className="nav-link" to={"/category/aperitivos"}>
                      APERITIVOS
                    </Link>
                  </li>

                  <li>
                    <Link className="nav-link" to={"/category/fernet"}>
                      FERNET
                    </Link>
                  </li>

                  <li>
                    <Link className="nav-link" to={"/category/cervezas"}>
                      CERVEZAS
                    </Link>
                  </li>
                </ul>

              </li>

              <li className="nav-item">
                  <Link className="nav-link" to={"/nosotros"}>
                    NOSOTROS
                  </Link>
                </li>
            </ul>
            
          </div>
        </div>

        <Link className="widget" to={"/cart"}>
          <CartWidget />
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
