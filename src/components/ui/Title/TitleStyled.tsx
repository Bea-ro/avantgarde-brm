import { styled } from "styled-components";

export const TitleStyled = styled.h3<{fontSize?: string}>`
   font-size: ${(props) => props.fontSize || '1.6875em'};
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -0.02em;
    max-width: 70%;
    align-self: center
    `