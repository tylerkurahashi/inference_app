import React from 'react';
import useFetch from 'react-fetch-hook';
import AIModels from '../../interfaces/AIModels';

import ICModels from './ICModels/ICModels';
import ODModels from './ODModels/ODModels';
import OtherModels from './OtherModels/OtherModels';

const ModelsList = () => {
  const { isLoading, data } = useFetch('http://localhost:3000/home');
  if (isLoading) {
    console.log(isLoading);
  }

  console.log(data);

  const aimodels: any = data;
  const icmodels: AIModels[] | null = !aimodels
    ? null
    : aimodels.filter((obj: any) => obj.type === 'ic');

  console.log(icmodels);

  return (
    <React.Fragment>
      <ICModels />
      <ODModels />
      <OtherModels />
    </React.Fragment>
  );
};

export default ModelsList;
