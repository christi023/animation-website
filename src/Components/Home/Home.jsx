import React from 'react';
import { Link } from 'react-router-dom';
import web from '../../images/hero-img.svg';

// style
import './Home.css';

const Home = () => {
  return (
    <>
      <section id="home" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1">
              <h1>
                Grow your business with <strong className="brand-name">Animation-Pg </strong>
              </h1>
              <h2 className="my-3"> We are a team of talented developers making websites </h2>
              <div className="mt-3">
                <Link to="" className="btn-get-started scrollto">
                  Get Started
                </Link>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 header-img">
              <img src={web} className="img-fluid animated" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
