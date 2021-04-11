import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

const PrivateRoute = ({ isAuth, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuth ? <Component {...props} /> : <Redirect to={{ pathname: '/' }} />
    }
  />
)

PrivateRoute.propTypes = {
  isAuth: PropTypes.bool,
  component: PropTypes.object.isRequired,
}

PrivateRoute.defaultProps = {
  isAuth: false,
}

export default PrivateRoute
