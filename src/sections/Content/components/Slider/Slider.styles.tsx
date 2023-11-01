import styled, { keyframes } from "styled-components";
import theme from "../../../../theme";


const scroll = keyframes`
    to {
        transform: translate(calc(-50% - 1rem));
    }
`

export const Wrapper = styled.div`
    position: relative;
    align-self: flex-start;
    width: 100%;
    max-width: 100vw;
    margin-bottom: 33rem;
`;

export const SliderWrapper = styled.div<{ imageSize: number }>`
    position: absolute;
    overflow: hidden;
    transform: translateY(-50%);
    top: ${(props) => props.imageSize / 2}px;
    z-index: 0;
`;

export const SliderItem = styled.li`
    white-space: nowrap;
    font-size: 7rem;
    font-family: ${theme.fonts.family.PathwayGothic};
    -webkit-text-stroke: 1.5px ${theme.colors.red};
    text-transform: uppercase;
    color: transparent;
    cursor: default;
`;

export const SliderInner = styled.ul`
    display: flex;
    gap: 2rem;
    width: fit-content;
    padding-block: 1rem;
    animation: ${scroll} 20s linear infinite;
`;

export const ImageWrapper = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    align-self: center;
    justify-content: center;
    z-index: 1;
`;

export const ImageGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto auto;
    grid-column-gap: 7vw;
    width: 100%;
    max-width: ${theme.maxSize};
    padding: 0 8rem;
`;

export const ImageSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: solid 2px ${theme.colors.white[20]};
    margin-bottom: 16px;
    aspect-ratio: 3/4;
`;

export const Image = styled.div<{ active: boolean, angle: string }>`
    width: 75%;
    aspect-ratio: 3/4;
    background-color: #da91917b;
    transition: all 400ms ease-out;
    transform: ${(props) => props.active ? 'scale(1)' : 'scale(0.9)'};
    opacity: ${(props) => props.active ? 100 : 0};
    rotate: ${({active, angle}) => active ? angle : '0deg'};
`;

export const Descritpion = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0.1rem;
`;

export const Title = styled.span<{ active?: boolean }>`
    width: fit-content;
    margin-bottom: 1rem;
    border-bottom: 2px solid ${({ active }) => active ? theme.colors.red : 'transparent'};
    font-size: min(2.6rem, 3vw);
    font-family: ${theme.fonts.family.Playfair};
    color: ${(props) => props.active ? theme.colors.white[100] : theme.colors.white[20]};
    transition: all 250ms;
    cursor: default;
`;

export const Text = styled.div<{ active?: boolean }>`
    margin-bottom: 16px;
    font-size: 1.3rem;
    font-family: ${theme.fonts.family.Playfair};
    color: ${(props) => props.active ? theme.colors.white[80] : theme.colors.white[20]};
    transition: color 250ms;
    cursor: default;
`;