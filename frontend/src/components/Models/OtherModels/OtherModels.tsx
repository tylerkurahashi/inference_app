import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AIModels from '../../../interfaces/AIModels';

import styles from './OtherModels.module.scss';

const otherModelList: string[] = ['aaa', 'bbb'];

const OtherModels = (props: any) => {
  const [isActive, setIsActive] = useState(false);
  const onClick = () => {
    isActive ? setIsActive(false) : setIsActive(true);
  };

  const otherModelList: string[] = !props.models
    ? null
    : props.models.map((element: AIModels) => element.name);

  return (
    <div>
      <a onClick={onClick}>
        <b>Other Models</b>
      </a>
      <div className={!isActive ? styles.is_inactive : ''}>
        <ul>
          {otherModelList &&
            otherModelList.map((model: string) => (
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
