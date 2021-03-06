import { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'

import { getUser } from 'redux/actions/usersActions'
import NavBar from 'components/NavBar'
import Layout from 'components/Layout'
import UserDetails from 'components/UserDetails'
import SvgBall from 'components/svg/SvgBall'
import { SectionStyled, PreloadWrapper } from './styles'

const Detail = ({ getUser, currentUser, loading }) => {
  const { userId } = useParams()

  useEffect(() => {
    getUser(userId)
  }, [getUser, userId])

  return (
    <Layout>
      <NavBar canGoBack />
      <SectionStyled>
        {loading && (
          <PreloadWrapper>
            <SvgBall height={150} />
          </PreloadWrapper>
        )}
        {!loading && currentUser && (
          <>
            <h1>User Details</h1>
            <h4>{`${currentUser.first_name} ${currentUser.last_name} (${currentUser.email})`}</h4>
            <UserDetails user={currentUser} />
          </>
        )}
      </SectionStyled>
    </Layout>
  )
}

Detail.propTypes = {
  getUser: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  currentUser: PropTypes.object,
}

const mapStateToProps = (state) => ({
  loading: state.users.loading,
  currentUser: state.users.currentUser,
})

const mapDispatchToProps = (dispatch) => ({
  getUser: (id) => dispatch(getUser(id)),
})

const DetailConnected = connect(mapStateToProps, mapDispatchToProps)(Detail)
export default DetailConnected
