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
  color: ${({ theme }) => theme.textColor};
  padding: 10px;
  font-size: 16px;
  border: 2px solid ${({ theme }) => theme.inputBorderColor};
  background: rgba(0, 0, 0, 0);
  outline: none;

  :hover,
  :focus {
    border: 2px solid ${({ theme }) => theme.primaryColor};
  }
`
