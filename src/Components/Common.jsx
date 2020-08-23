import React from 'react';
import { NavLink } from 'react-router-dom';

//styles

const Common = (props) => {
  return (
    <>
      <section id="home" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1">
                  <h1>
                    {props.name}
                    <strong className="brand-name"> Koddax</strong>
                  </h1>
                  <h2>We are a team of talented developers making websites </h2>
                  <NavLink to={props.visit} className="btn-get-started scrollto">
                    {props.btName}
                  </NavLink>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 home-img">
                  <img src={props.imgSrc} className="img-fluid animated" alt="About-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
