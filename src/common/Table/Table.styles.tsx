import styled from "styled-components";
import theme from "../../theme";


export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: ${theme.maxSize};
`;

export const Column = styled.div`
    color: ${theme.colors.white[20]};
    font-size: 1.5rem;
    font-family: ${theme.fonts.family.Playfair};
    padding: 0.9rem 0;
    transition: all 100ms;

`;

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 0.5rem;
    align-items: center;
    border-bottom: 2px solid ${theme.colors.white[20]};
    transition: all 300ms;
    cursor: default;

    &:hover {
        border-bottom: 2px solid ${theme.colors.white[60]};

        ${Column} {
            color: ${theme.colors.white[80]};
        }
    }
`;