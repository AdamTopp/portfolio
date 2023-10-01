import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #0000ff88;
    box-sizing: border-box;
    padding: 10vw 3vw;
    margin: 0 auto;
    gap: 4vw;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 35vw;
    background-color: orange;
`;

export const Title = styled.div`
    font-size: min(4rem, 4vw);
    display: inline-block;
    align-self: flex-end;
    color: white;
`;

export const SubTitle = styled.div`
    font-size: min(4rem, 4vw);
    display: inline-block;
    align-self: flex-end;
    color: #8B8B8B;
`;

export const Content = styled.h2`
    color: #DADADA;
    font-size: min(2rem, 2vw);
`;

export const Description = styled.h2`
    color: #9A9A9A;
    font-size: min(2rem, 2vw);
`;