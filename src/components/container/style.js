import styled from "styled-components";


export const Container = styled.div`
    height: 100vh;
    height: 100dvh; 
    overflow: scroll;
    overflow-x: hidden;
    color: ${props => props.theme.color};
    background: url(${props => props.theme.bgImage}) ${props => props.theme.position};
    position: relative;
    transition: all 0.3s ease;

    @media (max-width: 425px) {
    background: red ;
    background: url(${props => props.theme.bgImageSmall}) ${props => props.theme.positionSmall};;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center bottom;
    }
`;