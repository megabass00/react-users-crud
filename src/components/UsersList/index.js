import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'

import {
  getUsersList,
  setCurrentPage,
  clearError,
} from 'redux/actions/usersActions'
import Pagination from 'components/Pagination'
import StatusMessage from 'components/StatusMessage'
import SkeletonPreloader from './SketonPreloader'
import ListItem from './ListItem'
import { ListWrapper } from './styles'

const UsersList = ({
  getUsersList,
  setCurrentPage,
  error,
  loading,
  currentPage,
  totalPages,
  totalResults,
  perPage,
}) => {
  const [currentList, setCurrenList] = useState([])
  const history = useHistory()

  useEffect(() => {
    getUsersList(currentPage).then((list) => setCurrenList(list))
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
        currentList.map((user) => (
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
      {error && (
        <StatusMessage type="error" message={error} onClear={clearError} />
      )}
    </ListWrapper>
  )
}

UsersList.propTypes = {
  loading: PropTypes.bool.isRequired,
  getUsersList: PropTypes.func.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  totalResults: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  perPage: PropTypes.number.isRequired,
  error: PropTypes.string,
}

const mapStateToProps = (state) => ({
  loading: state.users.loading,
  error: state.users.error,
  currentPage: state.users.currentPage,
  totalResults: state.users.totalResults,
  totalPages: state.users.totalPages,
  perPage: state.users.perPage,
})

const mapDispatchToProps = (dispatch) => ({
  getUsersList: (page) => dispatch(getUsersList(page)),
  setCurrentPage: (page) => dispatch(setCurrentPage(page)),
  clearError: () => dispatch(clearError()),
})

const UsersListConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersList)
export default UsersListConnected
