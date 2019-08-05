import { takeLatest, all } from 'redux-saga/effects';
import API from '../Services/Api';

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux';
import { SearchTypes } from '../Redux/SearchRedux';

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas';
import { getSearchResult } from './SearchSagas';

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = API.create();

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield all([
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup),

    // some sagas receive extra parameters in addition to an action
    takeLatest(SearchTypes.SEARCH, getSearchResult, api)
  ]);
}
