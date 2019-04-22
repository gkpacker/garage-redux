import React from 'react';
import { Link } from 'react-router-dom';
import CarList from '../containers/car_list';
import Garage from '../containers/garage';

const CarsIndex = () => {
  return [
    <Garage key="garage" >
      <Link to="/cars/new">New Car</Link>
    </Garage>,
    <CarList key="car_list" />
  ];
};

export default CarsIndex;
