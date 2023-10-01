import styled, { keyframes } from "styled-components";

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
    width: 100vw;
    margin-top: 150px;
    padding: 20px 0;
    white-space: nowrap;
    background-color: red;
    border-radius: 0 0 60px 60px;
`;

export const LogosSlider = styled.div`
    display: inline-block;
    white-space: nowrap;
    animation: 7s ${slide} infinite linear;
    img {
        opacity: 0.5;
        height: 5vw;
        margin: 0 70px;
    }
`;

export const Text = styled.div`
    display: inline-block;
    color: black;
    font-size: min(3rem, 3vw);
    margin-right: 2vw;
    text-transform: uppercase;
`;