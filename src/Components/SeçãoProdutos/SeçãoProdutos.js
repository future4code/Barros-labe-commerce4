import React, { useState } from "react";
import { ListadeProdutos } from './ListaDeProdutos'
import { EstiloLista, Parametros, SeçãoPrincipal } from "./style";
import BotãoAdicionar from "../BotãoAdicionar/BotãoAdicionar";

const SeçãoProdutos = () => {
    const [produtos, setProdutos] = useState(ListadeProdutos)
    const [quantidade, setQuantidade] = useState(produtos.length)
    const [ordenar, setOrdenar] = useState("")

    const crescente = (a, b) => {return a.valor - b.valor}
    const decrescente = (a, b) => {return b.valor - a.valor}
    const ordernarOriginal = (a, b) => {return a.id - b.id}

    switch(ordenar) {
        case "crescente":
            produtos.sort(crescente)
        break;
        case "decrescente":
            produtos.sort(decrescente)
        break;
        case "":
            produtos.sort(ordernarOriginal)
    }

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
        <SeçãoPrincipal>
            <Parametros>
                <p>Quantidade de produtos: {quantidade}</p>
                <label> Ordenar Preço:
                    <select value={ordenar} onChange={(e)=>setOrdenar(e.target.value)}>
                        <option value="">Selecione...</option>
                        <option value="crescente">Crescente</option>
                        <option value="decrescente">Decrescente</option>
                    </select>
                </label>
            </Parametros>
            <EstiloLista>
            <ul>{produtosAtualizados}</ul>
            </EstiloLista>
        </SeçãoPrincipal>
    )
}

export default SeçãoProdutos