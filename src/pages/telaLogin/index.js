import { Link, useNavigate } from "react-router-dom";
import "./style.css"

function Login(){
    const navigate = useNavigate()

    const validarDados = ()=>{
        let inputs = document.getElementsByName("nome")
        let valor = inputs[0].value;

        navigate("/principal",{state:{nome:valor}})
    }
    return(
       <div id="container">
        <div className="form">
            <img src="images/logo.png" style={{marginBottom:"20%"}}></img>
            <input type="text" name="nome" placeholder="Nome"></input>
            <input type="text" name="senha" placeholder="Senha"></input>
            <div className="buttons">
                <button onClick={validarDados} style={{marginRight:"10%",backgroundColor:"#38040E",color:"white"}}>Login</button>
                <button style={{marginLeft:"10%",backgroundColor:"white",color:"#38040E"}}>Cancelar</button>
            </div>
            <p>Não possui conta?<Link to="/Cadastro">Cadastre-se</Link></p>
            
            
        </div>
        <div className="image">
            <img src="images/login.png"/>
        </div>
       </div> 
    )
}


export default Login;