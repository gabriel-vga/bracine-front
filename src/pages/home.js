import React, { useEffect, useState } from "react";
import ListarFilmeCard from "../components/listar-filme-card";
import api from "../services/api";

const FILMES_API = "http://localhost:3000/filmes/";

const Home = () => {
  const [filme, setFilme] = useState([]);
  const [buscaTermo, setBuscaTermo] = useState("");

  useEffect(() => {
    api.get("filme").then(({ data }) => {
      setFilme(data);
    });
  }, []);

  useEffect(() => {
    getFilmes(FILMES_API);
  }, []);

  const getFilmes = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setFilme(data.results);
      });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (buscaTermo) {
      getFilmes(FILMES_API + buscaTermo);
      setBuscaTermo("");
    }
  };

  const handleOnChange = (e) => {
    setBuscaTermo(e.target.value);
  };

  return (
    <>
      <header data-testid="header">
        <div className="titulo" data-testid="titulo">
          <a href="../">BRACine</a>
        </div>
        <form onSubmit={handleOnSubmit} data-testid="pesquisa">
          <input
            className="pesquisa"
            type="search"
            placeholder="Pesquisa..."
            value={buscaTermo}
            onChange={handleOnChange}
          />
        </form>
      </header>
      <div
        className="filme-cards-container"
        data-testid="filme-cards-container"
      >
        {filme.length > 0 &&
          filme.map((filme) => (
            <a href={`/filme/${filme._id}`}>
              <ListarFilmeCard key={filme._id} {...filme} />
            </a>
          ))}
      </div>
    </>
  );
};

export default Home;
