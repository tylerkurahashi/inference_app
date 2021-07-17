import React from 'react';
import useFetch from 'react-fetch-hook';
import AIModels from '../../interfaces/AIModels';

import ICModels from './ICModels/ICModels';
import ODModels from './ODModels/ODModels';
import OtherModels from './OtherModels/OtherModels';

const ModelsList = () => {
  const { data } = useFetch('http://localhost:3000/home');

  const aimodels: any = data;
  const icmodels: AIModels[] | null = !aimodels
    ? null
    : aimodels.filter((obj: any) => obj.type === 'ic');

  const odmodels: AIModels[] | null = !aimodels
    ? null
    : aimodels.filter((obj: any) => obj.type === 'od');

  const otherModels: AIModels[] | null = !aimodels
    ? null
    : aimodels.filter((obj: any) => obj.type === 'other');

  return (
    <React.Fragment>
      <ICModels models={icmodels} />
      <ODModels models={odmodels} />
      <OtherModels models={otherModels} />
    </React.Fragment>
  );
};

export default ModelsList;
