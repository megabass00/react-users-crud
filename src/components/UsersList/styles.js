import styled from 'styled-components'
import { MEDIAQUERIES } from 'styles'

export const ListWrapper = styled.div`
  text-align: center;
  min-width: 90vw;

  ${MEDIAQUERIES.tablet} {
    min-width: 60vw;
  }

  ${MEDIAQUERIES.desktop} {
    min-width: 40vw;
  }
`

export const ListItemWrapper = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
  align-items: center;
  padding: 10px 0;
  border-radius: 3px;
  margin: 10px 0;
  cursor: pointer;
  background: #202325;
  border: 1px solid #44494d;
  transition: border, background 0.3s ease 0s;

  :hover {
    border: 1px solid #0077c8;
    background: #2a2e30;
  }
`

export const ListItemInfoWrapper = styled.div`
  text-align: left;
`

export const ListItemFullName = styled.h4`
  margin: 0;

  ${MEDIAQUERIES.tablet} {
    font-size: 1.2rem;
  }

  ${MEDIAQUERIES.desktop} {
    font-size: 1.4rem;
  }
`
export const ListItemEmail = styled.span`
  font-size: 0.9rem;

  ${MEDIAQUERIES.tablet} {
    font-size: 1.2rem;
  }

  ${MEDIAQUERIES.desktop} {
    font-size: 1.4rem;
  }
`
