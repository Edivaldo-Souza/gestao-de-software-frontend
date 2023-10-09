import { useEffect, useState } from "react";
import './style.css'
import DadosDemanda from "../DadosDaDemanda";
import axios from "axios";

function Demanda(props) {
  const [dados,setDados] = useState(props.info)
  const [tarefas,setTarefas] = useState()
  const [valorDaSituacao,setValorDaSituacao] = useState(["Em análise","Submetida","Concluída","Indeferida"])

  const [isModalOpen, setIsModalOpen] = useState(0);

  const openModal = () => { setIsModalOpen(true); };
  const closeModal = () => { setIsModalOpen(false); };

  const openPopUp = () => {
    document.getElementById("dados-demanda").style.display="block"
    getTarefas()
  }

  const deleteDemanda = () =>{
    axios({
      method:"delete",
      url:"http://localhost:8080/api/demanda/"+dados.uuid
    })
    .then(response=>{
      alert("Demanda removida")
      props.remocao()
    })
    .catch(error=>console.log(error))
  }

  const definirSituacao = () =>{
    if(props.info.situacao==1){
      document.getElementsByClassName("delete-demanda-button")[props.quant].style.display="none"
      //document.getElementsByClassName("situation-icon-submited")[props.quant].style.display="block"
    }
    else if(props.info.situacao==2){
      document.getElementsByClassName("situation-icon-submited")[props.quant].style.display="none"
      //document.getElementsByClassName("situation-icon-deleted")[props.quant].style.display="none"
      //document.getElementsByClassName("situation-icon-finished")[props.quant].style.display="block"
    }
    else if(props.info.situacao==3){
      document.getElementsByClassName("situation-icon-submited")[props.quant].style.display="none"
      //document.getElementsByClassName("situation-icon-finished")[props.quant].style.display="none"
      //document.getElementsByClassName("situation-icon-deleted")[props.quant].style.display="block"
    }
  }

  const getTarefas = () =>{
    axios({
        method:"get",
        url:"http://localhost:8080/api/tarefa/"+props.info.uuid,
    }) 
    .then(response=>{
        console.log(response.data)
        props.enviarDados(props.info,response.data)
    })
    .catch(error=>console.log(error))
  }

  useEffect(()=>{
    definirSituacao()
  },[])

  //TODO: fazer um componente para o modal que vai ser chamado em cada botão
  return (
    <div className="demanda-container">
      <img className="delete-demanda-button" onClick={deleteDemanda} style={{right:"2%",cursor:"pointer"}} src="images/close2.svg"/>
      <img className="situation-icon-deleted" style={{display:"none",left:"3%", height:"20%"}} src="images/deleted.png"/>
      <img className="situation-icon-finished" style={{display:"none",left:"3%", height:"20%"}} src="images/finished.png"/>
      <img className="situation-icon-submited" style={{display:"none",left:"3%", height:"20%"}} src="images/gear.svg"/>
      <p className="title">{props.info.titulo}</p>
      <p className="notes">{props.info.descricao}</p>
      <p>Situação: {valorDaSituacao[props.info.situacao]}</p>
      <div className="button-demanda-container">
        <button onClick={openPopUp}>Ver detalhes</button>
      </div>
    </div>
  );
}

export default Demanda;
