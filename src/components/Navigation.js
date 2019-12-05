import React from 'react';
import {Link} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';


const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <div>
          {/* <a href="">Home</a> */}
          <Link to='/'>Home</Link>
        </div>
        <div>
          {/* <a href="">About</a> */}
          <Link to='/about'>About</Link>
        </div>
        <div>
          {/* <a href="">Contact</a> */}
          <Link to='/contact'>Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
