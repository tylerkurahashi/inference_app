import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './ODModels.module.scss';

const odModelList: string[] = ['aaa', 'bbb'];

const ODModels = () => {
  const [isActive, setIsActive] = useState(false);
  const onClick = (e:any) => {
    e.preventDefault()
    isActive ? setIsActive(false) : setIsActive(true);
  };

  return (
    <div>
      <a href="/" onClick={onClick}>
        <b>Object Detection</b>
      </a>
      <div className={!isActive ? styles.is_inactive : ''}>
        <ul>
          {odModelList.map((model: string) => (
            <li key={model}>
              <Link to={'/od/' + model} onClick={onClick}>
                {model}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ODModels;
