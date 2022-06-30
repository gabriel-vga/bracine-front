import React, { useEffect, useState } from "react";
import ListarPais from "../../../components/listar-pais";
import api from "../../../services/api";
import MenuLateral from "../menu-lateral";

const PAISES_API = "http://localhost:3000/paises/";

const EditarExcluirPais = () => {
  const [pais, setPais] = useState([]);

  useEffect(() => {
    api.get("pais").then(({ data }) => {
      setPais(data);
    });
  }, []);

  useEffect(() => {
    getPaises(PAISES_API);
  }, []);

  const getPaises = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setPais(data.results);
      });
  };

  return (
    <>
      <MenuLateral />
      <div className="conteudo-lista">
        <h1>Países:</h1>
        <div className="pais-container">
          {pais.length > 0 &&
            pais.map((pais) => (
              <div className="card-edicao">
                <ListarPais key={pais._id} {...pais} />
                <br />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default EditarExcluirPais;
