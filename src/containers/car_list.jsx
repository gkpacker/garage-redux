import  React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class CarList extends Component {
  renderCar(car) {
    return (
      <Link key={car.id} to={`/cars/${car.id}`} >
        <li className='car-smallad'>
          <img src="assets/images/kombi.jpg" className='car-logo' alt=""/>
          <div className="car-details">
            <span>{`${car.brand} - ${car.model}`}</span>
            <ul>
              <li>{`Owner: ${car.owner}`}</li>
            </ul>
          </div>
        </li>
      </Link>
    )
  }

  render() {
    if (this.props.car === []) {
      debugger
      return <div className='no-car'>EMPTY</div>
    }

    return (
      <div className='list-container'>
        <ul>
          {this.props.cars.map(this.renderCar)}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { cars: state.cars };
}

export default connect(mapStateToProps)(CarList);
