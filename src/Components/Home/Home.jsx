import React from 'react';
import { NavLink } from 'react-router-dom';
import web from '../../images/hero-img.svg';

// style
import './Home.css';

const Home = () => {
  return (
    <>
      <section id="home" className="d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1">
                  <h1>
                    A much better digital experience with
                    <strong className="brand-name"> Koddax</strong>
                  </h1>
                  <h2>We are a team of talented developers making websites </h2>
                  <NavLink to="/service" className="btn-get-started scrollto">
                    Get Started
                  </NavLink>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 home-img">
                  <img src={web} className="img-fluid animated" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
