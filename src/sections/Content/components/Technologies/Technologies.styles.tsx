import styled, { keyframes } from "styled-components";

const draw = keyframes`
    to {
        stroke-dashoffset: 0;
    }
`

export const Wrapper = styled.div`
    display: flex;
    padding: 5vw 5vw;

    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    path {
        width: 100vw;
        stroke-dasharray: 7598;
        stroke-dashoffset: 7598;
        animation: ${draw} 2500ms linear forwards;
    }
`;
