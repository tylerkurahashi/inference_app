import React from 'react';
import { useState } from 'react';

import styles from './Sidemenu.module.scss';
import ModelsList from '../Models/Models';
import Button from './Button/Button';

const Sidemenu = () => {
  const [isMenuActive, setIsMenuActive] = useState(true);

  const isMenuDisplayed = (isActive: boolean) => {
    setIsMenuActive(isActive);
  };
  
  return (
    <div className={styles.sideMenu_wrapper}>
      <Button isMenuDisplayed={isMenuDisplayed} />
      <div className={!isMenuActive ? styles.is_inactive : styles.sideMenu}>
        <h2>
          <b>Model List</b>
        </h2>
        <ModelsList />
      </div>
    </div>
  );
};

export default Sidemenu;
