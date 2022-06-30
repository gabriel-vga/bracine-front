import React, { useEffect, useState } from "react";
import ListarFilme from "../../../components/listar-filme";
import api from "../../../services/api";
import MenuLateral from "../menu-lateral";

const FILMES_API = "http://localhost:3000/filmes/";

const EditarExcluirFilme = () => {
  const [filme, setFilme] = useState([]);

  useEffect(() => {
    api.get("filme").then(({ data }) => {
      setFilme(data);
    });
  }, []);

  useEffect(() => {
    getFilmees(FILMES_API);
  }, []);

  const getFilmees = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setFilme(data.results);
      });
  };

  return (
    <>
      <MenuLateral />
      <div className="conteudo-lista">
        <h1>Filmes:</h1>
        <div className="filme-container">
          {filme.length > 0 &&
            filme.map((filme) => (
              <div className="card-edicao">
                <ListarFilme key={filme._id} {...filme} />
                <br />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default EditarExcluirFilme;
