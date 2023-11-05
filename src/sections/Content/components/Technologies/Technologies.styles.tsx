import styled from "styled-components";
import theme from "../../../../theme";

export const Wrapper = styled.div`
    max-width: ${theme.maxSize};
    margin: 0 auto;
    width: 100%;
    padding: 0 8rem;
`;

export const Title = styled.div`
    font-size: 4.5rem;
    color: ${theme.colors.white[100]};
    font-family: ${theme.fonts.family.Playfair};
    /* border-bottom: 2px solid ${theme.colors.white[20]}; */
    padding: 1rem 0;
`;

export const Subtitle = styled.span`
    font-size: 1.5rem;
    color: ${theme.colors.white[20]};
    font-family: ${theme.fonts.family.Playfair};
    margin-left: 1rem;
`;

export const SectionWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 4rem;
    border-top: 2px solid ${theme.colors.white[20]};
    padding-bottom: 3.5rem;
`;

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 1.5rem 0;
`;

export const SectionTitle = styled.div`
    font-size: 3rem;
    color: ${theme.colors.white[80]};
    font-family: ${theme.fonts.family.Playfair};
    line-height: 1;
`;

export const SectionDescription = styled.div`
    font-size: 1.3rem;
    font-family: ${theme.fonts.family.Alike};
    color: ${theme.colors.white[60]};
    max-width: 35rem;
`;

export const SectionEnd = styled.div`
    border-top: 2px solid ${theme.colors.white[20]};
    padding-top: 3rem;
    width: 100%;
`;