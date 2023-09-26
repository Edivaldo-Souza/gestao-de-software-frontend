import "./style.css"

function CadastroDemanda(){

    const toggleCadastro = () =>{
        document.getElementById("cadastro-demanda").style.display="none" 
    }

    return(
    <div id="cadastro-demanda">
        <div className="header"><img onClick={toggleCadastro} src="images/close.svg"/></div>
        <div className="popup-content">
           <div style={{display:"flex",justifyContent:"left"}}><h1 style={{fontFamily:"sans-serif"}}>Criar Demanda</h1></div>
           <input placeholder="Título"></input>
           <textarea placeholder="Descrição"></textarea>
           <button>Cadastrar pedido</button> 
        </div>
    </div>
    )
}

export default CadastroDemanda