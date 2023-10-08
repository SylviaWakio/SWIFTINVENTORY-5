import React from 'react';
import { Link } from 'react-router-dom';

const Swift = () => {
  const containerStyle = {
    background: 'linear-gradient(to right, #00a859, #007849)',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
  };

  const titleStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '20px',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1.2rem',
    padding: '8px 16px',
    background: '#00a859',
    borderRadius: '4px',
    margin: '0 10px',
  };

  return (
    <div>
      <nav style={containerStyle}>
        <ul className="flex justify-center space-x-4">
          <li>
            <Link to="/" style={linkStyle}>
              Logout
            </Link>
          </li>
          <li>
            <Link to="/users" style={linkStyle}>
              Users
            </Link>
          </li>
          <li>
            <Link to="/dashboard" style={linkStyle}>
              Dashboard
            </Link>
          </li>
        </ul>
      </nav>
      <div className="container mx-auto max-w-sm">
        <h1 style={titleStyle}>Welcome to Swift Store</h1>
        <p>
          This is the Swift Store page. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Vivamus vehicula ligula at massa
          auctor, eu fermentum nisl faucibus.
        </p>
      </div>
    </div>
  );
};

export default Swift;
