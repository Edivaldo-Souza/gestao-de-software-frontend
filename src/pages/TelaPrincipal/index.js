import { useEffect, useState } from "react"
import "./style.css"
import { Link, useLocation } from "react-router-dom"
import CadastroDemanda from "../../components/CadastroDemanda"
import ListaDeDemandas from "../../components/ListaDeDemandas"
import DadosDemanda from "../../components/DadosDaDemanda"
import axios from "axios"

function TelaPrincipal(){
    const location = useLocation()
    const [user,setUser] = useState(location.state.user)
    var devs = []
    const [dadosDemanda,setDadosDemanda] = useState({
        titulo:"",
        descricao:"",
        dataCriacao:"",
        dataEncerramento:"",
    })
    const [contador,setContador] = useState(0)


    const toggleCadastro = () =>{
        document.getElementById("cadastro-demanda").style.display="block"
    }   

    const receberDadosCadastro = (dados) =>{
        setContador(dados)
    }

    const receberDadosDemanda = (dados)=>{
        setDadosDemanda(dados)
    }

    const disableCadastro = () =>{
        
        if(user.tipoUsuario==1 || user.tipoUsuario==2){
           document.getElementsByClassName("create-demanda-button")[0].style.display="none" 
        }
    }

    useEffect(()=>{
        disableCadastro()
    },[])

    return(
        <div>
            <div className="upper-bar">
                <div style={{display:"flex",width:"90%"}}>
                    <Link to="/"><img src="images/exit.png"/></Link></div>
                <p>{user.nome}</p>
                <img src="images/profile_picture.png"/>
            </div>
            <div className="demandas-section">
                
                <ListaDeDemandas user={user} contador={contador} enviarDados={receberDadosDemanda}/>
                
                <div className="create-demanda-button">
                    <img onClick={toggleCadastro} src="images/dem.svg"/>
                </div>
                
            </div>
            <DadosDemanda dados={dadosDemanda} contador={contador} usuario={user} tipoUsuario={user.tipoUsuario} desenvolvedores={devs}/>
            <CadastroDemanda uuidcliente={user.uuid} enviarDadosTelaPrincipal={receberDadosCadastro}/>
        </div>
        )
}

export default TelaPrincipal