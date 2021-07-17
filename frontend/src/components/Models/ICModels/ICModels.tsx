import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './ICModels.module.scss';

const icModelList: string[] = ['aaa', 'bbb'];

const ICModels = () => {
  const [isListActive, setIsListActive] = useState(false);
  const onClick = () => {
    isListActive ? setIsListActive(false) : setIsListActive(true);
  };

  return (
    <div>
      <a onClick={onClick}>
        <b>Image Classification</b>
      </a>
      <div className={!isListActive ? styles.is_inactive : ''}>
        <ul>
          {icModelList.map((model: string) => (
            <li key={model}>
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
