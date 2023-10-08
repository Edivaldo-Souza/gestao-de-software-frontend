import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import "./style.css"
import { useEffect } from "react";

function Login(){

    useEffect(()=>{
        document.title = `Login: dev4U()`;
    },[])

    const navigate = useNavigate()

    const setCredentials = (nome) =>{
        axios({
            method:"get",
            url:`http://localhost:8080/api/usuario/${nome}`   
        })
        .then(response=>{
            navigate("/principal",{state:{user:response.data}})
        })
        .catch(error=>{console.log(error)})
    }

    const validarDados = (event) =>{
        event.preventDefault();

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
                <form>
                    <img src="images/logo.png" style={{marginBottom:"15%"}} />
                    <div className="input-form">
                        <label>Nome</label>
                        <input type="text" name="nome" placeholder="Nome" />
                    </div>
                    <div className="input-form">
                        <label>Senha</label>
                        <input type="password" name="password" placeholder="Senha" />
                    </div>
                    <div className="buttons">
                        <button onClick={validarDados} style={{marginRight:"10%",backgroundColor:"#38040E",color:"white"}}>Login</button>
                        <Link to="/"><button style={{marginLeft:"10%",backgroundColor:"white",color:"#38040E"}}>Cancelar</button></Link>
                    </div>
                    <p>Não possui conta?<Link to="/Cadastro">Cadastre-se</Link></p>
                </form>
            </div>
            <div className="image">
                <img src="images/login.png"/>
            </div>
        </div> 
    )
}

export default Login;