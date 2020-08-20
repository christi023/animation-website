import React from 'react';
// components
import Card from './Card';
import CardDetails from './CardDetails';

const Service = () => {
  return (
    <>
      <section id="services" className="services section-bg">
        <div className="my-5">
          <h1 className="text-center" style={{ paddingTop: '50px' }}>
            Our Services
          </h1>
        </div>
        <div className="container-fluid mb-5 ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row gy-4">
                {CardDetails.map((val, i) => {
                  return <Card key={i} imgSrc={val.imgSrc} title={val.title} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
