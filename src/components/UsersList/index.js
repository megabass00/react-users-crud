import { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Pagination from 'components/Pagination'
import SkeletonPreloader from './SketonPreloader'
import ListItem from './ListItem'
import { getUsersList } from 'redux/actions/usersActions'
import { ListWrapper } from './styles'

const UsersList = ({ getUsersList, list, loading, currentPage }) => {
  useEffect(() => {
    getUsersList(currentPage).then((result) => {
      console.log('*** res', result)
    })
  }, [getUsersList, currentPage])

  return (
    <ListWrapper>
      {loading && <SkeletonPreloader />}
      {!loading &&
        list.map((user) => (
          <ListItem
            key={user.id}
            avatar={user.avatar}
            email={user.email}
            fullName={`${user.first_name} ${user.last_name}`}
          />
        ))}
      <Pagination />
    </ListWrapper>
  )
}

UsersList.propTypes = {
  loading: PropTypes.bool.isRequired,
  list: PropTypes.array.isRequired,
  currentPage: PropTypes.number.isRequired,
  getUsersList: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  loading: state.users.loading,
  list: state.users.list,
  currentPage: state.users.currentPage,
})

const mapDispatchToProps = (dispatch) => ({
  getUsersList: (user) => dispatch(getUsersList(user)),
})

const UsersListConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersList)
export default UsersListConnected
