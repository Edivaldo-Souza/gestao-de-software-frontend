import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import "./style.css"

function Cadastro(){
    const navigate = useNavigate()

    const validarDados = ()=>{
        let inputs = document.getElementsByName("nome")
        let valor = inputs[0].value;

        navigate("/principal",{state:{nome:valor}})
    }

    return(
        <div id="container">
        <div className="form">
            <img src="images/logo.png" style={{marginBottom:"5%"}}></img>
            <input type="text" name="nome" placeholder="Nome"></input>
            <input type="text" name="senha" placeholder="Email"></input>
            <input type="text" name="senha" placeholder="Confirmar Email"></input>
            <input type="text" name="senha" placeholder="Contato"></input>
            <input type="text" name="senha" placeholder="Senha"></input>
            <input type="text" name="senha" placeholder="Confirmar Senha"></input>
            <div className="buttons">
                <button onClick={validarDados} style={{marginRight:"10%",backgroundColor:"#38040E",color:"white"}}>Cadastrar-se</button>
                <Link to="/"><button style={{marginLeft:"10%",backgroundColor:"white",color:"#38040E"}}>Cancelar</button></Link>
            </div>
            
        </div>
        <div className="image">
            <img src="images/login.png"/>
        </div>
       </div> 
    )
}

export default Cadastro