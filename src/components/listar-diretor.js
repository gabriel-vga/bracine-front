import React from "react";
import Edit from "@mui/icons-material/Edit";
import DeleteForever from "@mui/icons-material/DeleteForever";
import api from "../services/api";

const ListarDiretor = ({ _id, nome, anoNascimento }) => {
  const endereco = `../admin/editar-diretor/${_id}`;

  function deletarDiretor(_id) {
    api.delete(`http://localhost:3000/diretor/${_id}`);
    window.location.reload();
  }

  return (
    <div className="bloco-edicao">
      <div className="diretor-name">
        <h4>{nome}</h4>
      </div>
      <div className="diretor-anoNascimento">
        <h5>Ano de Nascimento: {anoNascimento}</h5>
      </div>
      <div className="diretor-id">
        <h5>ID: {_id}</h5>
      </div>
      <a href={endereco}>
        <Edit />
      </a>
      <span onClick={() => deletarDiretor(_id)} className="delete">
        <DeleteForever />
      </span>
    </div>
  );
};
export default ListarDiretor;
