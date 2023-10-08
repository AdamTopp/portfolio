import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform-style: preserve-3d;
    z-index: -1;
    background-color: #752121;
    height: 100vh;
`;

export const ContentWrapper = styled.div<{ paralaxSpeed: string }>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: translateY(${(props) => props.paralaxSpeed});
    
`;

export const Title = styled.h1`
    font-family: Pathway Gothic One;
    white-space: nowrap;
    color: black;
    position: relative;
    font-size: min(19rem, 19vw);
    margin: 0;
    text-align: center;

    letter-spacing: -8px;
    text-transform: uppercase;
    &::before, &::after {
        content: "Hi I'm Adam";
        white-space: nowrap;
        display: block;
        position: absolute;
        top:0;
        color: rgba(0, 0, 0, 0);
        -webkit-text-stroke: 1.5px #161616;
        z-index: -1;
    }

    &::before {
        transform: translateY(calc(min(14rem, 17vw) * -1));
    }

    &::after {
        transform: translateY(min(14rem, 17vw));
    }
`;

export const SubTitle = styled.h2`
    color: white;
    font-size: min(2rem, 4vw);
    z-index: 1;
`;
