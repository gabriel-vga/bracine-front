import React from "react";
import Edit from "@mui/icons-material/Edit";
import DeleteForever from "@mui/icons-material/DeleteForever";
import api from "../services/api";

const ListarRoteirista = ({ _id, nome, anoNascimento }) => {
  const endereco = `../admin/editar-roteirista/${_id}`;

  function deletarRoteirista(_id) {
    api.delete(`http://localhost:3000/roteirista/${_id}`);
    window.location.reload();
  }
  return (
    <div className="bloco-edicao">
      <div className="roteirista-name">
        <h4>{nome}</h4>
      </div>
      <div className="roteirista-anoNascimento">
        <h5>Ano de Nascimento: {anoNascimento}</h5>
      </div>
      <div className="roteirista-id">
        <h5>ID: {_id}</h5>
      </div>
      <a href={endereco}>
        <Edit />
      </a>
      <span onClick={() => deletarRoteirista(_id)} className="delete">
        <DeleteForever />
      </span>
    </div>
  );
};
export default ListarRoteirista;
