import React from 'react';
import pt from 'prop-types';

const propTypes = {
  children: pt.oneOfType([pt.arrayOf(pt.node), pt.node]),
};

const Nav = ({ children }) => {
  return <div>{children}</div>;
};

Nav.propTypes = propTypes;

export default Nav;
