import  React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Garage extends Component {
  render() {
    return (
      <div className="aside">
        <div className="illustration">
        </div>
          <img src="assets/images/kombi.jpg" alt="kombi" className="logo" />
        <h1>title</h1>
        <Link to='cars/new'>
          <p>New Car</p>
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { garageName: state.garageName };
}

export default connect(mapStateToProps)(Garage);
