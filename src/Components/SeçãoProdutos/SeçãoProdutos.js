import React, { useState } from "react";
import { ListadeProdutos } from './ListaDeProdutos'
import { EstiloLista } from "./style";
import BotãoAdicionar from "../BotãoAdicionar/BotãoAdicionar";

const SeçãoProdutos = () => {
    const [produtos, setProdutos] = useState(ListadeProdutos)

    const produtosAtualizados = produtos.map((item, index) => {
        return (
            <li key={index}>
                <img src={item.imagem} alt={item.alt}/>
                <h4>{item.nome}</h4>
                <h3>R${item.valor}0</h3>
                <BotãoAdicionar/>
            </li>
        )
    })

    return (
        <EstiloLista>
        <ul>{produtosAtualizados}</ul>
        </EstiloLista>
    )
}

export default SeçãoProdutos