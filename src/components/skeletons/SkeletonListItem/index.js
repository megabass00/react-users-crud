import ContentLoader from 'react-content-loader'
import styled from 'styled-components'
import { MEDIAQUERIES } from 'styles'

const SkeletonListItem = (props) => (
  <ContentLoader viewBox="0 0 400 100" height={100} width={500} {...props}>
    <rect x="110" y="21" rx="4" ry="4" width="254" height="6" />
    <rect x="111" y="41" rx="3" ry="3" width="185" height="7" />
    <rect x="304" y="-46" rx="3" ry="3" width="350" height="6" />
    <rect x="371" y="-45" rx="3" ry="3" width="380" height="6" />
    <rect x="484" y="-45" rx="3" ry="3" width="201" height="6" />
    <circle cx="48" cy="48" r="48" />
  </ContentLoader>
)

SkeletonListItem.metadata = {
  name: 'List Item Skeleton',
  filename: 'SkeletonListItem',
}

const SkeletonListItemStyled = styled(SkeletonListItem)`
  width: 300px;
  height: 60px;

  ${MEDIAQUERIES.tablet} {
    width: 450px;
    height: 90px;
  }
`

export default SkeletonListItemStyled
