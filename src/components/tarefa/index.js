import { useEffect, useState } from "react";
import './style.css'

function Demanda(props) {
  const title = props.title;
  const prodname = props.prodname;
  const status = props.status;

  useEffect(() => {
    document.title = `${title}`;
  });

  return (
    <div className="tarefa-container">
      <p className="title">{title}</p>
      <p className="prod-name">Produto: {prodname}</p>
      <p className="status">Status: {status}</p>
      <div className="button-tarefa-container">
        <button>Ver detalhes</button>
      </div>
    </div>
  );
}

export default Demanda;
