import React from "react";
import Edit from "@mui/icons-material/Edit";
import DeleteForever from "@mui/icons-material/DeleteForever";
import api from "../services/api";

const ListarArquivo = ({ _id, enderecoArquivo }) => {
  const endereco = `../admin/editar-arquivo/${_id}`;

  function deletarArquivo(_id) {
    api.delete(`http://localhost:3000/arquivo/${_id}`);
    window.location.reload();
  }

  return (
    <div className="bloco-edicao">
      <div className="arquivo-enderecoArquivo">
        <h5>Endereço do Arquivo: {enderecoArquivo}</h5>
      </div>
      <div className="arquivo-id">
        <h5>ID: {_id}</h5>
      </div>
      <a href={endereco}>
        <Edit />
      </a>
      <span onClick={() => deletarArquivo(_id)} className="delete">
        <DeleteForever />
      </span>
    </div>
  );
};
export default ListarArquivo;
