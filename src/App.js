import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import CadastrarDiretor from "./pages/admin/diretor/cadastrar-diretor";
import CadastrarPais from "./pages/admin/pais/cadastrar-pais";
import CadastrarRoteirista from "./pages/admin/roteirista/cadastrar-roteirista";
import CadastrarGenero from "./pages/admin/genero/cadastrar-genero";
import EditarExcluirDiretor from "./pages/admin/diretor/editar-excluir-diretor";
import EditarDiretor from "./pages/admin/diretor/editar-diretor";
import MenuLateral from "./pages/admin/menu-lateral";
import FilmeContainer from "./pages/filme-container";
import EditarExcluirRoteirista from "./pages/admin/roteirista/editar-excluir-roteirista";
import EditarRoteirista from "./pages/admin/roteirista/editar-roteirista";
import EditarPais from "./pages/admin/pais/editar-pais";
import EditarExcluirPais from "./pages/admin/pais/editar-excluir-pais";
import EditarGenero from "./pages/admin/genero/editar-genero";
import EditarExcluirGenero from "./pages/admin/genero/editar-excluir-genero";
import EditarExcluirPoster from "./pages/admin/poster/editar-excluir-poster";
import EditarExcluirArquivo from "./pages/admin/arquivo/editar-excluir-arquivo";
import EditarExcluirFilme from "./pages/admin/filme/editar-excluir-filme";
import UploadForm from "./components/upload-form";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/filme/:id" element={<FilmeContainer />} />
        <Route path="/admin" element={<MenuLateral />} />
        <Route path="/upload" element={<UploadForm />} />
        <Route path="/admin/cadastrar-diretor" element={<CadastrarDiretor />} />
        <Route
          path="/admin/cadastrar-roteirista"
          element={<CadastrarRoteirista />}
        />
        <Route path="/admin/cadastrar-genero" element={<CadastrarGenero />} />
        <Route path="/admin/cadastrar-pais" element={<CadastrarPais />} />
        <Route
          path="/admin/editar-diretor"
          element={<EditarExcluirDiretor />}
        />
        <Route path="/admin/editar-diretor/:id" element={<EditarDiretor />} />
        <Route
          path="/admin/editar-roteirista"
          element={<EditarExcluirRoteirista />}
        />
        <Route
          path="/admin/editar-roteirista/:id"
          element={<EditarRoteirista />}
        />
        <Route path="/admin/editar-pais" element={<EditarExcluirPais />} />
        <Route path="/admin/editar-pais/:id" element={<EditarPais />} />
        <Route path="/admin/editar-genero" element={<EditarExcluirGenero />} />
        <Route path="/admin/editar-genero/:id" element={<EditarGenero />} />
        <Route path="/admin/editar-poster" element={<EditarExcluirPoster />} />
        <Route
          path="/admin/editar-arquivo"
          element={<EditarExcluirArquivo />}
        />
        <Route path="/admin/editar-filme" element={<EditarExcluirFilme />} />
        <Route path="/menu" element={<MenuLateral />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
