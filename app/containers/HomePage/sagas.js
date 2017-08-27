/**
 * API calls for Ola
 */

import { take, call, put, cancel, takeEvery } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { BASE_URL } from 'containers/App/constants';
import request from 'utils/request';
import { RadarChartData, AttacksOverTime, TopAttackedServices, TopAttackedGroups, TopTags, TopAttackers, Attackers } from './actions';
import { FETCH_RADAR_DATA, FETCH_ATTACKS_OVER_TIME, FETCH_TOP_ATTACKED_SERVICES, FETCH_TOP_ATTACKED_GROUPS, FETCH_TOP_TAGS, FETCH_TOP_ATTACKERS, FETCH_ATTACKERS } from './constants';

const ajaxRequestHeaders = new Headers({
  'Content-Type': 'application/json',
  Accept: 'application/json',
});

export function* getRadarChartData() {
  const URL = `${BASE_URL}/events/kill-chains`;
  let requestData;
  try {
    requestData = yield call(request, URL, {
      method: 'GET',
      headers: ajaxRequestHeaders,
    });
    if (requestData) {
      yield put(RadarChartData(requestData.data));
    }
  } catch (err) {
    console.log(err);
  }
}

export function* getAttacksOverTime() {
  const URL = `${BASE_URL}/events/appliances-attacks`;
  let requestData;
  try {
    requestData = yield call(request, URL, {
      method: 'GET',
      headers: ajaxRequestHeaders,
    });
    if (requestData) {
      yield put(AttacksOverTime(requestData.data));
    }
  } catch (err) {
    console.log(err);
  }
}

export function* getTopAttackedServices() {
  const URL = `${BASE_URL}/events/top-attacked-services`;
  let requestData;
  try {
    requestData = yield call(request, URL, {
      method: 'GET',
      headers: ajaxRequestHeaders,
    });
    if (requestData) {
      yield put(TopAttackedServices(requestData.data));
    }
  } catch (err) {
    console.log(err);
  }
}

export function* getTopAttackedGroups() {
  const URL = `${BASE_URL}/events/counts?field=decoy.group`;
  let requestData;
  try {
    requestData = yield call(request, URL, {
      method: 'GET',
      headers: ajaxRequestHeaders,
    });
    if (requestData) {
      yield put(TopAttackedGroups(requestData.data));
    }
  } catch (err) {
    console.log(err);
  }
}

export function* getTopTags() {
  const URL = `${BASE_URL}/events/counts?field=tags`;
  let requestData;
  try {
    requestData = yield call(request, URL, {
      method: 'GET',
      headers: ajaxRequestHeaders,
    });
    if (requestData) {
      yield put(TopTags(requestData.data));
    }
  } catch (err) {
    console.log(err);
  }
}

export function* getTopAttackers() {
  const URL = `${BASE_URL}/events/top-attackers`;
  let requestData;
  try {
    requestData = yield call(request, URL, {
      method: 'GET',
      headers: ajaxRequestHeaders,
    });
    if (requestData) {
      yield put(TopAttackers(requestData.data));
    }
  } catch (err) {
    console.log(err);
  }
}

export function* getAttackers() {
  const URL = `${BASE_URL}/attackers`;
  let requestData;
  try {
    requestData = yield call(request, URL, {
      method: 'GET',
      headers: ajaxRequestHeaders,
    });
    if (requestData) {
      yield put(Attackers(requestData.data));
    }
  } catch (err) {
    console.log(err);
  }
}

export function* fetchRadatChartData() {
  const watcher = yield takeEvery(FETCH_RADAR_DATA, getRadarChartData);
  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* fetchAttacksOverTime() {
  const watcher = yield takeEvery(FETCH_ATTACKS_OVER_TIME, getAttacksOverTime);
  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* fetchTopAttackedServices() {
  const watcher = yield takeEvery(FETCH_TOP_ATTACKED_SERVICES, getTopAttackedServices);
  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* fetchAttackedGroups() {
  const watcher = yield takeEvery(FETCH_TOP_ATTACKED_GROUPS, getTopAttackedGroups);
  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* fetchTopTags() {
  const watcher = yield takeEvery(FETCH_TOP_TAGS, getTopTags);
  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* fetchTopAttackers() {
  const watcher = yield takeEvery(FETCH_TOP_ATTACKERS, getTopAttackers);
  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* fetchAttackers() {
  const watcher = yield takeEvery(FETCH_ATTACKERS, getAttackers);
  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [
  fetchRadatChartData,
  fetchTopAttackedServices,
  fetchAttackedGroups,
  fetchAttacksOverTime,
  fetchTopTags,
  fetchTopAttackers,
  fetchAttackers,
];
