import { call, put } from 'redux-saga/effects';

export function* getTodos(api) {
	try {
		// make the call to the api
		const response = yield call(api.getTodos);
		if (response.ok) {
			// do data conversion here if needed
			yield put({ type: 'API_SUCCESS', payload: response.data });
		} else {
			yield put({ type: 'API_FAILURE', error: true });
		}
	} catch (e) {
		yield put({ type: 'API_FAILURE', error: e.message });
	}
}
