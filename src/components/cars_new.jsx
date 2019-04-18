import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Garage from '../containers/garage';
import CarForm from '../containers/car_form';

class CarsNew extends Component {
  render() {
    return [
      <Garage key="garage">
        <Link to="/">
          Back
        </Link>
      </Garage>,
      <CarForm key="add-car" history={this.props.history} />
    ];
  }
}

export default CarsNew;
