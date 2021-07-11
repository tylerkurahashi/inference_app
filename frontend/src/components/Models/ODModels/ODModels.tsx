import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';

const odModelList: string[] = ['aaa', 'bbb'];

const ODModels = () => {
  const onClick = (e: any) => {
    console.log('Clicked');
  };

  return (
    <div>
      <a onClick={onClick}>
        <b>Object Detection</b>
      </a>
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
  );
};

export default ODModels;
