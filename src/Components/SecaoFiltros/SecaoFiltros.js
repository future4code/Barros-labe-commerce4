import React, { useState } from "react";
import { DivFiltros } from "./style";

export default function SecaoFiltros(props){
    
    const [valorMinimo, setValorMinimo]=useState(0)
    const [valorMaximo, setValorMaximo]=useState(0)
    const [nomeProduto, setNomeProduto]=useState("")

    const AddVMin =(event)=>{
        setValorMinimo(event.target.value)
    }

    const AddVMax =(event)=>{
        setValorMaximo(event.target.value)
    }

    const AddNomeProduto =(event)=>{
        setNomeProduto(event.target.value)
    }

    
    return(
        <DivFiltros>
            <h1>Filtros</h1>

            <label>Valor mínimo</label>
            <input type="text" value={valorMinimo} onChange={AddVMin}></input>

            <label>Valor máximo</label>
            <input type="text" value={valorMaximo} onChange={AddVMax}></input>

            <label>Nome do pruduto</label>
            <input type="text" value={nomeProduto} onChange={AddNomeProduto}></input>

            <button>Filtrar</button>
        </DivFiltros>
    )
}