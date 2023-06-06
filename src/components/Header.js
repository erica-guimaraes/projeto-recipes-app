import React from 'react';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header() {
  return (
    <div>
      <h1 data-testid="page-title">Título</h1>
      <img data-testid="profile-top-btn" src={ profileIcon } alt="profile-icon" />
      <img data-testid="search-top-btn" src={ searchIcon } alt="search-icon" />
    </div>
  );
}

export default Header;
