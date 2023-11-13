import { createGlobalStyle } from "styled-components";


export const Global = createGlobalStyle`

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
  --color-primary: #503295;
  --color-secondary: #FFFFFF;
  --color-tertiary: #D2409C;

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
  background-color: var(--color-primary);
  color: var(--color-secondary)
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
  border: 1px solid var(--color-secondary);
  text-transform: uppercase;
  font-size: 15px;
  padding: 12px 22px
}
`;