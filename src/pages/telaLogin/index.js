import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import "./style.css"

function Login(){
    const navigate = useNavigate()

    const setCredentials = (nome) =>{
        axios({
            method:"get",
            url:"http://localhost:8080/api/usuario/"+nome   
        })
        .then(response=>{
            navigate("/principal",{state:{user:response.data}})
        })
        .catch(error=>{console.log(error)})
    }

    const validarDados = ()=>{
        let inputs = document.getElementsByTagName("input")
        let nomeLogin = inputs[0].value;
        let senhaLogin = inputs[1].value

        axios({
            method:"post",
            url:"http://localhost:8080/api/login",
            data:{
                nome:nomeLogin,
                senha:senhaLogin
            }
        })
        .then(response=>{
            axios.defaults.headers.common.Authorization = response.headers.getAuthorization()
            setCredentials(nomeLogin)
        })
        .catch(error => console.log(error))        
    }

    return(
       <div id="container">
        <div className="form">
            <img src="images/logo.png" style={{marginBottom:"20%"}}></img>
            <input type="text" name="email" placeholder="Nome"></input>
            <input type="password" name="password" placeholder="Senha"></input>
            <div className="buttons">
                <button onClick={validarDados} style={{marginRight:"10%",backgroundColor:"#38040E",color:"white"}}>Login</button>
                <Link to="/"><button style={{marginLeft:"10%",backgroundColor:"white",color:"#38040E"}}>Cancelar</button></Link>
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