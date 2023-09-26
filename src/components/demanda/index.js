import { useEffect, useState } from "react";
import './style.css'

function Demanda(props) {
  const title = props.title;
  const notes = props.notes;

  const [isModalOpen, setIsModalOpen] = useState(0);

  const openModal = () => { setIsModalOpen(true); };
  const closeModal = () => { setIsModalOpen(false); };

  //TODO: fazer um componente para o modal que vai ser chamado em cada botão
  return (
    <div className="demanda-container">
      <p className="title">{title}</p>
      <p className="notes">Nota dos devs: {notes}</p>
      <div className="button-demanda-container">
        <button onClick={openModal}>Ver detalhes</button>
      </div>
    </div>
  );
}

export default Demanda;
