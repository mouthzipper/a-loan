import axios from 'axios';
import _isEmpty from 'lodash/isEmpty';

axios.defaults.baseURL = 'https://aloan-ae8d3.firebaseio.com';
export function post(endpoint, payload, config) {
  const postFunc = axios.post(endpoint, payload, config);

  return postFunc.then(response => response).catch(errorHandler);
}

export function patch(endpoint, payload) {
  const patchFunc = axios.patch(endpoint, payload);

  return patchFunc.then(response => response).catch(errorHandler);
}

export function update(endpoint, payload) {
  const putFunc = axios.put(endpoint, payload);

  return putFunc.then(response => response).catch(errorHandler);
}

export function get(endpoint) {
  const getFunc = axios.get(endpoint);

  return getFunc.then(response => response).catch(errorHandler);
}

export function remove(endpoint) {
  const getFunc = axios.delete(endpoint);

  return getFunc.then(response => response).catch(errorHandler);
}

function errorHandler(error) {
  if (_isEmpty(error.response)) {
    throw error;
  } else {
    throw error.response.data;
  }
}
