import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    background-image: linear-gradient(135deg, #02010a,#04052e);
    width: 100%;
    height: 100%;
    font-family: 'Jost', sans-serif;;
}
`