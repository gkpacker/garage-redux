import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createCar } from '../actions';

class CarForm extends Component {
  onSubmit = (values) => {
    const { garage } = this.props;

    this.props.createCar(garage, values, (post) => {
      this.props.history.push('/');

      return post;
    });
  }

  renderField = (field) => {
    return (
      <div className="form-group">
        <label htmlFor={field.label}>{field.label}</label>
        <input
          type={field.type}
          className="form-control"
          {...field.input}
        />
      </div>
    );
  }

  render() {
    return (
      <div className="form-container">
        <div className="overlay" />
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field
            name="brand"
            label="brand"
            component={this.renderField}
            type="text"
          />
          <Field
            name="model"
            label="model"
            component={this.renderField}
            type="text"
          />
          <Field
            name="owner"
            label="owner"
            component={this.renderField}
            type="text"
          />
          <Field
            name="plate"
            label="plate"
            component={this.renderField}
            type="text"
          />
          <button type="submit">Add car</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { garage: state.garage };
}

export default reduxForm({ form: 'newCarForm' })(
  connect(mapStateToProps, { createCar })(CarForm)
);
