import { takeLatest, all } from 'redux-saga/effects';
import API from '../services/Api';

// import * as types from '../redux/types';

/* ------------- Types ------------- */

// import {StartupTypes} from '../Redux/StartupRedux';
// import {GithubTypes} from '../Redux/GithubRedux';

/* ------------- Sagas ------------- */

import { getTodos } from './getTodos';

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = API.create();

/* ------------- Connect Types To Sagas ------------- */

export default function* RootSaga() {
	yield all([takeLatest('API_REQUEST', getTodos, api)]);
}
