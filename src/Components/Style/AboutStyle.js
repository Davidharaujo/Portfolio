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
    width: 30vw;
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
        margin: 20vh 5vw
    }
`

export const TituloEntrada = styled.h1`
    font-size: 14vh;

    @media screen and (max-width:620px){
        font-size: 12vw;
        line-height: 130%;
    }
`

export const CaixaTexto = styled.div`
    margin: 0 18vw;
    

    @media screen and (max-width:620px){
        margin: 0 10vw;
    }
`
export const Sobre = styled.h2`
    font-size: 7vh;
`

export const Apresentacao = styled.h3`
    font-size: 4vh;
    font-weight: 500;
    margin-bottom: 2vh;

    @media screen and (max-width:620px){
        font-size: 9vw;
    }
`

export const Paragrafo = styled.p`
    font-size: 3vh;
    margin-bottom: 2vh;

    @media screen and (max-width:620px){
        font-size: 6vw;
    }
`

export const CaixaFig = styled.figure`
    margin: 0 18vw;

    @media screen and (max-width:620px){
        margin: 0 8vw;
    }
`

export const Foco  = styled.figcaption`
    font-size: 3vh;
    padding: 1vh;
    background-color: #0077b6;

    @media screen and (max-width:620px){
        font-size: 6vw;
        background-color: transparent;
    }
`

export const Image = styled.img`
    width: 28vw;
    height: 85vh;
    padding: 2vh;
    background-color: #0077b6;
    border-radius: 15px 2px;
    position: float;
    float: inline-end;
    
    @media screen and (max-width:620px){
        display: none;
    }

`