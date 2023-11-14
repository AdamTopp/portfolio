import styled from "styled-components";
import theme from "../../theme";

export const Wrapper = styled.div`
    width: 100%;
    background-color: ${theme.colors.white[0]};
    align-items: center;
    padding: 5rem 4rem;
    display: flex;
    flex-direction: column;
`;

export const Content = styled.div`
    width: 100%;
    max-width: ${theme.maxSize};
`;

export const Title = styled.div`
    display: flex;
    align-items: center;
    font-size: 4rem;
    gap: 1rem;
    font-family: ${theme.fonts.family.PathwayGothic};
    color: ${theme.colors.white[100]};
    white-space: nowrap;
    text-transform: uppercase;
`;

export const Arrows = styled.div`
    display: flex;
    align-items: center;

    svg {
        height: 2.5rem;
    }

    svg path {
        stroke-width: 3;
    }

    svg:nth-child(2) {
        opacity: 50%;
    }

    svg:nth-child(3) {
        opacity: 25%;
    }
`;

export const SubTitle = styled(Title)`
    font-size: 2.6rem;
    font-family: ${theme.fonts.family.Playfair};
    color: ${theme.colors.white[60]};
`;

export const DescriptionSection = styled.section`
    display: flex;
    width: 100%;
    max-width: ${theme.maxSize};
    margin-top: 3rem;
    align-items: center;
    gap: 2rem;
`;

export const Description = styled.div`
    width: 100%;
    font-size: 1.2rem;
    font-family: ${theme.fonts.family.Alike};
    color: ${theme.colors.white[80]};
    max-width: 750px;
`;

export const DescriptionWrapper = styled.div`
    width: 100%;
`;

export const Pill = styled.div`
    border: 2px solid ${theme.colors.white[40]};
    font-size: 1.2rem;
    font-family: ${theme.fonts.family.Alike};
    color: ${theme.colors.white[40]};
    padding: 1rem 2rem;
    border-radius: 5rem;
    white-space: nowrap;
`;

export const Links = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: ${theme.maxSize};
    margin-top: 6rem;
`;

export const LinkTitle = styled.div`
    font-family: ${theme.fonts.family.Playfair};
    font-size: 1.4rem;
    color: ${theme.colors.white[100]};
    margin-bottom: 0.5rem;
`;

export const Link = styled.a`
    font-family: ${theme.fonts.family.Alike};
    font-size: 1.2rem;
    color: ${theme.colors.white[40]};
    margin-right: 2rem;
    text-decoration: none;
`;

export const Section = styled.section`
    
`;
