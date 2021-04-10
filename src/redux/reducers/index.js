import { combineReducers } from 'redux'
import { sessionReducer, usersReducer } from 'redux/reducers'

export { default as sessionReducer } from './sessionReducer'
export { default as usersReducer } from './usersReducer'

export default combineReducers({
  session: sessionReducer,
  users: usersReducer,
})
