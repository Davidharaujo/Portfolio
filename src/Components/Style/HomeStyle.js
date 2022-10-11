import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.section`
    display: flex;
    width: 100vw;
    height: 100vh;
    align-items: center;

    @media screen and (max-width:520px){
        flex-direction: column-reverse;
        justify-content: center;
    }
`

export const Navigation = styled.nav`
    display: flex;
    width: 50%;

    @media screen and (max-width:520px){
        width: 70%;
    }
`
export const Menu = styled.div`
    display: flex;
    list-style: none;
    height: 100vh;
    width: 100%;
    flex-direction: column;
    justify-content:center;
    align-items: flex-end;

    div{
        display: flex;
        width: 50%;
        height:15vh;
        flex-direction: column;
    }

    @media screen and (max-width:620px){
        height: 40vh;

        div{
            width: 100%;
            height: 12vh;
        }
    }
`
export const Links = styled(Link)`
    font-size: 10vh;
    text-decoration: none;
    color: white;
    font-weight: 600;
    cursor: pointer;
    position: absolute;

     &.open1, &.hide1 {
        color: #0077b6;
    }

    &.hide1, &.hide2, &.hide3 {
        animation: fadeOut 2s linear;
        animation-fill-mode: forwards;
        transition: 0.2s;
    }

    @keyframes fadeOut {
        0% {opacity:0; margin:0}
        99% {opacity:0; margin:0}
        100% {opacity:1; margin-left:0}
    }


    &.hide1:hover, &.hide2:hover, &.hide3:hover {
        padding-left: 20px;
    }

    &.open1, &.open2, &.open3{
        animation: fadeIn 2s linear;
        animation-fill-mode: forwards;
    }
    
    @keyframes fadeIn{
        0% {opacity:0; margin:0}
        50% {opacity:1; margin-left:20px}
        90% {opacity:1; margin-left:20px}
        100% {opacity:0; margin-left:20px}
    }
 
    @media screen and (max-width:620px){
        font-size: 8vh;

        &.hide1, &.hide2, &.hide3 {
            align-self: flex-start;
        }
        
        @keyframes fadeIn{
        0% {opacity:0}
        50% {opacity:1}
        90% {opacity:1}
        100% {opacity:0}
    }
    }
`

export const Image = styled.img`
    width: 25%;

    @media screen and (max-width:620px){
        width: 40%;
    }
`
