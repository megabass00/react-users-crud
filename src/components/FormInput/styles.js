import styled from 'styled-components'

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Rajdhani;
`

export const LabelStyled = styled.label`
  margin: 20px 0 5px;
`

export const InputStyled = styled.input`
  font-family: Rajdhani;
  color: #fff;
  padding: 10px;
  font-size: 16px;
  border: 2px solid #a9aeb4;
  background: rgba(0, 0, 0, 0);
  outline: none;

  :hover,
  :focus {
    border: 2px solid #0077c8;
  }
`

export const SmallStyled = styled.small`
  color: red;
  margin-top: 5px;
`
