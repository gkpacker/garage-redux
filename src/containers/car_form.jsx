import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createCar } from '../actions';
import { required, plateFormat } from '../common/field_validations';

class CarForm extends Component {
  onSubmit = (values) => {
    const { garage } = this.props;

    this.props.createCar(garage, values, (post) => {
      this.props.history.push('/');

      return post;
    });
  }

  renderField = ({ label, type, input, meta: { touched, error, warning } }) => {
    return (
      <div className="form-group">
        <label htmlFor={label}>{label}</label>
        <input
          type={type}
          className="form-control"
          {...input}
        />
        {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
      </div>
    );
  }

  render() {
    const { invalid, submitting, handleSubmit } = this.props;

    return (
      <div className="form-container">
        <div className="overlay" />
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <Field
            name="brand"
            label="brand"
            component={this.renderField}
            type="text"
            validate={[required]}
          />
          <Field
            name="model"
            label="model"
            component={this.renderField}
            type="text"
            validate={[required]}
          />
          <Field
            name="owner"
            label="owner"
            component={this.renderField}
            type="text"
            validate={[required]}
          />
          <Field
            name="plate"
            label="plate"
            component={this.renderField}
            type="text"
            validate={[required, plateFormat]}
          />
          <button type="submit" disabled={submitting || invalid} >Add car</button>
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
