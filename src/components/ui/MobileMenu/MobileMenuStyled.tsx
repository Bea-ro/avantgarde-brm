import { styled } from "styled-components";

export const MobileMenuStyled = styled.div<{mobileMenuIsOpen: boolean}>`
  display: ${(props) => props.mobileMenuIsOpen ? 'block' : 'none'};
  min-width: 90%;
  height: 100vh;
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  background: linear-gradient(360deg,var(--color-pink) 0%,var(--color-blue) 100%);

  div, ul {
    padding: 20px 10px
  }

  div {
    display: flex;
  justify-content: space-between;
  }

  ul {
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  }
  span {
    border: 1px solid black;
    background-color: var(--color-purple);
    padding: 10px 14px;
    font-weight: 700;
    border-radius: 2px;
    text-align: center;
  }
`