import React, { useEffect, useState } from "react";
import api from "../services/api";

const ListarFilmeCard = ({ nome, poster, sinopse }) => {
  const [posterFile, setposterFile] = useState([]);
  useEffect(() => {
    api.get("poster/" + poster).then(({ data }) => {
      setposterFile(data);
    });
  }, []);

  const rota = `http://localhost:3000/${posterFile.enderecoArquivo}`;

  return (
    <div className="filme">
      <img src={rota} alt={nome} />
      <div className="filme-info">
        <h3>{nome}</h3>
      </div>
      <div className="filme-over">
        <h2>Sinopse:</h2>
        <p>{sinopse}</p>
      </div>
    </div>
  );
};
export default ListarFilmeCard;
