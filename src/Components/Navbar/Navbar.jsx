import React from 'react';
import { NavLink } from 'react-router-dom';

// styles
import './Navbar.css';

const Navbar = () => {
  return (
    <>
      <div id="navbar">
        <div className="container-fluid nav_bg">
          <div className="logo mr-auto">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <NavLink to="/" className="navbar-brand">
                <h1 className="text-dark">
                  <span>Koddax</span>
                </h1>
              </NavLink>

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

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
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
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
