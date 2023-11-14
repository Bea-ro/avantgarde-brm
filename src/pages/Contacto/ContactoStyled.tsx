import { styled } from "styled-components";

export const ContactoStyled = styled.main`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
color: var(--color-blue);
height: 75vh;
text-align: center;

.hablamos {
    display: flex;
flex-direction: column;
}

.contact-details {
    display: flex;
    justify-content: space-around;
 min-width: 50%;
}

.contact-details > div {
    display: flex;
    flex-direction: column;
    align-items: center;
}

a {
color: var(--color-pink); 
}

.mail {
    font-weight: 600
}

li {
    background-color: var(--color-blue);
    border-radius: 50%;
    padding: 2px 2px 0 2px
}
`;