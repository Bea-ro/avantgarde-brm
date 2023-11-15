import { styled } from "styled-components";

export const ProjectsListStyled = styled.ul<{padding?: string}>`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    padding: ${ (props) => props.padding} ;

    @media screen and (max-width: 567px) {
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  }
`;