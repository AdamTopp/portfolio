import styled from "styled-components";

export const Grid = styled.div`
    display: grid;
    width: 100%;
    padding: 18vw 5vw;
    box-sizing: border-box;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    grid-column-gap: 10vw;
`;

export const NameWrapper = styled.div`
    grid-column: 1;
    grid-row: 1;
`;

export const ContentWrapper = styled.div`
    grid-column: 2;
    grid-row: 2;
`;

export const Underline = styled.div`
    grid-column: 1;
    grid-row: 2;
    border-top: 2px solid red;
`;

export const Title = styled.div`
    font-size: min(4rem, 4vw);
    color: white;
`;

export const Subtitle = styled(Title)`
    color: white;
`;

export const Content = styled.div`
    color: white;
    font-size: min(1.8rem, 1.8vw);
`;

export const Description = styled(Content)`
    color: #9A9A9A;
    font-size: min(1.6rem, 1.6vw);
`;

export const Pop = styled.span`
    color: red;
    margin: 0 6px;
    font-size: min(2rem, 2vw);
`;


// export const Wrapper = styled.div`
//     padding: 300px 0;
// `;

// export const Grid = styled.h2`
//     display: grid;
//     grid-template-columns: 1fr 1fr;

//     @media (max-width: 1024px) {
//         grid-template-columns: 1fr;
//     }
// `;

// export const Title = styled.h2`
//     color: white;
// `;

// export const Name = styled.h2`
//     color: #8B8B8B;
// `;

// export const Content = styled.h2`
//     color: #DADADA;
// `;

// export const Description = styled.h2`
//     color: #9A9A9A;
// `;