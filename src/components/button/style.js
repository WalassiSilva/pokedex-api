import styled from "styled-components";

export const Btn = styled.button`
    padding: 5px 10px;
    margin-top: 30px;
    margin-bottom: 10px;
    border-radius: 5px;
    color: red;
    background-color: ${props => props.theme.cardColor};
    cursor: pointer;
    font-weight: bold;
    transition: 0.2s ease;

    &:hover{
        background-color: #f008;
        color: #fff;
    }
`;