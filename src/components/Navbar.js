import React from 'react';
import { Link } from 'react-router-dom';
import { doLogin, doRegister, doLogout } from '../keycloak';
import './Navbar.css';

const Navbar = ({ isLoggedIn }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>MySaaS</h1>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Overview</Link></li>
        <li><Link to="/contents">Contents</Link></li>
        <li><Link to="/pricing">Pricing</Link></li>
        <li><Link to="/about">About Us</Link></li>
      </ul>
      <div className="navbar-button">
        {isLoggedIn ? (
          <>
            <Link to="/dashboard" className="btn btn-primary">Dashboard</Link>
            <button onClick={doLogout} className="btn btn-secondary">Logout</button>
          </>
        ) : (
          <>
            <button onClick={doLogin} className="btn btn-primary">Login</button>
            <button onClick={doRegister} className="btn btn-secondary">Register</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;