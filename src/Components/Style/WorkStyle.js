import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.section`
    color: white;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 10vh;
`
export const Links = styled(Link)`
    width: 30vh;
    height: 7vh;
    font-size: 3.5vh;
    font-weight: 800;
    color: white;
    background-color: transparent;
    border: 0;
    position: fixed;
    align-self: flex-end;
    margin-top: 10vh;
    text-decoration: none;
    transition: 0.3s;

    span{
        opacity: 0;
        color: #0077b6;
    }
    &:hover span{
        opacity: 1;
    }
    &:hover{
        margin-right: 4vh;
    }

    @media screen and (max-width:620px){
        margin-top: 5vh;
        margin-right: 2vw;
        font-size: 4vh;
    }
`

export const Caixa = styled.div`
    margin: 4vh 13vh;
    display: flex;
    flex-direction: column;
    gap: 2vh;

    a{
        text-decoration: none;
        color: white;
    }

    .pagina{
        font-size: 10vh;
        font-weight: 700;
        transition: 0.2s;
    }

    .pagina:hover{
        margin-left: 3vh;
    }
`

export const Paragrafo = styled.p`
    color: #0077b6;
    font-size: 3vh;
    font-weight: 500;
`