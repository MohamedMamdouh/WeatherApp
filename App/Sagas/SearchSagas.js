import { call, put, select } from 'redux-saga/effects';
import { NavigationActions } from 'react-navigation';
import SearchActions from '../Redux/SearchRedux';

const selectSearchTerm = state => state.search.searchTerm;

export function* getSearchResult(api) {
  try {
    const searchTerm = yield select(selectSearchTerm);
    // make the call to the api
    const response = yield call(api.getWeather, searchTerm);
    const { data } = response;
    if (response.ok) {
      // do data conversion here if needed
      yield put(SearchActions.searchSuccess(data));
      yield put(
        NavigationActions.navigate({ routeName: 'WeatherDetailsScreen' })
      );
    } else {
      yield put(SearchActions.searchError(data));
    }
  } catch (error) {
    yield put(SearchActions.searchError(error));
  }
}
