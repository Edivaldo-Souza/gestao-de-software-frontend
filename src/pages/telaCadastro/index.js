import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import "./style.css"
import axios from "axios"
import { useState } from "react"


function Cadastro(){
    const navigate = useNavigate()
    const [cargo,setCargo] = useState(0)

    const validarDados = ()=>{
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
        if(select=="Cliente"){
            setCargo(0)
        }
        else if(select=="Avaliador"){
            setCargo(1)
        }
        else if(select=="Desenvolvedor"){
            setCargo(2)
        }
    }

    return(
        <div id="container">
        <div className="form">
            <img src="images/logo.png" style={{marginBottom:"5%"}}></img>
            <input type="text" name="nome" placeholder="Nome"></input>
            <input type="text" name="email" placeholder="Email"></input>
            <input type="text" name="email2" placeholder="Confirmar Email"></input>
            <input type="text" name="contato" placeholder="Contato" style={{marginBottom:"0px"}}></input>
            <div style={{display:"flex",width:"80%",alignItems:"center",margin:"1% 10%"}}>
                <p>Tipo de usuário:</p>
                <select onChange={(e)=>{changeCargo(e.target.value)}} name="cargo">
                <option>Cliente</option>
                <option>Avaliador</option>
                <option>Desenvolvedor</option>
                </select>
            </div>
            
            <input type="password" name="pass" placeholder="Senha"></input>
            <input type="password" name="confirma-pass" placeholder="Confirmar Senha"></input>
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