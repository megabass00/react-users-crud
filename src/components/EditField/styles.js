import styled from 'styled-components'
import { MEDIAQUERIES } from 'styles'

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const LabelStyled = styled.label`
  margin: 20px 0 5px;
  color: #71787c;
  font-size: 1rem;

  ${MEDIAQUERIES.tablet} {
    font-size: 1.2rem;
  }
  ${MEDIAQUERIES.desktop} {
    font-size: 1.1rem;
  }
`

export const ValueStyled = styled.div`
  padding: 10px 0;
  margin-bottom: 2px;
  font-size: 1.3rem;

  ${MEDIAQUERIES.tablet} {
    font-size: 1.4rem;
  }
  ${MEDIAQUERIES.desktop} {
    font-size: 1.5rem;
  }
`

export const InputStyled = styled.input`
  font-family: Rajdhani;
  color: #fff;
  padding: 10px 0;
  border: none;
  border-bottom: 2px solid #a9aeb4;
  background: rgba(0, 0, 0, 0);
  outline: none;
  font-size: 1.3rem;

  :hover,
  :focus {
    border-bottom: 2px solid #0077c8;
  }

  ${MEDIAQUERIES.tablet} {
    font-size: 1.4rem;
  }
  ${MEDIAQUERIES.desktop} {
    font-size: 1.5rem;
  }
`
