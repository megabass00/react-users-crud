import { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'

import { updateUser, deleteUser } from 'redux/actions/usersActions'
import ActionButtons from 'components/ActionButtons'
import EditField from 'components/EditField'
import StatusMessage from 'components/StatusMessage'
import SvgCheck from 'components/svg/SvgCheck'
import { Wrapper, AvatarStyled, FullName, UpdateButton } from './styles'
import { getDateFormatted } from 'commons'

const UserDetails = ({ user, updateUser, deleteUser }) => {
  const [editing, setEditing] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const {
    firstName: firstNameError,
    lastName: lastNameError,
    email: emailError,
  } = errors

  const handleEdit = () => {
    console.log('***', 'Updating user')
    setEditing((prevValue) => !prevValue)
  }

  const handleRemove = () => {
    deleteUser(user.id)
      .then((result) => {
        setStatus({
          type: 'success',
          message: 'User has been deleted successfully 👍',
        })
      })
      .catch((err) => {
        console.log('*** result delete error', err)
        setStatus({ type: 'error', message: err })
      })
  }

  const onSubmit = (values) => {
    setIsSubmitting(true)
    updateUser(user.id, values)
      .then((result) => {
        const dateFormatted = getDateFormatted(new Date(result))
        setStatus({
          type: 'success',
          message: `✔ Updated successfully on ${dateFormatted}`,
        })
      })
      .catch((err) => {
        console.log('*** result update error', err)
        setStatus({ type: 'error', message: err })
      })
      .finally(() => setIsSubmitting(false))
  }

  const handleOnClearMessage = () => setStatus(null)

  return (
    <Wrapper>
      <ActionButtons onEdit={handleEdit} onRemove={handleRemove} />
      <AvatarStyled src={user.avatar} size="lg" />
      <FullName>{`${user.id}: ${user.first_name} ${user.last_name}`}</FullName>
      <form onSubmit={handleSubmit(onSubmit)}>
        <EditField
          label="First Name"
          name="first_name"
          value={user.first_name}
          register={register}
          editing={editing}
          validation={{ required: true }}
          error={firstNameError}
        />
        <EditField
          label="Last Name"
          name="last_name"
          value={user.last_name}
          register={register}
          editing={editing}
          validation={{ required: true }}
          error={lastNameError}
        />
        <EditField
          label="E-Mail"
          name="email"
          value={user.email}
          register={register}
          editing={editing}
          validation={{
            required: true,
            pattern: {
              value: /[a-z0-9]+@[a-z0-9]+\.[a-z0-9]{2,3}/,
            },
          }}
          error={emailError}
        />
        {editing && (
          <UpdateButton stretch disabled={isSubmitting}>
            <SvgCheck height={20} />
            <span>Update</span>
          </UpdateButton>
        )}
        {status && (
          <StatusMessage
            type={status.type}
            message={status.message}
            onClear={handleOnClearMessage}
          />
        )}
      </form>
    </Wrapper>
  )
}

UserDetails.propTypes = {
  user: PropTypes.object.isRequired,
  updateUser: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  loading: state.users.loading,
  currentUser: state.users.currentUser,
})

const mapDispatchToProps = (dispatch) => ({
  deleteUser: (id) => dispatch(deleteUser(id)),
  updateUser: (id) => dispatch(updateUser(id)),
})

const UserDetailsConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDetails)
export default UserDetailsConnected
