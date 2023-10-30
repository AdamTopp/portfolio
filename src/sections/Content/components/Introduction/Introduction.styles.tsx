import styled from "styled-components";
import theme from "../../../../theme";

export const Grid = styled.div`
    width: 100%;
    max-width: ${theme.maxSize};
    padding: 35rem 8rem;

    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    grid-column-gap: 6rem;
`;

export const ContentWrapper = styled.section`
    grid-row: 2;
    grid-column: 2;
`;

export const NameWrapper = styled(ContentWrapper)`
    grid-row: 1;
    grid-column: 1;
`;

export const Hello = styled.div`
    font-size: 2.2rem;
    line-height: 1;
    text-transform: uppercase;
    font-family: ${theme.fonts.family.Playfair};
    color: ${theme.colors.white[60]};
`;

export const NameContainer = styled(Hello)`
    font-size: 3.5rem;
    color: ${theme.colors.white[100]};
`;

export const Surname = styled.span`
    position: relative;
    margin-left: 1rem;
    z-index: 1;

    &::before {
        content: url('./Underline.svg');
        position: absolute;
        width: 100%;
        bottom: -1.5rem;
        z-index: -1;
    }
`;

export const Content = styled.div`
    font-size: 1.5rem;
    line-height: 130%;
    font-family: ${theme.fonts.family.Alike};
    color: ${theme.colors.white[80]};
`;

export const Footer = styled.div`
    width: 70%;
    margin-top: 3rem;
    padding-top: 1rem;
    border-top: 2px solid ${theme.colors.white[20]};

    font-size: 1.1rem;
    line-height: 125%;
    font-family: ${theme.fonts.family.Alike};
    color: ${theme.colors.white[60]};
`;
