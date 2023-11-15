import { styled } from "styled-components";

export const MobileMenuStyled = styled.ul<{mobileMenuIsOpen: boolean}>`
  display: ${(props) => props.mobileMenuIsOpen ? 'block' : 'none'}
`