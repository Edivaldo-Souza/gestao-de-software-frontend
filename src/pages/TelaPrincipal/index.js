import "./style.css"

function TelaPrincipal(){
    return(
        <div>
            <div className="upper-bar">
                <p>Nome</p>
                <img src="images/profile_picture.png"/>
            </div>
            <div className="demandas-section">
                <div className="demandas-row">
                    <div className="demanda">
                        <p>Software de Atendimentos</p>
                        <button>Ver detalhes</button>
                    </div>
                    <div className="demanda">
                        <p>Software de Atendimentos</p>
                    </div>
                    <div className="demanda">
                        <p>Software de Atendimentos</p>
                    </div>
                    <div className="demanda">
                        <p>Software de Atendimentos</p>
                    </div>
                </div>
            </div>
        </div>
        )
}

export default TelaPrincipal