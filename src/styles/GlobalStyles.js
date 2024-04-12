import { createGlobalStyle } from 'styled-components'


export const GlobalStyles = createGlobalStyle`
	:root {
	font-family: Quicksand, system-ui, Avenir, Helvetica, Arial, sans-serif;
	line-height: 1.5;
	font-weight: 400;

	color-scheme: light dark;
	color: rgba(255, 255, 255, 0.87);
	background-color: #1b1b1b;

	font-synthesis: none;
	text-rendering: optimizeLegibility;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	} 

	body {
		margin: 0;
		display: flex;
		min-width: 320px;
		min-height: 100vh;
	}

	#root {
		max-width: 1280px;
		margin: 0 auto;
		padding: 2rem;
		text-align: center;
	}

	hr {
		opacity: 0.03;
	}
`