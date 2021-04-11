import PropTypes from 'prop-types'
import { SectionStyled } from './styles'

const Layout = ({ children }) => <SectionStyled>{children}</SectionStyled>

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout
