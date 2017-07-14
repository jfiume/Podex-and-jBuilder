import React from 'react';
import {RECEIVE_SINGLE_POKEMON} from '../actions/pokemon_actions';
import {merge} from 'lodash';

const itemsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SINGLE_POKEMON:
      return merge({}, state, {items: action.pokemon.items});
    default:
      return state;
  }
};

export default itemsReducer;
