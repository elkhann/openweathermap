import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

// const middleware = applyMiddleware(promise(), thunk, freeze, logger())

export default function configureStore(preloadedState) {
	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	const store = createStore(rootReducer, preloadedState, composeEnhancers(applyMiddleware(thunk)));

	return store;
}
