import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Garage from '../containers/garage';
import { fetchCar, deleteCar } from '../actions';

class CarsShow extends Component {
  componentWillMount() {
    const { match, car } = this.props;
    const id = parseInt(match.params.id, 10);

    if (!car) {
      this.props.fetchCar(id);
    }
  }

  handleClick = () => {
    const { car } = this.props;

    this.props.deleteCar(car.id, (response) => {
      this.props.history.push('/');

      return response;
    });
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
          <img
            className="car-picture"
            src={`https://source.unsplash.com/220x200/?${car.brand}%20${car.model}&sig=${Math.random()}`}
            alt="car"
          />
          <div className="car-details">
            <span>{`${car.brand} - ${car.model}`}</span>
            <ul>
              <li><strong>Owner</strong>: {car.owner}</li>
            </ul>
            <span className="plate">{car.plate}</span>
          </div>
          <button className="delete" onClick={this.handleClick} >
            <i className="fas fa-trash-alt" />
            Delete
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
  return bindActionCreators({ fetchCar, deleteCar }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsShow);
