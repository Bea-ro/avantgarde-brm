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
`;