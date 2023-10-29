import styled from "styled-components";

export const Grid = styled.div`
    display: grid;
    width: 100%;
    padding: 18vw 5vw;
    box-sizing: border-box;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    grid-column-gap: 5vw;

    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
    }
`;

export const NameWrapper = styled.div`
    grid-column: 1;
    grid-row: 1;
    @media (max-width: 1024px) {
        grid-column: auto;
        grid-row: auto;
    }
`;

export const ContentWrapper = styled.div`
    grid-column: 2;
    grid-row: 2;

    @media (max-width: 1024px) {
        grid-column: auto;
        grid-row: auto;
    }
`;

export const Underline = styled.div`
    grid-column: 1;
    grid-row: 2;
    border-top: 2px solid red;
`;

export const Title = styled.div`
    font-size: min(4rem, 4vw);
    color: white;
`;

export const Subtitle = styled(Title)`
    color: white;
`;

export const Content = styled.div`
    color: white;
    font-size: min(1.5rem, 1.5vw);
`;

export const Description = styled(Content)`
    color: #9A9A9A;
    font-size: min(1.3rem, 1.3vw);
`;

export const Pop = styled.span`
    color: red;
    margin: 0 6px;
    font-size: min(2rem, 2vw);
`;
