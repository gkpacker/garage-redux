import { FETCH_CARS, CAR_CREATED } from '../actions';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_CARS:
      return action.payload;
    case CAR_CREATED:
      return [...state, action.payload];
    default:
      return state;
  }
}
