
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'

import { watchFetchLoanDetails } from '../actions/HandleApi';

const sagaMiddleware = createSagaMiddleware()
import { DataReducer } from '../reducer/DataReducer';

export default function configureStore(onComplete) {
  const store = createStore(DataReducer, applyMiddleware(sagaMiddleware))
  sagaMiddleware.run(watchFetchLoanDetails)
  return store
}

