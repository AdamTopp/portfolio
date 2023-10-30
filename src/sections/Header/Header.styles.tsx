import styled, { css } from "styled-components";
import theme from "../../theme";

export const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.red};
    cursor: default;
`;

export const Title = styled.div`
    white-space: nowrap;
    font-family: ${theme.fonts.family.Anton};
    font-size: min(350px, 22vw);
    line-height: 0.9;
    letter-spacing: -8px;
    color: ${theme.colors.white[0]};
    text-transform: uppercase;
`;

export const OutlineTitle = styled(Title)`
    position: relative;
    font-size: min(350px, 22vw);
    font-family: ${theme.fonts.family.PathwayGothic};
    -webkit-text-stroke: 2px ${theme.colors.white[0]};
    color: transparent;
    opacity: 35%;
`;

export const SubTitle = styled.div<{ top?: boolean }>`
    position: absolute;
    font-size: min(3vw, 45px);
    font-family: ${theme.fonts.family.Playfair};
    letter-spacing: 0;
    -webkit-text-stroke: 0;
    white-space: nowrap;
    text-transform: none;
    color: white;
    opacity: 100%;

    ${(props) => props.top ? css`
        bottom: min(6vw, 80px);
    ` : css`
        top: min(6vw, 80px);
    `}
`;

export const OutlineWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
`;
