import axios from "axios"
import { Component, useEffect, useState } from "react"
import Demanda from "../demanda"

function ListaDeDemandas(props){
    const [demandas,setDemandas] = useState([])
    const [cont,setCont] = useState(props.contador)


    const defineSearch = () =>{
        let url_busca
        if(props.user.tipoUsuario==0){
            url_busca = "http://localhost:8080/api/demanda/cliente/"+props.user.uuid
        }
        else if(props.user.tipoUsuario==1){
            url_busca = "http://localhost:8080/api/demanda"
        }
        else if(props.user.tipoUsuario==2){
            url_busca = "http://localhost:8080/api/demanda/dev/"+props.user.uuid
        }

        axios({
            method:"get",
            headers:{
                "Content-Type":"application/json; charset=UTF-8",
            },
            url:url_busca,

        })
        .then(response=>{
            setDemandas(response.data)
            console.log(response)
        })
        .catch(error=>console.log(error))

    }

    const receberDados = (dados)=>{
        props.enviarDados(dados)
    }

    useEffect(()=>{
        defineSearch()
    },[])


        return(
            <div className="demandas-row">
                <p>{props.contador}</p>
                {demandas.map((prod, index) => (
                    <Demanda key={index} title={prod.titulo} notes={prod.descricao} info={prod} enviarDados={receberDados}/>
                ))}
            </div>
        )

}

export default ListaDeDemandas