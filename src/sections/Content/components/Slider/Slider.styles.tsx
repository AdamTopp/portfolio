import styled, {keyframes} from "styled-components";

export const Row = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
    box-sizing: border-box;
    overflow: hidden;
`;

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
    font-size: min(8rem, 8vw);
    align-items: center;
    width: 100vw;

    overflow: hidden;
    white-space: nowrap;

    transform: translateY(-6vw);
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
    font-size: 1.6rem;
    font-size: min(1.6rem, 1.6vw);
`;

export const PhotoCard = styled.div`
    border: coral 1px solid;
    width: 100%;
    aspect-ratio: 6/7;
`;

export const TextBox = styled.div`
    &:hover {
        ${Title}, ${Description} {
            color: white;
        }

        ${PhotoCard} {
            border: white 1px solid;
        }
    }
`;

export const GridRow = styled.div`
    display: grid;
    flex: 1;
    max-width: 1500px;
    margin: 0 6vw;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 6vw;
    z-index: 1;

    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
    }
`;
