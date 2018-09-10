import React from 'react';
import { Link } from 'react-router-dom';
import { css, withStyles } from '../styles/withStyles';

const TopNav = ({ styles }) => {
  return (
    <nav>
      <ul {...css(styles.nav)}>
        <li {...css(styles.homeLink)}>
          <Link to="/">Home!</Link>
        </li>
        <li {...css(styles.aboutLink)}>
          <Link to="/about">About!</Link>
        </li>
      </ul>
    </nav>
  );
};

export default withStyles(({ color }) => {
  return {
    nav: {
      margin: 0,
      padding: 0,
    },
    homeLink: {
      backgroundColor: 'red',
      listStyle: 'none',
    },
    aboutLink: {
      backgroundColor: 'yellowgreen',
      listStyle: 'none',
    },
  };
})(TopNav);
