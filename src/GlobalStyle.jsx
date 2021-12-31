import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-family: 'Jost', sans-serif;
    }
    .clr{
        clear: both;
    }
    img{
        width: 100%;
    }
    body{
        font-size: 18px;
        font-weight: 400;
        color: #000000;
        h1, h2, h3, h4, h5, h6, h1, h2, h3, h4, h5, h6 {
        margin: 0; 
        font-weight: 600;

        }
        ul {
        padding: 0;
        margin: 0;
        display: flex;
        }   
        a{
            text-decoration: none;
            color: black !important;
            &:hover{
                color: black;
            }
        }
    }   
    .title-con{
    line-height: 28px;
    text-align: center;
    }
`;
export default GlobalStyle;