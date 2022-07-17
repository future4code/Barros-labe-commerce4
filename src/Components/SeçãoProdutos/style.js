import styled from "styled-components";

export const EstiloLista = styled.div`
    grid-column-start: 2;
    align-items: center;
    justify-items: center;

    ul {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        padding: 5px;
        gap: 10px;
    }

    ul li {
        padding: 5px;
        border: 1px solid black;
    }

    ul li img {
        max-width: 250px;
    }
`