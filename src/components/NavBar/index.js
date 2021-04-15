import { memo } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'

import { logout } from 'redux/actions/sessionActions'
import { toogleTheme } from 'redux/actions/stylesActions'
import SvgLaLiga from 'components/svg/SvgLaLiga'
import {
  NavStyled,
  NavGroup,
  Logo,
  Wellcome,
  Title,
  LinkStyled,
  Logout,
  NavButtonStyled,
  ToggleThemeButton,
} from './styles'

const NavBar = ({ isAuth, logout, canGoBack, toogleTheme }) => {
  const history = useHistory()

  const handleBackClick = () => history.goBack()

  return (
    <NavStyled>
      <Logo>
        <ToggleThemeButton onClick={toogleTheme}>
          <SvgLaLiga width={50} />
        </ToggleThemeButton>
      </Logo>
      <>
        <NavGroup>
          {canGoBack && (
            <NavButtonStyled direction="left" onClick={handleBackClick} />
          )}
          <Title>Users CRUD</Title>
        </NavGroup>
        {isAuth ? (
          <NavGroup>
            <Wellcome>Welcome 😎</Wellcome>
            <Logout onClick={logout}>Log Out</Logout>
          </NavGroup>
        ) : (
          <NavGroup>
            <div>
              <LinkStyled to={{ pathname: '/' }}>Login</LinkStyled>
              <LinkStyled to={{ pathname: '/register' }}>Register</LinkStyled>
            </div>
          </NavGroup>
        )}
      </>
    </NavStyled>
  )
}

NavBar.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
  canGoBack: PropTypes.bool,
  toogleTheme: PropTypes.func.isRequired,
}

NavBar.defaultProps = {
  canGoBack: false,
}

const mapStateToProps = (state) => ({
  isAuth: state.session.isAuth,
})

const mapDispatchToProps = (dispatch) => ({
  logout: (user) => dispatch(logout(user)),
  toogleTheme: (user) => dispatch(toogleTheme()),
})

const NavBarConnected = connect(mapStateToProps, mapDispatchToProps)(NavBar)
export default memo(NavBarConnected)
