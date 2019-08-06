import { call, put, select, all } from 'redux-saga/effects';
import { NavigationActions } from 'react-navigation';
import SearchHistoryActions from '../Redux/SearchHistoryRedux';

const selectSearchTerms = state => state.searchHistory.searchHistoryTerms;

export function* getSearchResults(api) {
  try {
    const searchTerms = yield select(selectSearchTerms);
    if (searchTerms.length === 0) {
      throw new Error('There is no previous history');
    }
    // make the call to the api
    const response = yield all(
      searchTerms.map(searchTerm => call(api.getWeather, searchTerm))
    );
    const data = response.map(i => {
      if (!i.ok) {
        throw new Error('Error Occured Please Try Again');
      }
      return i.data;
    });
    yield put(SearchHistoryActions.searchHistorySuccess(data));
    yield put(
      NavigationActions.navigate({ routeName: 'WeatherHistoryListScreen' })
    );
  } catch (error) {
    yield put(SearchHistoryActions.searchHistoryError(error));
  }
}
