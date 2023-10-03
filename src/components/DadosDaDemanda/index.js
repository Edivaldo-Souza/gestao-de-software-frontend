import { useEffect, useState } from "react"
import "./style.css"
import axios from "axios"

function DadosDemanda(props){
    const [prioridade,setPrioridade] = useState(0)
    const [devs,setDevs] = useState(props.desenvolvedores)
    const [devSelecionado,setDevSelecionado] = useState()
    const [valorDaPrioridade,setValorDaPrioridade] = useState(["Baixa","Média","Alta"])
    const [valorDaSituacao,setValorDaSituacao] = useState(["Em análise","Submetida","Concluída","Indeferida"])
    const [dataEncerramento,setDataEncerramento] = useState("Não definido")
    const [updateState,setUpdateState] = useState()


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
        }
    }

    const closePopUp = () =>{
        document.getElementById("dados-demanda").style.display="none"
        setUpdateState("ds") 
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
            closePopUp()
        })
        .catch(error=>console.log(error))
    }

    const concluirProduto = () =>{
        axios({
            method:"put",
            url:"http://localhost:8080/api/demanda/concluir",
            data:{
                uuid:props.dados.uuid,
                situacao:2,
            }
        }).then(response=>{
            console.log(response.data)
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

    useEffect(()=>{
        setClearence()
        getDevs()
    },[])

    return(
    <div id="dados-demanda">
        <div className="header"><img onClick={closePopUp} src="images/close.svg"/></div>
        <div className="info-container">
            <h3>Nome do produto: {props.dados.titulo}</h3>
            <p>Descrição: {props.dados.descricao}</p>
            <p>Data de Criação: {props.dados.dataCriacao}</p>
            <p>Data de Encerramento: {props.dados.dataEncerramento}</p>
            <p>Prioridade: {valorDaPrioridade[props.dados.prioridade]}</p>
            <p>Situação: {valorDaSituacao[props.dados.situacao]}</p>
            <p>Prazo em dias: {props.dados.prazo}</p>
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
        <button className="avaliador-buttons" style={{bottom: "12%"}} onClick={submeterDemanda}>Encaminhar Demanda</button>
        <button  className="avaliador-buttons" style={{backgroundColor:"red"}}>Indefir Demanda</button>
        <button  className="dev-buttons" onClick={definirDataEncerramento} style={{bottom: "12%"}}>Salvar Alterações</button>
        <button  className="dev-buttons" onClick={concluirProduto}style={{backgroundColor:"green"}}>Concluir Produto</button>
    </div>
    )
}

export default DadosDemanda