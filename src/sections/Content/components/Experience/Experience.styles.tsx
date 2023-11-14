import styled from "styled-components";
import theme from "../../../../theme";

export const Wrapper = styled.div`
    background-color: ${theme.colors.red};
    width: 100%;
    position: relative;
    align-self: flex-start;
`;

export const ContentWrapper = styled.div`
    max-width: 1500px;
    padding: 0 8rem;
    margin: 12rem auto;
`;

export const TextSection = styled.section`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10rem;
`;

export const Photo = styled.div`
    height: 400px;
    aspect-ratio: 3/4;
    background-color: #120f1421;
`;

export const Text = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 50%;
`;

export const Title = styled.div`
    font-size: 4rem;
    font-family: ${theme.fonts.family.Anton};
    text-transform: uppercase;
    margin-bottom: 2rem;
    letter-spacing: -0.15rem;
    line-height: 1;
`;

export const Subtitle = styled.div`
    font-size: 2.2rem;
    font-family: ${theme.fonts.family.Playfair};
    color: ${theme.colors.white[0]};;
    opacity: 35%;
    text-transform: uppercase;
`;

export const Content = styled.div`
    font-size: 1.5rem;
    font-family: ${theme.fonts.family.Alike};
    color: ${theme.colors.white[0]};
    opacity: 75%;
`;

export const SubContent = styled.div`
    font-family: ${theme.fonts.family.Alike};
    color: ${theme.colors.white[0]};
    opacity: 35%;
    font-size: 1.2rem;
    max-width: 70%;
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 2px solid ${theme.colors.white[0]};
`;

export const Header = styled.div`
    position: relative;
`;

export const HeaderTitle = styled.div`
    position: absolute;
    top: 50%;
    font-size: 20rem;
    color: ${theme.colors.white[0]};
    font-family: ${theme.fonts.family.Anton};
    transform: translate(-50%, -50%);
    left: 50%;
    text-transform: uppercase;
    cursor: default;
    pointer-events: none;
    background-color: ${theme.colors.red};
    line-height: 0.9;

    &::before {
        content: 'Experience';
        font-size: 2.5rem;
        color: white;
        font-family: ${theme.fonts.family.Playfair};
        position: absolute;
        right: 0;
        top: 0;
        transform: translateY(-100%);
        background-color: ${theme.colors.red};
    }
`;
