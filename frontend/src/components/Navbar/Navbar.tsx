import React from 'react';
import 'bulma/css/bulma.min.css';

import NavbarBrand from './NavbarBrand';

const Navbar = () => {
  return (
    <React.Fragment>
      <nav
        className="navbar is-dark" role="navigation"
        aria-label="main navigation"
      >
        <NavbarBrand />
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
