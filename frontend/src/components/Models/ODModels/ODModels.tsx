import React from 'react';
import { useState } from 'react';
import { Link, BrowserRouter } from 'react-router-dom';

import styles from './ODModels.module.scss';

const odModelList: string[] = ['aaa', 'bbb'];

const ODModels = () => {
  const [isActive, setIsActive] = useState(false);
  const onClick = () => {
    isActive ? setIsActive(false) : setIsActive(true);
  };

  return (
    <div>
      <a onClick={onClick}>
        <b>Object Detection</b>
      </a>
      <div className={!isActive ? styles.is_inactive : ''}>
        <ul>
          <BrowserRouter>
            {odModelList.map((model: string) => (
              <li>
                <Link to={'/od/' + model} onClick={onClick}>
                  {model}
                </Link>
              </li>
            ))}
          </BrowserRouter>
        </ul>
      </div>
    </div>
  );
};

export default ODModels;
