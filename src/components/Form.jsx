import React, { useEffect, useState } from "react";
import axios from "axios";
import CustomModal from "./CustomModal";


const Form = ({ fetchData, editarUsuario, setEditarUsuario }) => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [rol, setRol] = useState("Usuario");
  const [message, setMessage] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    if (editarUsuario) {
      setNombre(editarUsuario.nombre);
      setApellido(editarUsuario.apellido);
      setEmail(editarUsuario.email);
      setRol(editarUsuario.rol);
    }
  }, [editarUsuario]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (nombre && apellido && email) {
      try {
        if (editarUsuario) {
          console.log(editarUsuario.id);
          await axios.put(
            `http://localhost:5050/usuarios/${editarUsuario.id}`,
            {
              nombre,
              apellido,
              email,
              rol,
            },
            console.log(nombre, apellido, email, rol)
          );
          setMessage("Usuario actualizado correctamente!");
          setEditarUsuario(null);
        } else {
          await axios.post("http://localhost:5050/usuarios", {
            nombre,
            apellido,
            email,
            rol,
          });
          setMessage("Usuario ingresado correctamente!");
        }
        setNombre("");
        setApellido("");
        setEmail("");
        setRol("Usuario");
        fetchData();
      } catch (error) {
        console.error("Error al enviar los datos", error);
        setMessage("Falla al enviar los datos.");
      }
    } else {
      setMessage("Todos los campos son necesarios.");
    }
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <input
            type="text"
            placeholder="Apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <select value={rol} onChange={(e) => setRol(e.target.value)}>
            <option value="Usuario">Usuario</option>
            <option value="Administrador">Administrador</option>
          </select>
          <button type="submit">
            {editarUsuario ? "Actualizar" : "Guardar"}
          </button>
        </form>
        <CustomModal isOpen={modalIsOpen} onRequestClose={closeModal}>
          <p>{message}</p>
          <button onClick={closeModal} className="custom-modal-close-button">
            Cerrar
          </button>
        </CustomModal>
      </div>
    </div>
  );
};

export default Form;
