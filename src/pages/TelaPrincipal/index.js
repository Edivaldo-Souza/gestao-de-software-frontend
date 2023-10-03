import { useEffect, useState } from "react"
import "./style.css"
import { useLocation } from "react-router-dom"
//import CadastroDemanda from "../../components/CadastroDemanda"
import Demanda from '../../components/demanda/index.js'
import Modal from "../../components/modal"

function TelaPrincipal(){
    const location = useLocation()
    const [user] = useState(location.state)

    useEffect(() => {
        document.title = `Home: dev4U()`;
    });

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

    const [openModal, setOpenModal] = useState(false);

    const demandasExibidas = prod.slice(0, 8);

    return(
        <div>
            <div className="upper-bar">
                <p>{user.nome}</p>
                <img src="images/profile_picture.png"/>
            </div>
            <div className="demandas-section">
                <div className="demandas-row">
                    {demandasExibidas.map((prod, index) => (
                        <Demanda key={index} title={prod.title} notes={prod.notes}/>
                    ))}
                </div>
                <div className="create-demanda-button">
                    <img onClick={() => {setOpenModal(true)}} src="images/dem.svg"/>
                </div>
            </div>
            <Modal isOpen={openModal}/>
        </div>
        )
}

export default TelaPrincipal