import React from "react";
import Edit from "@mui/icons-material/Edit";
import DeleteForever from "@mui/icons-material/DeleteForever";
import api from "../services/api";

const ListarGenero = ({ _id, nome, anoNascimento }) => {
  const endereco = `../admin/editar-genero/${_id}`;
  function deletarGenero(_id) {
    api.delete(`http://localhost:3000/genero/${_id}`);
    window.location.reload();
  }
  return (
    <div className="bloco-edicao">
      <div className="genero-name">
        <h4>{nome}</h4>
      </div>
      <div className="genero-id">
        <h5>ID: {_id}</h5>
      </div>
      <a href={endereco}>
        <Edit />
      </a>
      <span onClick={() => deletarGenero(_id)} className="delete">
        <DeleteForever />
      </span>
    </div>
  );
};
export default ListarGenero;
