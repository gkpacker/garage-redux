import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import { fetchCars } from '../actions';

class CarList extends Component {
  componentWillMount() {
    const { garage } = this.props;

    this.props.fetchCars(garage);
  }

  renderCar = (car) => {
    return (
      <div className="car-smallad">
        <Link key={car.id} to={`/cars/${car.id}`} />
        <img src={`https://source.unsplash.com/120x180/?${car.brand}%20${car.model}&sig=${Math.random()}`} className="car-logo" alt="" />
        <div className="car-details">
          <span>{`${car.brand} - ${car.model}`}</span>
          <ul>
            <li><strong>Owner:</strong> {car.owner}</li>
          </ul>
        </div>
      </div>
    );
  }

  render() {
    const { cars } = this.props;

    if (cars === []) {
      return <div className="no-car">EMPTY</div>;
    }

    return (
      <div className="list-container">
        <ul>
          {cars.map(this.renderCar)}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cars: state.cars,
    garage: state.garage
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchCars },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(CarList);
