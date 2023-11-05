import styled from "styled-components";
import theme from "../../theme";


export const Wrapper = styled.table`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: ${theme.maxSize};
`;

export const Column = styled.td<{ dark: boolean }>`
    color: ${({ dark }) => dark ? theme.colors.white[0] : theme.colors.white[20]};
    font-size: 1.5rem;
    font-family: ${theme.fonts.family.Alike};
    padding: 0.9rem 0;
    transition: all 100ms;
    white-space: nowrap;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;

    &:nth-child(1) {
        overflow: visible;
        width: fit-content;
        padding-right: 6rem;
    }

    &:last-child {
        text-align: end;
    }
`;

export const Row = styled.tr<{ dark: boolean }>`
    display: flex;
    justify-content: space-between;
    padding: 0 0.5rem;
    align-items: center;
    border-bottom: 2px solid ${({ dark }) => dark ? theme.colors.white[0] : theme.colors.white[20]};
    opacity: ${({ dark }) => dark ? '45%' : '100%'};
    transition: all 100ms;
    cursor: pointer;

    &:hover {
        border-bottom: 2px solid ${({ dark }) => dark ? theme.colors.white[100] : theme.colors.white[60]};
        opacity: 100%;

        ${Column} {
            color: ${({ dark }) => dark ? theme.colors.white[100] : theme.colors.white[80]};
        }
    }
`;