import { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import SvgArrowLeft from 'components/svg/SvgArrowLeft'
import SvgArrowRight from 'components/svg/SvgArrowRight'

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

const NavButton = styled.button`
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
  color: #71787c;
  transition: color 0.5s ease 0s;

  :hover {
    color: #0077c8;
  }
`

const Pagination = ({ currentPage, totalResults, totalPages }) => {
  const [page, setPage] = useState(currentPage)

  const handlePrev = () => {
    if (page > 1) setPage(page - 1)
  }

  const handleNext = () => {
    if (page <= totalPages) setPage(page + 1)
  }

  return (
    <Wrapper>
      <NavButton onClick={handlePrev}>
        <SvgArrowLeft width={20} />
      </NavButton>
      <Label>{`Page ${page} of ${totalPages} (total ${totalResults})`}</Label>
      <NavButton onClick={handleNext}>
        <SvgArrowRight width={20} />
      </NavButton>
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
