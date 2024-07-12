import React, { useState, useEffect } from "react";
import usuarioArray from "../scripts/usuarios/usuariosPreCargados";
import { EditarUsuarioModal } from "../modals/EditarUsuario";

export function SeccionUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [usuarioActual, setUsuarioActual] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setUsuarios(usuarioArray);
  }, []);

  const eliminarUsuario = (rut) => {
    const nuevosUsuarios = usuarios.filter((usuario) => usuario.getrut !== rut);
    setUsuarios(nuevosUsuarios);
  };

  const iniciarEdicionUsuario = (usuario) => {
    setUsuarioActual(usuario);
    setShowModal(true);
  };

  const guardarCambiosUsuario = (usuarioEditado) => {
    if (!usuarioEditado) {
      setShowModal(false);
      return;
    }

    const nuevosUsuarios = usuarios.map((usuario) =>
      usuario.getrut === usuarioEditado.getrut ? usuarioEditado : usuario
    );
    setUsuarios(nuevosUsuarios);
    setShowModal(false);
  };

  return (
    <div>
      <table className="table mt-4">
        <thead>
          <tr>
            <th>RUT</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Teléfono</th>
            <th>Correo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.getrut}>
              <td>{usuario.getrut}</td>
              <td>{usuario.getNombre}</td>
              <td>{usuario.getApellido}</td>
              <td>{usuario.getTelefono}</td>
              <td>{usuario.getCorreo}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => iniciarEdicionUsuario(usuario)}
                >
                  Editar
                </button>
                <button
                  className="btn btn-danger ms-1"
                  onClick={() => eliminarUsuario(usuario.getrut)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <EditarUsuarioModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        usuario={usuarioActual}
        handleSave={guardarCambiosUsuario}
      />
    </div>
  );
}
