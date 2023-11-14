import styled, { keyframes } from "styled-components";
import theme from "../../../../../theme";


const scroll = keyframes`
    to {
        transform: translate(calc(-50% - 1rem));
    }
`

export const SliderWrapper = styled.div`
    overflow: hidden;
    width: 100%;
    z-index: 0;
`;

export const SliderItem = styled.li`
    white-space: nowrap;
    font-size: 12rem;
    font-family: ${theme.fonts.family.PathwayGothic};
    -webkit-text-stroke: 1.5px ${theme.colors.white[0]};
    text-transform: uppercase;
    color: transparent;
    opacity: 35%;
    line-height: 0.85;
    list-style-type: none;
    cursor: default;
`;

export const SliderInner = styled.ul<{ reverse?: boolean, duration?: number }>`
    display: flex;
    gap: 2rem;
    width: fit-content;
    animation: ${scroll} 20s linear infinite;
    animation-duration: ${({ duration }) => duration ? duration : 40}s;
    animation-direction: ${({ reverse }) => reverse ? 'reverse' : 'forwards'};
`;
