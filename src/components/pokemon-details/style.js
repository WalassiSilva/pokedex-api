import styled from "styled-components";

export const Container = styled.section`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 22px;
    letter-spacing: 1px;
    gap: 15px;

    h1{
        background-color: ${props => props.theme.bgColor}d;
        padding: 10px;
        border-radius: 15px;
    }
    
    h2{
        text-align: center;
        margin: 15px 0;
    }
`;

export const Card = styled.div`
    width: 200px;
    height: 250px;
    text-align: center;
    padding: 8px 0;
    border-radius: 10px;
    justify-content: center;
    margin: 20px;
    transition: 0.2s ease;

    img{
        max-width: 100%;
        padding: 15px 0;        
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

export const InfoContainer = styled.section`
    background-color: ${props => props.theme.cardColor};
    margin: 15px;
    margin-top: 100px;
    padding: 15px;
    width: 50%;   
    border-radius: 5px;

    div {
        display: flex;
        justify-content: space-around;

        div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }
`;


export const AbilitiesContainer = styled.section`
    background-color: ${props => props.theme.cardColor};
    margin: 15px;
    padding: 15px;
    border-radius: 5px;
    height: 250px;
    max-width: 750px;

`;
export const MovesContainer = styled.section`
    background-color: ${props => props.theme.cardColor};
    margin: 15px;
    padding: 15px;
    border-radius:5px ;
    max-width: 750px;
    height: 250px;
    overflow: scroll;
    overflow-x: hidden;

    
    ul{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 10px;
    }
    li{
        padding: 5px 10px;
        background-color: #4ad3e090;
        border-radius: 5px;
    }

`;