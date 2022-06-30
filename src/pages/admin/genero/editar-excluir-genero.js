import React, { useEffect, useState } from "react";
import ListarGenero from "../../../components/listar-genero";
import api from "../../../services/api";
import MenuLateral from "../menu-lateral";

const PAISES_API = "http://localhost:3000/generos/";

const EditarExcluirGenero = () => {
  const [genero, setGenero] = useState([]);

  useEffect(() => {
    api.get("genero").then(({ data }) => {
      setGenero(data);
    });
  }, []);

  useEffect(() => {
    getGeneros(PAISES_API);
  }, []);

  const getGeneros = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setGenero(data.results);
      });
  };

  return (
    <>
      <MenuLateral />
      <div className="conteudo-lista">
        <h1>Gêneros:</h1>
        <div className="genero-container">
          {genero.length > 0 &&
            genero.map((genero) => (
              <div className="card-edicao">
                <ListarGenero key={genero._id} {...genero} />
                <br />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default EditarExcluirGenero;
