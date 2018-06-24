import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css'

class Navbar extends React.Component {

  handleToggle = () => {
    const toggle = document.querySelector('#toggle');
    const menu = document.querySelector('#menu');
    toggle.classList.toggle('active');
    menu.classList.toggle('active');
  }

  render() {
    return (
      <div className="menu-section">
        <div id="toggle" onClick={this.handleToggle}>
          <div className="one"></div>
          <div className="two"></div>
          <div className="three"></div>
        </div>

        <div id="menu">
          <ul>
            <li><a href="http://floustao.com/" target="_blank">Contact</a></li>
            <li><Link to="/">Log out</Link></li>
          </ul>
        </div>
      </div>

    )
  }
}


export default Navbar;
