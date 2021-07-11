import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';

const otherModelList: string[] = ['aaa', 'bbb'];

const OtherModels = () => {
  const onClick = (e: any) => {
    console.log('Clicked');
  };

  return (
    <div>
      <a onClick={onClick}>
        <b>Other Models</b>
      </a>
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
  );
};

export default OtherModels;
