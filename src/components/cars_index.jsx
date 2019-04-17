import React from 'react';
import CarList from '../containers/car_list'
import Garage from '../containers/garage'

const carsIndex = () => {
  return (
    <div className='view-container'>
      <Garage />
      <CarList />
    </div>
  )
}

export default carsIndex;
