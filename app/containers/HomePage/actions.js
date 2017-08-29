import {
  FETCH_POKEMON_LIST,
  POKEMON_LIST,
} from './constants';


export function fetchPokemonList(page = null, limit = null) {
  return {
    type: FETCH_POKEMON_LIST,
    page,
    limit,
  };
}

export function PokemonList(data) {
  return {
    type: POKEMON_LIST,
    data,
  };
}
