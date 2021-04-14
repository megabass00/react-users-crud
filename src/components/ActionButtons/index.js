import PropTypes from 'prop-types'

import SvgEdit from 'components/svg/SvgEdit'
import SvgTrash from 'components/svg/SvgTrash'
import { ActionsWrapper, ActionButtonStyled } from './styles'

const ActionButtons = ({ onEdit, onRemove }) => (
  <ActionsWrapper data-testid="wrapper">
    {onEdit && (
      <ActionButtonStyled onClick={onEdit}>
        <SvgEdit height={14} />
      </ActionButtonStyled>
    )}
    {onRemove && (
      <ActionButtonStyled onClick={onRemove}>
        <SvgTrash height={14} />
      </ActionButtonStyled>
    )}
  </ActionsWrapper>
)

ActionButtons.propTypes = {
  onEdit: PropTypes.func,
  onRemove: PropTypes.func,
}

ActionButtons.defaultProps = {
  onEdit: null,
  onRemove: null,
}

export default ActionButtons
