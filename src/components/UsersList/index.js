import { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'

import { getUsersList, setCurrentPage } from 'redux/actions/usersActions'
import Pagination from 'components/Pagination'
import SkeletonPreloader from './SketonPreloader'
import ListItem from './ListItem'
import { ListWrapper } from './styles'

const UsersList = ({
  getUsersList,
  setCurrentPage,
  list,
  loading,
  currentPage,
  totalPages,
  totalResults,
  perPage,
}) => {
  const history = useHistory()

  useEffect(() => {
    getUsersList(currentPage)
  }, [getUsersList, currentPage])

  const handleClick = (id) => history.push(`/users/detail/${id}`)

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

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
      <Pagination
        onPrev={handlePrev}
        onNext={handleNext}
        currentPage={currentPage}
        totalResults={totalResults}
        totalPages={totalPages}
        perPage={perPage}
      />
    </ListWrapper>
  )
}

UsersList.propTypes = {
  loading: PropTypes.bool.isRequired,
  list: PropTypes.array.isRequired,
  getUsersList: PropTypes.func.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  totalResults: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  perPage: PropTypes.number.isRequired,
}

const mapStateToProps = (state) => ({
  loading: state.users.loading,
  list: state.users.list,
  currentPage: state.users.currentPage,
  totalResults: state.users.totalResults,
  totalPages: state.users.totalPages,
  perPage: state.users.perPage,
})

const mapDispatchToProps = (dispatch) => ({
  getUsersList: (page) => dispatch(getUsersList(page)),
  setCurrentPage: (page) => dispatch(setCurrentPage(page)),
})

const UsersListConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersList)
export default UsersListConnected
