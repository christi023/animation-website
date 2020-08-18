import React from 'react';
import { NavLink } from 'react-router-dom';

// styles
import './Navbar.css';

const Navbar = () => {
  return (
    <>
      <div id="navbar" className="fixed-top">
        <div className="container-fluid d-flex">
          <div className="logo mr-auto">
            <NavLink to="/" className="navbar-brand">
              <h1 className="text-dark">
                <span>Koddax</span>
              </h1>
            </NavLink>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="nav-menu d-none d-lg-block ">
            <ul>
              <li className="nav-item ">
                <NavLink
                  activeClassName="menu_active"
                  exact
                  to="/"
                  aria-current="page"
                  className="nav-link active"
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink activeClassName="menu_active" to="/service" className="nav-link">
                  Services
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink activeClassName="menu_active" to="/about" className="nav-link">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="menu_active" to="/contact" className="nav-link">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
