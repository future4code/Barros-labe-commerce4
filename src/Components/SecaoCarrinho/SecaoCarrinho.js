import React from "react";

export default function SecaoCarrinho(props){


    return(
 
            <table>
                <tr>
                    <td>{props.quantidade}</td>
                    <td>{props.produto}</td>
                    <td>{props.valor}</td>
                    <td><button onClick={props.apagar}>X</button></td>
                </tr>
            </table>
            
    )
}