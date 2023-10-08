import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import "./style.css"
import axios from "axios"
import { useState } from "react"


function Cadastro(){

    useEffect(()=>{
        document.title = `Cadastro: dev4U()`;
    },[])

    const navigate = useNavigate()
    const [cargo,setCargo] = useState(0)

    const validarDados = (event) => {
        event.preventDefault();

        let inputs = document.getElementsByTagName("input")
        let nomeCad = inputs[0].value;
        let emailCad = inputs[1].value;
        let contato = inputs[3].value
        let pass = document.getElementsByName("pass")
        let senhaCad = pass[0].value
        axios({
            method:"post",
            url:"http://localhost:8080/api/usuario",
            data:{
                nome:nomeCad,
                email:emailCad,
                contato:contato,
                senha:senhaCad,
                tipoUsuario:cargo
            }
        })
        .then(response=>{
            alert("cadastrado com Sucesso")
            navigate("/login")
        })
        .catch(error=>console.log(error))
    }

    const changeCargo = (select)=>{
        if(select === "Cliente"){
            setCargo(0)
        }
        else if(select === "Avaliador"){
            setCargo(1)
        }
        else if(select === "Desenvolvedor"){
            setCargo(2)
        }
    }

    return(
        <div id="container">
        <div className="form">
            <form>
                <img src="images/logo.png" style={{marginBottom:"5%"}} />
                <div className="input-form">
                    <label>Nome</label>
                    <input type="text" name="nome" placeholder="Nome"></input>
                </div>
                <div className="input-form">
                    <label>E-mail</label>
                    <input type="text" name="email" placeholder="Email"/>    
                </div>
                <div className="input-form">
                    <label>Confirme o email</label>
                    <input type="text" name="confirma-email" placeholder="Confirmar Email"/>   
                </div>
                <div className="input-form">
                    <label>Contato</label>
                    <input type="text" name="contato" placeholder="Contato" style={{marginBottom:"0px"}}/>
                </div>
                <div className="dropdown-menu">
                    <label>Tipo de usuário:</label>
                    <select onChange={(e)=>{changeCargo(e.target.value)}} name="cargo">
                    <option>Cliente</option>
                    <option>Avaliador</option>
                    <option>Desenvolvedor</option>
                    </select>
                </div>
                <div className="input-form">
                    <label>Senha</label>
                    <input type="password" name="pass" placeholder="Senha"></input>
                </div>
                <div className="input-form">
                    <label>Confirme a senha</label>
                    <input type="password" name="confirma-pass" placeholder="Confirmar Senha"></input>
                </div>
                <div className="buttons">
                    <button onClick={validarDados} style={{marginRight:"10%",backgroundColor:"#38040E",color:"white"}}>Cadastrar-se</button>
                    <Link to="/"><button style={{marginLeft:"10%",backgroundColor:"white",color:"#38040E"}}>Cancelar</button></Link>
                </div>
            </form>
        </div>
        <div className="image">
            <img src="images/login.png"/>
        </div>
       </div> 
    )
}

export default Cadastro