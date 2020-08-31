import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
//bootstrap import
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
// component
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Service from './Components/Service';
import Contact from './Components/Contact/Contact';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
      <div className="footer" style={{ paddingTop: '8rem' }}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
