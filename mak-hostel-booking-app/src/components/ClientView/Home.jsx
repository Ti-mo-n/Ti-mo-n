import React from 'react';
import { Link } from 'react-router-dom';
import image1 from './images/background.jpg';
import './home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="background-image">
        <img src={image1} alt="" className="full-screen-image" />
        <div className="image-overlay">
          <div className="content-container">
            <h1 className="title">Book a Hostel</h1>
            <p className="slogan">
              The easiest and quickest way to book a hostel that's best for you at Makerere University
            </p>
            <Link to="/hostels">
              <button className="explore-btn">Explore</button>
            </Link>
            <div className="auth-links">
              <Link to="/CreateAccount2" className="auth-link">
                Sign Up
              </Link>
              <div className="vertical-line"></div>
              <Link to="/Login" className="auth-link">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
