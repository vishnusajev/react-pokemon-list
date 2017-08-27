/*
 * Home Reducer
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
  RADAR_DATA,
  ATTACKS_OVER_TIME,
  TOP_ATTACKED_SERVICES,
  TOP_ATTACKED_GROUPS,
  TOP_TAGS,
  TOP_ATTACKERS,
  ATTACKERS,
} from './constants';

const initialState = fromJS({
  radarData: null,
  attacksOverTime: null,
  topAttackedServices: null,
  topAttackedGroups: null,
  topTags: null,
  topAttackers: null,
  attackers: null,
});


function homeReducer(state = initialState, action) {
  switch (action.type) {
    case RADAR_DATA:
      return state.set('radarData', action.data);
    case ATTACKS_OVER_TIME:
      return state.set('attacksOverTime', action.data);
    case TOP_ATTACKED_SERVICES:
      return state.set('topAttackedServices', action.data);
    case TOP_ATTACKED_GROUPS:
      return state.set('topAttackedGroups', action.data);
    case TOP_TAGS:
      return state.set('topTags', action.data);
    case TOP_ATTACKERS:
      return state.set('topAttackers', action.data);
    case ATTACKERS:
      return state.set('attackers', action.data);
    default:
      return state;
  }
}


export default homeReducer;
