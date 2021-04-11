import styled from 'styled-components'

const commons = `
	font-size: 1.1rem;
	text-align: center;
	padding: 5px;
`

export const Success = styled.div`
  ${commons}
  color: green;
`
export const Warning = styled.div`
  ${commons}
  color: orange;
`
export const Error = styled.div`
  ${commons}
  color: red;
`
export const Info = styled.div`
  ${commons}
  color: blue;
`
