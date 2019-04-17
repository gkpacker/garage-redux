import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchCars } from '../actions';
import Car from '../components/car';

class CarList extends Component {
  componentWillMount() {
    const { garageName } = this.props;

    this.props.fetchCars(garageName);
  }

  render() {
    const { cars } = this.props;

    if (cars === []) {
      return <div className="no-car">EMPTY</div>;
    }

    return (
      <div className="list-container">
        <ul>
          {cars.map(car => <Car key={car.id} car={car} />)}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cars: state.cars,
    garageName: state.garageName
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchCars },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(CarList);
