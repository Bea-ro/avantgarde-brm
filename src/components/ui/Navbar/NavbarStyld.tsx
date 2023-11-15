import { styled } from "styled-components";

export const NavbarStyled = styled.nav`
  
  ul {
    display: flex;
  gap: 30px;
  }

  a {
  padding: 8px 10px
}

a:hover {
border-bottom: 1px solid var(--color-white)
}

@media screen and (max-width: 567px) {
display: none
}
`