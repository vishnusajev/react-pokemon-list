/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import {
  OPEN_GLOBAL_LOADER,
  CLOSE_GLOBAL_LOADER,
} from './constants';

const initialState = fromJS({
  showLoader: false,
});


function appReducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_GLOBAL_LOADER:
      return state.set('showLoader', true);
    case CLOSE_GLOBAL_LOADER:
      return state.set('showLoader', false);
    default:
      return state;
  }
}


export default appReducer;
