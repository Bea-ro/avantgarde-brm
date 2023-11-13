import { styled } from "styled-components";

export const HomeStyled = styled.main`

display: flex;
flex-direction: column;
align-items: center;

section {
    display: flex;
    flex-direction: column;
    align-items: center;
padding: 20px

}

.text-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: center;
    padding: 40px 0 30px 0;
}

.uppercase-text {
text-transform: uppercase;
font-size: 14px;
letter-spacing: 2.1px;
padding: 30px
}

h3 {
    font-size: 1.6875em;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -0.02em
}

.personal-description {
    padding: 30px
}

.techs-list {
    display: flex;
    justify-content: center;
    width: 75%;
    flex-wrap: wrap;
    gap: 30px;
}
.projects-list {
    display: flex;
    justify-content: center;
    gap: 30px;
    padding: 20px
}
`;