import React from "react";
import api from "../../../services/api";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import MenuLateral from "../menu-lateral";
import "../admin.css";

const validationPost = yup.object().shape({
  nome: yup
    .string()
    .required("O nome do gênero é obrigatório")
    .max(20, "O nome do gênero precisa ter menos de 20 caracteres"),
});

function CadastrarGenero() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationPost),
  });

  const addPost = (data) =>
    api
      .post("http://localhost:3000/genero", data)
      .then(() => {
        alert("Cadastro realizado com sucesso");
      })
      .catch((e) => {
        alert(e);
      });

  return (
    <>
      <MenuLateral />
      <div className="conteudo">
        <main>
          <div className="cadastro">
            <h1>Cadastro de Gênero</h1>
            <form onSubmit={handleSubmit(addPost)}>
              <div className="fields">
                <label>Nome:</label>
                <input type="text" name="nome" {...register("nome")} />
                <p className="error-message">{errors.nome?.message}</p>
              </div>
              <div className="btn-post">
                <button type="submit">Enviar</button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </>
  );
}

export default CadastrarGenero;
