import { BrowserRouter } from 'react-router-dom'
import Routes from 'router'
import GlobalStyle from 'styles/GlobalStyle'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  )
}

export default App
