import "./style.css"

function DadosDemanda(props){

    const closePopUp = () =>{
        document.getElementById("dados-demanda").style.display="none" 
    }

    return(
    <div id="dados-demanda">
        <div className="header"><div className="header"><img onClick={closePopUp} src="images/close.svg"/></div></div>
        <div>
            <p>{props.dados.titulo}</p>
        </div>
    </div>
    )
}

export default DadosDemanda