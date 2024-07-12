import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

export function EditarUsuarioModal({ show, handleClose, usuario, handleSave }) {
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
    const usuarioEditado = {
      ...usuario,
      _rut: rut,
      _nombre: nombre,
      _apellido: apellido,
      _telefono: telefono,
      _correo: correo
    };
    handleSave(usuarioEditado);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Editar Usuario</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="editarRutUsuario">
            <Form.Label>RUT</Form.Label>
            <Form.Control
              type="text"
              value={rut}
              onChange={(e) => setRut(e.target.value)}
              readOnly
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="editarNombreUsuario">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="editarApellidoUsuario">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              type="text"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="editarTelefonoUsuario">
            <Form.Label>Teléfono</Form.Label>
            <Form.Control
              type="text"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="editarCorreoUsuario">
            <Form.Label>Correo</Form.Label>
            <Form.Control
              type="email"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Guardar Cambios
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
