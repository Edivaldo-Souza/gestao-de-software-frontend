import { useEffect, useState } from "react"
import "./style.css"
import { Link, useLocation } from "react-router-dom"
import CadastroDemanda from "../../components/CadastroDemanda"
import ListaDeDemandas from "../../components/ListaDeDemandas"

function TelaPrincipal(){
    const location = useLocation()
    const [user,setUser] = useState(location.state.user)
    const [contador,setContador] = useState(0)

    const toggleCadastro = () =>{
        document.getElementById("cadastro-demanda").style.display="block"
    }   

    const receberDadosCadastro = (dados) =>{
        setContador(dados)
    }

    const prod = [
        {title:'Software de Atendimento', notes:'Tá indo'},
        {title:'Software de Balanceamento', notes:'Tá indo'},
        {title:'Produto sem nome', notes:'Tá indo'},
        {title:'Programa de receitas', notes:'Tá indo'},
        {title:'Produto sem nome', notes:'Tá indo'},
        {title:'Produto sem nome', notes:'Tá indo'},
        {title:'Software 5', notes:'Tá indo'},
        {title:'Software 6', notes:'Tá indo'},
        {title:'Software 7', notes:'Tá indo'},
        {title:'Software 8', notes:'Tá indo'},
        {title:'Software 9', notes:'Tá indo'},
        {title:'Software 39', notes:'Tá indo'},
    ];

    const demandasExibidas = prod.slice(0, 8);

    return(
        <div>
            <div className="upper-bar">
                <div style={{display:"flex",width:"90%"}}>
                    <Link to="/"><img src="images/exit.png"/></Link></div>
                <p>{user.nome}</p>
                <img src="images/profile_picture.png"/>
            </div>
            <div className="demandas-section">
                
                <ListaDeDemandas user={user} contador={contador}/>
                
                <div className="create-demanda-button">
                    <img onClick={toggleCadastro} src="images/dem.svg"/>
                </div>
                
            </div>
            <CadastroDemanda uuidcliente={user.uuid} enviarDadosTelaPrincipal={receberDadosCadastro}/>
        </div>
        )
}

export default TelaPrincipal