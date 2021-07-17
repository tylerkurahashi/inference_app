import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

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
          {otherModelList.map((model: string) => (
            <li key={model}>
              <Link to={'/other/' + model} onClick={onClick}>
                {model}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OtherModels;
