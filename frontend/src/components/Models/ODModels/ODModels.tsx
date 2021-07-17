import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AIModels from '../../../interfaces/AIModels';

import styles from './ODModels.module.scss';

const odModelList: string[] = ['aaa', 'bbb'];

const ODModels = (props: any) => {
  const [isActive, setIsActive] = useState(false);
  const onClick = (e: any) => {
    e.preventDefault();
    isActive ? setIsActive(false) : setIsActive(true);
  };

  const odModelList: string[] | null = !props.models
    ? null
    : props.models.map((element: AIModels) => element.name);

  return (
    <div>
      <a href="/" onClick={onClick}>
        <b>Object Detection</b>
      </a>
      <div className={!isActive ? styles.is_inactive : ''}>
        <ul>
          {odModelList &&
            odModelList.map((model: string) => (
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
