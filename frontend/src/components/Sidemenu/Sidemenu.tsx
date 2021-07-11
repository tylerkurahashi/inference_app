import React from 'react';
import { Navigation } from 'react-minimal-side-navigation';

import styles from './Sidemenu.module.scss';
import ICModels from '../Models/ICModels/ICModels';
import ODModels from '../Models/ODModels/ODModels';
import OtherModels from '../Models/OtherModels/OtherModels';

const odModelList: string[] = ['aaa', 'bbb', 'ccc'];
const otherModelList: string[] = ['aaa', 'bbb', 'ccc'];

const Sidemenu = () => {
  return (
    <div className={styles.sideMenu_wrapper}>
      <div className={styles.sideMenu}>
        <h2>
          <b>Model List</b>
        </h2>
        <ICModels />
        <ODModels />
        <OtherModels />
      </div>
    </div>
  );
};

export default Sidemenu;
