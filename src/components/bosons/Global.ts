import { createGlobalStyle } from "styled-components";


export const GlobalST = createGlobalStyle`
 *{ 
    margin:0;
    padding:0;
    box-sizing:border-box; 
  }
  @media (max-width: 1080px) { 
    html { 
        font-size: 93.75rem;
    }
  }
  @media ( max-width: 720px ) {
    html{
        font-size: 87.5%;
    }
  }
  body { 
    font-family: Arial, Helvetica, sans-serif ;
    font-weight:400;
    font-size: 1.4rem;
    background:#151414;
    color: #FAD8FB ;
  }
  button { 
    cursor: pointer;
  }
  a { 
    text-decoration: none ;
  }

`