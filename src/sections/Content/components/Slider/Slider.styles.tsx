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
    max-width: 100vw;
    width: 100%;
    margin-bottom: 33rem;
`;

export const SliderWrapper = styled.div<{ imageSize: number }>`
    position: absolute;
    overflow: hidden;
    top: ${(props) => props.imageSize / 2}px;
    transform: translateY(-50%);
    z-index: 0;
`;

export const SliderItem = styled.li`
    font-size: 120px;
    font-family: ${theme.fonts.family.PathwayGothic};
    -webkit-text-stroke: 1.5px ${theme.colors.red};
    color: transparent;
    text-transform: uppercase;
    white-space: nowrap;
    cursor: default;
`;

export const SliderInner = styled.ul`
    display: flex;
    gap: 2rem;
    padding-block: 1rem;
    animation: ${scroll} 20s linear infinite;
    width: fit-content;
`;

export const ImageWrapper = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    align-self: center;
    justify-content: center;
    z-index: 1;
`;

export const ImageGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto auto;
    padding: 0 8rem;
    grid-column-gap: 7vw;
    max-width: ${theme.maxSize};
    width: 100%;
`;

export const ImageSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    aspect-ratio: 3/4;
    border-bottom: solid 2px ${theme.colors.white[20]};
    margin-bottom: 16px;
`;

export const Image = styled.div<{ active: boolean, angle: string }>`
    width: 75%;
    aspect-ratio: 3/4;
    background-color: #da91917b;
    transition: all 400ms ease-out;
    transform: ${(props) => props.active ? 'scale(1)' : 'scale(0.9)'};
    /* transition: rotate 500ms ease-out; */
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
    transition: all 250ms;
    font-size: min(2.6rem, 3vw);
    font-family: ${theme.fonts.family.Playfair};
    border-bottom: 2px solid ${({ active }) => active ? theme.colors.red : 'transparent'};
    color: ${(props) => props.active ? theme.colors.white[100] : theme.colors.white[20]};
    margin-bottom: 1rem;
    cursor: default;
`;

export const Text = styled.div<{ active?: boolean }>`
    transition: color 250ms;
    font-size: 1.3rem;
    font-family: ${theme.fonts.family.Playfair};
    color: ${(props) => props.active ? theme.colors.white[80] : theme.colors.white[20]};
    margin-bottom: 16px;
    cursor: default;
`;