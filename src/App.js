import React, {useState} from 'react';
import { Cabeçalho, LayoutApp, SeçõesLoja, Parametros, SeçãoPrincipal } from './style';
import Produtos from './Components/Produtos/Produtos'
import SecaoFiltros from './Components/SecaoFiltros/SecaoFiltros';
import { ListadeProdutos } from './ListaDeProdutos'

function App() {

  const [produtos, setProdutos] = useState(ListadeProdutos)
  const [ordenar, setOrdenar] = useState("")

  const [valorMinimo, setValorMinimo]=useState(-Infinity)
  const [valorMaximo, setValorMaximo]=useState(Infinity)
  const [nomeProduto, setNomeProduto]=useState("")

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

  return (
    <LayoutApp>
      <Cabeçalho><h1>Camisetas - E-commerce</h1></Cabeçalho>

      <SeçõesLoja>

        <SecaoFiltros
          valorMinimo={valorMinimo}
          setValorMinimo={setValorMinimo}
          valorMaximo={valorMaximo}
          setValorMaximo={setValorMaximo}
          nomeProduto={nomeProduto}
          setNomeProduto={setNomeProduto}
        />     

          <SeçãoPrincipal>

            <Parametros>
                  <p>Quantidade de produtos: {produtos.length} </p>
                  <label> Ordenar:
                      <select value={ordenar} onChange={(e)=>setOrdenar(e.target.value)}>
                          <option value="">Selecione...</option>
                          <option value="crescente">Crescente</option>
                          <option value="decrescente">Decrescente</option>
                      </select>
                  </label>
            </Parametros>

            {produtos
              .filter((produto) => {
                return produto.valor >= valorMinimo || valorMinimo === ""
              })
              .filter((produto) => {
                return produto.valor <= valorMaximo || valorMaximo === ""
              })
              .filter((produto) => {
                return produto.nome.includes(nomeProduto)
              })
              .map(produto => {
              return <Produtos key={produto.id} produto={produto} />
              })
            }

        </SeçãoPrincipal>

      </SeçõesLoja>
      
    </LayoutApp>

  );
}

export default App;
