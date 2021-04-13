import styled from 'styled-components'
import SkeletonListItem from 'components/skeletons/SkeletonListItem'

const SkeletonWrapper = styled.div`
  height: 100px;
  margin: 10px 0;
  border: 1.8px solid #44494d;
  border-radius: 5px;
  padding: 10px;
`

const SkeletonPreloader = () =>
  [1, 2, 3, 4, 5, 6].map((ph, index) => (
    <SkeletonWrapper key={index}>
      <SkeletonListItem backgroundColor="#44494d" foregroundColor="#54595d" />
    </SkeletonWrapper>
  ))

export default SkeletonPreloader
