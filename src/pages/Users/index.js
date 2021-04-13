import Layout from 'components/Layout'
import NavBar from 'components/NavBar'
import UsersList from 'components/UsersList'
import { SectionStyled } from './styles'

const Users = () => {
  return (
    <Layout>
      <NavBar />
      <SectionStyled>
        <h1>List Users Page</h1>
        <UsersList />
      </SectionStyled>
    </Layout>
  )
}

export default Users
