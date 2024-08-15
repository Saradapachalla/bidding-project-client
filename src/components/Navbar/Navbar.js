import React from 'react';
import PropTypes from 'prop-types';
import { NavbarWrapper } from './Navbar.styled';

Navbar.propTypes = {};

Navbar.defaultProps = {};

const Navbar = () => (
 <NavbarWrapper data-testid="Navbar">
    Navbar Component
 </NavbarWrapper>
);

export default Navbar;
