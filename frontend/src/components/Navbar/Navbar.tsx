import React from 'react';
import 'bulma/css/bulma.min.css';

import NavbarBrand from './NavbarBrand';

const Navbar = () => {
  return (
    <React.Fragment>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <NavbarBrand />
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">Image Classification</a>
              <div className="navbar-dropdown">
                <a className="navbar-item" href="models/human-pose">
                  ic
                </a>
                {/* <hr className="navbar-divider"></hr> */}
              </div>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">Object Detection</a>
              <div className="navbar-dropdown">
                <a className="navbar-item" href="models/human-pose">
                  od
                </a>
                {/* <hr className="navbar-divider"></hr> */}
              </div>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">Other Models</a>
              <div className="navbar-dropdown">
                <a className="navbar-item" href="models/human-pose">
                  Human Pose Detection
                </a>
                {/* <hr className="navbar-divider"></hr> */}
              </div>
            </div>
          </div>
          <div className="navbar-end">
            <div className="buttons">
              <a className="button is-light">Log in</a>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
