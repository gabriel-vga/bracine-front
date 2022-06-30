import React, { useEffect, useState } from "react";
import ListarRoteirista from "../../../components/listar-roteirista";
import api from "../../../services/api";
import MenuLateral from "../menu-lateral";

const ROTEIRISTAS = "http://localhost:3000/roteiristas/";

const EditarExcluirRoteirista = () => {
  const [roteirista, setRoteirista] = useState([]);

  useEffect(() => {
    api.get("roteirista").then(({ data }) => {
      setRoteirista(data);
    });
  }, []);

  useEffect(() => {
    getRoteiristas(ROTEIRISTAS);
  }, []);

  const getRoteiristas = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setRoteirista(data.results);
      });
  };

  return (
    <>
      <MenuLateral />
      <div className="conteudo-lista">
        <h1>Roteiristas:</h1>
        <div className="roteirista-container">
          {roteirista.length > 0 &&
            roteirista.map((roteirista) => (
              <div className="card-edicao">
                <ListarRoteirista key={roteirista._id} {...roteirista} />
                <br />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default EditarExcluirRoteirista;
