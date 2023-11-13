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

.personal-img {
    height: 40vh;
    border-radius: 50%
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
`;