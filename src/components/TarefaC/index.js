import "./style.css"
import axios from "axios"

function Tarefa(props){

  const deletarTarefa = () =>{
    axios({
      method:"delete",
      url:"http://localhost:8080/api/tarefa/"+props.dados.uuid
    })
    .then(response=>{
      console.log(response.data)
      props.infoDelete()
    })
    .catch(error=>console.log(error))
  }

  return(
    <div className="tarefa-container-info">
    <div className="tarefa-header">
        <p style={{margin:"0px"}}>Tarefa</p>
        <img onClick={deletarTarefa} src="images/close3.svg"/>
      </div>
      <p className="notes">{props.dados.texto}</p>
    </div>
  )
}

export default Tarefa