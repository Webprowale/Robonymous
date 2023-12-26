import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand heText  fs-2 fw-bold" to="/">
          <span className="fs-2">🧸</span>Robonymous
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
          <FontAwesomeIcon icon={faBars} size="2xl" color="white" />
        </button>
        <div className="collapse navbar-collapse  justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0 fw-semibold me-md-5">
            <li className="nav-item ps-md-3">
              <Link className="nav-link heText" aria-current="page" to="/">
                HOME
              </Link>
            </li>
            <li className="nav-item ps-md-3">
              <Link className="nav-link heText" to="/download">
                DOWNLOAD
              </Link>
            </li>
            <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle heText" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            GET STARTED
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item fText fw-bold"  to='/login'>Login</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item fText fw-bold" to='/register' >Register</Link></li>
          </ul>
        </li>
            <li className="nav-item ps-md-3">
              <Link className="nav-link heText" to="/">
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
