import React from "react";
import Edit from "@mui/icons-material/Edit";
import DeleteForever from "@mui/icons-material/DeleteForever";
import api from "../services/api";

const ListarPais = ({ _id, nome, anoNascimento }) => {
  const endereco = `../admin/editar-pais/${_id}`;
  function deletarPais(_id) {
    api.delete(`http://localhost:3000/pais/${_id}`);
    window.location.reload();
  }
  return (
    <div className="bloco-edicao">
      <div className="pais-name">
        <h4>{nome}</h4>
      </div>
      <div className="pais-id">
        <h5>ID: {_id}</h5>
      </div>
      <a href={endereco}>
        <Edit />
      </a>
      <span onClick={() => deletarPais(_id)} className="delete">
        <DeleteForever />
      </span>
    </div>
  );
};
export default ListarPais;
