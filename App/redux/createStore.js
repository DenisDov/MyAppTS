import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

// creates the store
export default (rootReducer, rootSaga) => {
	/* ------------- Redux Configuration ------------- */

	const middleware = [];
	const enhancers = [];

	/* ------------- Saga Middleware ------------- */

	const sagaMiddleware = createSagaMiddleware();
	middleware.push(sagaMiddleware);

	if (process.env.NODE_ENV === 'development') {
		const { createLogger } = require('redux-logger');
		middleware.push(createLogger({ collapsed: true }));
	}

	/* ------------- Assemble Middleware ------------- */

	enhancers.push(applyMiddleware(...middleware));

	const store = createStore(rootReducer, compose(...enhancers));

	const sagasManager = sagaMiddleware.run(rootSaga);

	return {
		store,
		sagasManager,
		sagaMiddleware,
	};
};
