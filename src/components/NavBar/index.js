import { memo } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import SvgLaLiga from 'components/svg/SvgLaLiga'
import Button from 'components/Button'
import Avatar from 'components/Avatar'
import { NavStyled, NavGroup, Logo, Title, LinkStyled } from './styles'

const NavBar = ({ isAuth }) => {
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
            <span>Hi USERNAME</span>
            <Avatar
              src="https://reqres.in/img/faces/2-image.jpg"
              alt="Avatar"
            />
            <Button>Log Out</Button>
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
}

const mapStateToProps = (state) => ({
  isAuth: state.session.isAuth,
})

const NavBarConnected = connect(mapStateToProps, null)(NavBar)
export default memo(NavBarConnected)
