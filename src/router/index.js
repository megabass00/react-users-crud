import { lazy, Suspense } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import InitialPreload from 'components/InitialPreload'
import PrivateRoute from './privateRoute'

const LoginPage = lazy(() => import('pages/Login'))
const RegisterPage = lazy(() => import('pages/Register'))
const UsersPage = lazy(() => import('pages/Users'))
const DetailPage = lazy(() => import('pages/Detail'))

const Routes = ({ isAuth }) => (
  <Suspense fallback={<InitialPreload />}>
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route exact path="/register" component={RegisterPage} />
      <PrivateRoute exact isAuth={isAuth} path="/users" component={UsersPage} />
      <PrivateRoute
        exact
        isAuth={isAuth}
        path="/users/detail/:userId"
        component={DetailPage}
      />
    </Switch>
  </Suspense>
)

Routes.propTypes = {
  isAuth: PropTypes.bool.isRequired,
}

const mapStateToProps = (state) => ({
  isAuth: state.session.isAuth,
})

const RoutesConnected = connect(mapStateToProps, null)(Routes)
export default RoutesConnected
