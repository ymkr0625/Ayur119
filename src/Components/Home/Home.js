// src/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 

const Home = () => {
  return (
    <div className="home-container">
      <nav>
        <div className="nav-links">
          <Link to="/LoginForm">Login</Link>
          <Link to="/RegistrationForm">Register</Link>
        </div>
      </nav>
    </div>
  );
};

export default Home;
