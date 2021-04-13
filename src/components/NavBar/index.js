import { memo } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { logout } from 'redux/actions/sessionActions'
import SvgLaLiga from 'components/svg/SvgLaLiga'
import { NavStyled, NavGroup, Logo, Title, LinkStyled, Logout } from './styles'

const NavBar = ({ isAuth, logout }) => {
  return (
    <NavStyled>
      <Logo>
        <SvgLaLiga width={50} />
      </Logo>
      {isAuth ? (
        <>
          <NavGroup>
            <Title>React Users CRUD</Title>
          </NavGroup>
          <NavGroup>
            <span>Welcome 😎</span>
            <Logout onClick={logout}>Log Out</Logout>
          </NavGroup>
        </>
      ) : (
        <>
          <NavGroup>
            <Title>React Users CRUD</Title>
          </NavGroup>
          <NavGroup>
            <div>
              <LinkStyled to={{ pathname: '/' }}>Login</LinkStyled>
              <LinkStyled to={{ pathname: '/register' }}>Register</LinkStyled>
            </div>
          </NavGroup>
        </>
      )}
    </NavStyled>
  )
}

NavBar.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  isAuth: state.session.isAuth,
})

const mapDispatchToProps = (dispatch) => ({
  logout: (user) => dispatch(logout(user)),
})

const NavBarConnected = connect(mapStateToProps, mapDispatchToProps)(NavBar)
export default memo(NavBarConnected)
