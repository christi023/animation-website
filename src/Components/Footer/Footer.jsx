import React from 'react';
import { NavLink } from 'react-router-dom';

// styles
import './Footer.css';

const Footer = () => {
  return (
    <footer id="footer" className="bg-light text-center">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-3 col-md-6 footer-contact"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h4>Koddax</h4>
              <p>
                Carlsvägen 5
                <br />
                Malmö, Sweden <br />
                <strong>Phone:</strong> +46 876 765616
                <br />
                <strong>Email:</strong> info@example.com
                <br />
              </p>
            </div>
            <div className="col-lg-3 col-md-6 footer-links" data-aos="fade-up" data-aos-delay="200">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className="fas fa-chevron-right"></i> <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <i className="fas fa-chevron-right"></i>
                  <NavLink to="/about">About us</NavLink>
                </li>
                <li>
                  <i className="fas fa-chevron-right"></i> <NavLink to="/service">Services</NavLink>
                </li>
                <li>
                  <i className="fas fa-chevron-right"></i> <NavLink to="/contact">Contact</NavLink>
                </li>
                <li>
                  <i className="fas fa-chevron-right"></i> <NavLink to="/team">Our Team</NavLink>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 footer-links" data-aos="fade-up" data-aos-delay="300">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <i className="fas fa-chevron-right"></i> <NavLink to="/">Web Design</NavLink>
                </li>
                <li>
                  <i className="fas fa-chevron-right"></i> <NavLink to="/">Web Development</NavLink>
                </li>
                <li>
                  <i className="fas fa-chevron-right"></i>
                  <NavLink to="/">Product Management</NavLink>
                </li>
                <li>
                  <i className="fas fa-chevron-right"></i> <NavLink to="/">Marketing</NavLink>
                </li>
                <li>
                  <i className="fas fa-chevron-right"></i> <NavLink to="/">Graphic Design</NavLink>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 footer-links" data-aos="fade-up" data-aos-delay="400">
              <h4>Our Social Networks</h4>
              <p>Please feel free to connect with us</p>
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
      </div>
      <br />

      <p style={{ paddingTop: '10px', fontWeight: 'bold' }}>
        © 2020 Copyright Koddax. All Rights Reserved | Terms and Conditions | Designed by Team
        Koddax
      </p>
    </footer>
  );
};

export default Footer;
