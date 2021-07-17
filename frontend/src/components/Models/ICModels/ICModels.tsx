import { useState } from 'react';
import { Link } from 'react-router-dom';
import AIModels from '../../../interfaces/AIModels';

import styles from './ICModels.module.scss';

const ICModels = (props: any) => {
  const [isListActive, setIsListActive] = useState(false);
  const onClick = () => {
    isListActive ? setIsListActive(false) : setIsListActive(true);
  };

  const icModelList: string[] | null = !props.models
    ? null
    : props.models.map((element: AIModels) => element.name);

  return (
    <div>
      <a onClick={onClick}>
        <b>Image Classification</b>
      </a>
      <div className={!isListActive ? styles.is_inactive : ''}>
        <ul>
          {icModelList &&
            icModelList.map((model: string) => (
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
