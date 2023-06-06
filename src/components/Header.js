import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header(props) {
  const { title } = props;
  const [disbleInput, setDisableInput] = React.useState(true);
  return (
    <div>
      <h1 data-testid="page-title">{title}</h1>
      <Link to="/profile">
        <img data-testid="profile-top-btn" src={ profileIcon } alt="profile-icon" />
      </Link>
      {title !== 'Profile' && title !== 'Done Recipes' && title !== 'Favorite Recipes'
      && (
        <button
          type="button"
          onClick={ () => setDisableInput(!disbleInput) }
        >
          <img
            data-testid="search-top-btn"
            src={ searchIcon }
            alt="search-icon"
          />
        </button>
      )}
      { !disbleInput
      && (<input
        type="text"
        data-testid="search-input"
      />)}
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
