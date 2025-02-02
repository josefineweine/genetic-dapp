import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <h1>Donor Registry</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/donors">Donors</a></li>
          <li><a href="/profile">Profile</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
