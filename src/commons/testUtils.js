import { BrowserRouter as Router } from 'react-router-dom'
import PropTypes from 'prop-types'
import { render } from '@testing-library/react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from 'redux/reducers'

import { INITIAL_STATE as SESSION_INIAL_STATE } from 'redux/reducers/sessionReducer'
import { INITIAL_STATE as USERS_INIAL_STATE } from 'redux/reducers/usersReducer'

const initialState = { session: SESSION_INIAL_STATE, users: USERS_INIAL_STATE }

const renderWithRedux = (
  ui,
  {
    initialState,
    store = createStore(rootReducer, initialState),
    ...renderOptions
  } = {}
) => {
  const Wrapper = ({ children }) => (
    <Provider store={store}>
      <Router>{children}</Router>
    </Provider>
  )
  Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
  }
  return render(ui, { wrapper: Wrapper, ...renderOptions })
}

export { renderWithRedux, initialState }
