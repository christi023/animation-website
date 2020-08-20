import React from 'react';
import { NavLink } from 'react-router-dom';
// images
import web from '../images/photo1.jpeg';
import web1 from '../images/photo2.jpeg';
import web2 from '../images/photo3.jpeg';
import web3 from '../images/photo4.jpg';
import web4 from '../images/photo5.jpeg';
import web5 from '../images/photo6.jpeg';

const Service = () => {
  return (
    <>
      <section id="services" className="services section-bg" style={{ paddingTop: '50px' }}>
        <div className="my-5">
          <h1 className="text-center">Our Services</h1>
        </div>
        <div className="container-fluid mb-5 ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row gy-4">
                <div className="col-md-4 col-10 mx-auto">
                  <div className="card">
                    <img src={web} className="card-img-top" alt="" />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                      </p>
                      <NavLink to="/" className="btn btn-primary">
                        Go somewhere
                      </NavLink>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 col-10 mx-auto">
                  <div className="card">
                    <img src={web1} className="card-img-top" alt="" />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                      </p>
                      <NavLink to="/" className="btn btn-primary">
                        Go somewhere
                      </NavLink>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 col-10 mx-auto">
                  <div className="card">
                    <img src={web2} className="card-img-top" alt="" />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                      </p>
                      <NavLink to="/" className="btn btn-primary">
                        Go somewhere
                      </NavLink>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 col-10 mx-auto">
                  <div className="card">
                    <img src={web3} className="card-img-top" alt="" />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                      </p>
                      <NavLink to="/" className="btn btn-primary">
                        Go somewhere
                      </NavLink>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 col-10 mx-auto">
                  <div className="card">
                    <img src={web4} className="card-img-top" alt="" />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                      </p>
                      <NavLink to="/" className="btn btn-primary">
                        Go somewhere
                      </NavLink>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 col-10 mx-auto">
                  <div className="card">
                    <img src={web5} className="card-img-top" alt="" />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                      </p>
                      <NavLink to="/" className="btn btn-primary">
                        Go somewhere
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
