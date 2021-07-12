import React from 'react';
import { useState } from 'react';
import { Link, BrowserRouter } from 'react-router-dom';

import styles from './OtherModels.module.scss';

const otherModelList: string[] = ['aaa', 'bbb'];

const OtherModels = () => {
  const [isActive, setIsActive] = useState(false);
  const onClick = () => {
    isActive ? setIsActive(false) : setIsActive(true);
  };

  return (
    <div>
      <a onClick={onClick}>
        <b>Other Models</b>
      </a>
      <div className={!isActive ? styles.is_inactive : ''}>
        <ul>
          <BrowserRouter>
            {otherModelList.map((model: string) => (
              <li>
                <Link to={'/other/' + model} onClick={onClick}>
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

export default OtherModels;
