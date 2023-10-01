import styled, {css, keyframes} from "styled-components";

const slide = keyframes`
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(0);
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
`;

export const MarqueeItem = styled.div`
    display: inline-block;
    animation: ${slide} 5s linear infinite;
    text-transform: uppercase;
    color: rgba(0, 0, 0, 0);
    -webkit-text-stroke: 1.5px #a02121;
`;

export const Title = styled.div`
    font-size: min(2.6rem, 2.6vw);
`;

export const Description = styled.div`
    font-size: min(1.8rem, 1.8vw);
`;

export const Row = styled.div`
    box-sizing: border-box;
    width: 100%;
    overflow: hidden;
`;

export const GridItem = styled.div<{ cardActive: boolean, codeSection?: boolean }>`
    transition: all 300ms;
    z-index: 1;
    color: grey;
    ${(props) => props.cardActive && css`
        color: white;
    `}

    @media (max-width: 1024px) {
        ${(props) => props.codeSection && css`
            order: 3;
        `}
    }
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

export const Grid = styled.div`
    display: grid;
    grid-template-columns: min(25vw, 500px) min(25vw, 500px) min(25vw, 500px);
    justify-content: space-around;
    height: 100%;
    position: relative;
    padding: 0 5vw;

    @media (max-width: 1024px) {
        grid-template-columns: min(90vw, 500px);
        grid-row-gap: 60px;
        ${Title} {
            font-size: 2.6rem;
        }

        ${Description} {
            font-size: 1.8rem;
        }
    }
`;

export const PhotoGrid = styled(Grid)`
    @media (max-width: 1024px) {
        padding: 0;
        justify-content: flex-start;
        ${PhotoWrapper} {
            display: none;
        }

        ${SliderWrapper} {
            position: initial;
        }
    }
`;