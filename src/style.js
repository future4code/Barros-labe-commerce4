import styled from "styled-components";

export const LayoutApp = styled.div`
    display: grid;
    grid-template-rows: 15vh 85vh;
    gap: 10px;
`

export const Cabeçalho = styled.header`
    display: flex;
    width: 100vw;
    height: 100%;
    background: linear-gradient(180deg, rgba(44,18,73,1) 0%, rgba(96,40,159,1) 35%, rgba(97,161,242,1) 100%);
    justify-content: center;
    align-items: center;
    
    h1 {
        color: white;
    }`

export const SeçõesLoja = styled.div`
    display: grid;
    grid-template-columns: 20% 60% 20%;
    padding: 15px;
    height: 100%;
    gap: 10px;
`