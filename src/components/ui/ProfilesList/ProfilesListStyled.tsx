import { styled } from "styled-components";

export const ProfilesListStyled = styled.ul<{direction?: string, position?: string, right?: string}>`
display: flex;
flex-direction: ${(props)=> props.direction};
position: ${(props)=> props.position};
right: ${(props)=> props.right};
border-radius: 79px;
border: 1px solid var(--color-white);
padding: 8px 6px;
gap: 16px;
top: 10vh;

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
`