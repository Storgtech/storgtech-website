import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;

        box-sizing: border-box;
    }

    :focus{
      outline: 0;
      /* box-shadow: 0 0 0 2px ${(props) => props.theme['green-500']}; */
    }

    body{
        /* background: ${(props) => props.theme['white-default']}; */
        color: ${(props) => props.theme['dark-default']} !important;
        --webkit-font-smoothing: antialiased;
        height: 100vh !important;
    }

    body, input, textarea, button{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
    

    ul{
        list-style-type: none;
    }

    p, span{
        line-height: 2;
    }


`
