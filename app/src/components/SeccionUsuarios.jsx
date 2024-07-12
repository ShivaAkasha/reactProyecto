import React, { useState, useEffect } from "react";
import usuarioArray from "../scripts/usuarios/usuariosPreCargados";
import { EditarUsuarioModal } from "../modals/EditarUsuario";
import Usuario from "../class/Usuario";

export function SeccionUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [usuarioActual, setUsuarioActual] = useState(null);

  useEffect(() => {
    setUsuarios(usuarioArray);
  }, []);

  const agregarUsuario = () => {
    let nombre = document.getElementById("nuevoNombreUsuario").value;
    let apellido = document.getElementById("nuevoApellidoUsuario").value;
    let rut = document.getElementById("nuevoRutUsuario").value;
    let telefono = document.getElementById("nuevoTelefonoUsuario").value;
    let correo = document.getElementById("nuevoCorreoUsuario").value;

    const nuevoUsuario = new Usuario(rut, nombre, apellido, telefono, correo);
    if (rut === "" || nombre === "" || apellido === "" || telefono === "" || correo === "") {
      alert("Por favor ingresa todos los campos válidos.");
      return;
    }
    setUsuarios([...usuarios, nuevoUsuario]);
    document.getElementById("nuevoNombreUsuario").value = "";
    document.getElementById("nuevoApellidoUsuario").value = "";
    document.getElementById("nuevoRutUsuario").value = "";
    document.getElementById("nuevoTelefonoUsuario").value = "";
    document.getElementById("nuevoCorreoUsuario").value = "";
  };

  const eliminarUsuario = (rut) => {
    const nuevosUsuarios = usuarios.filter((usuario) => usuario.getrut !== rut);
    setUsuarios(nuevosUsuarios);
  };

  const iniciarEdicionUsuario = (usuario) => {
    setUsuarioActual(usuario);
    const modal = new window.bootstrap.Modal(document.getElementById("modalEditarUsuario"));
    modal.show();
  };

  const guardarCambiosUsuario = (usuarioEditado) => {
    const nuevosUsuarios = usuarios.map((usuario) =>
      usuario.getrut === usuarioEditado.getrut ? usuarioEditado : usuario
    );
    setUsuarios(nuevosUsuarios);
    const modal = window.bootstrap.Modal.getInstance(document.getElementById("modalEditarUsuario"));
    modal.hide();
  };

  return (
    <div>
      <div className="container-fluid m-auto text-center fw-bold rounded col-10 col-sm-8 col-md-6 col-lg-4 col-xl-1 mt-1 mb-5">
        <h3>Usuarios</h3>
      </div>
      <div className="miTabla mb-5 col-12 m-auto container">
        <div className="mb-3 col-10 col-xxl-3">
          <label
            htmlFor="buscarUsuarios"
            className="form-label justify-content-start"
          >
            Buscar usuario por RUT
          </label>
          <input
            type="text"
            id="buscarUsuarios"
            className="form-control"
            placeholder="Buscar usuario por RUT..."
          />
        </div>
        <table
          className="container table table-striped table-bordered border-info text-center"
          id="tablaUsuarios"
        >
          <thead>
            <tr>
              <th>RUT</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Teléfono</th>
              <th>Correo</th>
              <th colSpan="2">Acciones</th>
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
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => eliminarUsuario(usuario.getrut)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="container-fluid m-auto mt-5 col-12 col-xl-4 shadow rounded border border-info p-3 mb-5">
        <form className="needs-validation-usuarios" noValidate>
          <fieldset className="d-flex flex-column justify-content-center text-center">
            <legend className="fw-bold">Agregar Usuario</legend>
            <div className="mb-3">
              <label htmlFor="nuevoRutUsuario" className="form-label">
                RUT
              </label>
              <input
                type="text"
                className="form-control"
                id="nuevoRutUsuario"
                required
              />
              <div className="invalid-feedback">
                Por favor ingresa un rut válido
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="nuevoNombreUsuario" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                className="form-control"
                id="nuevoNombreUsuario"
                required
              />
              <div className="invalid-feedback">
                Por favor ingresa un nombre
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="nuevoApellidoUsuario" className="form-label">
                Apellido
              </label>
              <input
                type="text"
                className="form-control"
                id="nuevoApellidoUsuario"
                required
              />
              <div className="invalid-feedback">
                Por favor ingresa un apellido
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="nuevoTelefonoUsuario" className="form-label">
                Teléfono
              </label>
              <input
                type="text"
                className="form-control"
                id="nuevoTelefonoUsuario"
                required
              />
              <div className="invalid-feedback">
                Por favor ingresa un teléfono
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="nuevoCorreoUsuario" className="form-label">
                Correo
              </label>
              <input
                type="email"
                className="form-control"
                id="nuevoCorreoUsuario"
                required
              />
              <div className="invalid-feedback">
                Por favor ingresa un correo
              </div>
            </div>
            <button
              type="button"
              className="btn btn-info col-xl-5 m-auto text-center"
              id="agregarUsuarioButton"
              onClick={agregarUsuario}
            >
              Agregar Usuario
            </button>
          </fieldset>
        </form>
      </div>
      <EditarUsuarioModal usuario={usuarioActual} onSave={guardarCambiosUsuario} />
    </div>
  );
}
