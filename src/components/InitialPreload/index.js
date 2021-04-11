import SvgBall from 'components/svg/SvgBall'
import SvgLaLiga from 'components/svg/SvgLaLiga'
import { Wrapper, CenteredContent } from './styles'

const InitialPreload = () => (
  <Wrapper>
    <CenteredContent>
      <h1>Users CRUD</h1>
      <SvgLaLiga height={50} fill="#ffffff" />
    </CenteredContent>
    <CenteredContent>
      <h4>loading...</h4>
      <SvgBall height={200} />
    </CenteredContent>
  </Wrapper>
)

export default InitialPreload
