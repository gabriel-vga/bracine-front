import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import MenuLateral from "../menu-lateral";
import { useParams } from "react-router-dom";
import "../admin.css";
import api from "../../../services/api";

const validationPost = yup.object().shape({
  nome: yup
    .string()
    .required("O nome é obrigatório")
    .max(50, "O nome precisa ter menos de 50 caracteres"),
});

function EditarPais() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationPost),
  });
  const [pais, setPais] = React.useState([]);

  const { id } = useParams();

  React.useEffect(() => {
    api.get(`/pais/${id}`).then(({ data }) => {
      setPais(data);
    });
  }, []);

  const addPost = (data) =>
    api
      .patch(`http://localhost:3000/pais/${id}`, data)
      .then(() => {
        alert("Edição realizada com sucesso");
      })
      .catch((e) => {
        alert(e);
      });

  return (
    <>
      <MenuLateral />
      <div className="conteudo">
        <main>
          <div className="editar-pais">
            <h1>Editar País</h1>
            <form onSubmit={handleSubmit(addPost)}>
              <div className="fields">
                <label>Nome:</label>
                <input
                  type="text"
                  name="nome"
                  placeholder={pais.nome}
                  {...register("nome")}
                />
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

export default EditarPais;
