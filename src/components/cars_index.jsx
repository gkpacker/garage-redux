import React from 'react';
import CarList from '../containers/car_list';
import Garage from '../containers/garage';

const CarsIndex = () => {
  return (
    <div className="view-container">
      <Garage />
      <CarList />
    </div>
  );
};

export default CarsIndex;
