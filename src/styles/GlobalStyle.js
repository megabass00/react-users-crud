import { createGlobalStyle } from 'styled-components'
import Rajdhani from 'fonts/Rajdhani-Regular.ttf'

const GlobalStyle = createGlobalStyle`
	@font-face {
		font-family: 'Rajdhani';
		src: url(${Rajdhani}) format('truetype');
		font-weight: 300;
		font-style: normal;
		font-display: auto;
	}

	body {
		margin: 0;
		background: #25282a;
	}
`

export default GlobalStyle
