import React from 'react';
import { useState } from 'react';
import { Link, BrowserRouter } from 'react-router-dom';

import styles from './ICModels.module.scss';

const icModelList: string[] = ['aaa', 'bbb'];

const ICModels = () => {
  const [isActive, setIsActive] = useState(false);
  const onClick = () => {
    isActive ? setIsActive(false) : setIsActive(true);
  };

  return (
    <div>
      <a onClick={onClick}>
        <b>Image Classification</b>
      </a>
      <div className={!isActive ? styles.is_inactive : ''}>
        <ul>
          {icModelList.map((model: string) => (
            <li>
              <Link to={'/ic/' + model} onClick={onClick}>
                {model}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ICModels;
