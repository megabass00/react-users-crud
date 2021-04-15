import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'
import SkeletonListItem from 'components/skeletons/SkeletonListItem'

const SkeletonWrapper = styled.div`
  max-height: 100px;
  margin: 10px 0;
  border: 1.8px solid ${({ theme }) => theme.gray2};
  border-radius: 5px;
  padding: 10px;
  text-align: left;
`

const SkeletonPreloader = ({ theme }) =>
  [1, 2, 3, 4, 5, 6].map((ph, index) => (
    <SkeletonWrapper key={`skeleton-${index}`}>
      <SkeletonListItem
        backgroundColor={theme.gray2}
        foregroundColor={theme.gray1}
      />
    </SkeletonWrapper>
  ))

SkeletonPreloader.propTypes = {
  theme: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  theme: state.styles.theme,
})

const SkeletonPreloaderConnected = connect(
  mapStateToProps,
  null
)(SkeletonPreloader)
export default SkeletonPreloaderConnected
