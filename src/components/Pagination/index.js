import { memo } from 'react'
import PropTypes from 'prop-types'

import NavButton from 'components/NavButton'
import { Wrapper, Label } from './styles'

const Pagination = ({
  onPrev,
  onNext,
  currentPage,
  totalResults,
  totalPages,
  perPage,
}) => (
  <Wrapper>
    <NavButton direction="left" onClick={onPrev} />
    <Label>{`Page ${currentPage}/${totalPages}`}</Label>
    <Label>
      {`${currentPage * perPage - perPage + 1} to ${
        currentPage * perPage
      } of ${totalResults}`}
    </Label>
    <NavButton direction="right" onClick={onNext} />
  </Wrapper>
)

Pagination.propTypes = {
  onPrev: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  currentPage: PropTypes.number,
  totalResults: PropTypes.number,
  totalPages: PropTypes.number,
  perPage: PropTypes.number,
}

Pagination.defaultProps = {
  currentPage: 0,
  totalResults: 0,
  totalPages: 0,
}

export default memo(Pagination)
