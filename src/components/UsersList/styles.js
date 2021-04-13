import styled from 'styled-components'

export const ListWrapper = styled.div`
  text-align: center;
  min-width: 500px;
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
`
