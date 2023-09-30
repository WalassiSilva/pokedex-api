import styled from "styled-components";

export const Search = styled.div`
    input {
        padding: 5px;
        border: 1px solid transparent;
        border-radius: 5px;
        background-color: #f007;
        color: ${props => props.theme.color};
        position: relative;

        &:hover{
            border: 1px solid #ccc;
        }
        &::placeholder{
            color: ${props => props.theme.color};
        
        }    
    }

    button {
        border-radius:5px;
        background-color: transparent;
        border: 1px solid transparent;
        padding: 5px;
        cursor: pointer;

        &:active{
            border: 1px solid red;
        }
    }
`;

export const PokemonResult = styled.div``;