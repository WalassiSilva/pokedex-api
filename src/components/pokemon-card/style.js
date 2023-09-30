import styled from "styled-components";
export const Card = styled.div`

    background-color: ${props => props.theme.cardColor};
    width: 150px;
    height: 170px;
    text-align: center;
    padding: 8px 0;
    border-radius: 10px;
    justify-content: center;
    transition: 0.2s ease;

    &:hover {
        background-color: ${props => props.theme.hoverColor};
        transform: translateY(-10px);
    }

    img{
        max-width: 100%;
    }    
`;

export const Types = styled.div`
    display: flex;
    justify-content: center;
`;

export const Type = styled.p`
    width: 45%;
    margin: 0 auto;
    padding: 5px 10px;
    border-radius: 15px;
`;