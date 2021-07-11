import React from 'react';
import ICModels from './ICModels/ICModels';
import ODModels from './ODModels/ODModels';
import OtherModels from './OtherModels/OtherModels';

const ModelsList = () => {
  return (
    <React.Fragment>
      <ICModels />
      <ODModels />
      <OtherModels />
    </React.Fragment>
  );
};

export default ModelsList;
