import React from 'react';
//import { NavLink } from 'react-router-dom';
import web from '../../images/hero-img.svg';
import Common from '../Common';
// style
import './Home.css';

const Home = () => {
  return (
    <>
      <Common
        name="A much better digital experience with"
        imgSrc={web}
        visit="/service"
        btName="Get Started"
      />
    </>
  );
};

export default Home;
