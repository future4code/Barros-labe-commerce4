import React from "react";
import { ContainerProduto } from "./style";
import BotãoAdicionar from "../BotãoAdicionar/BotãoAdicionar";

const Produtos = (props) => {

    return (
            <ContainerProduto>
                <img src={props.produto.imagem} alt={props.produto.alt}/>
                <h4>{props.produto.nome}</h4>
                <h3>R${props.produto.valor}0</h3>
                <BotãoAdicionar/>
            </ContainerProduto>
    )
}

export default Produtos