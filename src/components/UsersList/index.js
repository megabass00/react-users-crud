import { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'

import { getUsersList } from 'redux/actions/usersActions'
import Pagination from 'components/Pagination'
import SkeletonPreloader from './SketonPreloader'
import ListItem from './ListItem'
import { ListWrapper } from './styles'

const UsersList = ({
  getUsersList,
  list,
  loading,
  currentPage,
  totalPages,
  totalResults,
}) => {
  // const [page, setPage] = useState(currentPage)
  const history = useHistory()

  useEffect(() => {
    getUsersList(currentPage)
  }, [getUsersList, currentPage])

  const handleClick = (id) => history.push(`/users/detail/${id}`)

  const handlePrev = () => {
    // if (page > 1) setPage((prevValue) => prevValue - 1)
  }

  const handleNext = () => {
    // if (page < totalPages) setPage((prevValue) => prevValue + 1)
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
      />
    </ListWrapper>
  )
}

UsersList.propTypes = {
  loading: PropTypes.bool.isRequired,
  list: PropTypes.array.isRequired,
  getUsersList: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  totalResults: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
}

UsersList.defaultProps = {
  currentPage: 0,
  totalResults: 0,
  totalPages: 0,
}

const mapStateToProps = (state) => ({
  loading: state.users.loading,
  list: state.users.list,
  currentPage: state.users.currentPage,
  totalResults: state.users.totalResults,
  totalPages: state.users.totalPages,
})

const mapDispatchToProps = (dispatch) => ({
  getUsersList: (page) => dispatch(getUsersList(page)),
})

const UsersListConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersList)
export default UsersListConnected
