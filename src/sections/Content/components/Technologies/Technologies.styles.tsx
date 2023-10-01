import styled, { keyframes } from "styled-components";

const draw = keyframes`
    to {
        stroke-dashoffset: 0;
    }
`

const slide = keyframes`
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(-100%);
    }
`

export const Logos = styled.div`
    overflow: hidden;
    padding: 40px 0;
    white-space: nowrap;
`;

export const LogosSlider = styled.div`
    display: inline-block;
    white-space: nowrap;
    animation: 5s ${slide} infinite linear;
    img {
        opacity: 0.5;
        height: 5vw;
        margin: 0 70px;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    padding: 2vw 25vw;

    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    path {
        stroke-dasharray: 7598;
        stroke-dashoffset: 7598;
        animation: ${draw} 2500ms linear forwards;
    }
`;
