import styled from 'styled-components'

export const SvgStyled = styled.svg`
  margin: 0 auto;
`

export const pathCommons = `
  animation-duration: 1s;
  animation-name: pulse;
  animation-iteration-count: infinite;
  color: #26a380;

  @keyframes pulse {
    0%     { opacity: .1; }
    30%    { opacity: .8; }
    100%   { opacity: .1; }
  }
`

export const Path = styled.path`
  ${pathCommons}
`
export const Path0 = styled.path`
  ${pathCommons}
  animation-delay: -.125s;
`
export const Path1 = styled.path`
  ${pathCommons}
  animation-delay: -.25s;
`
export const Path2 = styled.path`
  ${pathCommons}
  animation-delay: -.375s;
`
export const Path3 = styled.path`
  ${pathCommons}
  animation-delay: -.5s;
`
export const Path4 = styled.path`
  ${pathCommons}
  animation-delay: -.625s;
`
export const Path5 = styled.path`
  ${pathCommons}
  animation-delay: -.75s;
`
export const Path6 = styled.path`
  ${pathCommons}
  animation-delay: -.875s;
`
export const Path7 = styled.path`
  ${pathCommons}
  animation-delay: 1s;
`
