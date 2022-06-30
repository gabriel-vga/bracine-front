import React, { useEffect, useState } from "react";
import ListarPoster from "../../../components/listar-poster";
import api from "../../../services/api";
import MenuLateral from "../menu-lateral";

const POSTERES_API = "http://localhost:3000/posters/";

const EditarExcluirPoster = () => {
  const [poster, setPoster] = useState([]);

  useEffect(() => {
    api.get("poster").then(({ data }) => {
      setPoster(data);
    });
  }, []);

  useEffect(() => {
    getPosters(POSTERES_API);
  }, []);

  const getPosters = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setPoster(data.results);
      });
  };

  return (
    <>
      <MenuLateral />
      <div className="conteudo-lista">
        <h1>Pôsteres:</h1>
        <div className="poster-container">
          {poster.length > 0 &&
            poster.map((poster) => (
              <div className="card-edicao">
                <ListarPoster key={poster._id} {...poster} />
                <br />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default EditarExcluirPoster;
