import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/banner.css';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1 id="home-title">Welcome to SelectArt</h1>
        <div className="banner">
          <Link to="/dashboard" className="banner-button">Explore</Link>
          <img className="banner-image" src="https://res.cloudinary.com/floustao/image/upload/v1529876056/seeedr2_kkk8sl.jpg" alt=""/>
        </div>
        <h2 className="tagline">A bright creative workspace can make employees more productive, lower stress and increase wellbeing</h2>
      </div>
    )
  }
}

export default Home;
