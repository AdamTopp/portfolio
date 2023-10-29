import styled from "styled-components";

export const Grid = styled.div`
    display: grid;
    width: 100%;
    padding: 15vw 5vw 6vw 5vw;
    box-sizing: border-box;
    grid-template-columns: auto auto;
    grid-gap: 5vw;
`;

export const Column = styled.div`
`;

export const Content = styled.div`
    font-size: min(1.5rem, 1.5vw);
    text-wrap: balance;
`;

export const Description = styled(Content)`
    color: #9A9A9A;
    font-size: min(1.3rem, 1.3vw);
`;

export const Title = styled.div`
    font-size: min(4rem, 4vw);
    text-align: end;
    color: white;
`;

export const Subtitle = styled(Title)`
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 0 5vw;
    margin: 0 auto;
    gap: 1vw;
`;

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    border-left: 3px solid grey;
    padding-left: 20px;
    box-sizing: border-box;
`;

export const LeftGroup = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
`;

export const Position = styled.div`
    color: grey;
    font-size: min(1.8rem, 1.8vw);
`;

export const Company = styled.div`
    color: grey;
    font-size: min(1.8rem, 1.8vw);
`;

export const Year = styled.div`
    box-sizing: border-box;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 30px;
    font-size: min(2rem, 2vw);
    border: 2px solid grey;
    border-radius: 2px;
    color: grey;
    margin-right: 40px;
`;