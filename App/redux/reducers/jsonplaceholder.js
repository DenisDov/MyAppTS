import { createReducer } from 'reduxsauce';
import types from '../types';
import produce from 'immer';

/* ------------- Initial State ------------- */
const INITIAL_STATE = {
	fetching: null,
	error: null,
	data: [],
};

/* ------------- Immer Reducers ------------- */
const request = (state = INITIAL_STATE, action) => {
	const nextState = produce(state, (draftState) => {
		// draftState.fetching = true;
		null;
	});
	return nextState;
};

const success = (state = INITIAL_STATE, action) => {
	const nextState = produce(state, (draftState) => {
		draftState.error = null;
		draftState.data = action.payload;
	});
	return nextState;
};

const failure = (state = INITIAL_STATE, action) => {
	const nextState = produce(state, (draftState) => {
		draftState.error = action.payload;
		draftState.data = [];
	});
	return nextState;
};

/* ------------- Hookup Reducers To Types ------------- */
const HANDLERS = {
	[types.API_REQUEST]: request,
	[types.API_SUCCESS]: success,
	[types.API_FAILURE]: failure,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
