import styled from "styled-components";

export const Header = styled.header`
    height: 80px;
    width: 95%;
    max-width: 1980px;
    display: flex;
    justify-content: space-between;
    text-align: center;
    align-items: center;
    padding: 8px;
    position: sticky;
    top: 0;
    
    
    img{
        height: 100%;
        max-width: 150px;
        transition: 0.3s ease;
        cursor: pointer;
    }
    &>img{
        width: 40px;
        height: 40px;

        &:active{
            content: url('https://cdn-icons-png.flaticon.com/512/188/188954.png');
        }
    }

    img:hover{
        transform: scale(1.1);
    }

    a { 
        img{
            animation: pulse 1.5s ease-in-out ;
        }
    }

    @keyframes pulse {
        0% {
            transform: scale(0);
        }
    }

`