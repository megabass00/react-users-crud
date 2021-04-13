import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Button from 'components/Button'

export const NavStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  background: white;
  padding: 10px 0;
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

export const Title = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  margin-right: 30px;
`

export const LinkStyled = styled(Link)`
  color: #0077c8;
  text-decoration: none;
  padding: 0 10px;
  font-size: 0.9rem;
  transition: color 0.5s ease 0s;

  :hover {
    color: #76bff0;
  }
`

export const Logout = styled(Button)`
  margin-left: 20px;
`
