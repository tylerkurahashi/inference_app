import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';

const icModelList: string[] = ['aaa', 'bbb'];

const ICModels = () => {
  const onClick = (e: any) => {
    console.log('Clicked');
  };

  return (
    <div>
      <a onClick={onClick}>
        <b>Image Classification</b>
      </a>
      <ul>
        <BrowserRouter>
          {icModelList.map((model: string) => (
            <li>
              <Link to={'/ic/' + model} onClick={onClick}>
                {model}
              </Link>
            </li>
          ))}
        </BrowserRouter>
      </ul>
    </div>
  );
};

export default ICModels;
