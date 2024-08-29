import React, { useState, useEffect } from "react";
import axios from "axios";

import Timer from "./Timer";
import Form from "./Form";
import DataList from "./DataList";
import CustomModal from "./CustomModal";

import "../styles/Modal.css";

const Home = () => {
  const [data, setData] = useState([]);
  const [editarUsuario, setEditarUsuario] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5050/usuarios");
      setData(response.data);
    } catch (error) {
      console.error("Eror al traer los datos", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const openModal = (message) => {
    setModalContent(message);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5050/usuarios/${id}`);
      openModal("Usuario eliminado correctamente!");
      fetchData();
    } catch (error) {
      console.error("Error al borra el usuario", error);
      openModal("Error al eliminar el usuario.");
    }
  };

  const handleEdit = async (id) => {
    const usuarioAEditar = data.find((usuario) => usuario.id === id);
    setEditarUsuario(usuarioAEditar);
  };

  return (
    <div>
      <h1>App Formulario</h1>
      <Timer />
      <Form
        fetchData={fetchData}
        editarUsuario={editarUsuario}
        setEditarUsuario={setEditarUsuario}
      />
      <DataList
        data={data}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
      <CustomModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Mensaje del Modal"
      >
        <p>{modalContent}</p>
        <button className="custom-modal-close-button" onClick={closeModal}>
          Cerrar
        </button>
      </CustomModal>
    </div>
  );
};

export default Home;
