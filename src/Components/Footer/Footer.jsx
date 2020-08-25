import React from 'react';
import { NavLink } from 'react-router-dom';

// styles
import './Footer.css';

const Footer = () => {
  return (
    <footer id="footer" className="bg-light text-center">
      <div className="col-lg-3 col-md-6 footer-links" data-aos="fade-up" data-aos-delay="400">
        <h4>Our Social Networks</h4>
        <p>Please feel free to connect with us</p>
        <div className="footer-top">
          <div className="container">
            <div className="social-links mt-3">
              <NavLink to="/" className="twitter">
                <i className="fab fa-twitter"></i>
              </NavLink>
              <NavLink to="/" className="facebook">
                <i className="fab fa-facebook-f"></i>
              </NavLink>
              <NavLink to="/" className="instagram">
                <i className="fab fa-instagram"></i>
              </NavLink>
              <NavLink to="/" className="google-plus">
                <i className="fab fa-google-plus"></i>
              </NavLink>
              <NavLink to="/" className="linkedin">
                <i className="fab fa-linkedin-in"></i>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <p>
        © 2020 Copyright Koddax. All Rights Reserved | Terms and Conditions | Designed by Team
        Koddax
      </p>
    </footer>
  );
};

export default Footer;
