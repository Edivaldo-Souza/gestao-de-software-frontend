import { useEffect, useState } from "react"
import Tarefa from "../TarefaC"
import "./style.css"
import axios from "axios"

function DadosDemanda(props){
    const [prioridade,setPrioridade] = useState(0)
    const [devs,setDevs] = useState(props.desenvolvedores)
    const [tarefas,setTarefas] = useState(props.tarefas)
    const [devSelecionado,setDevSelecionado] = useState()
    const [valorDaPrioridade,setValorDaPrioridade] = useState(["Baixa","Média","Alta"])
    const [valorDaSituacao,setValorDaSituacao] = useState(["Em análise","Submetida","Concluída","Indeferida"])
    const [cont,setCont] = useState(1)
    const [dataEncerramento,setDataEncerramento] = useState("Não definido")


    const setClearence = () =>{
        if(props.tipoUsuario!=1){
            document.getElementsByClassName("selecionaveis")[0].style.display="none"
            document.getElementsByClassName("selecionaveis")[1].style.display="none"
            document.getElementsByClassName("avaliador-buttons")[0].style.display="none"
            document.getElementsByClassName("avaliador-buttons")[1].style.display="none"
        }
        if(props.tipoUsuario!=2){
            document.getElementsByClassName("prazo")[0].style.display="none"
            document.getElementsByClassName("dev-buttons")[0].style.display="none"
            document.getElementsByClassName("dev-buttons")[1].style.display="none"
            document.getElementsByClassName("tarefas-container")[0].style.display="none"
            document.getElementById("tarefas-input").style.display="none"
            document.getElementById("add-tarefa-button").style.display="none"
        }
    }

    const closePopUp = () =>{
        document.getElementById("dados-demanda").style.display="none"
        setCont(cont+1)
        console.log(cont)
    }

    const changePrioridade = (select)=>{
        if(select=="Baixa"){
            setPrioridade(0)
        }
        else if(select=="Média"){
            setPrioridade(1)
        }
        else if(select=="Alta"){
            setPrioridade(2)
        }
    }

    const submeterDemanda = ()=>{
        let uuidDevSelecionado 
        for(let x of devs){
            if(x.email==devSelecionado){
                uuidDevSelecionado = x.uuid
            }
        }

        axios({
            method:"put",
            url:"http://localhost:8080/api/demanda",
            data:{
                uuid:props.dados.uuid,
                uuidDev:uuidDevSelecionado,
                dataEncerramento:"Não definido",
                prioridade:prioridade,
                situacao:1,
                prazo:0
            }
        }).then(response=>{
            console.log(response.data)
            props.enviarDados(cont+1)
            closePopUp()
        })
        .catch(error=>console.log(error))
    }

    const definirDataEncerramento = ()=>{
        let dias = Number(document.getElementById("dias-input").value)
        const dataAtual = new Date();

        dataAtual.setDate(dataAtual.getDate() + dias);

        const dia = String(dataAtual.getDate()).padStart(2, '0');
        const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
        const ano = dataAtual.getFullYear();

        let novaDataEncerramento =`${dia}/${mes}/${ano}`
        
        axios({
            method:"put",
            url:"http://localhost:8080/api/demanda",
            data:{
                uuid:props.dados.uuid,
                uuidDev:props.usuario.uuid,
                dataEncerramento:novaDataEncerramento,
                prioridade:props.dados.prioridade,
                situacao:1,
                prazo:dias
            }
        }).then(response=>{
            console.log(response.data)
            document.getElementById("dias-input").value=""
            props.enviarDados(cont+1)
            closePopUp()
        })
        .catch(error=>console.log(error))
    }

    const concluirProduto = (i) =>{
        axios({
            method:"put",
            url:"http://localhost:8080/api/demanda/concluir",
            data:{
                uuid:props.dados.uuid,
                situacao:i,
            }
        }).then(response=>{
            console.log(response.data)
            props.enviarDados(cont+1)
            closePopUp()
        })
        .catch(error=>console.log(error))
    }

    const getDevs = ()=>{
        axios({
            method:"get",
            url:"http://localhost:8080/api/usuario/devs"
        })
        .then(response=>{
            setDevs(response.data)
            console.log(devs)
        })
        .catch(error=>console.log(error))
    }

    const changeDevSelecionado = (select) =>{
        setDevSelecionado(select)
    }

    const addTarefa = () =>{
        let tarefa = document.getElementById("tarefas-input").value

        axios({
            method:"post",
            url:"http://localhost:8080/api/tarefa",
            data:{
                uuidDemanda:props.dados.uuid,
                texto: tarefa
            }
        })
        .then(response=>
            {console.log(response.data)
            document.getElementById("tarefas-input").value=""
             setCont(cont+1)
            }
        )
        .catch(error=>console.log(error))
    }

    const getTarefas = () =>{
        axios({
            method:"get",
            url:"http://localhost:8080/api/tarefa/"+props.dados.uuid,
        }) 
        .then(response=>{
            setTarefas(response.data)
        })
        .catch(error=>console.log(error))
      }

    const deleteTarefa = () =>{
        setCont(cont+1)
    }

    useEffect(()=>{
        setClearence()
        getDevs()
       
    },[])

    useEffect(()=>{
        if(props.tarefas!=[]){
            setTarefas(props.tarefas)
        }
    },[props.tarefas])

    useEffect(()=>{
        getTarefas()
    },[cont])


    return(
    <div id="dados-demanda">
        <div style={{display:"block",width:"100%"}}>
        <div className="header"><img onClick={closePopUp} src="images/close.svg"/></div>
        <div style={{display:"flex", width:"100%", padding:"20px 0px"}}>
           <div className="info-container">
            <h3>Nome do produto: {props.dados.titulo}</h3>
            <p style={{display:"flex"}}>Descrição: {props.dados.descricao}</p>
            <p style={{display:"flex"}}>Data de Criação: {props.dados.dataCriacao}</p>
            <p style={{display:"flex"}}>Data de Encerramento: {props.dados.dataEncerramento}</p>
            <p style={{display:"flex"}}>Prioridade: {valorDaPrioridade[props.dados.prioridade]}</p>
            <p style={{display:"flex"}}>Situação: {valorDaSituacao[props.dados.situacao]}</p>
            <p style={{display:"flex"}}>Prazo em dias: {props.dados.prazo}</p>
            <div style={{display:"flex",width:"80%",alignItems:"center",margin:"0% 10%"}} className="selecionaveis">
            <p>Definir prioridade:</p>
                <select onChange={(e)=>{changePrioridade(e.target.value)}} name="prioridade">
                <option>Baixa</option>
                <option>Média</option>
                <option>Alta</option>
                </select>
            </div>
            <div style={{display:"flex",width:"80%",alignItems:"center",margin:"1% 10%"}} className="selecionaveis">
            <p>Selecionar Desenvolvedor:</p>
            <select onChange={(e)=>{changeDevSelecionado(e.target.value)}}>
                {devs.map((d,index)=>{
                    return(
                        <option key={index}>{d.email}</option>
                    )
                })}  
            </select>     
            </div>
            <div style={{display:"flex",width:"80%",alignItems:"center",margin:"1% 10%"}} className="prazo">
                <p>Definir Prazo: </p>
                <input id="dias-input"/>
            </div>  
        </div>
        <div className="tarefas-container">
            {tarefas.map((t,index)=>(
                <Tarefa key={index} dados={t} infoDelete={deleteTarefa}/>
            ))}
        </div>
        </div>
        <textarea id="tarefas-input" style={{width:"50%",marginLeft:"40%"}}></textarea>
        <button id="add-tarefa-button"onClick={addTarefa} style={{bottom:"10%",right:"5%",backgroundColor:"#6A2921"}}>Adicionar</button> 
        <button className="avaliador-buttons" style={{bottom: "12%"}} onClick={submeterDemanda}>Encaminhar Demanda</button>
        <button  className="avaliador-buttons" onClick={()=>concluirProduto(3)} style={{backgroundColor:"red"}}>Indefir Demanda</button>
        <button  className="dev-buttons" onClick={definirDataEncerramento} style={{bottom: "12%",left:"5%"}}>Salvar Alterações</button>
        <button  className="dev-buttons" onClick={()=>concluirProduto(2)}style={{backgroundColor:"green",left:"5%"}}>Concluir Produto</button>
        </div>
    </div>
    )
}

export default DadosDemanda