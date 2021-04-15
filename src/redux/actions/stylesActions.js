import { STYLES_TOOGLE_THEME } from 'redux/types/themesTypes'

export const toogleTheme = () => (dispatch) =>
  dispatch({
    type: STYLES_TOOGLE_THEME,
  })
