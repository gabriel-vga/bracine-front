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

function EditarGenero() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationPost),
  });
  const [genero, setGenero] = React.useState([]);

  const { id } = useParams();

  React.useEffect(() => {
    api.get(`/genero/${id}`).then(({ data }) => {
      setGenero(data);
    });
  }, []);

  const addPost = (data) =>
    api
      .patch(`http://localhost:3000/genero/${id}`, data)
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
          <div className="editar-genero">
            <h1>Editar Gênero</h1>
            <form onSubmit={handleSubmit(addPost)}>
              <div className="fields">
                <label>Nome:</label>
                <input
                  type="text"
                  name="nome"
                  placeholder={genero.nome}
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

export default EditarGenero;
