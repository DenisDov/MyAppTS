import { combineReducers } from 'redux';
import configureStore from './createStore';
import rootSaga from '../sagas';

/* ------------- Assemble The Reducers ------------- */
export const reducers = combineReducers({
	// nav: require('./NavigationRedux').reducer,
	jsonplaceholder: require('./reducers/jsonplaceholder').reducer,
	// search: require('./SearchRedux').reducer,
});

export default () => {
	const { store, sagasManager, sagaMiddleware } = configureStore(reducers, rootSaga);

	// if (module.hot) {
	// 	module.hot.accept(() => {
	// 		const nextRootReducer = require('./').reducers;
	// 		store.replaceReducer(nextRootReducer);

	// 		const newYieldedSagas = require('../sagas').default;
	// 		sagasManager.cancel();
	// 		sagasManager.done.then(() => {
	// 			sagasManager = sagaMiddleware(newYieldedSagas);
	// 		});
	// 	});
	// }

	return store;
};
