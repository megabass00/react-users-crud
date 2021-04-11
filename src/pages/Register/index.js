import Layout from 'components/Layout'
import NavBar from 'components/NavBar'
import RegisterForm from 'components/RegisterForm'
import { SectionStyled } from './styles'

const Register = () => {
  return (
    <Layout>
      <NavBar />
      <SectionStyled>
        <RegisterForm />
      </SectionStyled>
    </Layout>
  )
}

export default Register
