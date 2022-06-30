import React, { useEffect, useState } from "react";
import ListarDiretor from "../../../components/listar-diretor";
import api from "../../../services/api";
import MenuLateral from "../menu-lateral";

const DIRETORES_API = "http://localhost:3000/diretores/";

const EditarExcluirDiretor = () => {
  const [diretor, setDiretor] = useState([]);

  useEffect(() => {
    api.get("diretor").then(({ data }) => {
      setDiretor(data);
    });
  }, []);

  useEffect(() => {
    getDiretores(DIRETORES_API);
  }, []);

  const getDiretores = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setDiretor(data.results);
      });
  };

  return (
    <>
      <MenuLateral />
      <div className="conteudo-lista">
        <h1>Diretores:</h1>
        <div className="diretor-container">
          {diretor.length > 0 &&
            diretor.map((diretor) => (
              <div className="card-edicao">
                <ListarDiretor key={diretor._id} {...diretor} />
                <br />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default EditarExcluirDiretor;
