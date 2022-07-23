import styled from "styled-components";

export const LayoutApp = styled.div`
    display: grid;
    grid-template-rows: 15vh 70vh;
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
    grid-template-columns: 25% 50% 25%;
    padding: 15px;
    height: 100%;
    gap: 10px;
`

export const SeçãoPrincipal = styled.div`
    grid-column-start: 2;
    align-items: center;
    justify-items: center;
    display: flex;
    flex-wrap: wrap;
    padding: 5px;
    gap: 10px;
`

export const Parametros = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    
    select {
        border-radius: 10px;
        padding: 3px;
        margin-left: 5px;
        cursor: pointer;
    }`

export const DivCarrinho=styled.div`
`