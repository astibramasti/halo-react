import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import personReducer from './reducers/personReducer'
import mathReducer from './reducers/mathReducer'

export default createStore(combineReducers(
  {reducer: personReducer, mathReducer}), 
  {}, 
  applyMiddleware(createLogger())
)