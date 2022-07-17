import React from "react";
import { EstiloBotão } from './style'

const BotãoAdicionar = () => {

    const addProduto = (e) => {
        e.preventDefault()

        //aqui precisa criar uma lógica para que o botão adicione aquele produto específico, mas imagino que isso não seja difícil pegando o index/key do item da lista, usando o props aqui e passando ele depois por cada produto na SeçãoProdutos.js. 
    }

    return (
        <EstiloBotão onClick ={addProduto}>Adicionar Produto</EstiloBotão>
    )
}

export default BotãoAdicionar