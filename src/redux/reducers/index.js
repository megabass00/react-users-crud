import { combineReducers } from 'redux'
import { sessionReducer, usersReducer, stylesReducer } from 'redux/reducers'

export { default as sessionReducer } from './sessionReducer'
export { default as usersReducer } from './usersReducer'
export { default as stylesReducer } from './stylesReducer'

export default combineReducers({
  session: sessionReducer,
  users: usersReducer,
  styles: stylesReducer,
})
