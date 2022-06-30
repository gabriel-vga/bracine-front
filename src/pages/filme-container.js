import React, { useEffect, useState } from "react";
import api from "../services/api";
import { useParams } from "react-router-dom";
import Filme from "../components/filme";

const FilmeContainer = () => {
  const { id } = useParams();
  const [filme, setFilme] = useState([]);

  useEffect(() => {
    api.get(`/filme/${id}`).then(({ data }) => {
      setFilme(data);
    });
  }, []);

  return <Filme key={filme._id} {...filme} />;
};

export default FilmeContainer;
