import styled from "styled-components";

export const SectionST = styled.section`
  max-width: 1120px;
  min-height: 300px ;
  margin: 0 auto ;
  display: flex ;
  justify-content: space-between ;
  align-items: center ;
  @media(max-width: 1024px) { 
    display: flex ;
    row-gap: 3rem;
    flex-direction: column;
    justify-content:center ;
    align-items: center ;
  }
`

export const Title1ST = styled.h1`
  font-size: 2.5rem ;
  display: flex ;
  flex-direction:column ;
  row-gap: 1rem;
`
export const DivFlexST = styled.div`
  min-width:200px ;
  display: flex ;
  align-items: center;
  justify-content: flex-start ;
  flex-direction: column ;
  row-gap: 1rem;
`