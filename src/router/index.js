import { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import PrivateRoute from './privateRoute'

const LoginPage = lazy(() => import('pages/Login'))
const UsersPage = lazy(() => import('pages/Users'))
const DetailsPage = lazy(() => import('pages/Details'))

const Routes = () => (
  <Suspense fallback={<span>Loading...</span>}>
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <PrivateRoute exact path="/users" component={UsersPage} />
      <PrivateRoute exact path="/details/:id" component={DetailsPage} />
    </Switch>
  </Suspense>
)

export default Routes
