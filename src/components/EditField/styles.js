import styled from 'styled-components'

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const LabelStyled = styled.label`
  margin: 20px 0 5px;
`

export const ValueStyled = styled.div`
  font-size: 16px;
  padding: 10px 0;
  margin-bottom: 2px;
`

export const InputStyled = styled.input`
  font-family: Rajdhani;
  color: #fff;
  font-size: 16px;
  padding: 10px 0;
  border: none;
  border-bottom: 2px solid #a9aeb4;
  background: rgba(0, 0, 0, 0);
  outline: none;

  :hover,
  :focus {
    border-bottom: 2px solid #0077c8;
  }
`
