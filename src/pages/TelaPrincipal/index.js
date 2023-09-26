import { useEffect, useState } from "react"
import "./style.css"
import { useLocation } from "react-router-dom"
import CadastroDemanda from "../components/CadastroDemanda"

function TelaPrincipal(){
    const location = useLocation()
    const [user] = useState(location.state)

    const toggleCadastro = () =>{
        document.getElementById("cadastro-demanda").style.display="block"
        
    }

    return(
        <div>
            <div className="upper-bar">
                <p>{user.nome}</p>
                <img src="images/profile_picture.png"/>
            </div>
            <div className="demandas-section">
                <div className="demandas-row">
                    <div className="demanda">
                        <p>Software de Atendimentos</p>
                        <div className="button-demanda-container">
                            <button>Ver detalhes</button>
                        </div>
                    </div>
                    <div className="demanda">
                        <p>Software de Atendimentos</p>
                        <div className="button-demanda-container">
                            <button>Ver detalhes</button>
                        </div>
                    </div>
                    <div className="demanda">
                        <p>Software de Atendimentos</p>
                        <div className="button-demanda-container">
                            <button>Ver detalhes</button>
                        </div>
                    </div>
                    <div className="demanda">
                        <p>Software de Atendimentos</p>
                        <div className="button-demanda-container">
                            <button>Ver detalhes</button>
                        </div>
                    </div>
                </div>
                <div className="demandas-row">
                    <div className="demanda">
                        <p>Software de Atendimentos</p>
                        <div className="button-demanda-container">
                            <button>Ver detalhes</button>
                        </div>
                    </div>
                    <div className="demanda">
                        <p>Software de Atendimentos</p>
                        <div className="button-demanda-container">
                            <button>Ver detalhes</button>
                        </div>
                    </div>
                    <div className="demanda">
                        <p>Software de Atendimentos</p>
                        <div className="button-demanda-container">
                            <button>Ver detalhes</button>
                        </div>
                    </div>
                </div>
                <div className="create-demanda-button">
                    <img onClick={toggleCadastro} src="images/dem.svg"/>
                </div>
            </div>
            <CadastroDemanda/>
        </div>
        )
}

export default TelaPrincipal