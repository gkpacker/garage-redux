export const FETCH_CARS = 'FETCH_CARS';
export const FETCH_CAR = 'FETCH_CAR';
export const CAR_CREATED = 'CAR_CREATED';
export const CAR_DELETED = 'CAR_DELETED';

const BASE_URL = "https://wagon-garage-api.herokuapp.com";

export function fetchCars(garage) {
  const promise = fetch(`${BASE_URL}/${garage}/cars`)
    .then(response => response.json());

  return {
    type: FETCH_CARS,
    payload: promise
  };
}

export function fetchCar(id) {
  const promise = fetch(`${BASE_URL}/cars/${id}`)
    .then(response => response.json());

  return {
    type: FETCH_CAR,
    payload: promise
  };
}

export function createCar(garage, body, callback) {
  const promise = fetch(
    `${BASE_URL}/${garage}/cars`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    }).then(response => response.json())
    .then(callback);

  return {
    type: CAR_CREATED,
    payload: promise
  };
}

export function deleteCar(id, callback) {
  const promise = fetch(
    `${BASE_URL}/cars/${id}`, {
      method: 'DELETE'
    }).then(response => response.json())
    .then(callback);

  return {
    type: CAR_DELETED,
    payload: promise
  };
}
