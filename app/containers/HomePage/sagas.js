/**
 * API calls for Ola
 */

import { take, call, put, cancel, takeEvery } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { BASE_URL } from 'containers/App/constants';
import { showGlobalLoader, closeGlobalLoader } from 'containers/App/actions';
import request from 'utils/request';
import { PokemonList } from './actions';
import { FETCH_POKEMON_LIST } from './constants';

const ajaxRequestHeaders = new Headers({
  'Content-Type': 'application/json',
  Accept: 'application/json',
});

export function* getPokemonList(action) {
  yield put(showGlobalLoader());
  ajaxRequestHeaders.append('Access-Control-Allow-Origin', '*');
  let URL;
  if (action.page !== null) {
    URL = `${BASE_URL}${action.page}`;
  } else if (action.limit !== null) {
    URL = `${BASE_URL}/api/v1/pokemon?limit=${action.limit}&offset=0`;
  } else {
    URL = `${BASE_URL}/api/v1/pokemon?limit=10&offset=0`;
  }
  let requestData;
  try {
    requestData = yield call(request, URL, {
      method: 'GET',
      headers: ajaxRequestHeaders,
    });
    if (requestData) {
      yield put(PokemonList(requestData));
    }
  } catch (err) {
    console.log(err);
  } finally {
    yield put(closeGlobalLoader());
  }
}

export function* fetchPokemonList() {
  const watcher = yield takeEvery(FETCH_POKEMON_LIST, getPokemonList);
  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [
  fetchPokemonList,
];
