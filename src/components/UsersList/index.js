import { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'

import { getUsersList } from 'redux/actions/usersActions'
import Pagination from 'components/Pagination'
import SkeletonPreloader from './SketonPreloader'
import ListItem from './ListItem'
import { ListWrapper } from './styles'

const UsersList = ({ getUsersList, list, loading, currentPage }) => {
  const history = useHistory()

  useEffect(() => {
    getUsersList(currentPage).then((result) => {
      console.log('*** res', result)
    })
  }, [getUsersList, currentPage])

  const handleClick = (id) => history.push(`/users/detail/${id}`)

  return (
    <ListWrapper>
      {loading && <SkeletonPreloader />}
      {!loading &&
        list.map((user) => (
          <ListItem
            key={user.id}
            id={user.id}
            avatar={user.avatar}
            email={user.email}
            fullName={`${user.first_name} ${user.last_name}`}
            onClick={handleClick}
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
