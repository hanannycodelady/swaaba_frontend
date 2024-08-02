import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo2.png';
import { FaHome, FaCar, FaInfoCircle, FaUserPlus, FaExchangeAlt } from 'react-icons/fa'; // Import icons from FontAwesome

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="navbar-logo" />
        <h1 className="navbar-title">SWAABA ARALEE</h1>
        <br></br>
        <br></br>
        <p>The Best Automotive</p>
      </div>
      <ul className="navbar-menu">
        <li>
          <Link to="/" className="navbar-link">
            <FaHome />
            <span>Home</span> {/* Text under Home icon */}
          </Link>
        </li>
        <li>
          <Link to="/cars" className="navbar-link">
            <FaCar />
            <span>Car Shop</span> {/* Text under Car Shop icon */}
          </Link>
        </li>
        <li>
          <Link to="/aboutus" className="navbar-link">
            <FaInfoCircle />
            <span>About Us</span> {/* Text under About Us icon */}
          </Link>
        </li>
        <li>
          <Link to="/Login" className="navbar-link">
            <FaUserPlus />
            <span>Login</span> {/* Text under Sign Up icon */}
          </Link>
        </li>
        <li>
          {/* <Link to="/transactions" className="navbar-link">
            <FaExchangeAlt />
            <span>Transactions</span>
          </Link> */}
        </li>
        <li>
          <Link to="/Register" className="navbar-link">
            < FaUserPlus/>
            <span>Register</span> {/* Text under Autoshowcase icon */}
          </Link>
        </li>
        <li>
          <Link to="/categories" className="navbar-link">
            <FaCar />
            <span>Categories</span> {/* Text under Categories icon */}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
