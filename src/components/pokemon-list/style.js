import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    width: 100%;
`;

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    h3{
        background-color: ${props => props.theme.bgColor};
        padding: 5px 10px;
        border-radius: 5px;
        border: 1px solid ;
        margin: 15px 0;
    }

`;

