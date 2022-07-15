import styled from "styled-components";

export const Nav_ST = styled.nav`
  width: 100% ;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1.9rem;

  a { 
    color: #FAD8FB;
    transition: .5s ease-out;
    position: relative ;
  }
  a:hover { 
    color: #CF28D2;
    transition: .5s ease-out;
  }
  .active::after { 
    content:'';
    height:2px;
    width:100% ;
    border-radius:16px ;
    background:#CF28D2 ;
    position: absolute ;
    top: 32px;
    right: 0;
  }
`