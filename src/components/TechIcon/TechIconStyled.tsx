import { styled } from "styled-components";

export const TechIconStyled = styled.li`
figure {
    height: 90px;
    width: 90px;
    border-radius: 50%;
    border: 1.5px solid var(--color-white);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 6px
}

figure > img {
    height: 50%;
}

figure > p {
    font-size: 12px;
    font-weight: 600;
}
`;