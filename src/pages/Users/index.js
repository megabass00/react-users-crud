import Layout from 'components/Layout'
import NavBar from 'components/NavBar'
import { SectionStyled } from './styles'

const Users = () => {
  return (
    <Layout>
      <NavBar />
      <SectionStyled>
        <h1>Users Page</h1>
      </SectionStyled>
    </Layout>
  )
}

export default Users
