import { styled } from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-around;
  padding: 30px 20px;
  text-transform: uppercase;
  letter-spacing: 2.1px;
  position: relative;

.personal-logo {
font-weight: 600
}

a {
    font-size: 14px;
    font-weight: 500
}

.contact-link:hover {
border-bottom: 1px solid var(--color-white)
}

.burguer-menu {
display: none;
font-weight: 500;
background-color: var(--color-pink);
padding: 6px;
border-radius: 3px;
}

@media screen and (max-width: 567px) {
  justify-content: space-between;

  .burguer-menu {
display: block
  }
.contact-link, .burguer-hidden {
display: none
}

}

`;