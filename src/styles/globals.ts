import { createGlobalStyle } from "styled-components";


export const Global = createGlobalStyle<{path: string}>`

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;900&display=swap');

@keyframes pulse {
  0% {
    transform: scale(1); 
  }
  100% {
    transform: scale(1.1); 
  }
}

:root {
  --color-violet: #503295;
  --color-white: #FFFFFF;
  --color-pink: #D2409C;
  --color-purple: #703A94;
  --color-blue: #2F2A95;
  --color-light-blue: #3574E3;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}


* {
  box-sizing: border-box;
  margin: 0;
  border: none;
  outline: none;
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.1em;
  font-style: normal;
  background: transparent;
  color: ${(props) => 
  props.path === 'contacto' ? 'var(--color-blue)' : 'var(--color-white)'};
}

body {
  background: ${(props) => props.path === ''? 
  'linear-gradient(360deg,var(--color-pink) 0%,var(--color-violet) 100%)' : 
  props.path === 'work' ? 'linear-gradient(360deg,var(--color-blue) 0%,var(--color-purple) 100%)' :
  props.path === 'who' ? 'linear-gradient(360deg,var(--color-purple) 0%,var(--color-pink) 100%)' : 
  'transparent'};
}

a {
  text-decoration: none;
}

ul {
  padding-left: 0
}

li {
 list-style-type: none;
}

.button {
  border-radius: 39px;
  border: 1px solid var(--color-white);
  text-transform: uppercase;
  font-size: 15px;
  padding: 12px 22px
}
`;