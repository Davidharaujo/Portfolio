import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.section`
    color: white;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
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
        margin-right: 0vw;
        font-size: 3vh;
        text-align: end;
    }
`

export const CaixaEntrada = styled.div`
    margin: 30vh;

    @media screen and (max-width:620px){
        margin: 25vh 10vw
    }
`

export const TituloEntrada = styled.h1`
    font-size: 14vh;

    @media screen and (max-width:620px){
        font-size: 14vw;
    }
`

export const CaixaTexto = styled.div`
    margin: 0 18vw;
    display: flex;
    flex-direction: column;
    font-size: 5vh;
    gap: 2vh;
    
    
    a{
        text-decoration: none;
        color: #0077b6;
        transition: 0.3s;
    }

    a:hover{
        margin-left: 3vw;
    }
    

    @media screen and (max-width:620px){
        margin: 0 10vw;
        font-size: 7vw;
    }
`
export const Apresentacao = styled.h3`
    font-size: 7vh;
    font-weight: 500;
    margin-bottom: 2vh;
    color: white;

    @media screen and (max-width:620px){
        font-size: 8vw;
    }
`