import * as React from 'react';
import TourComponent from './tour';
import steps from './steps';
import { TourProvider } from '@reactour/tour';

const TourDemo01 = () => {
  return (
    <TourProvider steps={steps} scrollSmooth >
      <TourComponent />
    </TourProvider>
  );
};

export default TourDemo01;
