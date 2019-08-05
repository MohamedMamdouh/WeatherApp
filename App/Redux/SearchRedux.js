import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';
import { filter } from 'ramda';
import { startsWith } from 'ramdasauce';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  search: [],
  onSearchTermChange: ['searchTerm'],
  searchError: ['error'],
  searchSuccess: ['result']
});

export const SearchTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  searchTerm: '',
  searching: false,
  result: undefined,
  error: ''
});

/* ------------- Reducers ------------- */

export const onSearchTermChange = (state, { searchTerm }) => {
  return state.merge({ searchTerm });
};

export const performSearch = state => {
  return state.merge({ searching: true });
};

export const searchSuccess = (state, { result }) => {
  return state.merge({ searching: false, result });
};
export const searchError = (state, { error }) => {
  return state.merge({ searching: false, error });
};

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SEARCH]: performSearch,
  [Types.SEARCH_ERROR]: searchError,
  [Types.SEARCH_SUCCESS]: searchSuccess,
  [Types.ON_SEARCH_TERM_CHANGE]: onSearchTermChange
});
