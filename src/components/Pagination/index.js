import { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import NavButton from 'components/NavButton'

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  color: #71787c;
`

const Label = styled.span`
  color: #71787c;
`

const Pagination = ({ currentPage, totalResults, totalPages }) => {
  const [page, setPage] = useState(currentPage)

  const handlePrev = () => {
    if (page > 1) setPage((prevValue) => prevValue - 1)
  }

  const handleNext = () => {
    if (page <= totalPages) setPage((prevValue) => prevValue + 1)
  }

  return (
    <Wrapper>
      <NavButton direction="left" onClick={handlePrev} />
      <Label>{`Page ${page} of ${totalPages} (total ${totalResults})`}</Label>
      <NavButton direction="right" onClick={handleNext} />
    </Wrapper>
  )
}

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalResults: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
}

Pagination.defaultProps = {
  currentPage: 0,
  totalResults: 0,
  totalPages: 0,
}

const mapStateToProps = (state) => ({
  currentPage: state.users.currentPage,
  totalResults: state.users.totalResults,
  totalPages: state.users.totalPages,
})

const mapDispatchToProps = (dispatch) => ({
  // getUsersList: (user) => dispatch(getUsersList(user)),
})

const PaginationConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(Pagination)
export default PaginationConnected
