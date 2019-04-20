import { FETCH_CARS, FETCH_CAR, CAR_CREATED, CAR_DELETED } from '../actions';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_CARS:
      return action.payload;
    case FETCH_CAR:
      return [action.payload];
    case CAR_CREATED:
      return [...state, action.payload];
    case CAR_DELETED:
      return state.filter(car => car.id !== action.payload.id);
    default:
      return state;
  }
}
