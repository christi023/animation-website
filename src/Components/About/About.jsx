import React from 'react';

//Component
import Common from '../Common';
import web from '../../images/about-img.svg';

const About = () => {
  return (
    <>
      <Common name=" Welcome to About  page" imgSrc={web} visit="/contact" btName="Contact Now" />
    </>
  );
};

export default About;
