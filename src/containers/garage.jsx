import React from 'react';
import { connect } from 'react-redux';

const Garage = ({ garage, children }) => {
  return (
    <div className="garage">
      <div className="illustration" style={{ backgroundImage: "url('/assets/images/garage_bg.jpg')" }} />
      <img className="logo" src="/assets/images/kombi.jpg" alt="logo" />
      <h1>{garage}</h1>
      <p>
        Our garage is the best.
        Reasonable prices, always on time, we are the best (and fictionnal).
      </p>
      {children}
    </div>
  );
};

function mapStateToProps(state) {
  return { garage: state.garage };
}

export default connect(mapStateToProps)(Garage);
