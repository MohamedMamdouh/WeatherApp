import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  searchHistory: ['searchTerm'],
  historySearch: [],
  searchHistoryError: ['error'],
  searchHistorySuccess: ['result']
});

export const SearchHistoryTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  searchHistoryTerms: [],
  searchHistoryData: [],
  searching: false,
  error: ''
});

/* ------------- Reducers ------------- */

export const saveSearchHistoryTerm = (state, { searchTerm }) => {
  if (state.searchHistoryTerms.includes(searchTerm.toLowerCase())) {
    return state.merge({
      searchHistoryTerms: [...state.searchHistoryTerms],
      error: ''
    });
  }
  return state.merge({
    searchHistoryTerms: [...state.searchHistoryTerms, searchTerm.toLowerCase()],
    error: ''
  });
};

export const performHistorySearch = state => {
  return state.merge({ searching: true });
};

export const searchHistorySuccess = (state, { result }) => {
  return state.merge({
    searching: false,
    searchHistoryData: result,
    error: ''
  });
};
export const searchHistoryError = (state, { error }) => {
  return state.merge({ searching: false, error });
};

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SEARCH_HISTORY]: saveSearchHistoryTerm,
  [Types.SEARCH_HISTORY_ERROR]: searchHistoryError,
  [Types.SEARCH_HISTORY_SUCCESS]: searchHistorySuccess,
  [Types.HISTORY_SEARCH]: performHistorySearch
});
