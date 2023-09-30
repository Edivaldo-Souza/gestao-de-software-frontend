import axios from "axios"
import { Component, useEffect, useState } from "react"
import Demanda from "../demanda"

class ListaDeDemandas extends Component{
    state = {
        demandas:[]
    }

    componentDidMount(){
        this.defineSearch()
    }

    defineSearch = () =>{
        let url_busca
        if(this.props.user.tipoUsuario==0){
            url_busca = "http://localhost:8080/api/demanda/cliente/"+this.props.user.uuid
        }
        else if(this.props.user.tipoUsuario==1){
            url_busca = "http://localhost:8080/api/demanda"
        }
        else if(this.props.user.tipoUsuario==2){
            url_busca = "http://localhost:8080/api/demanda/dev/"+this.props.user.uuid
        }

        axios({
            method:"get",
            url:url_busca,

        })
        .then(response=>{
            this.setState({demandas:response.data})
            console.log(response)
        })
        .catch(error=>console.log(error))

    }

    render(){
        

        return(
            <div className="demandas-row">
                {this.state.demandas.map((prod, index) => (
                    <Demanda key={index} title={prod.titulo} notes={prod.descricao}/>
                ))}
            </div>

        )
    }
}

export default ListaDeDemandas