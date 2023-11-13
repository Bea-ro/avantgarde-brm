import { styled } from "styled-components";

export const TitleStyled = styled.h3<{align?: string}>`
   font-size: 1.6875em;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -0.02em;
    text-align: ${(props) => props.align || 'center'}
`