import { combineReducers } from 'redux'
import passReducer from './passReducer'
import timerStartedReducer from './timerStartedReducer'

export default combineReducers({
  passReducer,
  timerStartedReducer
})
