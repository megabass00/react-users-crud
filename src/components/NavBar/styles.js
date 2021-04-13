import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Button from 'components/Button'
import NavButton from 'components/NavButton'
import { MEDIAQUERIES } from 'styles'

export const NavStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  background: #ffffffdd;
  padding: 10px 0;
  z-index: 1;
  padding: 10px 0;
  backdrop-filter: blur(3px);
`

export const NavGroup = styled.div`
  margin: 0 20px;
  display: flex;
  align-items: center;
`

export const Logo = styled.span`
  position: absolute;
  left: calc(50% - 25px);
`

export const Wellcome = styled.span`
  display: none;

  ${MEDIAQUERIES.tablet} {
    display: inline;
  }
`

export const Title = styled.span`
  font-weight: bold;
  margin-right: 30px;
  font-size: 0.9rem;

  ${MEDIAQUERIES.tablet} {
    font-size: 1.1rem;
  }
  ${MEDIAQUERIES.desktop} {
    font-size: 1.3rem;
  }
`

export const LinkStyled = styled(Link)`
  color: #0077c8;
  text-decoration: none;
  padding: 0 5px;
  transition: color 0.5s ease 0s;
  font-size: 0.9rem;

  :hover {
    color: #76bff0;
  }

  ${MEDIAQUERIES.tablet} {
    font-size: 1.1rem;
    padding: 0 10px;
  }
  ${MEDIAQUERIES.desktop} {
    font-size: 1.2rem;
    padding: 0 15px;
  }
`

export const Logout = styled(Button)`
  margin-left: 20px;
`

export const NavButtonStyled = styled(NavButton)`
  margin-right: 5px;

  ${MEDIAQUERIES.tablet} {
    margin-right: 20px;
  }
`
