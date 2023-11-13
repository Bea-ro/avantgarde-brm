import { styled } from "styled-components";

export const ProjectCardStyled = styled.li`
border: 1px solid var(--color-secondary);
height: 350px;

img {
    height: 40%;
    width: 100%
}

.project-name-link {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
padding: 30px 40px 10px 40px;
height: 55%;
}

.project-name {
font-weight: 600;
font-size: 21px;
}

.project-link {
    text-transform: uppercase;
    font-size: 12px
}



`;