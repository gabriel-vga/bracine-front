import React from "react";
import Edit from "@mui/icons-material/Edit";
import DeleteForever from "@mui/icons-material/DeleteForever";
import api from "../services/api";

const ListarFilme = ({ _id, nome, ano }) => {
  const endereco = `../admin/editar-filme/${_id}`;

  function deletarFilme(_id) {
    api.delete(`http://localhost:3000/filme/${_id}`);
    window.location.reload();
  }

  return (
    <div className="bloco-edicao">
      <div className="filme-name">
        <h4>{nome}</h4>
      </div>
      <div className="filme-ano">
        <h5>Ano: {ano}</h5>
      </div>
      <div className="filme-id">
        <h5>ID: {_id}</h5>
      </div>
      <a href={endereco}>
        <Edit />
      </a>
      <span onClick={() => deletarFilme(_id)} className="delete">
        <DeleteForever />
      </span>
    </div>
  );
};
export default ListarFilme;
