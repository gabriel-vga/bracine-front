import React, { useEffect, useState } from "react";
import api from "../services/api";

const Filme = ({ nome, arquivo, sinopse }) => {
  const [isLoading, setLoading] = useState(true);
  const [arquivoFile, setArquivoFile] = useState([]);

  useEffect(() => {
    api.get("arquivo/" + arquivo).then(({ data }) => {
      setArquivoFile(data);
      setLoading(false);
    });
  }, []);

  const rota = `http://localhost:3000/${arquivoFile.enderecoArquivo}`;

  if (isLoading) {
    console.debug("renders: Loading...");
    return <div>Loading...</div>;
  }

  return (
    <>
      <header>
        <div className="titulo">
          <a href="../">BRACine</a>
        </div>
      </header>
      <div className="filme-video-container">
        <div className="filme-video-content">
          <video className="filme-video" controls>
            <source src={rota} type="video/mp4" alt={nome} />
            Your browser does not support HTML video.
          </video>
        </div>
        <div className="filme-video-card">
          <div className="nome-filme-video">
            <h3>{nome}</h3>
          </div>
          <div className="sinopse-filme-video">
            <h5>{sinopse}</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filme;
