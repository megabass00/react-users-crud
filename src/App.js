import PropTypes from 'prop-types'
import { BrowserRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import Routes from 'router'
import GlobalStyle from 'styles/GlobalStyle'
import 'App.css'

const App = ({ theme }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </ThemeProvider>
)

App.propTypes = {
  theme: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  theme: state.styles.theme,
})

const AppConnected = connect(mapStateToProps, null)(App)
export default AppConnected
