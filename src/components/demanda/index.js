import { useEffect, useState } from "react";
import './style.css'
import DadosDemanda from "../DadosDaDemanda";

function Demanda(props) {
  const [dados,setDados] = useState(props.info)
  const title = props.title;
  const notes = props.notes;

  const [isModalOpen, setIsModalOpen] = useState(0);

  const openModal = () => { setIsModalOpen(true); };
  const closeModal = () => { setIsModalOpen(false); };

  const openPopUp = () => {
    document.getElementById("dados-demanda").style.display="block"
    props.enviarDados(dados)}

  //TODO: fazer um componente para o modal que vai ser chamado em cada botão
  return (
    <div className="demanda-container">
      <p className="title">{title}</p>
      <p className="notes">{notes}</p>
      <div className="button-demanda-container">
        <button onClick={openPopUp}>Ver detalhes</button>
      </div>
    </div>
  );
}

export default Demanda;
