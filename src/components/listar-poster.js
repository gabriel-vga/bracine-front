import React from "react";
import Edit from "@mui/icons-material/Edit";
import DeleteForever from "@mui/icons-material/DeleteForever";
import api from "../services/api";

const ListarPoster = ({ _id, enderecoArquivo }) => {
  const endereco = `../admin/editar-poster/${_id}`;

  function deletarPoster(_id) {
    api.delete(`http://localhost:3000/poster/${_id}`);
    window.location.reload();
  }

  return (
    <div className="bloco-edicao">
      <div className="poster-enderecoArquivo">
        <h5>Endereço do Arquivo: {enderecoArquivo}</h5>
      </div>
      <div className="poster-id">
        <h5>ID: {_id}</h5>
      </div>
      <a href={endereco}>
        <Edit />
      </a>
      <span onClick={() => deletarPoster(_id)} className="delete">
        <DeleteForever />
      </span>
    </div>
  );
};
export default ListarPoster;
