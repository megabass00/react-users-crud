import styled from 'styled-components'
import Button from 'components/Button'
import { MEDIAQUERIES } from 'styles'

export const Wrapper = styled.div`
  margin: 0 auto;
  margin-top: 100px;
  padding: 30px;
  color white;
  background: #202325;
  width: 70vw;
  min-height: 450px;

  ${MEDIAQUERIES.tablet} {
    width: 40vw;
    margin-top: 0px;
  }

  ${MEDIAQUERIES.desktop} {
    width: 20vw;
  }
`

export const Title = styled.div`
  text-align: left;
  font-size: 1.2em;
  font-weight: 700;
  margin-bottom: 10px;
  font-family: Rajdhani;

  ${MEDIAQUERIES.tablet} {
    font-size: 1.4em;
  }
`

export const ButtonStyled = styled(Button)`
  margin-top: 25px;
`
