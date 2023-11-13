import { createGlobalStyle } from "styled-components";


export const Global = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;900&display=swap');

:root {
  --color-primary: #503295;
  --color-secondary: #FFFFFF;

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

li {
 list-style-type: none;
}
`;