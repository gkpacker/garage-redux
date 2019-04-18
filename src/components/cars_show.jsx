import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Garage from '../containers/garage';
import { fetchCar } from '../actions';

class CarsShow extends Component {
  componentWillMount() {
    const { match, car } = this.props;
    const id = parseInt(match.params.id, 10);

    if (!car) {
      this.props.fetchCar(id);
    }
  }

  render() {
    const { car } = this.props;

    if (!car) {
      return (
        <Garage key="garage">
          <Link to="/">
            Back
          </Link>
        </Garage>
      );
    }

    return [
      <Garage key="garage">
        <Link to="/">
          Back
        </Link>
      </Garage>,
      <div key="car" className="car-container">
        <div className="car-card">
          <img className="car-picture" alt="car" />
          <div className="car-details">
            <span>{`${car.brand} - ${car.model}`}</span>
            <ul>
              <li>Owner: {car.owner}</li>
            </ul>
          </div>
          <div className="plate">{car.plate}</div>
          <button className="delete">
            <i className="" />
          </button>
        </div>
      </div>
    ];
  }
}

function mapStateToProps(state, ownProps) {
  const id = parseInt(ownProps.match.params.id, 10);

  return { car: state.cars.find(car => car.id === id) };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCar }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsShow);
