import React, { useState, useEffect } from "react";

import Usuario from "../class/Usuario"; // Importar la clase Usuario

export function EditarUsuarioModal({ usuario, onSave }) {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [rut, setRut] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");

  useEffect(() => {
    if (usuario) {
      setNombre(usuario.getNombre);
      setApellido(usuario.getApellido);
      setRut(usuario.getrut);
      setTelefono(usuario.getTelefono);
      setCorreo(usuario.getCorreo);
    }
  }, [usuario]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rut.trim() === "" || nombre.trim() === "" || apellido.trim() === "" || telefono.trim() === "" || correo.trim() === "") {
      alert("Por favor ingresa todos los campos válidos.");
      return;
    }
    const usuarioEditado = new Usuario(rut, nombre, apellido, telefono, correo);
    onSave(usuarioEditado);
  };

  return (
    <div
      className="modal fade"
      id="modalEditarUsuario"
      tabIndex="-1"
      aria-labelledby="modalEditarUsuarioLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="modalEditarUsuarioLabel">
              Editar Usuario
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form
              id="formEditarUsuario"
              className="needs-validation-usuarios"
              noValidate
              onSubmit={handleSubmit}
            >
              <div className="mb-3">
                <label htmlFor="editarRutUsuario" className="form-label">
                  RUT
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="editarRutUsuario"
                  value={rut}
                  onChange={(e) => setRut(e.target.value)}
                  required
                  readOnly
                />
                <div className="invalid-feedback">
                  Por favor ingresa un rut válido
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="editarNombreUsuario" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="editarNombreUsuario"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  required
                />
                <div className="invalid-feedback">
                  Por favor ingresa un nombre
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="editarApellidoUsuario" className="form-label">
                  Apellido
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="editarApellidoUsuario"
                  value={apellido}
                  onChange={(e) => setApellido(e.target.value)}
                  required
                />
                <div className="invalid-feedback">
                  Por favor ingresa un apellido
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="editarTelefonoUsuario" className="form-label">
                  Teléfono
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="editarTelefonoUsuario"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  required
                />
                <div className="invalid-feedback">
                  Por favor ingresa un teléfono
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="editarCorreoUsuario" className="form-label">
                  Correo
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="editarCorreoUsuario"
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                  required
                />
                <div className="invalid-feedback">
                  Por favor ingresa un correo
                </div>
              </div>
              <button type="submit" className="btn btn-primary">
                Guardar Cambios
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
