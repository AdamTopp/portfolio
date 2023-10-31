import styled, { keyframes } from "styled-components";
import theme from "../../../../theme";


const scroll = keyframes`
    to {
        transform: translate(calc(-50% - 1rem));
    }
`

export const Wrapper = styled.div`
    align-self: flex-start;
`;

export const SliderWrapper = styled.div`
    overflow: hidden;
`;

export const SliderItem = styled.li`
    font-size: 100px;
    font-family: ${theme.fonts.family.PathwayGothic};
    -webkit-text-stroke: 1.5px ${theme.colors.red};
    color: transparent;
    text-transform: uppercase;
    white-space: nowrap;
`;

export const SliderInner = styled.ul`
    display: flex;
    gap: 2rem;
    padding-block: 1rem;
    animation: ${scroll} 20s linear infinite;
    width: fit-content;
`;