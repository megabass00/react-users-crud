import Avatar from 'components/Avatar'
import Button from 'components/Button'
import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 500px;
  padding: 10px;
  text-align: left;
  border-radius: 5px;
  background: #202325;
  transform: translateY(50px);
`

export const AvatarStyled = styled(Avatar)`
  transform: translateY(-50px);

  > img {
    border: 10px solid #202325;
  }
`

export const FullName = styled.h1`
  text-align: center;
  transform: translateY(-50px);
`

export const UpdateButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  background: #168a16;

  > span {
    margin-left: 10px;
  }
`