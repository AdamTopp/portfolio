import styled, {css, keyframes} from "styled-components";

const slide = keyframes`
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(-100%);
    }
`

export const SliderWrapper = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    height: 100%;
    align-items: center;
    font-size: min(8rem, 8vw);
    width: 100vw;
    overflow: hidden;
    white-space: nowrap;
    left: -5vw;
`;

export const MarqueeItem = styled.div`
    display: inline-block;
    animation: ${slide} 5s linear infinite;
    text-transform: uppercase;
    color: rgba(0, 0, 0, 0);
    -webkit-text-stroke: 1.5px #a02121;
`;

export const Title = styled.div`
    font-size: 3rem;
    font-size: min(3rem, 3vw);
`;

export const Description = styled.div`
    font-size: min(2rem, 1.5vw);
`;

export const TextBox = styled.div`
    &:hover {
        ${Title}, ${Description} {
            color: white;
        }
    }
`;

export const Row = styled.div`
    box-sizing: border-box;
    padding: 0 5vw;
    width: 100%;
    overflow: hidden;
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: min(25vw, 500px) min(25vw, 500px) min(25vw, 500px);
    justify-content: space-around;
    height: 100%;
    position: relative;
`;

export const GridItem = styled.div<{ cardActive: boolean }>`
    transition: all 300ms;
    z-index: 1;
    color: grey;
    ${(props) => props.cardActive && css`
        & {
            color: white;
        }
    `}
`;

export const PhotoWrapper = styled(GridItem)`
    background-color: #ff7f509e;
    aspect-ratio: 6/7;
    ${(props) => props.cardActive && css`
        & {
            background-color: green;
        }
    `}
`;
