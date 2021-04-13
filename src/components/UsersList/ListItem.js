import PropTypes from 'prop-types'

import Avatar from 'components/Avatar'
import {
  ListItemWrapper,
  ListItemInfoWrapper,
  ListItemFullName,
} from './styles'

const ListItem = ({ id, avatar, fullName, email, onClick }) => (
  <ListItemWrapper onClick={() => onClick(id)}>
    <Avatar src={avatar} size="md" />
    <ListItemInfoWrapper>
      <ListItemFullName>{fullName}</ListItemFullName>
      <span>{email}</span>
    </ListItemInfoWrapper>
  </ListItemWrapper>
)

ListItem.propTypes = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

ListItem.defaultProps = {
  onClick: null,
}

export default ListItem
