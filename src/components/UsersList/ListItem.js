import styled from 'styled-components'
import PropTypes from 'prop-types'

import Avatar from 'components/Avatar'

const ListItemWrapper = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
  align-items: center;
  padding: 10px 0;
  border-radius: 3px;
  margin: 10px 0;
  cursor: pointer;
  background: #202325;
  border: 1px solid #44494d;
  transition: border, background 0.3s ease 0s;

  :hover {
    border: 1px solid #0077c8;
    background: #2a2e30;
  }
`

const ListItemInfoWrapper = styled.div`
  text-align: left;
`

const ListItemFullName = styled.h4`
  margin: 0;
`

const ListItem = ({ avatar, fullName, email }) => (
  <ListItemWrapper>
    <Avatar src={avatar} size="md" />
    <ListItemInfoWrapper>
      <ListItemFullName>{fullName}</ListItemFullName>
      <span>{email}</span>
    </ListItemInfoWrapper>
  </ListItemWrapper>
)

ListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
}

export default ListItem
