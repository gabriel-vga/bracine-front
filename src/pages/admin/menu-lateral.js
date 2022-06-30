import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import PhotoCameraFrontIcon from "@mui/icons-material/PhotoCameraFront";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import WallpaperIcon from "@mui/icons-material/Wallpaper";
import VideoFileIcon from "@mui/icons-material/VideoFile";
import FlagIcon from "@mui/icons-material/Flag";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import AddBoxIcon from "@mui/icons-material/AddBox";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import "./admin.css";

export default function MenuLateral() {
  const [openFilme, setOpenFilme] = React.useState(false);
  const [openDiretor, setOpenDiretor] = React.useState(false);
  const [openRoteirista, setOpenRoteirista] = React.useState(false);
  const [openPoster, setOpenPoster] = React.useState(false);
  const [openArquivo, setOpenArquivo] = React.useState(false);
  const [openPais, setOpenPais] = React.useState(false);
  const [openGenero, setOpenGenero] = React.useState(false);

  return (
    <div>
      <header>
        <div className="titulo" data-testid="titulo">
          <a className="titulo-link" href="../">
            BRACine
          </a>
        </div>
      </header>
      <div className="listaContainer" data-testid="listaContainer">
        <List
          className="lista"
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "whitesmoke",
          }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItemButton
            className="subitem-lista"
            onClick={() => setOpenFilme(!openFilme)}
          >
            <ListItemIcon>
              <LocalMoviesIcon />
            </ListItemIcon>
            <ListItemText primary="Filme" />
            {openFilme ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openFilme} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                className="subitem-lista"
                sx={{ pl: 4 }}
                href="../../admin/cadastrar-filme"
              >
                <ListItemIcon>
                  <AddBoxIcon />
                </ListItemIcon>
                <ListItemText primary="Cadastrar Filme" />
              </ListItemButton>
              <ListItemButton
                className="subitem-lista"
                sx={{ pl: 4 }}
                href="../../admin/editar-filme"
              >
                <ListItemIcon>
                  <BorderColorIcon />
                </ListItemIcon>
                <ListItemText primary="Editar Filme" />
              </ListItemButton>
            </List>
          </Collapse>

          <ListItemButton
            className="subitem-lista"
            onClick={() => setOpenDiretor(!openDiretor)}
          >
            <ListItemIcon>
              <PhotoCameraFrontIcon />
            </ListItemIcon>
            <ListItemText primary="Diretor" />
            {openDiretor ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openDiretor} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                className="subitem-lista"
                sx={{ pl: 4 }}
                href="../../admin/cadastrar-diretor"
              >
                <ListItemIcon>
                  <AddBoxIcon />
                </ListItemIcon>
                <ListItemText primary="Cadastrar Diretor" />
              </ListItemButton>
              <ListItemButton
                className="subitem-lista"
                sx={{ pl: 4 }}
                href="../../admin/editar-diretor"
              >
                <ListItemIcon>
                  <BorderColorIcon />
                </ListItemIcon>
                <ListItemText primary="Editar Diretor" />
              </ListItemButton>
            </List>
          </Collapse>

          <ListItemButton
            className="subitem-lista"
            onClick={() => setOpenRoteirista(!openRoteirista)}
          >
            <ListItemIcon>
              <NoteAltIcon />
            </ListItemIcon>
            <ListItemText primary="Roteirista" />
            {openRoteirista ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openRoteirista} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                className="subitem-lista"
                sx={{ pl: 4 }}
                href="../../admin/cadastrar-roteirista"
              >
                <ListItemIcon>
                  <AddBoxIcon />
                </ListItemIcon>
                <ListItemText primary="Cadastrar Roteirista" />
              </ListItemButton>
              <ListItemButton
                className="subitem-lista"
                sx={{ pl: 4 }}
                href="../../admin/editar-roteirista"
              >
                <ListItemIcon>
                  <BorderColorIcon />
                </ListItemIcon>
                <ListItemText primary="Editar Roteirista" />
              </ListItemButton>
            </List>
          </Collapse>

          <ListItemButton
            className="subitem-lista"
            onClick={() => setOpenPoster(!openPoster)}
          >
            <ListItemIcon>
              <WallpaperIcon />
            </ListItemIcon>
            <ListItemText primary="Pôster" />
            {openPoster ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openPoster} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                className="subitem-lista"
                sx={{ pl: 4 }}
                href="../../admin/cadastrar-poster"
              >
                <ListItemIcon>
                  <AddBoxIcon />
                </ListItemIcon>
                <ListItemText primary="Cadastrar Pôster" />
              </ListItemButton>
              <ListItemButton
                className="subitem-lista"
                sx={{ pl: 4 }}
                href="../../admin/editar-poster"
              >
                <ListItemIcon>
                  <BorderColorIcon />
                </ListItemIcon>
                <ListItemText primary="Editar Pôster" />
              </ListItemButton>
            </List>
          </Collapse>

          <ListItemButton
            className="subitem-lista"
            onClick={() => setOpenArquivo(!openArquivo)}
          >
            <ListItemIcon>
              <VideoFileIcon />
            </ListItemIcon>
            <ListItemText primary="Arquivo" />
            {openArquivo ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openArquivo} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                className="subitem-lista"
                sx={{ pl: 4 }}
                href="../../admin/cadastrar-arquivo"
              >
                <ListItemIcon>
                  <AddBoxIcon />
                </ListItemIcon>
                <ListItemText primary="Cadastrar Arquivo" />
              </ListItemButton>
              <ListItemButton
                className="subitem-lista"
                sx={{ pl: 4 }}
                href="../../admin/editar-arquivo"
              >
                <ListItemIcon>
                  <BorderColorIcon />
                </ListItemIcon>
                <ListItemText primary="Editar Arquivo" />
              </ListItemButton>
            </List>
          </Collapse>

          <ListItemButton
            className="subitem-lista"
            onClick={() => setOpenPais(!openPais)}
          >
            <ListItemIcon>
              <FlagIcon />
            </ListItemIcon>
            <ListItemText primary="País" />
            {openPais ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openPais} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                className="subitem-lista"
                sx={{ pl: 4 }}
                href="../../admin/cadastrar-pais"
              >
                <ListItemIcon>
                  <AddBoxIcon />
                </ListItemIcon>
                <ListItemText primary="Cadastrar País" />
              </ListItemButton>
              <ListItemButton
                className="subitem-lista"
                sx={{ pl: 4 }}
                href="../../admin/editar-pais"
              >
                <ListItemIcon>
                  <BorderColorIcon />
                </ListItemIcon>
                <ListItemText primary="Editar País" />
              </ListItemButton>
            </List>
          </Collapse>

          <ListItemButton
            className="subitem-lista"
            onClick={() => setOpenGenero(!openGenero)}
          >
            <ListItemIcon>
              <MovieFilterIcon />
            </ListItemIcon>
            <ListItemText primary="Gênero" />
            {openGenero ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openGenero} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                className="subitem-lista"
                sx={{ pl: 4 }}
                href="../../admin/cadastrar-genero"
              >
                <ListItemIcon>
                  <AddBoxIcon />
                </ListItemIcon>
                <ListItemText primary="Cadastrar Gênero" />
              </ListItemButton>
              <ListItemButton
                className="subitem-lista"
                sx={{ pl: 4 }}
                href="../../admin/editar-genero"
              >
                <ListItemIcon>
                  <BorderColorIcon />
                </ListItemIcon>
                <ListItemText primary="Editar Gênero" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
      </div>
    </div>
  );
}
