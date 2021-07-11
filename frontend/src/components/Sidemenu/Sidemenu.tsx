import React from 'react';
import { useState } from 'react';

import styles from './Sidemenu.module.scss';
import ICModels from '../Models/ICModels/ICModels';
import ODModels from '../Models/ODModels/ODModels';
import OtherModels from '../Models/OtherModels/OtherModels';
import Button from './Button/Button';

const Sidemenu = () => {
  const [isMenuActive, setIsMenuActive] = useState(true)

  const isMenuDisplayed = (isActive:boolean) => {
    setIsMenuActive(isActive)
  }

  return (
    <div className={styles.sideMenu_wrapper}>
      <Button isMenuDisplayed={isMenuDisplayed} />
      <div className={!isMenuActive ? styles.is_inactive : styles.sideMenu}>
        <h2>
          <b>Model List</b>
        </h2>
        <ICModels  />
        <ODModels  />
        <OtherModels />
      </div>
    </div>
  );
};

export default Sidemenu;
