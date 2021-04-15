import { STYLES_TOOGLE_THEME } from 'redux/types/themesTypes'
import { LIGHT_THEME, DARK_THEME } from 'styles/themes'
import { DEFAULT_THEME } from 'commons/constants'

export const INITIAL_STATE = {
  theme: DEFAULT_THEME === 'light' ? LIGHT_THEME : DARK_THEME,
}

const stylesReducer = (state = INITIAL_STATE, action) => {
  const { type } = action
  switch (type) {
    case STYLES_TOOGLE_THEME:
      return {
        ...state,
        theme: state.theme.name === 'light' ? DARK_THEME : LIGHT_THEME,
      }

    default:
      return state
  }
}

export default stylesReducer
