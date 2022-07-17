import styled from "styled-components";

export const EstiloBotão = styled.button`
    width: 250px;
    padding: 5px;
    border-radius: 10px;
    background-color: purple;
    color: white;
    border: 1px solid black;
    box-shadow: 1px 1px rgba(1, 1, 1, 0.2);
    
    :hover {
        cursor: pointer;
        background-color: white;
        color: purple;
    }
    
    :active {
        transform: scale(0.98);
    }
`