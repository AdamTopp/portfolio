import styled from "styled-components";

export const DescriptionWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 10vw 5vw;
    margin: 0 auto;
    gap: 15vw;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.div`
    font-size: min(4rem, 4vw);
    display: inline-block;
    align-self: flex-end;
    color: white;
    white-space: nowrap;
`;

export const SubTitle = styled.div`
    font-size: min(4rem, 4vw);
    display: inline-block;
    align-self: flex-end;
    color: #8B8B8B;
    white-space: nowrap;
`;

export const Content = styled.h2`
    color: #DADADA;
    font-size: min(2rem, 2vw);
`;

export const Description = styled.h2`
    color: #9A9A9A;
    font-size: min(2rem, 2vw);
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