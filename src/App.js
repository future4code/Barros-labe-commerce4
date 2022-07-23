import React, {useState} from 'react';
import { Cabeçalho, LayoutApp, SeçõesLoja, Parametros, SeçãoPrincipal, DivCarrinho } from './style';
import Produtos from './Components/Produtos/Produtos'
import SecaoFiltros from './Components/SecaoFiltros/SecaoFiltros';
import { ListadeProdutos } from './ListaDeProdutos'
import SecaoCarrinho from './Components/SecaoCarrinho/SecaoCarrinho';

function App() {

  const [produtos] = useState(ListadeProdutos)
  const [ordenar, setOrdenar] = useState("")

  const [valorMinimo, setValorMinimo]=useState(-Infinity)
  const [valorMaximo, setValorMaximo]=useState(Infinity)
  const [nomeProduto, setNomeProduto]=useState("")

  const [carrinhoAdd, setCarrinhoAdd]= useState ([])
  
  let [contadorCarrinho, setContadorCarrinho] = useState(1)

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
    break;
    default:
    produtos.sort(ordernarOriginal)
    break
  }

/*
  // Adicionar produtos no carrinho---------------------------------
  const AddProdutoCarrinho=(itemAdd)=>{
    const produtosCarrinho = produtos.filter((item)=>{
          
            return item.id === itemAdd 
      })
  setCarrinhoAdd([...carrinhoAdd, ...produtosCarrinho])
  }
*/
  //console.log(contadorCarrinho)

  // Adicionar produtos no carrinho---------------------------------
  
  const AddProdutoCarrinho=(itemAdd)=>{

    if(carrinhoAdd.includes(itemAdd)){
      setContadorCarrinho(contadorCarrinho+1) 

    }else{
      const produtosCarrinho = produtos.filter((item)=>{  
        return item.id === itemAdd 

      })

    setCarrinhoAdd([...carrinhoAdd, ...produtosCarrinho])
    }
  }

  // contagem dos produtos no carrinho
  /*
  const incrementarProduto=(idProduto)=>{ 
    const atualizarCarrinho=carrinhoAdd.filter((item, index)=>{

      for (let i = 0; i < carrinhoAdd.length; i++){
        if(carrinhoAdd.includes(item.id)){
          return contadorCarrinho = i
        }
      }
    })
  setCarrinhoAdd(atualizarCarrinho)
  }
 */


    // APAGAR PRODUTO -----------------------------------------------
    const apagarProduto=(idProduto)=>{ //id do produto
      const atualizarCarrinho=carrinhoAdd.filter((item, index)=>{
          return item.id !== idProduto
      })
    setCarrinhoAdd(atualizarCarrinho)
    }

  //  renderizar na tela
  const addCarrinho = carrinhoAdd.map((item)=>{
    return(
      <SecaoCarrinho 
        quantidade={contadorCarrinho} 
        produto={item.nome} 
        valor={item.valor}
        apagar={()=>{apagarProduto(item.id)}}
        /> 
    )
} ); 

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
              return <Produtos key={produto.id} onClick={()=>{AddProdutoCarrinho(produto.id)}} produto={produto} />
              })
            }

      
        </SeçãoPrincipal>

        
          <DivCarrinho>

            <h1>Carrinho</h1>
            {addCarrinho}
          </DivCarrinho>
          
          

      </SeçõesLoja>


    </LayoutApp>

  );
}

export default App;