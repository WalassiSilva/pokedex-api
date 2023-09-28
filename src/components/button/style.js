import styled from "styled-components";

export const Btn = styled.button`
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    color: red;
    background-color: ${props => props.theme.cardColor};
    font-weight: bold;
    transition: 0.2s ease;

    &:hover{
        background-color: #f008;
        color: #fff;
    }
`;