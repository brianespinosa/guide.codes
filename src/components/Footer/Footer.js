import React from 'react';
import pt from 'prop-types';

const propTypes = {
  children: pt.oneOfType([pt.arrayOf(pt.node), pt.node]),
};

const Footer = ({ children }) => {
  return <div>{children}</div>;
};

Footer.propTypes = propTypes;

export default Footer;
