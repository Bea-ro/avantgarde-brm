import { styled } from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-around;
  padding: 20px;
  text-transform: uppercase;
  position: relative;

.personal-logo {
font-weight: 600
}

.profiles-list {
  display: flex;
flex-direction: column;
border-radius: 79px;
border: 1px solid var(--color-secondary);
padding: 8px 6px;
gap: 16px;
right: 0;
top: 10vh;
position: fixed
}

a {
    font-size: 14px;
    font-weight: 500
}

img {
  height: 25px;
  transition: transform 0.3s ease;
}
img:hover {
  animation: pulse 0.4s infinite alternate;
}
`;