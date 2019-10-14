import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import rootSaga from './root-saga';

const sagaMiddleware = createSagaMiddleware();

let middlewares = [/* thunk */sagaMiddleware];
if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
export default store;