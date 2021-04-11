import PropTypes from 'prop-types'
import SvgPreload from 'components/svg/SvgPreload'
import { Wrapper, Message } from './styles'

const Preload = ({ message }) => (
  <Wrapper>
    <SvgPreload width={30} />
    {message && <Message>{message}</Message>}
  </Wrapper>
)

Preload.propTypes = {
  message: PropTypes.string,
}

export default Preload
