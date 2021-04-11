import Layout from 'components/Layout'
import NavBar from 'components/NavBar'
import LoginForm from 'components/LoginForm'
import { SectionStyled } from './styles'

const Login = () => {
  return (
    <Layout>
      <NavBar />
      <SectionStyled>
        <LoginForm />
      </SectionStyled>
    </Layout>
  )
}

export default Login
