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
  POKEMON_LIST,
} from './constants';

const initialState = fromJS({
  pokemonList: null,
});


function homeReducer(state = initialState, action) {
  switch (action.type) {
    case POKEMON_LIST:
      return state.set('pokemonList', action.data);
    default:
      return state;
  }
}


export default homeReducer;
