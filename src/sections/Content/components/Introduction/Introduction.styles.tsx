import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 300px 0;
`;

export const Grid = styled.h2`
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
    }
`;

export const Title = styled.h2`
    color: white;
`;

export const Name = styled.h2`
    color: #8B8B8B;
`;

export const Content = styled.h2`
    color: #DADADA;
`;

export const Description = styled.h2`
    color: #9A9A9A;
`;