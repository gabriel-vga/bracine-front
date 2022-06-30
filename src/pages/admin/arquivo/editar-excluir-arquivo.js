import React, { useEffect, useState } from "react";
import ListarArquivo from "../../../components/listar-arquivo";
import api from "../../../services/api";
import MenuLateral from "../menu-lateral";

const ARQUIVOS_API = "http://localhost:3000/arquivos/";

const EditarExcluirArquivo = () => {
  const [arquivo, setArquivo] = useState([]);

  useEffect(() => {
    api.get("arquivo").then(({ data }) => {
      setArquivo(data);
    });
  }, []);

  useEffect(() => {
    getArquivos(ARQUIVOS_API);
  }, []);

  const getArquivos = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setArquivo(data.results);
      });
  };

  return (
    <>
      <MenuLateral />
      <div className="conteudo-lista">
        <h1>Arquivos:</h1>
        <div className="arquivo-container">
          {arquivo.length > 0 &&
            arquivo.map((arquivo) => (
              <div className="card-edicao">
                <ListarArquivo key={arquivo._id} {...arquivo} />
                <br />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default EditarExcluirArquivo;
