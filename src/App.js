import React from 'react';
import { Cabeçalho, LayoutApp, SeçõesLoja } from './style';
import SeçãoProdutos from './Components/SeçãoProdutos/SeçãoProdutos'

function App() {
  return (
    <LayoutApp>
      <Cabeçalho><h1>Camisetas - E-commerce</h1></Cabeçalho>
      <SeçõesLoja>
        <SeçãoProdutos/>
      </SeçõesLoja>
    </LayoutApp>

  );
}

export default App;
