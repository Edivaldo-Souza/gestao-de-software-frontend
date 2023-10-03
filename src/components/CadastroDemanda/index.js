import "./style.css"
import axios from "axios"
import { useState } from "react"

function CadastroDemanda(props){

    const createDemanda = () =>{
        let input1 = document.getElementById("cadastro-titulo-demanda")
        let input2 = document.getElementById("cadastro-descricao-demanda")
        let tituloCad = input1.value
        let descricaoCad = input2.value
        let dia = new Date().getDate()
        let mes = new Date().getMonth()
        let ano = new Date().getFullYear()
        let dataAtual = dia+"/"+mes+"/"+ano

        axios({
            method:"post",
            url:"http://localhost:8080/api/demanda",
            data:{
                titulo:tituloCad,
                descricao:descricaoCad,
                uuidCliente:props.uuidcliente,
                dataCriacao: dataAtual
            }
        })
        .then(response=>{
            toggleCadastro()
        })
        .catch(error=>{
            console.log(props.uuid)
            console.log(error)})
    }

    const novaDemanda = () =>{
        createDemanda()
        enviarDados()
    }

    const enviarDados = () =>{
        props.enviarDadosTelaPrincipal(1)
    }

    const toggleCadastro = () =>{
        document.getElementById("cadastro-demanda").style.display="none" 
        
    }

    return(
    <div id="cadastro-demanda">
        <div className="header"><img onClick={toggleCadastro} src="images/close.svg"/></div>
        <div className="popup-content">
           <div style={{display:"flex",justifyContent:"left"}}><h1 style={{fontFamily:"sans-serif"}}>Criar Demanda</h1></div>
           <input id="cadastro-titulo-demanda" placeholder="Título"></input>
           <textarea id="cadastro-descricao-demanda" placeholder="Descrição"></textarea>
           <button onClick={novaDemanda}>Cadastrar pedido</button> 
        </div>
    </div>
    )
}

export default CadastroDemanda