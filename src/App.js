import React from 'react';
import { Cabeçalho, LayoutApp, SeçõesLoja } from './style';
import SeçãoProdutos from './Components/SeçãoProdutos/SeçãoProdutos'
import SecaoFiltros from './Components/SecaoFiltros/SecaoFiltros';

function App() {
  return (
    <LayoutApp>
      <Cabeçalho><h1>Camisetas - E-commerce</h1></Cabeçalho>

      <SeçõesLoja>
        <SecaoFiltros/>
        <SeçãoProdutos/>
      </SeçõesLoja>
    </LayoutApp>

  );
}

export default App;
